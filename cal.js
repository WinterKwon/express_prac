//덧셈, 뺄셈, 곱셈

function add(x, y){
        return x+y;
}

const sub = (x, y )=> {
    return x - y;
}

const mul = (x, y )=> x*y;

module.exports = {add, sub, mul}
// export {add, sub, mul}  // Unexpected token 'export'에러 발생


//module.exports.별칭 = 함수나 변수
// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.mul = mul;