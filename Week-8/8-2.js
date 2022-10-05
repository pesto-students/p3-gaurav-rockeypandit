function isBST(node) {
  if (node == null) return true;

  if (node.left != null && node.left.data > node.data) return false;

  if (node.right != null && node.right.data < node.data) return false;

  if (!isBST(node.left) || !isBST(node.right)) return false;
  return true;
}
