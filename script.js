let ul = document.querySelector('ul');
let nextButton = document.querySelector('#nextButton');
let questionBox = document.querySelector('.question');
let scoreBoard = document.querySelector('#myScores');
let options = document.querySelector("ul").children;
let firstOption = document.querySelector('#option1');
let secondOption = document.querySelector('#option2');
let thirdOption = document.querySelector('#option3');
let fourthOption = document.querySelector('#option4');


let myApp = {
                questions: [
                {q: "In what season did Roman Abramovich take over Chelsea?", 
                options: ["2001/2002", "2002/2003", "2003/2004", "2004/2005"],  
                answer: 3
             },
                {q: "Which player holds the record for most goals in consecutive Premier League games?", 
                options: ["Jamie Vardy", "C.Ronaldo", "Didier Drogba", "Mohammed Salah"],  
                answer: 1
             },
                {q: "For what club did Paulo Di Canio play when he pushed referee Paul Alcock?", 
                options: ["Newcastle United", "Liverpool", "Sheffield United", "Sheffield Wednesday"],  
                answer: 4
             },
                {q: "How many times has the Premier League been renamed?", 
                options: ["two", "five", "four", "seven"],  
                answer: 3
             },
                {q: "Against which team did Wayne Rooney scored his first Premier League goals?", 
                options: ["Liverpool", "Arsenal", "Norwich city", "Blackburn Rovers"],  
                answer: 2
             },
            ],
            index:0,
            load:function(){
                   if(this.index<=this.questions.length-1){
                    questionBox.innerHTML=this.index+1+". "+this.questions[this.index].q;      
                    firstOption.innerHTML=this.questions[this.index].options[0];
                    secondOption.innerHTML=this.questions[this.index].options[1];
                    thirdOption.innerHTML=this.questions[this.index].options[2];
                    fourthOption.innerHTML=this.questions[this.index].options[3];
                    this.scoreBoard();
                    }
                    else{

                    questionBox.innerHTML="Quiz Over...... Please refresh page to play again!!!"      
                    firstOption.style.display="none";
                    secondOption.style.display="none";
                    thirdOption.style.display="none";
                    fourthOption.style.display="none";
                   nextButton.style.display="none";
                    }
            },
             next:function(){
                this.index++;
                this.load();
             },
             check:function(element){

                var id=element.id.split('');

                 if(id[id.length-1]==this.questions[this.index].answer){
                    this.score++;
                    element.classList.add("correct");
                    this.scoreBoard();
                 }
                 else{
                    element.classList.add("wrong");

                    if(this.questions[this.index].answer == 1) {
                        firstOption.classList.add("correct")
                    } else if(this.questions[this.index].answer == 2) {
                        secondOption.classList.add("correct")
                    } else if(this.questions[this.index].answer == 3) {
                        thirdOption.classList.add("correct")
                    } else if(this.questions[this.index].answer == 4) {
                        fourthOption.classList.add("correct")
                    }
                   
                 }
             },
             notClickAble:function(){
                for(let i=0;i<options.length;i++){
                    options[i].style.pointerEvents="none";
                      
                }
            },
            clickAble:function(){
                for(let i=0;i<options.length;i++){
                        options[i].style.pointerEvents="auto";
                        options[i].className=''

                }
         },
            score:0,
            scoreBoard:function(){
                scoreBoard.innerHTML=this.score+"/"+this.questions.length;
            }
        }
        window.onload=myApp.load();

       function button(element){
                myApp.check(element);
                myApp.notClickAble();
       }

     function  next(){
          myApp.next();
          myApp.clickAble();
        }