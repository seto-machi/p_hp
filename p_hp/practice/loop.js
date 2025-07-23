const array = [10,10,10]

let sum = 0
for (let i = 0; i < array.length; i = i + 1){
    sum += array[i];
}
console.log("合計:",sum)

const twitter = ["1","2","3","4"]

let moji = ""

 for (let i =0; i <3; i++){
 for (let j =0; j < 5; j++){
     console.log(i,j)
 }
 }

for (let i =0; i < twitter.length; i++){
    // 内側ループ
}

// for (let i =0; i < twitter.length; i++){
 for (let j =0; j < 3; j++){
     moji += twitter[i];
 }
// }
//

let i = 0; 
let j = 0;
while (i<twitter.length) {
    while (j < 3) {
        moji += twitter[i]
        j+=1
    }
    i += 1;
}

console.log(moji)

// "111222333444"

