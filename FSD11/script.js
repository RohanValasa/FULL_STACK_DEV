console.log("Rohan")
console.log("Tarun")
 

// what you would be thinking is After Rohan, Tarun, 'Iam inside settimeout1' 
// should be printed 
// but that will not happen due to javascript's assync nature.
// It doesnt pause for 3 seconds between the execution.
// setTimeout(()=> {
//     console.log("Iam inside settimeout 1")
// },3000);

// setTimeout(()=> {
//     console.log("Iam inside settimeout 2")
// }, 1000);

// console.log("The End")

function sum(a,b){
    console.log(a+b)
}
function multiply(a,b){
    console.log(a*b);
}
function sub(a,b){
    console.log(Math.abs(a-b));
}
function calc(a,b,operation){
    operation(a,b);
}
calc(9,3,sub);

function getData(dataId, getNextData){
    setTimeout(() => {
        console.log("data", dataId);

        if(getNextData){
            getNextData();
        }
    }, 1000);
}


getData(1, function(){
    getData(2);
});