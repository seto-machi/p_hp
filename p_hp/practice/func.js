// function キーワードを使う
function fn1(name) {
    const greeting = 'Hello, ' + name + '!';
    return greeting;
}


// アロー関数 を使う
const num = 10
const fn2 = (name) => {
    const greeting = 'Hello, ' + name + '!';
    return greeting;
}

const fn3 = function (name) {
    const greeting = 'Hello, ' + name + '!';
    return greeting;
}

const fn4 = (i, you) => {
    const greeting = i + ", " + you + '!';
    return greeting;
}


// 呼び出し
const result1 = fn1("Gin")
const result2 = fn2("Belta")
const result3 = fn3("Belta")
const result4 = fn4("takao", "belta")


console.log(result1); // "Hello, Gin!"
console.log(result2); // "Hello, Belta!"
console.log(result3); // "Hello, Belta!"
console.log(result4);

//2つの引数を受け取って加算して返す関数
function tashizan(a, b) {
    const plus = a + b;
    return plus;
}

console.log(tashizan(1, 2));

//返り値がない　１つの文字列を受け取って２回コンソールログする

function moji(retsu) {
    for (let i = 0; i < 2; i++) {
        console.log(retsu);
    }

}

moji("Hello, World!"); // "Hello, World!" が2回表示される

//moji関数で２つの引数を受け取る　第二引数はn(=number)　nの回数分だけconsole.log

function moji2(retsu2, n) {
    for (let i = 0; i < n; i++) {
        console.log(retsu2);
    }
}

moji2("Hello, World!", 3);

//2つの引数を受け取る　２と３を受け取ると８を出す（２の3乗）　

// 2^3 = 1 * 2 * 2 * 2 = 8 
// 2^5 = 2 * 2 * 2 * 2 * 2 = 32 
// 4^2 = 4 * 4 = 16 

function jouzan(n2) {
    let yama = 1
    for (let j = 0; j < n2; j++) {
        yama = yama * 2
    }
    return yama;
}

function jouzan2(n1, n2) {
    return n1 ** n2
}

//引数１つ(number)　偶数ならtrue 奇数ならfalse

function even(n3) {
    if (n3 % 2 == 0) {
        return true
    } else {
        return false
    }
}

// let x = 10
// Boolean(x > 0)
// if ("a") {
//     console.log(ｘ + "は0より大きい");
// } else {
//     console.log(ｘ + "は0よりちいさい");
// }

// 一つの数を引数として受け取って、その数が100以上なら "100以上です"
// そうでないなら、 "100未満です" と返す関数

function hundred(num) {
    const e = 100 > 30 ? "100は30より大きい" : "100は30より小さい";
    return num > 99 ? "100以上です" : "100未満です";
}
console.log(hundred(101));
console.log(hundred(99));


// 1つの文字列(name)を引数として受け取って、"Hello, {name}!" と返す関数
// 例えば、name が "Alice" の場合、"Hello, Alice!" と返す

function meeting(name) {
    const ai = "Hello,"
    const satsu = name
    const exc = "!"
    return ai + satsu + exc;
}

console.log(meeting("Alice"));


// 引数を3つ受け取って、
// 1つ目の引数(moji)は文字列、2つ目(kazu)は数値、３つ目(shingi)は真偽 を受け取って
// shingi が true の場合は moji を 、 false の場合は kazu を返す関数

function dotti(moji, kazu, shingi) {
    return shingi ? moji : kazu;
}
console.log(dotti("moji", "kazu", "shingi"));
console.log(dotti("moji", "kazu", 0));

// 引数を2つ受け取って、
// 1つ目の引数(moji)は文字列、2つ目の引数(kazu)は数値
// kazu の回数だけ "Hello, {moji}" をコンソールに表示する関数

const counthello = (moji, kazu) => {
    if (typeof moji !== "string") {
        console.log("mojiは文字列じゃないとだめだよ");
        return
    }
    if (typeof kazu !== "number") {
        console.log("kazuは数値じゃないとだめだよ");
        return
    }
    for (let i = 0; i < kazu; i++) {
        console.log("Hello," + moji);
    }
    return

}

