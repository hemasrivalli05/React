// // //?Target only the main object-->qspiders

// let qspiders = {
//     course: "FULL STACK",
//     fees: 30000,
//     technology: {
//         frontend: {
//             subject: {
//                 jslibrary: "ReactJS",
//                 webtech: {
//                     w1: "HTML",
//                     w2: "CSS",
//                     w3:"JS"
//                 }
//             }           
//         }
//     }
// }


// //let {course,fees, technology:{frontend:{subject:{jslibrary, webtech}}}} =qspiders
//  let {course,fees, technology} =qspiders

// // console.log(course);
// // console.log(fees);
// // console.log(technology);
// console.log(qspiders);













// // //?Target only the main object-->qspiders

// // let qspiders = {
// //     course: "FULL STACK",
// //     fees: 30000,
// //     technology: {
// //                 jslibrary: "ReactJS",
// //                 webtech: {
// //                     w1: "HTML",
// //                     w2: "CSS",
// //                     w3:"JS"
// //                 }
// //             }           
// //         }


// // //let {course,fees, technology:{jslibrary, webtech}} =qspiders
// // let {course,fees, technology} =qspiders

// // console.log(course);
// // console.log(fees);
// // console.log(technology);
// //  //console.log(qspiders);

//!PROMISES IN JS

//? collect a age from user, age>=18-->eligible for voting else not eligible under promise 

// let age = Number(prompt("Enter your age"))

// let pobj = new Promise((resolve, reject) => {
//     if (age >= 18) {
//         resolve("promise fulfilled")
//     } else {
//         reject("promise not fulFilled")

//     }
// })

// console.log(pobj);

// //? resolving promise 1) then & catch way 2) async & await ----> very important

//!1) resolving promise then & catch way
//then block will executes when promise is resolved
// pobj.then(() => {
// console.log("Eligible for voting");
// })

// //catch block will executes when promise is rejected

// pobj.catch(() => {
// console.log("not eligible for voting");
// })

//!2) resolving promise --async & wait
//? async-->function  await --> asynchrounous activities [promise]

// let handlePromise = async () => {
//     try {
//         await pobj
//         console.log("elegible")
//     } catch (error) {
//         console.log(error);
//         console.log("not eligible")

//     }
// }

// handlePromise()

//! map() --> array method . iterate over the array Higher order function

// let students = ["hema" , "ali" , "pavan"]

// for (i=0 ; i < students.length; i++){
//     console.log(i + " "+ students[i])
// }
//? 1st parameter --> holds all individual values of array in each itteration
//? 2nd parameter --> holds the index number of the value stored in first parameter
//? 3rd parameter --> entire array
// students.map((a, b, c) => {
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log('********')
// })

//! map method returns a new array
//? multiply 2 for each number after iteration and return the content

let numbers = [100, 150, 400]

let multi = numbers.map((val) => {

    return val*2;

})
console.log(multi);
console.log(numbers);