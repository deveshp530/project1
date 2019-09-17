let score = 0
let round = 1
let allCircles = document.getElementsByClassName('circleButton')
let simon = [1,2,3,4]
let user = []
let startButton = document.getElementById('start')
let hasStarted = true
let circleContainer = document.querySelector('.circles')

// amke 4 functions that flash the colors
// randomizer, the brains of simon, give you an order that has to be followed
// randomizer has to call the flash(s) functions in that order, 
    //depending on the current round youre on make array longer 
    // this makes it harder for the user to repeat
//flashes should have set time out in each one
// a checker, that user is repeating that order(hint array comparison)
// score counter for every round
// restart button? clears the simon array? 
//


//sets random interval based on simon array 
const interval = (simon) =>{
    
    //let colors = setInterval(function(){
       // simon.push(Math.floor(Math.random()*4) + 1)   
    //    for(let i = 0; i < simon.length; i++){
    //     //let randomColor = Math.floor(Math.random() * allCircles.length)
    //        allCircles[simon[i]].style.opacity = .4
    //        setTimeout(()=>{
    //            allCircles[simon[i]].style.opacity = 1
    //        },500)
    //    }   

    let i = 0
    // all circles = 1,2,3,4
    if(i <= simon.length){
    setTimeout(() => {
        allCircles[simon[i]].style.opacity = .4
        console.log('regular',i);

        console.log('simon' ,simon[i]);

        setTimeout(()=>{
            allCircles[simon[i]].style.opacity = 1
        },1000)

        console.log('regular',i);
        i++
    },1000)
    

    }

}

//starts the game. 
const startGame = () =>{
    // if(hasStarted){
    //     circleContainer.addEventListener('click',function(event){
    // event.target.style.opacity = .4

    // setTimeout(() =>{
    //     event.target.style.opacity = 1
    // },500)
// })
    // }
    interval(simon)
    
}



startButton.addEventListener('click',startGame)

