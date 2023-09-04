// 프로시저 형태의 함수
const f1 = function() {
    console.log(`안녕하세요 + ${x}`)
}

const x = 10
f() // 호출



// 수학적 함수
const f2 = function(x) {
    return x + 5
}

console.log(f2(1))  // 6
console.log(f2(2))  // 7



// 함수() → 함수를 호출 (= 함수의 본문을 실행)

// 프로시저: 매개변수를 갖지 않는 함수
//          즉, () 안에 아무것도 들어가지 않는 것을 의미함



// 함수를 사용하는 이유: 코드의 재사용
const sum = function() {
    let output = 0
    for (let i = 1; i <= limit; i++) {
        output += i
    }
    console.log(output)
}

let limit = 10
sum()   // 1 ~ 10까지의 합을 출력 (= 55)

limit = 20
sum()   // 1 ~ 20까지의 합을 출력 (= 210)

limit = 30
sum()   // 1 ~ 30까지의 합을 출력 (= 465)



// 매개변수와 리턴값을 사용 (코드가 더 깔끔해지고, 활용도가 높아짐)
// 위 코드를 다음과 같은 형태로 변경
const sum = function(limit) {   // 매개변수로 limit을 받음
    let output = 0
    for (let i = 1; i <= limit; i++) {
        output += i
    }
    return output   // output을 리턴
}

console.log(`합은 ${sum(10)} 입니다`)    // 합은 55 입니다
console.log(`합은 ${sum(20)} 입니다`)    // 합은 210 입니다
console.log(`합은 ${sum(30)} 입니다`)    // 합은 465 입니다