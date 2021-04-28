var counter= document.querySelector(".counter");
var followers= document.querySelector(".follower");

let count=1;
 
var inter= setInterval(()=>{
    count++;
    if(count>1000) 
    {count--;
        clearInterval(inter);}
    counter.innerText = count;}
    ,1);



setTimeout(() => {
    followers.innerText="Followers on instagram";
}, 2000);
