const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");
const defaultc = window.getComputedStyle(center).backgroundColor;

var getBG = (element)=> {
    return window.getComputedStyle(element).backgroundColor;
}


var colorchange = (a) =>{
a.addEventListener("mouseenter", ()=>
{
    center.style.background = getBG(a);
})}

var asitis = (a) =>{
    a.addEventListener("mouseleave", ()=>
{
    center.style.background = defaultc;
})
}
colorchange(pink);
asitis(pink);
colorchange(cyan);
asitis(cyan);
colorchange(red);
asitis(red);
colorchange(orange);
asitis(orange);
colorchange(violet);
asitis(violet);