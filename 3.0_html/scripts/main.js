// let myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

// var myVariable = "李磊";

// let iceCream = "chocolate";
// if (iceCream === "chocolate")
// {
//     alert("我最喜欢巧克力冰激凌了！");
// }
// else
// {
//     alert("但是巧克力冰激凌才是我的最爱啊~~~~~~");
// }

// function multiply(num1,num2)
// {
//     let result = num1*num2;
//     return result;
// }

// alert(multiply(2,4));

// document.querySelector("img").addEventListener("click",function(){
//     alert("");
// });

// document.querySelector("html").addEventListener("click",() =>{
//     alert("qqqq");
// });


let myImage = document.querySelector("img");

myImage.onclick = function()
{
    let mySrc = myImage.getAttribute("src");
    if(mySrc === "images/pic.jpg")
    {
        myImage.setAttribute("src","images/star.jpg");
    }
    else
    {
        myImage.setAttribute("src","images/pic.jpg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName()
{
    let myName = prompt("请输入你的名字。");
    localStorage.setItem("name",myName);
    if(!localStorage.getItem("name"))
    {
        setUserName();
    }
    else
    {
        let storedName = localStorage.getItem("name");
        myHeading.textContent = "Mozilla sssL" + storedName;
    }
}

myButton.onclick = function()
{
    setUserName();
};

