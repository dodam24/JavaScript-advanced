// 기본 자료형과 객체 자료형

// 기본 자료형 : 스택에 값을 저장 - 속성과 메서드를 가질 수 없음
// - 숫자
// - 문자열
// - boolean

// 객체 자료형 : 스택과 힙을 연결 - 속성과 메서드를 가짐
// - 함수
// - 배열
// - 객체


// 객체 자료형에 속성과 메서드 추가
const a = []
a.내맘대로속성 = 10
a.내맘대로속성  // 10
delete a.내맘대로속성   // undefined

const b = function () {}
b.value = 10
b.value // 10


// 기본 자료형에 속성과 메서드 추가 (X)
const c = 10
c.value = 20
c.value // undefined



// 배열 자료 확인 - Array.isArray() 메서드 이용
const a = []
typeof(a)   // "object"
Array.isArray(a)    // true 
Array.isArray(10)   // false
Array.isArray({})   // false


// 함수 자료 확인
const b = () => {}
typeof(b)   // "function"
typeof(b) === 'function'    // true



// 프로토타입을 활용한 속성과 메서드 추가
// 자바스크립트에는 내부에 문자열이 포함되어 있는지 확인하는 메서드가 따로 존재 X
// 따라서, 다음과 같은 방법을 사용 (= indexOf 메서드를 활용해서 값이 0보다 큰 지 확인!)

// String.prototype.value = 10
// const a = '문자열'
// a.contain()

String.prototype.contain = function (다른문자열) {
    return this.indexOf(문자열) >= 0
}

const a = '문자열'
console.log(`a.contain('문자'): ${a.contain('문자')}`)
// 프로토타입 : 기본 자료형에 원하는 메서드를 추가해서 넣고 싶을 때 사용
// indexOf(): 객체에서 주어진 값과 일치하는 첫 번째 인덱스를 반환하며, 일치하는 값이 없으면 -1을 반환