import { visit } from "unist-util-visit";

export default function addPlayground() {
  return (tree) => {
    visit(tree, "code", (node) => {
      node.meta = `playground`;
    });
  };
}
