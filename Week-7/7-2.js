function rotate(k) {
  if (k == 0) return;
  var current = head;

  while (current.next != null) {
    current = current.next;
  }
  current.next = head;
  current = head;
  for (i = 0; i < k - 1; i++) {
    current = current.next;
  }
  head = current.next;
  current.next = null;
}
