//Function #1: Array Slice
const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];  
document.write("Array Slice");
document.write("<br>");
document.write(foods.slice(1,4));
document.write("<br>");


//Function #2: Array Splice
foods.splice(2,0,"noodles","icecream");
document.write("Array Splice");
document.write("<br>");
document.write(foods);
document.write("<br>");
  

//Function #3: Filter
const numberArray = [12,324,213,4,2,3,45,4234];
const evennumber =numberArray.filter(isEven);
function isEven(n)
{
    if(n%2 == 0){
        return n;
    }
}
document.write("Even number");
document.write("<br>");
document.write(evennumber);
document.write("<br>");


const primenumber =numberArray.filter(n=>{
    for(var i=2;i<n;i++)
    {
        if(n%i==0) 
        return false;
    } 
        return true;
});
document.write("Prime number");
document.write("<br>");
document.write(primenumber);
document.write("<br>");


//Function #4: Reject
const Reject = numberArray.filter(n=>{
    for(var i=2;i<n;i++){
        if(n%i==0) 
        return true;
    }
        return false;
});
document.write("Reject");
document.write("<br>");
document.write(Reject);
document.write("<br>");


//Function #5: Lambda
const even = numberArray.filter(n => n%2==0 ? true : false);
document.write("Lamba");
document.write("<br>");
document.write(even);
document.write("<br>");


//Function #6: Map
const myArray = [11, 34, 20, 5, 53, 16];
const square = myArray.map(function findSquareOfNumbers(n){
    return n*n;
});
document.write("Map");
document.write("<br>");
document.write(square);
document.write("<br>");


//Function #7: Reduce
const myArray1 = [2,3,5,10];
const ans = myArray1.reduce((total,n)=>total*=n)
document.write("Reduce");
document.write("<br>");
document.write(ans);
