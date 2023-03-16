// 5. 기본연산자
// num = num + 5 ->  num += 5
// let num = 10; let result = ++num;
// num++: 증가연산자이지만 값이 바로 증가되지 않는다.
// 의도한대로 바로 증가시킬려면  ++num으로 적어주면된다.

// 6. 비교 연산자, 조건문
// a = 3: 할당을 의미한다. a에 3을 넣는다.
// a == 3
// 동등연산자(==)
// 일치연산자(===): 타입까지 비교(가급적 이걸 사용하는게 좋음)
// if () {} else {} -> else는 if가 false일때 실행이된다.
const age = 19;
if (age > 19) {
  console.log('환영합니다.');
} else if (age === 19) {
  console.log('수능 잘치세요.');
} else {
  console.log('안녕히 가세요.');
}
