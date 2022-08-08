// 삼항연산자는 3개 피연산자 일때

// 조건 ? 참 : 거짓 -> 식 값이 필요할 경우
// 어떤 경우에는 참이 필요없거나, 거짓이 필요없을 경우가 있음
// 조건 ? X : 거짓 // 조건 ? 참 : X -> 이런 경우에는 사용을 피하자

// false
// null
// undefined
// 0
// -0
// 0n
// NaN
// ""

// {}
// []
// "0"
// new Date()


// AND 연산자
// true && true && '도달?'

// true && false && '도달?'

// OR 연산자
// false || false || '도달?'

// true || true || '도달?'

function userName(user, isLogin) {
    // if(isLogin){
    //     if(user){
    //         if(user.name){
    //             return user.name
    //         }else{
    //             return '이름없음'
    //         }
    //     }
    // }
    if(isLogin && user){
        return user.name || '이름없음'
    }
}

console.log(userName({name: undefined}, true))