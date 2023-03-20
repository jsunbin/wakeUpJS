for (let i = 1; i < 11; i++) {
  console.log(i);
}

let i = 0;
while (i < 11) {
  console.log(i);
  i++;
}

while (true) {
  let answer = confirm("계속 할까요?");
  if (!answer) {
    break;
  }
}

for (let i = 0; i < 10; i++) {
  if (i % 2) {
    continue;
  }
  console.log(i);
}

let fruit = prompt("무슨 과일을 사고 싶나요?");

switch (fruit) {
  case "사과":
    console.log("100원입니다.");
    break;
  case "바나나":
    console.log("200원입니다.");
    break;
  case "키위":
    console.log("300원입니다.");
    break;
}
