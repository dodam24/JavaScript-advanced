// 함수 고급

const 테스트1 = function (a) {
    console.log(a)
}

테스트1(10)
테스트1("안녕하세요")
테스트1(true)



// 함수의 매개변수로 함수 전달하기
// 매개변수로 전달하는 함수를 '콜백 함수'라고 생각하면 편하다.
const 테스트2 = function (콜백함수) {
    콜백함수()
}

const 함수2 = function () {
    console.log("안녕하세요")
}
테스트2(함수)
// '테스트2' 함수의 출력 결과: 함수 자체가 출력
// f () {
//     console.log("안녕하세요")
// }



// 콜백함수에 매개변수 전달하기
// 콜백함수의 형태가 매개변수로 숫자 하나를 받는 형태일 때
const 테스트3 = function (콜백함수) {
    콜백함수(10)
}

const 함수3 = function (콜백함수의_매개변수) {
    console.log(`${콜백함수의_매개변수}번째 안녕하세요`)    // 10번째 안녕하세요
}
테스트3(함수3)



// 반복문을 돌면서 콜백함수의 매개변수로 전달
const 테스트4 = function (콜백함수) {
    for (let i = 0; i < 5; i ++) {
        콜백함수(i)
    }
}

const 함수4 = function (콜백함수의_매개변수) {
    console.log(`${콜백함수의_매개변수}번째 안녕하세요`)    // 0번째 안녕하세요, 1번째 안녕하세요, ... 4번째 안녕하세요
}
테스트4(함수4)



// 배열의 요소를 반복문을 돌면서 콜백함수의 매개변수로 전달
const 테스트5 = function (배열, 콜백함수) {
    for (const 값 of 배열) {
        콜백함수(값)
    }

    const 함수5 = function(콜백함수의_매개변수) {
        console.log(`${콜백함수의_매개변수}번째 안녕하세요`)
    }
    테스트5([52, 273, 103, 32], 함수)
}



// 함수를 곧바로 전달
const 테스트6 = function (배열, 콜백함수) {
    for (const 값 of 배열) {
        콜백함수(값)
    }
}

// 코드 1과 코드 2는 동일한 코드
// 코드 1
테스트6([52, 273, 103, 32], function (콜백함수의_매개변수) {
    console.log(`${콜백함수의_매개변수}번째 안녕하세요`)
})

// 코드 2
const 함수7 = function (콜백함수의_매개변수) {
    console.log(`${콜백함수의_매개변수}번째 안녕하세요`)
}
테스트7([52, 273, 103, 32], 함수7)



// 배열의 콜백함수를 사용하는 메서드
const 배열 = [273, 52, 103, 32, 57]
배열.forEach(function (value, index) {
    console.log(value, index)   // 273 0 - 52 1 - 103 2 - 32 3 - 57 4
    // console.log(`${index}번째의 값은 ${value}입니다`)의 의미!
})


// filter() 함수는 콜백함수로 true 또는 false를 리턴하는 함수가 올 것을 예상 - filter 함수의 원리 이해
// const 배열 = [273, 52, 103, 32, 57]
// console.log(배열.filter(function (value, index) {   // [273, 52, 103, 32, 57]
//     return true
// }))

// console.log(배열.filter(function (value, index) {   // []
//     return false
// }))


// 따라서 filter 함수는 다음과 같이 사용
let 배열 = [273, 52, 103, 32, 57]
배열 = 배열.filter(function (value, index) {
    return value % 2 === 0
})
console.log(배열)   // [52, 32]


// 화살표 함수
// (매개변수) => {본문} 형태로 작성
let 배열 = [273, 52, 103, 32, 57]
배열 = 배열.filter((value, index) => value % 2 === 0)
console.log(배열)
// function, return 키워드, 중괄호 생략 가능



// map 함수: 기존의 배열 요소를 기반으로 새로운 배열을 만들어서 리턴
let 배열 = [273, 52, 103, 32, 57]
배열 = 배열.map(function (value, index) {
    return value + "!!"
})
console.log(배열)   // ["273!!"", "52!!", "103!!", "32!!", "57!!"]


// 화살표 함수로 표현
// let 배열 = [273, 52, 103, 32, 57]
// 배열 = 배열.map((value, index) => value + "!!")
// console.log(배열)