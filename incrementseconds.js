function incrSec(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      arr[i]++;
    }
  }
  console.log(arr);
  return arr;
}

a = [1, 2, 3, 4, 5];
incrSec(a)
