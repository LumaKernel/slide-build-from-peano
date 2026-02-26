import { type ReactNode } from "react";
import { InlineMath } from "./Math.tsx";
import "./ProofTree.css";

type RuleLabelPosition = "right" | "left";

type FormulaLeaf = {
  readonly kind: "formula";
  readonly tex: string;
  readonly discharge?: boolean | undefined;
};

type Inference = {
  readonly kind: "inference";
  readonly premises: readonly ProofNode[];
  readonly conclusion: string;
  readonly ruleLabel?: string | undefined;
  readonly ruleLabelPosition?: RuleLabelPosition | undefined;
};

export type ProofNode = FormulaLeaf | Inference;

function assertNever(value: never): never {
  throw new Error(`Unexpected value: ${JSON.stringify(value)}`);
}

function renderNode(node: ProofNode): ReactNode {
  switch (node.kind) {
    case "formula":
      return (
        <div
          className={`proof-formula${node.discharge === true ? " proof-discharged" : ""}`}
        >
          <InlineMath math={node.tex} />
        </div>
      );
    case "inference": {
      const labelPos = node.ruleLabelPosition ?? "right";
      return (
        <div className="proof-inference">
          <div className="proof-premises">
            {node.premises.map((premise, i) => (
              <div className="proof-premise" key={i}>
                {renderNode(premise)}
              </div>
            ))}
          </div>
          <div className="proof-rule-line-container">
            {labelPos === "left" && node.ruleLabel != null && (
              <span className="proof-rule-label proof-rule-label-left">
                <InlineMath math={node.ruleLabel} />
              </span>
            )}
            <div className="proof-rule-line" />
            {labelPos === "right" && node.ruleLabel != null && (
              <span className="proof-rule-label proof-rule-label-right">
                <InlineMath math={node.ruleLabel} />
              </span>
            )}
          </div>
          <div className="proof-conclusion">
            <InlineMath math={node.conclusion} />
          </div>
        </div>
      );
    }
    default:
      return assertNever(node);
  }
}

export function ProofTree({
  root,
}: {
  readonly root: ProofNode;
}): ReactNode {
  return <div className="proof-tree">{renderNode(root)}</div>;
}
