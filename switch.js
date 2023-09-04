// if 조건문
const date = new Date()
const hours = date.getHours()

if (hours < 12) {
    alert(`현재 시간은 ${hours}시로 오전입니다`)
}

if (hours >= 12) {
    alert(`현재 시간은 ${hours}시로 오후입니다`)
}


// switch 조건문
const x = Number(prompt('숫자를 입력해주세요', ''))
switch (x) {
    case 1:
        alert('입력한 값이 1입니다')
        break
    case 2:
        alert('입력한 값이 2입니다')
        break
    case 3:
        alert('입력한 값이 3입니다')
        break
    default:
        alert('입력한 값이 1-3이 아닙니다')
}


// 조건부 연산자 (삼항 연산자)
const y = Number(prompt('숫자를 입력해주세요.', ''))
(y >= 0) ? '0 이상의 숫자입니다' : '0보다 작은 숫자입니다'