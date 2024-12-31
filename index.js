// console.log(document.querySelector('.message'));

// document.querySelector('.message').textContent="hello bhai...";

// let guess=document.querySelector('.guess');
// //guess.value=100;

// document.querySelector('.check').addEventListener('click',()=>{console.log(guess.value)});
let secretNumber=Math.trunc(Math.random()*20+1);
let highScore=0;
let score=20;


function message(msg)
{
    
    document.querySelector('.message').innerText=msg
}

document.querySelector('.check').addEventListener('click',()=>{
    let guess=Number(document.querySelector('.guess').value);
    
    if(!guess)
    {
        console.log(guess)
        message("⛔ No Number");
    }
    else if(score>1){
        if(guess===secretNumber)
        {
            if(score>highScore)
                document.querySelector('.highscore').textContent=score;
            message("You win the game");
            document.body.style.background="green"
        }
        else if(guess>secretNumber)
        {
            message("try small number");
            score--;
            document.querySelector('.score').textContent=score;
        }
        else{
            score--;
            document.querySelector('.score').textContent=score;
            message("try large number");
        }
        

    }
    else{
        message("you lost the game");
        document.body.style.background="red"
    }

})

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
  
    // document.querySelector('.message').textContent = 'Start guessing...';
    message('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
  
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });

