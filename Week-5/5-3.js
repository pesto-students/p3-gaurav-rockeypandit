let s = new Set();
function createDuplicate(arr,element) {
    s = new Set(arr);
    return s.has(element);
}
console.log(createDuplicate([1,5,-1,4],-1))
