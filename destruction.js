//!TASK-->send the photo of code as well as output in qtalk

//?Target only the main object-->qspiders

let qspiders = {
    course: "FULL STACK",
    fees: 30000,
    technology: {
        frontend: {
            subject: {
                jslibrary: "ReactJS",
                webtech: {
                    w1: "HTML",
                    w2: "CSS",
                    w3:"JS"
                }
            }           
        }
    }
}


let {course,fees, technology} =qspiders

Console.log(course);
Console.log(fees);
Console.log(technology);