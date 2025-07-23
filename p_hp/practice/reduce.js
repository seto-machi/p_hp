const numbers = [1, 2, 3, 4, 5];

const total = numbers.reduce(
    /** 合計値を求める */
    (a, b) => a + b
);

console.log(total);
// => 15

const numbers2 = [3, 8, 1, 6, 2];

const max = numbers2.reduce(
    /** 最大値を求める */
    (a, b) => Math.max(a, b)
);

console.log(max);
// => 8

const words = ["Hello", "world", "!"];

const sentence = words.reduce(
    /** 単語をつなげて1つの文にする */
    (a, b) => a + " " + b
);

console.log(sentence);
// => "Hello world !"

const fruits = ["apple", "banana", "kiwi"];

const totalLength = fruits.reduce(
    /** 各文字列の長さを合計 */
    (a, b) => a + b
);

console.log(totalLength);
// => 16

const names = ["alice", "bob", "carol"];

const result = names.reduce(
    /** 各名前を key として true を値に持つオブジェクトを作る 
  例: { alice: true, bob: true, carol: true }*/
    (a, b) => { a[b] = true; return a }, {});

console.log(result);
// => { alice: true, bob: true, carol: true }

const users = [
    { name: "たかし", age: 21 },
    { name: "まゆ", age: 19 },
    { name: "けんじ", age: 24 },
];

const totalAge = users.reduce(
    /** 年齢を合計する */
    (a, b) => a + b.age, 0);

console.log(totalAge);
// => 64

const nums = [10, 20, 30];
const result2 = nums.reduce((acc, cur) => acc + cur, /** ここに初期値を入れる */ 10);
console.log(result2);
// => 70