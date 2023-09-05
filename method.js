// Number 객체의 toFixed 메서드
const a = 123.456789
a.toFixed(0)    // 123 (정수 부분까지 출력)
a.toFixed(1)    // 123.5 (소수 첫째 자리까지 출력)
a.toFixed(2)    // 123.46 (소수 둘째 자리까지 출력)
// 단 숫자형이 아닌, 문자 자료형으로 출력됨



// Number.isNan() 메서드
// NaN(Not a Number): 자료형은 숫자인데 값이 숫자가 아닌 것
Number.isNaN()  // false
Number('안녕하세요')    // NaN
const b = Number('안녕하세요')  // undefined
Number.isNaN(b) // true
Number.isNaN(20)    // false



// Number.isFinite() 메서드: 매개변수가 유한한 수인지 판별
Number.isFinite(10) // true
Number.isFinite(10.10)  // true
10 / 0  // Infinity
const inf = 10 / 0  // undefined
typeof(inf) // "number"
inf // Infinity
Number.isFinite(inf)    // false



// String 객체의 메서드
// String 객체의 trim() 메서드: 앞 뒤의 공백 제거
'       asdf      '.trim()  // "asdf"


// String 객체의 split() 메서드
// 특정 문자로 구분된 데이터를 잘라서 배열로 만들고 싶을 때 split() 메서드 사용
'23.09.05, 윤인성, 피자, 20000'.split(',')  // ["23.09.05", "윤인성", "피자", "20000"]
'23.09.05 윤인성 피자 20000'.split(' ')  // ["23.09.05", "윤인성", "피자", "20000"]
'23.09.05|윤인성|피자|20000'.split('|')  // ["23.09.05", "윤인성", "피자", "20000"]


// 2차원 배열로 만드는 과정
input.trim().split('\n').map((line) => line.split(','))



// Math 객체의 속성과 메서드
Math.PI // 3.141592653589793
Math.floor (10.1)   // 10.1 (내림))
Math.ceil(10.1) // 11 (올림)
Math.round(10.1)    // 10 (반올림)
Math.max(52, 273, 103)  // 273
Math.min(52, 273, 103)  // 52 
Math.max(...[52, 273, 103])  // 배열 전개 연산자
Math.min(...[52, 273, 103])
Math.random()   // 0 ~ 1 사이의 랜덤한 숫자를 생성
// 0 ~ 50 사이의 랜덤한 정수
Math.floor(Math.random() * 50)  // 0 ~ 50까지의 숫자를 정수형으로 변경