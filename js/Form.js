class Form {
    constructor(){}
    display()
{
  var title= createElement('h2')
    title.html("car racing game")
    title. position(130, 0)

    // creating the input box and the button
var input= createInput("Name")
var button = createButton('play')
var greeting= createElement('h3')

//defining the positions for the input box and the button
   input.position(400, 160);
    button.position(400, 200);

// for clicking the button
button.mousePressed(function(){
    // the moment we click the button the input box and the button should be hidden.
         input.hide();
         button.hide();
// increase the player count
//update the player count and the playername in the database
var name = input.value();
playerCount+=1;
player.update(name)
player.updateCount(playerCount);

//creating an h3 element and using it to greet the player.
var greeting = createElement('h3');
greeting.html("Hello " + name )
greeting.position(400, 160)
});

}
}
