const section1=document.querySelector("#section1")
const div1 = document.querySelector("#div1")
const div2=document.querySelector(".div2")
const div3=document.querySelector(".div3")
// console.log(div1,div2,div3,section1)
div1.style.cssText="background-color: blue;"
div2.style.cssText="background-color: red;"
div3.style.cssText="background-color: green;"

const btn1 = document.querySelector(".btn1")
const btn2=document.querySelector(".btn2")
const btn3=document.querySelector(".btn3")
const div=document.querySelector(".div")
// console.log(btn1,btn2,btn3,div)
 btn1.onclick=function(){
    div.style.cssText="background-color: yellow"
 }
 btn2.onclick=function(){
    div.style.cssText="background-color: pink"
 }
 btn3.onclick=function(){
    div.style.cssText="background-color: violet"
 }
let btn=document.querySelector("#btn")
let div4=document.querySelector(".div4")
console.log(btn,div4)

btn.addEventListener("click",function(){
    let num1=Math.floor(Math.random()*256)
    let num2=Math.floor(Math.random()*256)
    let num3=Math.floor(Math.random()*256)
    div4.style.backgroundColor = `rgb(${num1},${num2},${num3})`
})
    // div4.style.backgroundColor = "red"
// div4.style.backgroundColor =`#${Math.floor (Math.random()* oxffffff) .toString(16)}`

