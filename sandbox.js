// let req = new XMLHttpRequest();

// const asyncFunc = (callback)=>{
//   req.addEventListener('readystatechange' , ()=>{
//     if(req.readyState == 4 && req.status == 200){
//       callback(null , req.responseText);
//     }
//     else if(req.readyState == 4){
//       callback("Something went wrong" , null);
//     }
//   })
// }
// req.open("GET" ,"https://jsonplaceholder.typicode.com/photos");
// req.send();
// console.log("Ayoola");
// console.log("John");

// const handleData =(err , res)=>{
//   if(err){
//     console.error(err)
//   }else{
//     console.log();
//     // document.body.textContent = res;
//   }
// }

// asyncFunc(handleData);

// console.log("OyinDML")
// console.log("Michael")

// x = 9;
// console.log(x);
// var x;
// // 
// Hoisting
greet();

function greet(){
  console.log("Good afternoon")
}