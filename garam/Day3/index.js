let num = 10;
num = num + 5;

let num1 = 10;
num1 += 5;
num1 -= 5;
num1 *= 5;
num1 %= 5;

// 연산자 줄여서 쓰기

let a = 10;
num++;
num--;

let result = num++; // 증가 시키기 전의 값을 result에 넣음

let result1 = ++num; // 증가 시킨 값 11을 result1에 넣음

console.log(10>5)  // true 반환
console.log(10==5) // fasle 반환
console.log(10!=5) // true 반환

const c = 1;
const d = "1";

console.log(c==d); // true 반환

console.log(c===d); // flase 반환 


const age = 30;

if(age > 19){
    console.log('안녕');
}

if(age <=19){
    console.log('바이');
}

if(age>19){
    console.log('안녕');
} else{
    console.log('바이');
}

//if와 else


if(age>19){
    console.log('안녕');
} else if(age===19){
    console.log('화이팅');
} else{
    console.log('바이');
}

const name11 = "Mike";
const age11 = 30;

if(name11==='Tom' || age > 19){
    console.log('통과')
}

// ||(OR)통과, 이름은 톰이 아니지만 나이가 19를 넘기 때문

const name12 = "Tom";
const age12 = 30;

if(name11==='Tom' && age > 19){
    console.log('통과')
}

// &&(AND)통과, 이름도 Tom 나이도 맞기 때문

const name13 = "Tom";
const age13 = 30;

if(name11==='Mike' && age > 19){
    console.log('통과')
}else{
    console.log('돌아가')
}

// 돌아가 출력

const user = prompt('나이가?');
const isAdult = age > 19;

if(!isAdult){
    console.log('통과')
}

//prompt로 입력받고 성인이 아니면 돌아가


const gender = 'F';
const namee = 'Jane';
const isAdult1 = true;

if(gender==='M' && name === 'Mike || isAdult1'){
    console.log('통과')
}else{
    console.log('돌아가')
}

// 남자이고, 이름이 Mike이거나 성인이면 통과

//and가 or 보다 우선순위가 높다






