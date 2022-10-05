const FibItt = (n)=>({
    [Symbol.iterator] : ()=>{
        let i=0;
        return {
            next:()=>{
                if(i++ <n){
                    return{ value:i,
                done:false}
                }
                else{
                    return {done:true}
                }
               }
        }
    }
});


let ans = 1;
for(let i of FibItt(5)){
    ans *=i;
}
console.log(ans)
