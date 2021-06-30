/* 5 */
// for(let i = 0; i < 5; i++) {
//     console.log(Math.random())
// }

// function getRandomInt(a,b) {
//     return Math.floor(Math.random()*10)
// }
// console.log(
// getRandomInt()
// )
// for(let i=0; i<100;i++){
//     getRandomInt()
// }

/* 6 */
// function pyramid(number) {
//      for(let i = 0; i < number; i++){
//         let res = ""
//         for(let j=0;j<i;j++){
//             res+=i+1
//         }
//         console.log(res+=i+1)
//      }
    
// }
// pyramid(6)


// let lineA = "# # # #"
// let lineB = " # # # #"
// let currentLineToPrint=lineA

// for(let i=0; i<8; i++){
//     if (currentLineToPrint == lineA){
//         console.log(currentLineToPrint)
//         currentLineToPrint = lineB
//     }
// }

/* ITERATE OVER ARRAYS */
// let workingHours = [6, 6, 7, 7, 8, 8, 6, 7, 8, 7];
// let total = 0;
// function peterEarned() {
//     for (let i = 0; i < workingHours.length; i++) {
//         const element = workingHours[i]
//         console.log(`Peter earned $ ${element * 25} today!`);
//         total += element * 25
//     }
//     console.log(`peter earned in th elast 2 weeks: ${total}$`)
// }

// peterEarned();

/*ARRAY METHODS*/
// function leapYear(year) {
//     return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
// }
// function getLeapYears(start, end) {
//     let result = [];
//     for (let i = start; i <= end; i++) {
//       if (leapYear(i)) {
//         // if yes append the year to the result list
//         result.push(i);
//       }
//     }
//     return result;
//   }
//   console.log(getLeapYears(1990, 2021));


// function reverseArray(arr) {
//     let result = [];
//     for (let i = arr.length -1; i >= 0; i--) {
//         const element = arr[i];
//         result.push(element);
//     }
//     return result;
// }
// let arr = [1,2,3,4,5,6,7,8]
// console.log(reverseArray(arr))
