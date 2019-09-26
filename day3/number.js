/* Data types 
   number
   string
   boolean
   array
   objects/hash
   others - undefined / null

   Primitive data types
   number
   string
   boolean
   undefined
   null
   */

   
var n;
console.log(n);
var n1 = 10;
console.log(n1);
var n2 = 15;
var n3 = 18.7;
var n4 = 16.4;
var n5 = -10;
console.log(typeof n1); //number
console.log(typeof n3); //number
console.log(Math.round(n3)); //19
console.log(Math.floor(n4)); //16
console.log(Math.ceil(n4)); //17
console.log(Math.floor(n3)); //18
console.log(Math.ceil(n3)); //19
console.log(Math.abs(n5)); //10
console.log(Math.min(n1,n2,n3,n4,n5)); //-10
console.log(Math.max(n1,n2,n3,n4,n5)); //18.7
console.log(Math.PI); //3.141592653589793
console.log(Math.sqrt(4)); //2
console.log(Math.pow(2,3)); //8

//Type conversion
var x = 10.1;
var y = 15;
var z = "17";
var a = "20.1";
console.log(String(x)); //"10.1" it is returning a string of 10.1 but in the output screen it is not shown in the quotation

