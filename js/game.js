class Game {
    constructor(){}
    
    getState(){//TO READ THE GAME STATE FROM THE DATA base
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
     
    }
  
    update(state){//to update game state in the data base
      database.ref('/').update({
        gameState: state
      });
    }
  
    start(){
      if(gameState === 0){
        player = new Player();
        player.getCount();
        form = new Form()
        form.display();
      }
    }
  }