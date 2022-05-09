//기본 계산기 기능을 cal.js에 작성후 그 모듈을 여기서 사용
//터미널에서 node app으로 실행하기

// const cal = require('./cal');

// // console.log(cal.add(1,1));
// console.log(cal.add(5,3));
// console.log(cal.sub(5,2));
// console.log(cal.mul(3,5));

// const func = require('./func');
// console.log(func);

// for(let i = 0; i <5; i++){
//     console.log(func);
// } //module은 require에서 한번만 호출하고 사라진다. 따라서 func.js의 증감연산자를 의도대로 활용할 수 없다. 

// //만약 func.js에서 export를 함수를 반환했다면 app.js에서 호출할때도 ()붙여 함수임을 알려야 한다. 안붙이면? [Function (anonymous)]
// //이런 유형은 노드 보다는 react에서 유용할 것
// for(let i = 0; i <5; i++){
//     console.log(func());
// }


// //func.js가 module.exports = (a,b)=> a+b; 
// const func = require('./func');
// console.log(func(1,2));


//num 초기화 위해 클로저 이용
const func = require('./func');
const a = func();
console.log(a()); // 1
console.log(a()); // 2

// number 초기화
const b = func();
console.log(b()); // 1
console.log(b()); // 2