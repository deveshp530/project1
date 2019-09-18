
let red = document.getElementById('circle1')
let green = document.getElementById('circle2')
let blue = document.getElementById('circle3')
let purple= document.getElementById('circle4')
let circleContainer = document.querySelector('.circles')
let simon = []
let numberOfFlashes = 6
let score = 0
let round = 1

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


// randomizer, the brains of simon, give you an order that has to be followed
const simonRandomizer =() => {
    for(let i = 0; i < numberOfFlashes; i++){
        simon.push(Math.floor(Math.random()*4) + 1)
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
        
    console.log(simon);

    // randomizer has to call the flash(s) functions in that order, 
    //depending on the current round youre on make array longer 
    // this makes it harder for the user to repeat
    }
}
 simonRandomizer()   

// a checker, that user is repeating that order(hint array comparison)
const startGame = () =>{
    circleContainer.addEventListener('click',function(event){
        event.target.style.opacity = .4
        setTimeout(() =>{
            event.target.style.opacity = 1
        },500)

    })
    


}
// score counter for every round
// restart button? clears the simon array? 
//

startGame()