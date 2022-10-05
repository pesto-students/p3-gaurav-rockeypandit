function findGreatest(arr, n) {
  var next, i, j;
  for (i = 0; i < n; i++) {
    next = -1;
    for (j = i + 1; j < n; j++) {
      if (arr[i] < arr[j]) {
        next = arr[j];
        break;
      }
    }
    console.log(next);
  }
}

var arr = [11, 13, 21, 3];
var n = arr.length;
findGreatest(arr, n);
