// 1. map vs forEach
var arr = ['1000', '2000', '3000'];
// 매 요소마다 콜백함수를 실행
var newArrForEach = arr.forEach(function (el) {
    return el + '원';
});
// 매 요소마다 콜백함수를 호출한 결과를 모아 배열로 리턴
var newArrMap = arr.map(function (el) {
    return el + '원';
});
console.log(newArrForEach);
console.log(newArrMap);
// 2. 배열요소 접근하기
var firstEl = arr[0], secondEl = arr[1];
// 인덱스로 접근시 가독성이 떨어지고 어떤걸 의미하는지 어려움
console.log(arr[0], arr[1]);
// 구조분해할당을 통해 명시적으로 표현가능
console.log(firstEl, secondEl);
// 함수로 매개변수로 사용가능
function arrTest(_a) {
    var firstInput = _a[0], secondInput = _a[1];
    return console.log(firstInput, secondInput);
}
arrTest(arr);
// 3. switch 문 줄여보기
var BusinessType;
(function (BusinessType) {
    BusinessType["individual"] = "individual";
    BusinessType["incorporated"] = "incorporated";
    BusinessType["listed"] = "listed";
    BusinessType["national"] = "national";
    BusinessType["charity"] = "charity";
})(BusinessType || (BusinessType = {}));
var userdata = {
    type: BusinessType.listed
};
function getBusinessType(type) {
    // switch (type) {
    //   case BusinessType.individual:
    //     return 'Solo Proprietorship' // 개인사업자
    //   case BusinessType.incorporated:
    //     return 'Corporation' // 법인회사
    //   case BusinessType.listed:
    //     return 'Listed company' // 상장회사
    //   case BusinessType.national:
    //     return 'non-profit company' // 비영리 회사
    //   case BusinessType.charity:
    //     return 'charity' // 자선단체
    // }
    return BusinessType[type];
}
console.log(getBusinessType(userdata.type));
