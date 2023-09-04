const isLeapYear1 = function (연도) {
    console.log(`연도: ${연도}`)    // 연도: undefined
    console.log(`단순 식 계산 결과: ${연도 % 4}`)   // 단순 식 계산 결과: NaN
    return (연도 % 4 === 0)
      && (연도 % 100 !== 0)
      || (연도 % 400 === 0)
}

isLeapYear1()    // 올해가 윤년인지 알려준다. (false)


// 기본 매개변수
const isLeapYear2 = function (연도 = new Date().getFullYear()) {
    console.log(`구하고 있는 연도: ${연도}`)    // 구하고 있는 연도: 2023
    return (연도 % 4 === 0)
      && (연도 % 100 !== 0)
      || (연도 % 400 === 0)
}

console.log(isLeapYear2())  // false



// 과거의 기본 매개변수 (조건문 활용)
const isLeapYear3 = function (연도) {
    if (typeof(연도) === 'undefined') {
        연도 = new Date().getFullYear()
    }

    연도 = typeof(연도) === 'undefined' ? new Date().getFullYear() : 연도
    연도 = typeof(연도) !== 'undefined' ? 연도 : new Date().getFullYear()

    // 연도의 값이 있으면 연도를 넣고, 연도가 undefined 또는 false인 경우 뒤에 있는 값을 넣어줌
    연도 = 연도 || new Date().getFullYear()

    console.log(`연도: ${연도}`)    // 연도: 2023

    return (연도 % 4 === 0)
      && (연도 % 100 !== 0)
      || (연도 % 400 === 0)
}

console.log(isLeapYear3())  // false
 