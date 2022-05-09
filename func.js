//증감연산자 기능을 제대로 사용하려면
//모듈을 함수형으로 만들어 작성해야한다. 

let num = 0;
// module.exports = num += 1;
// module.exports = ()=>{
//     return num +=1;
// }

//이렇게 바로 add 함수를 인자와 같이 내보내는 것도 가능하다
// module.exports = (a,b)=> a+b;

//num초기화 위해 클로저로 작성
module.exports = () => {
    let number = 0;

    function clos() {
        return number += 1;
    }

    return clos;
}