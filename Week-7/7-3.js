function detectLoop(h) {
    var s = new Set();
    while (h != null) {
        if (s.has(h))
            return true;
        s.add(h);
        h = h.next;
    }
    return false;
}