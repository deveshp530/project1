
let red = document.getElementById('circle1')
let green = document.getElementById('circle2')
let blue = document.getElementById('circle3')
let purple= document.getElementById('circle4')
let circleContainer = document.querySelector('.circles')
let allCircles = document.getElementsByClassName('circleButton')
let jsScore = document.getElementById('js-score')
let jsRound = document.getElementById('js-round')
let startButton = document.getElementById('start')
let simon = []
let userInput = []
let numberOfFlashes = 1
let score = 0
let round = 1
let hasStarted = true

// amke 4 functions that flash the colors
const flashRed = () => {
    red.style.opacity = .4
    // setTimeout(()=>{
    //     red.style.opacity = .4
    // },1000)
    setTimeout(() =>{
        red.style.opacity = 1
    },500) 
}

const flashGreen = () => {
    green.style.opacity = .4
    // setTimeout(()=>{
    //     green.style.opacity = .4
    // },1000)
    setTimeout(() =>{
        green.style.opacity = 1
    },500)   
}

const flashBlue = () => {
    blue.style.opacity = .4
    
    setTimeout(() =>{
        blue.style.opacity = 1
    },500)    
}

const flashPurple = () => {
    purple.style.opacity = .4
    // setTimeout(()=>{
    //     purple.style.opacity = .4
    // },4000)
    setTimeout(() =>{
        purple.style.opacity = 1
    },500)
}


// randomizer, the brains of simon, give you an order that has to be followed    // randomizer has to call the flash(s) functions in that order, 
// randomizer has to call the flash(s) functions in that order, 

const simonRandomizer =() => {
    simon.push(Math.floor(Math.random()*4) + 1)
    for(let i = 0; i < numberOfFlashes; i++){
        setTimeout(function(){
            if(simon[i] == 1){
                flashRed()
            }else if(simon[i] == 2){
                flashGreen()
            }else if(simon[i] == 3){
                flashBlue()
            }else if(simon[i] == 4){
                flashPurple()
            }
        },1000 * i )
        
    

    //depending on the current round youre on make array longer 
    // this makes it harder for the user to repeat
    }
    // console.log(simon);
}

// a checker, that user is repeating that order(hint array comparison)
const startGame = () =>{
    if(hasStarted){
        simonRandomizer()
        for(let i = 0; i < allCircles.length; i++){
            allCircles[i].addEventListener('click',function(event){
            event.target.style.opacity = .4
            setTimeout(() =>{
                event.target.style.opacity = 1
            },500)           
            userInput.push(i + 1)
            console.log(userInput);        
        })
        }
        setTimeout(userSequence,2500 * numberOfFlashes)


    }
}

//start game
// push number in simon Array
// flash color
// get userinput
// if user matches simon Array, update score and round. 
//     push another number in simon array and start process again
const userSequence = () =>{
    for(let i = 0; i < userInput.length; i++){
        if(userInput[i] === simon[i]){
            alert('nice')
            userInput = []
            score++
            jsScore.innerText = 'Score: ' + score
            round++
            jsRound.innerText = 'Round: ' + round
            numberOfFlashes++
            //simon.push(Math.floor(Math.random()*4) + 1)
            console.log(simon);
            startGame()
            break;
        }
         if(userInput[i] !== simon[i]){
            alert('you lost')
            userInput = []
            simon =[]
            score = 0
            jsScore.innerText = 'Score: ' + score
            round = 0
            jsRound.innerText = 'Round: ' + round
            numberOfFlashes = 1
            break;
        }
    }
}
    
    


// score counter for every round
// restart button? clears the simon array? 
//

startButton.addEventListener('click',startGame)
