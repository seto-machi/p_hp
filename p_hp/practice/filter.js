console.log([1, 2, 3, 4, 5, 6].filter(
    /** 偶数だけを通す */
    (even) => even % 2 == 0
));

console.log([3, 7, 1, 9, 4].filter(
    /** 5以上の値を残す */
    (num) => num > 4
));
// => [7, 9]

console.log(["りんご", null, "みかん", undefined, "バナナ"].filter(
    /** 有効な文字列だけを残す */
    (fruits) => typeof fruits === "string"
));
// => ["りんご", "みかん", "バナナ"]

console.log([
    { name: "さとし", age: 22 },
    { name: "ゆかり", age: 17 },
    { name: "けん", age: 15 }
].filter(
    /** 20歳未満の人だけ残す */
    (obj) => obj.age < 20
));
// => [{ name: "ゆかり", age: 17 }, { name: "けん", age: 15 }]

console.log(["りんご", "", "ばなな", "", "みかん"].filter(
    /** 空文字じゃない要素だけ残す */
    (fruits) => fruits !== ""
));
// => ["りんご", "ばなな", "みかん"]

console.log(["a", "b", "c", "d", "e"].filter(
    /** 偶数番目の要素だけ通す（インデックスを使う） */
    (obj, index) => index % 2 === 0
));
// => ["a", "c", "e"]

console.log([
    { name: "taro", isActive: true },
    { name: "jiro", isActive: false },
    { name: "saburo", isActive: true }
].filter(
    /** isActive が true の人だけ残す */
    (obj) => obj.isActive === true
));
// => [
//   { name: "taro", isActive: true },
//   { name: "saburo", isActive: true }
// ]



