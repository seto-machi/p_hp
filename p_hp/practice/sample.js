// console.log("hallo world");
// window.alert("hallo world");

// window.document.body.innerHTML="";


const maybeTarget = window.document.querySelector(".target")
console.log("入ってるかな？", maybeTarget.classList.contains('targe'));
const maybePoster = window.document.getElementById("poster")
console.log(maybePoster);

setTimeout(() => {
    maybePoster.classList.add("redlargeText");
}, 2000);


const names = ["たろう", "はなこ", "けん", "あい"];

for (let i = 0; i < 4; i++) {
    console.log(names[i]);
}

const numbers = [3, 7, 1, 9, 2];
let sum = 0;

for (let j = 0; j < 5; j++) {
    sum += numbers[j];
}

console.log("合計は:", sum)

const nums = [4, 5, 6, 7, 8, 9];

for (let k = 0; k < nums.length; k++) {
    if (nums[k] % 2 == 0) {
        console.log(nums[k]);
    }
}

const friends = ["ゆうた", "さき", "りく"];

for (let l = 0; l < 3; l++) {
    console.log(friends[l], "さん");
}

const days = ["月", "火", "水", "木", "金"];
days.reverse();

for (let m = 0; m < 5; m++) {
    console.log(days[m]);
}

const scores = [55, 82, 97, 45, 60];
const scoreMax = function (a, b) { return Math.max(a, b); }
let max = scores.reduce(scoreMax);
console.log(max);

const words = ["apple", "banana", "cherry"];
const upperwords = []

for (let p = 0; p < words.length; p++) {
    const word = words[p].toUpperCase();
    const upper = {
        name: word,
        id: p + 1
    };
    upperwords.push(word);
}

console.log(upperwords);

// const x = console.log("hoge")
// console.log(x);


// => "こんにちは、たかおさん！"
const greet = (hello) => {
    return "こんにちは、" + hello + "さん！"
}

console.log(greet("たかお"));

// => 110
const calcTaxIncludedPrice = (num) => {
    return Math.round(num * 1.1)
}

console.log(calcTaxIncludedPrice(100));

// => "さとしは25歳です。"
const person = {
    name: "さとし",
    age: 25
};

const describePerson = (obj) => {
    return obj.name + "は" + obj.age + "歳です。"
}

console.log(describePerson(person));

const judgeScore = (score) => {
    if (score > 79) {
        return "優秀"
    } else if (score > 59) {
        return "普通"
    }
    return "がんばろう"
}

console.log(judgeScore(85));
// => "優秀"
console.log(judgeScore(65));
// => "普通"
console.log(judgeScore(40));
// => "がんばろう"

const evenOrOdd = (num) => {
    return num % 2 === 0 ? "偶数です" : "奇数です";
}

console.log(evenOrOdd(4));
// => "偶数です"

console.log(evenOrOdd(7));
// => "奇数です"

const sumArray = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum
}

console.log(sumArray([1, 2, 3, 4]));

const users = [
    { name: "たろう", age: 18 },
    { name: "じろう", age: 22 },
    { name: "さぶろう", age: 30 }
];

const getUserNames = (obj) => {
    const names = []
    for (let i = 0; i < obj.length; i++) {
        const name = obj[i].name
        names.push(name);
    }
    return names
}

console.log(getUserNames(users));