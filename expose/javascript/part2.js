// function discountPrices(prices,discount){
//     const discounted = [];
//     const length = prices.length;
//     // let finalPrice = 0;

//     for (let i = 0; i < length; i++) {
//         const discountedPrice = prices[i] * (1 - discount);
//         discounted.push(discountedPrice);
//     }

//     // console.log(i);
//     // console.log(length);
//     return discounted;
// }

// discountPrices([100, 200, 300], 0.5);

// Q12
// let student = {
//     name: 'Sarah',
//     major: 'Computer Science',
//     'Grad Year': '2022',
//     greeting: function() { console.log('Hello!'); },
//     'Favorite Teacher': {
//         name: 'Thomas Powell',
//         course: 'CSE 110'
//     },
//     courseLoad: ['CSE 110', 'CSE 134', 'VIS 41']
// };

// console.log(student.name);
// console.log(student['Grad Year']);
// student.greeting();
// console.log(student['Favorite Teacher'].name);
// console.log(student.courseLoad[0]);

// Q13
// console.log('3' + 2)
// console.log('3' - 2)
// console.log(3 + null)
// console.log(`3` + null)
// console.log(true + 3)
// console.log(false + null)
// console.log('3' + undefined)
// console.log('3' - undefined)


// Q13
// console.log('2' > 1)
// console.log('2' < '12')
// console.log(2 == '2')
// console.log(2 === '2')
// console.log(true == 2)
// console.log(true === Boolean(2))

// Q17
// function modifyArray(array, callback) {
//     const newArr = [];
//     for (let i = 0; i < array.length; i++) {
//         newArr.push(callback(array[i]));
//     }
//     return newArr;
// }

// function doSomething(num) {
//     return num * 2;
// }

// console.log(modifyArray([1,2,3], doSomething))

// Q19
function printNums (){
    console.log(1);
    setTimeout(function(){console.log(2);}, 1000)
    setTimeout(function(){console.log(3);}, 0)
    console.log(4);
}

printNums();









