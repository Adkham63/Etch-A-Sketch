let color = "black"; //Global Valuable//
let click = false;
document.addEventListener("DOMContentLoaded", function(){
      createBoard(16);
      document.querySelector("body").addEventListener("click", function(e){
        if(e.target.tagName != "BUTTON"){
          click = !click;
          let draw = document.querySelector("#draw");
          if(click){
            draw.innerHTML = "You may allow to draw";
          }else{
            draw.innerHTML = "You stopped drawing";
          }
        }
      });

      let btn_popup = document.querySelector("#popup");
      btn_popup.addEventListener("click", function(){
        let size = getSize();
        createBoard(size);
      })
    });

    function createBoard(size){
      let board = document.querySelector(".board");

      board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
      board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

      let numDivs = size * size;

      for(let i=0; i < numDivs; i++){
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv);
        board.appendChild(div);  
      }
    }


    function getSize(){
        message = document.querySelector("#message");
        let input = prompt("Type a size of board:");

        if(input == ""){
            message.innerHTML = "Please provide a number!";
        }else if(input < 0 || input > 100){
            message.innerHTML = "Provide a number between 1 to 100";
        }else{
            message.innerHTML = "Now you can play";
            return input;
        }
    }

    function colorDiv(){
      if(click){
        if(color == "random"){
          this.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`;
        }else{
          this.style.backgroundColor = "black";
        }
      }
          
    };

    function setColor(colorChoice){
      color = colorChoice;
    };

    function resetBoard(){
      let divs = document.querySelectorAll("div");
      divs.forEach((div)=>div.style.backgroundColor = "white");
    };
