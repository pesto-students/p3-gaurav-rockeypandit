let prices = [7,6,4,3,1];
let min = Math.min(...prices);
let minIndex= prices.indexOf(min);

prices = prices.slice(minIndex+1,prices.length)
let max = Math.max(...prices);
if(max-min > 0){
    console.log(max-min)
}else{
    console.log(0)
}