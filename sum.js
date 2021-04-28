/* lecture 1 module------------------------------------------------------------------------------------
const sum=(num1,num2)=>(num1+num2);

module.exports={sum: sum};
/* lecture 2 event listener----------------------------------------------------------------------------
const EventE = require('events');
const eventE = new EventE();

eventE.on('tutorial',(num1,num2)=>{
    console.log(num1+num2);
} );

eventE.emit('tutorial',1,2);

/* lecture 2 eventlistener and class--------------------------------------------------------------------
class person extends EventE{
    constructor(name)
    {
        super();
        this._name =name;
    }

    get name()
    {
        return this._name;
    }
}

let pedro = new person('pedro');

let christina = new person('pedro');

pedro.on('name',()=>{
    console.log('my name is'+ pedro.name);
})

pedro.emit('name')

christina.on('name',()=>{
    console.log('name is christina'+christina.name);
})
christina.emit('name');

/* lecture 3 readline-----------------------------------------------------------------------------------

const readline= require('readline');

const rl = readline.createInterface({input: process.stdin,
                        output: process.stdout}); 

let num1 = Math.floor((Math.random() *10)+1);
let num2 = Math.floor((Math.random() *10)+1);

let ans=num1+num2;

rl.question('what is {num1}+ {num2}',(ans)=>{
    if(ans== num1+num2){
        rl.close();
    }
    else
    {
        console.log("ans is"+ num1+num2);
    }
});

rl.on('close',()=>{
    console.log('correct!!');
})

/*lecture 4 filesystem------------------------------------------------------------------------------*/

const fs= require('fs');

fs.writeFile('example.txt',"this is an example",(err)=>
{
    if(err)
    console.log(err);
    else{
    console.log('file successful');
    fs.readFile('example.txt','UTF8',(err,file)=>{
        if(err)
        console.log(err);
        else 
        console.log(file);
    })}
})

/* leture 5 directory-----------------------------------------------------------------------------*/

fs.mkdir('foledr',(err)=>{
    if(err)
    console.log(err);
    else
    console.log("sucess");
})