function findLargestSum(arr){
    let maxSum = -9999;
    let crrSum = 0;
    for(let i=0;i<arr.length;i++){
        crrSum+=arr[i];
        if(maxSum <crrSum){
            maxSum = crrSum;
        }
        if(crrSum <0){
            crrSum = 0;
        }
        
    }
    return maxSum;
}

console.log(findLargestSum([-1,2,-3,4,5]))