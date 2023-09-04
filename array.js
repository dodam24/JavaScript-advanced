// 배열의 메서드
// 배열 뒤에 요소 추가하기 : push(요소)
const a = [52, 273, '안녕', '하세요']
a.push(100) // [52, 273, '안녕', '하세요', 100]



// 배열 중간에 요소 추가하기
// splice(인덱스, 0, 요소)
a.splice(1, 0, '추가')  // [52, "추가", 273, "안녕", "하세요", 100]



// 배열에서 요소를 제거할 때
//  1) 인덱스로 제거  2) 값으로 제거
// 인덱스로 배열의 요소 제거 : splice(인덱스, 1)
a.splice(0, 1)  // ["추가", 273, "안녕", "하세요", 100]



// 배열 내부에서 값의 위치 찾기 : indexOf(요소)
a.indexOf('안녕')   // 2
a.indexOf('asfsd')    // 원하는 요소가 배열 내부에 없을 때, -1을 출력



// 값으로 배열의 요소 제거
// indexOf() + splice() 활용
const index = a.indexOf('하세요')
a.splice(index, 1)  // "하세요"
a   // ["추가", 273, "안녕", 100]



// 기본 연산
// a.length : 요소의 개수 추출
// a[인덱스] : 요소 추출