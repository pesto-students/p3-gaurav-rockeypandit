async function asyncMethod(){
    
    for (const fun of calling()) {
        await fun;
}
}
async function task1(){
      await setTimeout(()=>{
        console.log("task 1")},1000)
}
async function task2(){
      await setTimeout(()=>{console.log("task 2")},2000)
}
async function task3(){
      await setTimeout(()=>{console.log("task 3")},3000)
}
function* calling(){
    yield task1();
    yield task2();
    yield task3();
}
asyncMethod();