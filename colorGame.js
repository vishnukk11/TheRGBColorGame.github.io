var numSquare = 6;
var colors = generateRandomColors(numSquare); 

var squares= document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay =document.getElementById("colorDisplay");

var h1 = document.querySelector("h1");
var messsageDisplay = document.getElementById("message");
var resetButton = document.querySelector("#reset");

var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var proBtn = document.querySelector("#proBtn");


easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    proBtn.classList.remove("selected");
    numSquare = 3;
    colors = generateRandomColors(numSquare);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messsageDisplay.textContent="";
    for(var i=0; i<squares.length; i++)
    {
        if(i<3)
        {
            squares[i].style.backgroundColor=colors[i];
        }
        else
        {
            squares[i].style.display="none";
        }
    }
    h1.style.background= "steelblue";
})

proBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.remove("selected");
    proBtn.classList.add("selected");
    numSquare = 9;
    colors = generateRandomColors(numSquare);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messsageDisplay.textContent="";
    for(var i=0; i<squares.length; i++)
    {
        
            squares[i].style.backgroundColor=colors[i];
            squares[i].style.display="block";
        
    }
    h1.style.background= "steelblue";
})

hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    proBtn.classList.remove("selected");
    numSquare = 6;
    colors = generateRandomColors(numSquare);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messsageDisplay.textContent="";
    for(var i=0; i<squares.length; i++)
    {
        if(i<6)
        {
            squares[i].style.display="block";
            squares[i].style.backgroundColor=colors[i];
        }
        else
        {
            squares[i].style.display="none";
        }
    }
    h1.style.background= "steelblue";    
})

resetButton.addEventListener("click", function(){
    //generate all new colors
    colors = generateRandomColors(numSquare); 
    // pick a new randow color from array
    pickedColor = pickColor();
    // change the colorDisplay to match pick color
    colorDisplay.textContent=pickedColor;
    messsageDisplay.textContent="";
    this.textContent="New Colors"
    //change color of squares
    for (var i=0; i<numSquare; i++)
    {
        //add initial color to squares
        squares[i].style.backgroundColor=colors[i];
    }
    h1.style.background= "steelblue";
});

colorDisplay.textContent=pickedColor;

for (var i=0; i<squares.length; i++)
{
    //add initial color to squares
    squares[i].style.backgroundColor=colors[i];
    if(i>=numSquare)
    {
        squares[i].style.display="none";
    }

    //add click listener to square
    squares[i].addEventListener("click", function(){
        //grab color of clicked color
        var clickedColor=this.style.backgroundColor;

        //compare color to pickColor
        if(clickedColor === pickedColor)
        {
            messsageDisplay.textContent="CORRECT!";
            
            if (screen.width < 960)
            {
                messsageDisplay.textContent="";
            }

            resetButton.textContent="Play Again!";
            changeColor(clickedColor);
            h1.style.backgroundColor = clickedColor;
        }
        else
        {
            this.style.backgroundColor="#232323";
            messsageDisplay.textContent="Try Again!";

            if (screen.width < 960)
            {
                messsageDisplay.textContent="";
            }
        }
    });
}

function changeColor(color)
{
    //loop through all square
    for(var i=0; i<squares.length; i++)
    {
        //change each  color to match color
        squares[i].style.backgroundColor=color;
        
    }
}

function pickColor()
{
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];

}

function generateRandomColors(num)
{
    var arr = [];

    for(var i=0; i<num; i++)
    {
        arr.push(randomColor());
    }

    return arr;
}

function randomColor()
{
    // generating colors from 0-255
    var r = Math.floor(Math.random()*256); 
    var g = Math.floor(Math.random()*256); 
    var b = Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g + ", " + b + ")"; 
}