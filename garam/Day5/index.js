// 반복문 for

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// 반복문 while
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

// 반복문 do while
i = 11;
do {
  console.log(i);
  i++;
} while (i < 10);

while (true) {
  let answer = confirm("계속 할까요?");
  if (!answer) {
    break;
  }
}
// break를 만나기 전까지 무한 반복

for (let i = 0; i < 10; i++) {
  if (i % 2) {
    continue;
  }
  console.log(i);
}

// continue로 짝수만 출력하기

let fruit = prompt("무슨 과일을 사고 싶나요?");
switch (fruit) {
  case "사과":
    console.log("100원 입니다.");
    break;
  case "바나나":
    console.log("200원 입니다.");
    break;
  case "키위":
    console.log("300원 입니다.");
    break;
  case "멜론":
  case "수박":
    console.log("500원 입니다.");
    break;
  default:
    console.log("그런 과일은 없습니다.");
}

// switch문 break를 case 사이에 꼭 넣어주기

// 같은 값일 경우 같은 case안에 넣어주면 코드를 줄일 수 있다.

// if 문의 else = default
