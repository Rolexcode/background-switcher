const btn = document.getElementById("btn");
const demo = document.getElementById("demo");
let randNum = () => {
    return Math.floor(Math.random() * 256);
};
let changeColor = () => {
    let randomColor = `rgb(${randNum()}, ${randNum()}, ${randNum()})`;
    document.body.style.backgroundColor = randomColor;
    demo.innerHTML = randomColor;
    return randomColor;
};

btn.addEventListener("click", changeColor);
