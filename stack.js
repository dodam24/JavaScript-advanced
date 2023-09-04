// 1. 스택과 힙
// 기본 자료형 (숫자, 문자열, boolean)
// 스택(Stack)에 담는다.
// 기본 자료형은 자료를 직접 저장

// 복합 자료형 (배열, 함수, 객체)
// 힙(Heap)에 담는다.
// 복합 자료형은 그 주소(address)를 저장

// 용어 정리
// 스택: 기본 자료형과 주소 등을 저장하는 메모리 공간
// 힙: 복합 자료형을 저장하는 메모리 공간
// 레퍼런스: 스택의 주소가 힙의 자료를 가리키는 것
// 레퍼런스 변수: 스택에 저장된 것 중에 주소가 저장된 변수



// 2. 비파괴적 처리와 파괴적 처리
// 어떠한 처리 후 원본이 변경 X (비파괴적 처리)
// 어떠한 처리 후 원본이 변경 O (파괴적 처리)

// 비파괴적 처리
let a = 10
let b = 20
// a + b = 30

// 파괴적 처리
let c = [1, 2, 3]
c.push(4)
// c = [1, 2, 3, 4]



// 3. const의 제한
// const는 스택에 있는 값을 변경할 때 오류 발생!
const d = 10
d = 20  // error

// 하지만 힙에 있는 레퍼런스된 복합 자료형을 조작하는 것에는 문제가 없다. 
const e = [1, 2]
e.push(3)
// b = [1, 2, 3]