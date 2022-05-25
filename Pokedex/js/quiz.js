const number = document.querySelector("#quiz-nr");
const question = document.querySelector("#question");
const fa1 = document.querySelector("#fa1");
const fa2 = document.querySelector("#fa2");
const fa3 = document.querySelector("#fa3");
const a1 = document.querySelector("#a1");
const a2 = document.querySelector("#a2");
const a3 = document.querySelector("#a3");
var curInd = 1;
var points = 0;

function nextAns(){
    if(curInd == 1){
        number.innerText = 'Question 1: ';
        question.innerText = "What's your best quality?";
        fa1.innerText = 'Confident';
        fa2.innerText = 'Honest';
        fa3.innerText = 'Focused';
        if(a1.checked == true){
            points += 30;
        } else if(a2.checked == true){
            points += 10;
        } else if(a3.checked == true){
            points += 20;
            
        }
    } else if(curInd == 2){
        number.innerText = 'Question 2: ';
        question.innerText = "What's your greates weakness?";
        fa1.innerText = 'Selfish';
        fa2.innerText = 'Stubborn';
        fa3.innerText = 'Perfection-ist';
        if(a1.checked == true){
            points += 10;
        } else if(a2.checked == true){
            points += 20;
        } else if(a3.checked == true){
            points += 30;
        }
    } else if(curInd == 3){
        number.innerText = 'Question 3: ';
        question.innerText = 'Are you strong?';
        fa1.innerText = 'I lift weights every morning!';
        fa2.innerText = 'Sometimes';
        fa3.innerText = 'I am complete weakling!';
        if(a1.checked == true){
            points += 30;
        } else if(a2.checked == true){
            points += 20;
        } else if(a3.checked == true){
            points += 10;
        }
    } else if(curInd == 4){
        number.innerText = 'Question 4: ';
        question.innerText = 'Do you like fire types?';
        fa1.innerText = 'Yes!';
        fa2.innerText = 'No, I prefer water types.';
        fa3.innerText = 'No, I prefer grass types.';
        if(a1.checked == true){
            points += 30;
        } else if(a2.checked == true){
            points += 20;
        } else if(a3.checked == true){
            points += 10;
        }
    } else if(curInd == 5){
        number.innerText = 'Question 5: ';
        question.innerText = 'What do you prefer?';
        fa1.innerText = 'Attacking really well.';
        fa2.innerText = 'Defending really well.';
        fa3.innerText = 'Sleeping!';
        if(a1.checked == true){
            points += 20;
        } else if(a2.checked == true){
            points += 10;
        } else if(a3.checked == true){
            points += 30;
        }
    } else{
        whatPokemon(points);
    }
    a1.checked = false;
    a2.checked = false;
    a3.checked = false;
    curInd++;
    console.log(points);
};

function whatPokemon(points){
    if(points <= 70){
        console.log("1")
    } else if(points > 70 && points <= 90){
        console.log("2")
    } else if(points > 90 && points <= 110){
        console.log("3")
    } else if(points > 100 && points <= 130){
        console.log("4")
    } else if(points > 130){
        console.log("5")
    }
}