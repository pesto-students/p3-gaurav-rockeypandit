function push(x) {
  s1.push(x);
}
function pop() {
  if (s2.empty()) {
    if (s1.empty()) return -1;
    else {
      while (!s1.empty()) {
        s2.push(s1.top());
        s1.pop();
      }
      let k = s2.top();
      s2.pop();
      return k;
    }
  } else {
    let res = s2.top();
    s2.pop();
    return res;
  }
}
