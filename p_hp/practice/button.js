const buttonpush = window.document.querySelector("#push")
console.log(buttonpush);
const getposter = window.document.querySelector("#poster")
let clickCount = 0
getposter.style = "color: red;"

buttonpush.addEventListener("click", function () {
    console.log("pusshedd!!!!!!!")
    clickCount += 1
    if (clickCount % 4 == 1) {
        getposter.classList.add("smalltext")
    } else if (clickCount % 4 == 2) {
        getposter.classList.remove("smalltext")
        getposter.classList.add("mediumtext")
    } else if (clickCount % 4 == 3) {
        getposter.classList.remove("mediumtext")
        getposter.classList.add("largetext")
    } else if (clickCount % 4 == 0) {
        getposter.classList.remove("largetext")
    }
})



