let button1 = document.getElementById('Start');
let button2 = document.getElementById('stop');
let button3 = document.getElementById('reset');
let button4 = document.getElementById('record');

let Output = document.getElementById('output');

button1.addEventListener('click',flex);
button2.addEventListener('click',stop);
button3.addEventListener('click',reset);
button4.addEventListener('click',record);

//this will run the move function continuously
let int;
function flex(){
    int = setInterval(move,10);
}


let index = 0;
let sec = 0;
let min = 0;


//this will start the count
function move(){
    index++;

    

    if (index>99) {
        index=0;
        sec++;
    }
    if (sec>59) {
        sec=0;
        min++;
    }
    console.log();
    let out = `${min}:${sec}:${index}`;
    document.getElementById('root').innerHTML=out;

}

/// to reset the number
function reset(){
    index=0;
    sec=0;
    min=0;
    let out = `${min}:${sec}:${index}`;
    document.getElementById('root').innerHTML=out;
    clearInterval(int)
    Output.innerHTML='';
}

//to stop the functionality 
function stop(){
    clearInterval(int);
}



function record(){
    
    let data = Output.innerHTML;
    Output.innerHTML=`<div id="output2">${min}:${sec}:${index}</div>`;
    Output.innerHTML+=data;
}