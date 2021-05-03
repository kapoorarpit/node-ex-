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

/*lecture 4 filesystem------------------------------------------------------------------------------

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

/* leture 5 directory-----------------------------------------------------------------------------

/*fs.mkdir('foledr',(err)=>{
    if(err)
    console.log(err);
    else{
        fs.writeFile('./foledr/example.txt',"this is an ",(err)=>{
        if(err)
        console.log(err);
        else{
        console.log('file successful');
        }})
    }});

fs.readdir('foledr',(er,file)=>{
    if(er)
    console.log(er)
    else{
        console.log(file)
    }
})

/*lecture 6 streams--------------------------------------------------------------*

const read=fs.createReadStream('./example.txt');
const writestream = fs.createWriteStream('./exapl.txt');

read.on('data',(chu)=>{
    writestream.write(chu);
});

/* lecture 7 pipe-----------------------------------------------------------------
const fs= require('fs')
const ReadStream= fs.createReadStream('./example.txt');
const writestrea= fs.createReadStream('./r.txt');
ReadStream.pipe(writestrea);

//gzip to create a zip file threw pipe
//Gunzip to uncompress a zip file

/*lecture 8 HTTp-------------------------------------------------------------------------*/

const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url=='/')
    {res.write("bhot harami hote hai '*baniye*'");}
    res.write("hello beti");    
    res.end();// response sent
});

server.listen('3000');


