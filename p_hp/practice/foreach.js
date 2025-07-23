["りんご", "バナナ", "みかん"].forEach(
    /** 各要素を console に表示 */
    (fruits) => console.log(fruits)
);
// => 出力:
// りんご
// バナナ
// みかん

const nums = [1, 2, 3];
const result = [];

nums.forEach(
    /** 各要素を2倍して result に追加 */
    (num) => result.push(num * 2)
);

console.log(result);
// => [2, 4, 6]

const users = [
    { id: 1, name: "さとし" },
    { id: 2, name: "ゆかり" },
    { id: 3, name: "けん" },
];

users.forEach(
    /** name を console に出力 */
    (user) => console.log(user.name)
);

// => 出力:
// さとし
// ゆかり
// けん

const fruits = ["apple", "banana", "kiwi"];
const lengths = [];

fruits.forEach(
    /** 各文字列の長さを lengths に追加 */
    (fruit) => lengths.push(fruit.length)
);

console.log(lengths);
// => [5, 6, 4]

["a", "b", "c"].forEach(
    /** 要素とインデックスを console に出力 */
    (abc, index) => console.log(index + ":" + abc)
);

// => 出力:
// 0: a
// 1: b
// 2: c

const results = [1, 2, 3].forEach(x => x * 2);
console.log(results); // 何が表示される？

const fruitsjuice = ["apple", "banana", "kiwi"];
let length = 0;

fruitsjuice.forEach(
    /** 各文字列の合計を length に追加 */
    (fruit) => length += fruit.length
);

console.log(length);
// => 15