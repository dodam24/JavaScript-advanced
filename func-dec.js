// 선언적 함수와 익명 함수
// 다음 예시에서는 선언적 함수가 먼저 호출되고, 그 다음에 익명 함수가 호출된다.

함수()  // 선언적 함수입니다.

// 익명 함수 (2. 코드가 해당 줄을 읽을 때 생성됨)
const 함수 = function () {
    console.log('익명 함수입니다.')    
}

 
// 선언적 함수 (1. 전체 코드를 실행하기 전에 만들어짐) - 잘 사용하지 않는 함수
function 함수() {
    console.log('선언적 함수입니다.')        
}

함수()  // 익명 함수입니다.



// for 반복문에서는 break 사용 가능
// forEach() 메서드에서는 break 구현 불가

const array = ['사과', '배', '귤', '바나나']

console.log('# for in 반복문')  // # for in 반복문 (→ index 출력)
// for (const i in array) {
//     console.log(i)
// }
array.forEach(function (value, index) {
    console.log(index)  // 0 - 1 - 2 - 3
})

console.log('# for of 반복문')  // # for of 반복문 (→ value 출력)
// for (const i in array) {
//     console.log(i)
// }
array.forEach((value, index) => {
    console.log(value)  // 사과 - 배 - 귤 - 바나나
})