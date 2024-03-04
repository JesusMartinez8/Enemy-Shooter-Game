// Get references to the start screen and game canvas
const startScreen = document.getElementById('startScreen')
const gameCanvas = document.getElementById('gameCanvas')
const gameOverScreen = document.getElementById('gameOverScreen')

// Hide the game canvas initially
gameCanvas.style.display = 'none'

// Function to start the game when the start button is clicked
function startGame() {
    // Hide the start screen
    startScreen.style.display = 'none'
    
    // Display the game canvas
    gameCanvas.style.display = 'block'

    // Start the game logic
    animate();

    window.addEventListener('resize', adjustCanvasSize)
}

function handleGameOver(){
    gameOverScreen.style.display = 'flex'
}
//Retry Screen Overlay
function retryGame(){
    gameOverScreen.style.display = 'none'
//Resets the stats of the character
    score = 0
    player.health = 100
    gameOver = false

    startGame()
}
function initializeCanvas() {
    adjustCanvasSize() // Set initial canvas size
    window.addEventListener('resize', adjustCanvasSize) // Add resize event listener
}

 function updateCanvasSize(){
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
   }


const canvas = document.querySelector('canvas')
   const c = canvas.getContext('2d')
  
   window.addEventListener('resize', () =>{
    updateCanvasSize()
   })

   updateCanvasSize();
   
   let score = 0


   class Background{
       constructor({position}){
           this.position = position
           this.image = new Image()
           this.image.src = './img/lava.png '
       }
       draw(){
       c.drawImage(this.image,0,0, canvas.width, canvas.height)
       }
   }

   const background1 =  new Background({
       position: {
           x: 0,
           y: 0,
       }
   })
//Array to store the fireballs, in animate loop they will be handled
   
   const fireballs = []

   const player = new Player()
//Game controls
   const keys = {
       w:{
           pressed:false
       },
       a: {
           pressed: false
       },
       d: {
           pressed: false,
       },
       e:{
           pressed:false
       }
   }
   
let gameOver = false

function checkHealth(){
    if(player.health <= 0){
        gameOver = true
    }
}

   function animate(){

    if(!gameOver){
       window.requestAnimationFrame(animate)

       background1.draw()

       player.velocity.x = 0
       if (keys.d.pressed) player.velocity.x = 5
       else if (keys.a.pressed) player.velocity.x = -5
       
       player.draw()
       player.update()
       fireballs.forEach((fireball, index ) =>{
           if(fireball.position.y + fireball.radius <= 0){
               setTimeout(() => {
               fireballs.splice(index,1 )}, 0) 
           }else {
           fireball.update()}
       })
           

       //Collision detection for the fireball and enemy
       fireballs.forEach((fireball, j) => {
           enemies.forEach((enemy,i)=>{
               const fireballBottom = fireball.position.y + fireball.radius
               const enemyTop = enemy.position.y
               const fireballRight = fireball.position.x + fireball.radius
               const enemyLeft = enemy.position.x
               const fireballLeft = fireball.position.x - fireball.radius
               const enemyRight = enemy.position.x + enemy.width
               const fireballTop = fireball.position.y - fireball.radius
               const enemyBottom = enemy.position.y + enemy.height
       
               if (
                   fireballBottom >= enemyTop &&
                   fireballRight >= enemyLeft &&
                   fireballLeft <= enemyRight &&
                   fireballTop <= enemyBottom
                   
               ) {//Splice enemies and fireballs in order to prevent from staying in array
                   setTimeout(() => {
                       score += 100
                       enemies.splice(i, 1)
                       fireballs.splice(j, 1)
                   
           }, 0 )

               
       }
   })
   })
           
       enemies.forEach((enemy, index) => {
           if (enemy.position.x + enemy.width <= 0) {
               // Remove enemies that go off the left side of the canvas
               enemies.splice(index, 1)

               player.health -= 10

               player.health = Math.max(player.health,0)

           } else {
               enemy.update()
           }
       })

    //Score at the top left
   c.fillStyle = 'white'
   c.font = '24px Arial'
   c.fillText(`Score: ${score}`, 20, 40)

   spawnEnemies()

   checkHealth()

    }if (gameOver){
        handleGameOver()
    }
      
   }
   animate()

   window.onload = initializeCanvas