
1.//Write the code to access element which is having id as "text"
let element0 = document.getElementById("text");
console.log(element0);


2.//Write the code to access element which is having tag as "h1"
let element1 = document.getElementsByTagName("h1");
console.log(element1[0]);

3.//Write the code to access element which is having class as "box"
let element2 = document.getElementsByClassName("box");
console.log(element2[0]);

4.//Change the heading from ""Hello"" to ""Hello World"" using DOM functions"
function changeText(){
    let element3 = document.getElementsByTagName("h1");
    element3[1].innerText = "My name is Pushpendra singh"
    console.log(element3[1]);

}
5.//What’s the difference between window vs document?
//------------------Document----------------------------------------------------------------------------------------------
//Document Object: The document object represent a web page that is loaded in the browser. 
// By accessing the document object, we can access the element in the HTML page. 
// With the help of document objects, we can add dynamic content to our web page. 
// The document object can be accessed with a window.document or just document.

// It represents any HTML document or web page that is loaded in the browser.
// It is loaded inside the window.
// It is the object of window property.
// All the tags, elements with attributes in HTML are part of the document.
// We can access the document from a window using the window. document
// The document is part of BOM (browser object model) and dom (Document object model)
// Properties of document objects such as title, body, cookies, etc can also be accessed by a window like this window. document.title
//--------------------Window----------------------------------------------------------------------------------------------
//Window Object: The window object is the topmost object of the DOM hierarchy. 
// It represents a browser window or frame that displays the contents of the webpage. 
// Whenever a window appears on the screen to display the contents of the document, the window object is created. 

// It represents a browser window or frame that displays the contents of the webpage.
// It is the very first object that is loaded in the browser.
// It is the object of the browser.
// Global objects, functions, and variables of JavaScript are members of the window object.
// We can access the window from the window only. i.e. window.window
// The window is part of BOM, not DOM.
// Properties of the window object cannot be accessed by the document object.
//------------------------------------------------------------------------------------------------------------------

6.//Create three cards on HTML page and arrange them using flex property in row or horizontal direction and also create button at the bottom named "Change Flex direction". When user clicks on this button, the cards arrangement should be changed to vertical direction.
function changeDirection() {
    let item = document.getElementsByClassName("flex-container");
    item[0].style.flexDirection = "column";
    item[0].style.alignItems = "center";
    console.log(item[0]);   
}
7.//<h1>Hello</h1>
//Add one style attribute and give text color as red and id attribute and give the id value as ""heading"" in the above given h1 tag using DOM functions"
function changeColor(){
    let element4 = document.getElementById("trial");
    element4.style.color = "red";
    element4.id = "heading";
    console.log(element4);
}
8.//Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"
function replaceText(){
    let element5 = document.getElementsByTagName("p");
    element5[0].innerText = "Welcome to Prepbytes";
    element5[0].style.color = "black"
    console.log(element5[0]);
   

}
9.//Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second
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


  
10.//Create a select drop down for selecting Year 20-21, 21-22 etc. Print the item text selected
  function yearChange() {
    let selectedYear = document.getElementById("yearSelect").value;
    document.getElementById("year").innerText = selectedYear;
    
  }
  
11.  //"Create a form having name ,email, phone no. , birth year 
//Add validations - phone no. should start with 91 , it should be 10 digits
//email should be domain prepbytes.com

  function numberCheck() {
    let a = document.getElementById("phoneno").value;
    if (!a.startsWith("91")) {
      let b = document.getElementById("startcheck");
      b.style.display = "inline";
    } else {
      let b = document.getElementById("startcheck");
      b.style.display = "none";
    }
    if (a.length != 10) {
      let b = document.getElementById("digitcheck");
      b.style.display = "inline";
    } else {
      let b = document.getElementById("digitcheck");
      b.style.display = "none";
    }
  }
  //birth year should be > 95"
  function bYearCheck() {
    let a = document.getElementById("byear").value;
    if (a < 1995) {
      let b = document.getElementById("byearcheck");
      b.style.display = "inline";
    } else {
      let b = document.getElementById("byearcheck");
      b.style.display = "none";
    }
  }


