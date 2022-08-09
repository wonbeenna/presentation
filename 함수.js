// 1. early return
async function handleLikedClick (like: boolean) {
        try {
            if (!user) toast.error('로그인이 필요합니다.') // 멈추고
            if (like) await handleLike()
            else await handleUnlike()
        } catch (e: any) {
            if (e.status === 401) toast.error('로그인이 필요한 서비스입니다.')
            else toast.error('잠시 후 다시 시도해주세요')
        }
    }
    // 조건에 return 또는 throw(에러를 던지지않으면) 해주지 않으면 try{}문
    // 내부에 불필요한 요청을 함


// 2. default value
function createCarousel(options){
    options = options || {};
    let margin = options.margin || 0;
    let center = options.center || false;

    return {
        margin,
        center
    }
}

// 옵션값이 없어도, 에러를 발생하지 않도록 방어코드를 작성할 수 있음

// 아래와 같이 사용가능
function createCarousel({margin = 0, center = false}){
    // ...something

    return {
        margin,
        center
    }
}
createCarousel();

