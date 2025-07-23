[1, 2, 3].map(
    /** ここに2倍する処理を書く */
    function (x) {
        return x * 2
    }
);

["apple", "banana", "cherry"].map(
    /** 各要素を大文字に変換 */
    function (x) {
        return x.toUpperCase()
    }
);

[
    { id: 1, name: "たろう" },
    { id: 2, name: "じろう" },
    { id: 3, name: "さぶろう" }
].map(
    /** 各オブジェクトの name を取り出す */
    function (x) {
        return x.name
    }
);
// => ["たろう", "じろう", "さぶろう"]

[100, 250, 330].map(
    /** 税込にして四捨五入 */
    x => Math.round(x * 1.1)
);
// => [110, 275, 363]

["a", "b", "c"].map(
    /** 文字列にインデックス番号を加える */
    function (x, y) {
        return x + y
    }
);
// => ["a0", "b1", "c2"]


["りんご", null, "ぶどう", null].map(
    /** null を "N/A" に変換 */
    x => x === null ? "N/A" : x
);
// => ["りんご", "N/A", "ぶどう", "N/A"]

[1, 2, 3, 4, 5].map(
    /** 各数値を2乗する */
    x => x * x
);
// => [1, 4, 9, 16, 25]

[
    { name: "さとし", age: 22 },
    { name: "ゆかり", age: 19 },
    { name: "けん", age: 30 }
].map(
    /** 年齢だけ取り出す */
    x => x.age
);
// => [22, 19, 30]


