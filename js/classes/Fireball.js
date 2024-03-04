class Fireball{
    constructor({position,velocity}){
      //Fireball properties
        this.position = position
        this.velocity = velocity
        
        this.radius = 20
 
        this.image = new Image()
        this.image.src = './img/fireball.png'
 
        
 }
 draw(){
 
   c.drawImage(this.image, this.position.x, this.position.y,this.radius*2,this.radius*2)

 }
 update(){
    this.draw()
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y 
 }
 
 }