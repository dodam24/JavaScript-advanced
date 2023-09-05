// 객체 기본

// 배열과 객체 비교
// 배열 (Array)
const array = [100, 20, '문자열', true, function () {}, () => {}]
console.log(array[0])   // 100
array[0] = 200
console.log(array[0])   // 200


// 객체 (Object)
const object = {
    name: '구름',
    age: 7
}
// object['name']
console.log(object.name)    // 구름
object.name = '별'
object.age = 1
console.log(object.name)    // 별
console.log(object.age) // 1



// 속성과 메서드
// 요소(element)
const array = [100, 20, '문자열', true, function () {}, () => {}]

// 속성(property)
const dog = {
    name: '구름',
    age: 7,
    bark: function () { 
        console.log(`${dog.name}이/가 짖습니다!`)
        // console.log(`${this.name}이/가 짖습니다!`)
    },
    sleep: () => {
        console.log(`${dog.name}이/가 잡니다!`)
    }
}

dog.bark()  // 구름이/가 짖습니다!
dog.sleep() // 구름이/가 잡니다!



// this 키워드
// 익명 함수에서 this는 자기 자신 (익명 함수: this 바인딩)
// 화살표 함수에서 this는 window 객체를 출력 (화살표 함수: this 바인딩 X)
// this 바인딩 : this를 현재 객체와 연결
// → 객체를 만들고 내부에서 this를 사용할 때는 익명 함수만 사용!