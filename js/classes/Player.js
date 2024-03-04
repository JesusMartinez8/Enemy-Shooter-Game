
class Player {
    constructor() {
        //Position is set to middle of the screen 
        this.position = {
            x:600,
            y:600
        }
 
        this.velocity = {
            x:0,
            y:0,
        }
        //Size and properties of character
 
        this.width = 100
        this.height = 100
        this.sides = {
        bottom: this.position.y + this.height
        }
        this.gravity = .20
        this.image = new Image()
        this.image.src = './img/newmegaman.png'
        
 
        this.health = 100
        this.maxHealth = 100
        this.healthBarWidth = 200
        this.healthBarHeight = 30
 
        
        
    }
    
    
 
    draw(){
    
        c.drawImage(this.image, this.position.x, this.position.y,this.height,this.width)
        const healthBarX = canvas.width / 2 - this.healthBarWidth / 2;
        c.fillStyle = 'red';
        c.fillRect(healthBarX, 0, this.healthBarWidth, this.healthBarHeight)
 
        // Draw (representing current health)
        const currentHealthWidth = (this.health / this.maxHealth) * this.healthBarWidth;
        c.fillStyle = 'green';
        c.fillRect(healthBarX, 0, currentHealthWidth, this.healthBarHeight)
    }
    update(){
        //Update character with the movement properties
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        this.sides.bottom = this.position.y + this.height

 
       if(this.sides.bottom + this.velocity.y < canvas.height){
        this.velocity.y += this.gravity
      
       }
       else this.velocity.y =0 
    
    }
 }