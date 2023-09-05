// 객체의 기본값을 지정

// 일반적인 함수
// const test = function (name, age, color) {
//     return `${name} : ${age} : ${color}`
// }

// console.log(test('구름', 7, '갈색')) // 구름 : 7 : 갈색


// 현대적인 형태의 함수
const pet = function (object) {
    return `${object.name} : ${object.age} : ${object.color}`
}

console.log(test({
    name: '구름',
    age: 7,
    color: '갈색'
}))


// 과거 코드와 현대 코드의 비교 (예시)
// sendMail('구름', '별', '내용블라블라')   // 코드 해석이 어려움
// 따라서, 객체로 생성
sendMail({
    from: '구름',
    to: '별',
    content: '내용블라블라'
})


// 객체의 기본 매개변수 지정
const test = function (object) {
    // 과거(1)
    object.status = object.status !== undefined ? object.status : '이상 없음'
    // 과거(2)
    object.status = object.status ? object.status : '이상 없음'
    // 과거(3)
    object.status = object.status || '이상 없음'

    // 현대(1)
    object = { status: '이상 없음', ...ojbect }
    // 현대(2)
    fun = function ({name, age, color, status = '이상 없음'}) {
        return `${name} : ${age} : ${color} : ${status}`
    }

    return `${object.name} : ${object.age} : ${object.color} : ${object.status}`
}


// 과거의 기본 매개변수 지정 방법
const dog = {
    name: '구름',
    age: 7,
    color: '갈색'
}

// 예시
console.log(dog.name)   // 구름
console.log(dog.age)    // 7
console.log(dog.color)  // 갈색

// 과거(1)
console.log(dog.status) // undefined
dog.status = dog.status !== undefined ? dog.status : '이상 없음'

// 과거(2): dog.status에 빈문자열 or 0과 같이 false로 변환되는 값이 오지 않는다면?
dog.status = dog.status ? dog.status : '이상 없음'

// 과거(3)
dog.status = dog.status || '이상 없음'



// 전개 연산자로 객체의 기본 매개변수 지정하기
// 현대(1)
const dog = {
    name: '구름',
    age: 7,
    color: '갈색'
}

const newDog = {
    status: '이상 없음',
    ...dog
}
// newDog   // {status: "이상 없음", name: "구름", age: 7, color: "갈색"}


// 기본 객체의 매개변수 함수
// 현대(2)
const now = function ({
    name,
    age,
    color,
    status = '이상 없음'
}) {
    return `${name} : ${age} : ${color} : ${status}`
}

console.log(now({   
    name: '구름',
    age: 7,
    color: '갈색'
}))
// 구름 : 7 : 갈색 : 이상 없음



// 객체의 속성 일괄 추출
// 객체의 속성을 뽑아서 변수처럼 활용할 수 있음
const prop = function (object) {
    const { name, age, color, status } = { status: '이상 없음', ...object }

    return `${name} : ${age} : ${color} : ${status}`
}