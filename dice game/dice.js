let diceContainer = document.querySelector(".dice");
let dice = document.querySelector("i");
console.log(dice);

let arr = [ {
    num: `<i class="fa-solid fa-dice-two"></i>`,
    color: `yellow`,
},
{
    num: `<i class="fa-solid fa-dice-three"></i>`,
    color: `orange`,
},
{
    num: `<i class="fa-solid fa-dice-four"></i>`,
    color: `purple`,
},
{
    num: `<i class="fa-solid fa-dice-six"></i>`,
    color: `green`,
},
{
    num: `<i class="fa-solid fa-dice-one"></i>`,
    color: `blue`,
},
{
    num: `<i class="fa-solid fa-dice-five"></i>`,
    color: `red`,
}]


diceContainer.addEventListener("click",function(){
    let randomNum = Math.floor(Math.random() * arr.length);
    diceContainer.innerHTML = arr[randomNum].num;
})