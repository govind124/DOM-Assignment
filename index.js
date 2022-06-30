let element0 = document.getElementById("text");
console.log(element0);


let element1 = document.getElementsByTagName("h1");
console.log(element1[0]);

let element2 = document.getElementsByClassName("box");
console.log(element2[0]);

function changeText(){
    let element3 = document.getElementsByTagName("h1");
    element3[1].innerText = "My name is Pushpendra singh"
    console.log(element3[1]);
}

function changeDirection() {
    let item = document.getElementsByClassName("flex-container");
    item[0].style.flexDirection = "column";
    item[0].style.alignItems = "center";
    console.log(item[0]);   
}

function changeColor(){
    let element3 = document.getElementById("trial");
    element3.style.color = "red";
    element3.id = "heading";
    console.log(element3);
}

function replaceText(){
    let element4 = document.getElementsByTagName("p");
    element4[0].innerText = "Welcome to Prepbytes";
    element4[0].style.color = "black"
    console.log(element4[0]);
   

}

function time(){
    var hours=document.getElementById("hours");
    var minutes=document.getElementById("minutes");
    var seconds=document.getElementById("seconds");
    var ampm=document.getElementById("ampm");


    var time=new Date();

    var hrs=time.getHours();
    var mins=time.getMinutes();
    var secs=time.getSeconds();
    var am_pm ="PM";

    if(hrs==0){
        hrs=12;
    }
    if(hrs>12){
        hrs=hrs-12;
        am_pm="PM"
    }//24 hrs format into 12 hrs format
    
    if(hrs<10){
        hrs="0"+hrs;
    }
    if(mins<10){
        mins="0"+mins;
    }
    if(secs<10){
        secs="0"+secs;
    }

    hours.innerText=hrs;
    minutes.innerText=mins;
    seconds.innerText=secs;
    ampm.innerText=am_pm;

    }
    
    var oneseconds = 1000;
    setInterval(time,oneseconds)
time();