counthello("Alice", 5);
counthello(10, 5);
counthello("Alice", "Alice");

// 1つの以下のようなオブジェクトを受け取る
// {a: 1, b: 2, c: 3}
// aプロパティ、bプロパティ、cプロパティの値の合計を返す関数

const obj8 = { a: 1, b: 2, c: 3 }

const sumnum = (obj) => {
    const { a, b, c } = obj
    return a + b + c
}
console.log(sumnum(obj8));

// 2つの以下のようなオブジェクトを受け取る
// {a: 1, b: 2, c: 3, name:"hoge"}, {a: 4, b: 5, c: 6 ,name:"fuga"}
// aプロパティ、bプロパティ、cプロパティの値の平均が大きいほうのオブジェクトのnameを返す関数

const objhoge = { a: 1, b: 2, c: 3, name: "hoge" }
const objhuga = { a: 4, b: 5, c: 6, name: "fuga" }

const ava = (hoge, huga) => {
    const { a: oa, b: ob, c: oc } = hoge
    const { a: ua, b: ub, c: uc } = huga
    const sumhoge = (oa + ob + oc) / 3
    const sumhuga = (ua + ub + uc) / 3

    const max = Math.max(sumhoge, sumhuga)
    return max === sumhoge ? hoge.name : huga.name;

    // if(max ===sumhoge){
    //     return hoge.name
    // }
}




console.log(ava(objhoge, objhuga));

// 以下のようなオブジェクトの配列を受け取る
// [{a: 1, b: 2, c: 3, name:"hoge"}, {a: 4, b: 5, c: 6 ,name:"fuga"}, ... ]
// オブジェクトの配列の中で、aプロパティ、bプロパティ、cプロパティの値の合計が最大のオブジェクトのnameを返す関数
// ↓ のデータをつかってね
const data = [
    { a: 12, b: 87, c: 45, name: "hoge" },
    { a: 3, b: 29, c: 91, name: "fuga" },
    { a: 64, b: 8, c: 27, name: "piyo" },
    { a: 19, b: 73, c: 50, name: "moge" },
    { a: 42, b: 16, c: 88, name: "nora" },
    { a: 7, b: 33, c: 11, name: "zaza" },
    { a: 93, b: 5, c: 60, name: "keke" },
    { a: 21, b: 49, c: 36, name: "bobo" },
    { a: 55, b: 24, c: 99, name: "lulu" },
    { a: 10, b: 91, c: 17, name: "mimi" }
];

// const summax = (obj) => {
//     const sumsum = [];
//     for (let i = 0; i < obj.length; i++) {
//         const { a, b, c } = obj[i]
//         const sum = a + b + c
//         sumsum.push(sum);
//     }
//     const scoreMax = function (a, b) { return Math.max(a, b); }
//     let max = sumsum.reduce(scoreMax);
//     const index = sumsum.findIndex(item => item === max)
//     return obj[index].name

// }

// console.log(summax(data));

// const summax = (obj) => {
//   let maximum = -1;
//   let maximumIdx = 0;
//   for (let i = 0; i < obj.length; i++) {
//     const { a, b, c } = obj[i];
//     const sum = a + b + c;
//     if (maximum < sum) {
//       maximum = sum
//       maximumIdx = i
//     }
//   }

//   return console.log(obj[maximumIdx].name);
// };

const summax = (obj) => {
    let maximum = -1;
    let maximumObjName = "";
    for (let i = 0; i < obj.length; i++) {
        const { a, b, c } = obj[i];
        const sum = a + b + c;
        if (maximum < sum) {
            maximum = sum
            maximumObjName = obj[i].name
        }
    }

    return console.log(maximumObjName);
};

summax(data);

const arr = [2, 3, 6];
const result = arr.reduce((a, b) => a * b);
console.log(result);