  
class Player {
    constructor(){}
  
    getCount(){//to get player count from database
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",function(data){
        playerCount = data.val();
      })
    }
  
    updateCount(count){//to update player count in the data base
      database.ref('/').update({
        playerCount: count
      });
    }
  
    update(name){//to update player name in the data base
      var playerIndex = "player" + playerCount;
      database.ref(playerIndex).set({
        name:name
      });
    }
  }