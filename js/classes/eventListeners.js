//Makes the ability to double jump or jump higher than normal
let jumpKeyPressed = false

window.addEventListener('keydown',(event)=>{
       
    switch(event.key){
        case 'w' :
            if(!jumpKeyPressed) {
                player.velocity.y = -10;
                jumpKeyPressed = true;
            }
 
            break
        case 'a':
            keys.a.pressed = true
            break
        case 'd':
            keys.d.pressed = true
            break
        case 'e':
            //Fireball will be set to the middle of the characters body
            fireballs.push(
                new Fireball({
                position:{
                    x:player.position.x + player.width / 2 ,
                    y:player.position.y + player.height / 3.75 
                
            },
                velocity: {
                    x:10,
                    y:0
                }
            }))
            break
    }
 })
 window.addEventListener('keyup',(event)=>{
    
    switch(event.key){
        case 'a':
            keys.a.pressed = false
            break
        case 'd':
            keys.d.pressed = false
            break
        case 'e':
            keys.e.pressed = false
            break
        case 'w':
            jumpKeyPressed = false
            break
    }
 })
 