class Enemy {
    constructor() {
        this.position = {
            x: canvas.width,   // Start at the farthest right of the canvas
            y: Math.random() * (canvas.height - 50),  // Random y position within canvas height
        }
 
        this.velocity = {
            x: -1,  // Speed as the enemies will be going left
            y: 0
        }
 
        this.width = 50 // Size of Enemy character
        this.height = 50
 
        this.image = new Image()
        this.image.src = './img/shyguy.png'  
    }
 
    draw() {
        c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }
 
    update() {
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
    }
 }
 
 const enemies = []
 
 function spawnEnemies() {
    const randomNumber = Math.floor(Math.random() * 1500)  // Range for number of enemies
 
    if (randomNumber < 5) {  // Probability of spawning enemies
        enemies.push(new Enemy())
    }
 }
 