class Form {

  constructor() {
    this.character = createButton("Characters");
    //this.input = createInput("");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.instruction = createElement('h2')
    this.title = createElement('h1');
  }
  hide(){
    this.greeting.hide();
    this.character.hide();
    this.button1.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Escape Town");
    this.title.position(displayWidth/2 + 100, displayHeight/2 -300);

    this.title.style('font-size', '70px')
    this.title.style('color', 'blue');
    this.title.style('font' , 'Alegrian')

    this.character.position(displayWidth/2 + 100 , displayHeight/2 - 80);
    this.character.style('width' , '210px')
    this.character.style('height', '30px')
    this.character.style('background' , 'lavender')

    this.button.position(displayWidth/2 + 100, displayHeight/2);
    this.button.style('width' , '100px')
    this.button.style('height' , '30px')
  
    this.button.mousePressed(()=>{
      this.character.hide();
      this.button.hide();
     // player.name = this.input.value();
      //playerCount+=1;
      //player.index = playerCount;
      //player.update();
      //player.updateCount(playerCount);
      this.instruction.html("Click on the play button to enter the game")
      this.instruction.position(displayWidth/2 - 100 , displayHeight/2)
      this.instruction.style('font-size' , '100px')
      this.instruction.style('color' , 'green')
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

  }
}
