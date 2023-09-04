// API (Application Programming Interface)

// 1. 나머지 매개변수 (rest parameter) → 배열
// const 함수 = function (...매개변수) {} 형태로 작성

const 함수1 = function (...매개변수) {
    console.log(매개변수)
}

함수1() // []
함수1(1)    // [1]
함수1(1, 2) // [1, 2]]
함수1(1, 2, 3)  // [1, 2, 3]
함수1(1, 2, 3, 4)   // [1, 2, 3, 4]



// 2. 전개 연산자 : 함수 호출
// 함수(...배열) 형태로 작성

const 함수2 = function (a, b, c) {
    console.log(a, b, c)
}

const a = [1, 2, 3]
함수2(a[0], a[1], a[2]) // 1 2 3
함수2(...a) // 1 2 3



// 매개변수 자료형에 따라 min() 함수가 다르게 작동
const min1 = function (배열) {
    let output = 배열[0]
    for (const value of 배열) {
        if (output > value) {
            output = value
        }
    }
    return output
}
console.log(min1([52, 273, 32, 103, 275, 24, 57]))


const min2 = function (...배열) {
    let output = 배열[0]
    for (const value of 배열) {
        if (output > value) {
            output = value
        }
    }
    return output
}
const b = [52, 273, 32, 103, 275, 24, 57]
console.log(min2(...b))