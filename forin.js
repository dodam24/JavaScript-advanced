// 1. 배열 등과 함께 사용하는 반복문 - for of, for in 반복문

const 배열 = ['바나나', '사과', '귤']

// (1) for of 반복문
// 반복 가능한 객체(iterable)를 순회
// Array, Map, Set, arguments 등이 해당 (Object는 해당 X)

for (const 요소 of 배열) {
    console.log(요소)   // 바나나 - 사과 - 귤
}


// (2) for in 반복문
// 객체의 열거 가능한 '속성들'을 순회
// 객체의 key 값에 접근할 수 있지만, value 값에는 접근 X
// 모든 객체에서 사용 가능

for (const 인덱스 in 배열) {
    console.log(인덱스, 배열[인덱스])   // 0 바나나 - 1 사과 - 2 귤

}



// 2. 일반적인 반복문 : for 반복문

for (let index = 0; index < Array.length; i++) {
    // 0 1 2 3 4
    const element = array[i];
    console.log(`${i}번째 반복입니다`)
}

for (let i = 0; i < 10; i++) { console.log(`${i}번째 반복입니다`)}
for (let i = 0; i < 10; i+= 2) { console.log(`${i}번째 반복입니다`)}    // 0, 2, 4, 6, 8

// 역 반복문
for (let i = 20; i >= 10; i--) { console.log(`${i}번째 반복입니다`)}    // 20, 19, 18, ... , 12, 11, 10



// 3. 반복 변수와 반복 상수 - 스택 해제와 스코프 내용 참고!
// for of, for in 반복문은 상수 const 사용
// for 반복문은 변수 let 사용

for (let i = 0; i < 배열.length; i++) {
    const 인덱스 = i
    const 요소 = 배열[i]
}