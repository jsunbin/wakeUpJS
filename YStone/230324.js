const superman = {
  name: "clark",
  age: 30,
};

superman.hairColor = "black";
superman["hobby"] = "football";
delete superman.age;
console.log(superman);

function makeObject(name, age) {
  return {
    name: name,
    age: age,
    hobby: "football",
  };
}

const Mike = makeObject("Mike", 30);
console.log(Mike);

console.log("age" in Mike);
console.log("birthday" in Mike);

function isAdult(user) {
  if (!("age" in user) || user.age < 20) {
    return false;
  }
  return true;
}

const Mike = {
  name: "Mike",
  age: 30,
};

const Jane = {
  name: "Jane",
};

console.log(isAdult(Jane));

const Mike = {
  name: "Mike",
  age: 30,
};

for (key in Mike) {
  console.log(Mike[key]);
}

let boy = {
  name: "Mike",
  showName: function () {
    console.log(this.name);
  },
};

let man = boy;
boy = null;

man.showName();

let days = ["mon", "tue", "wed"];

days.push("thu");
days.unshift("sun");

for (let day of days) {
  console.log(day);
}
