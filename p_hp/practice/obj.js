const obj = {
    "key": "value",
    key2: "value2"
};


const x = 1;
const y = x + 1;
const z = x + 2;

const templtures = {
    [x]: "24度",
    [y]: "25度",
    [z]: "26度",
}
templtures[x] // "24度"
templtures[y] // "25度"
templtures[z] // "26度"


const obj2 = {};
const obj3 = new Object();

const k = "key"
console.log(obj[k + "2"])

//const value = obj.key
//const value2 = obj.key2

const { key, key2 } = obj

const obj4 = {};
//name id を　keyにする
obj4.name = "misae";
obj4.id = 34;

console.log(obj4.name + obj4.id);

//name id がある obj4　の兄弟

const obj5 = {
    name: "hirosi",
    id: 35
};

const fn = (num, num2) => { return num + num2; }

// reseive → receive
function objreceive(obj) {
    console.log(obj.id);
    console.log(obj.name);
}

function objreceive2(name, id) {
    name.id
}

objreceive(obj5);
// objreceive(obj5.name);
// 

const a = {
    id: 1,
    value: 12
}
const b = {
    id: 2,
    value: 26
}
const c = {
    id: 3,
    value: 31
}

console.log(a.value + b.value + c.value);

// prettyPrint 関数は {id:1, value:12} のようなobjectを引数として受け取る
// そして、以下のような文字列を返す
// "data: id = 1 , value = 12"

function consoleLog(obj) {
    return "hoge"
}

const obj7 = {
    id: 1,
    value: 12
}

function prettyPrint(obj6) {
    const data = "data:"
    let id = obj6["id"]
    let value = obj6["value"]
    // const value = console.log(obj6);

    let ids = "id = " + id
    let values = "value =" + value
    return data + ids + "," + values
}


prettyPrint(obj7);

