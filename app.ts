// let num1 = '1'

// function calculate(num1:number,num2){
//   return num1 + num2
// }

// console.log(calculate(num1,3))


function getTotal(numbers: Array<number>){
    return numbers.reduce((acc,item)=>{
        return acc + item;
    },0)
}


console.log(getTotal([3,2,1]))