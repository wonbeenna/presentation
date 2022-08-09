// https://map.naver.com/v5/
// 지도 예시

// 필요한 관점에서 핵심적인 개념과 기능을 간추려 내는 것 또는 볼 수 있도록 추출

// 유저의 이름을 나타내기 위해서
const user = await fetchUser()
const name = user.name || '이름없음'

const userName = await getUserName()


// level 0
function Component(){
    return (
        <>
            <Button type="button" onClick={() => setOpenModal(true)}>
                {title}
            </Button>
            {openModal && (
                <DeliveryAddressModal
                    title={t('deliveryAddress.modal.title')}
                    onClose={() => setOpenModal(false)}
                    openModal={openModal}
                    handleSubmit={onSubmit}
                />
            )}
        </>
    )
}

// level 1
function Component() {
    return <ModalButton title={'전송'} onSubmit={handleSubmit}/>
}

// level 2
function Component() {
    return <ModalButton title={'전송'} />
}

// level 3
function Component() {
    return <ModalButton />
}

// 같은 수준으로 추상화
function Component() {
    return (
        <>
            <div className="stars">
                {Array.from(Array(5).keys()).map((el, idx) => {
                    return (
                        <button key={el} onClick={readonly ? undefined : () => drawStar(idx)}>
                            <StarIcon ref={(el) => (ref.current[idx] = el)} />
                        </button>
                    )
                })}
            </div>
            {title && <h1 className="title">{title}</h1>}
            <ReviewList />
            <ReviewWrite />
        </>
    )
}

function Component() {
    return (
        <>
            <Stars />
            <Title />
            <ReviewList />
            <ReviewWrite />
        </>
    )
}