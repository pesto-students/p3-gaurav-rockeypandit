let name={
    firstname:"Rockey",
    lastname:"Pandit",
   
}
 let printFullName= function (hometown) {
        console.log(this.firstname + " "+ this.lastname + " from " + hometown)
    }
let name2={
    firstname:"Steve",
    lastname:"Jobs"
}
printFullName.call(name,"Raipur") 
//first element is reference to this in call method
printFullName.apply(name2,["Raipur"]) 
//same first element is reference , second argument is passed in array list
let bindedPrintName = printFullName.bind(name,"Raipur")
//bind method is same as call method , but it doesnot invoke it just return the binded function
console.log(bindedPrintName);
bindedPrintName();