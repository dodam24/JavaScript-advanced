// 타이머 함수
// setTimeout(): 특정한 시간 후에 한 번 실행
const a = setTimeout(function () {    
    console.log('setTimeout 함수 입니다')
}, 1000)

// setInterval(): 특정한 시간마다 실행
const b = setInterval(function () {   
    console.log('setInterval 함수 입니다')
}, 1000)

console.log(a, b)

// 타이머 제거 함수
clearTimeout(a)
clearInterval(b)



// 즉시 호출 함수(IIFE: Immediately-invoked function expression) : 정의되자마자 즉시 실행되는 함수
{/* <script>
    (function () {
        const a = 10
        console.log(a)
    })()
</script>
<script>
    (function () {
        const a = 20
        console.log(a)
    })()
</script> */}



// 엄격 모드
<script>
    (function () {  // 즉시 호출 함수 내부에서만 엄격 모드
        'use strict'
    })()
</script>