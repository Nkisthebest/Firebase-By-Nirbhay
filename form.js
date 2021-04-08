class Form{
    constructor(){
        this.input= createInput("Enter Your Name");
        this.button= createButton("Play");
        this.greeting= createElement('h3');
    }
    display(){
        var title= createElement('h2');
        title.html("Multiplayer Car Race Game");
        title.position(490,0);
        this.input.position(490,160);
        this.button.position(490,200);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name=this.input.value()
            playerCount+=1
            player.updateCount(playerCount);
            this.greeting.html("Hello "+player.name+"!");
            this.greeting.position(490,160);
        });
    }
}