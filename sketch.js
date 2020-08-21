
var heading
var play
var sky, covid, GK
var input, sQuestion, cQuestion, gQuestion , ansBox
var star, spaceAns, virus, virusAns, generel, generelAns
var ask1, next
var choice, y = 250
var person, tub, checkbox

function setup() {
  input = createInput("")
  input.position(20,50)
  input.attribute('placeholder','name');
  input.hide();
  heading = createElement('h1');
  heading.position(600,50);
  heading.html("game")
  heading.hide();
  ask1 = createElement("h2")
  ask1.position(340,10)
  ansBox = createInput("")
  ansBox.attribute("placeholder","type here")
  ansBox.position(200,300)
  ansBox.hide();
  next = createButton("NEXT")
  next.position(700,500)
  next.hide();
  next.mousePressed(answer)
  play = createButton("PLAY")
  play.position(600,300)
  play.hide();

  checkbox = createCheckbox('label', false);
  checkbox.changed(myCheckedEvent);

  checkbox = createCheckbox('label', false);
  checkbox.changed(myCheckedEvent);
  checkbox.position(200,500)
  checkbox.id('check')

  person = createImg("Man.png")
  person.position(1200,250)
  person.id('black')
  person.hide();
  
  tub = createImg("Pic.png")
  tub.position(950,400)
  tub.id('water')
  tub.hide();

  sky = createImg(
    "space.jpg"
  )
  sky.position(580,220);
  sky.id('blue')
 
  covid = createImg(
    "corona.jpg"
  )
  covid.position(580,420);
  covid.id('virus')

  GK = createImg(
    "general.jpg"
  )
  GK.position(580,20);
  GK.id('white')

  document.getElementById('blue').onclick = function(){
    sky.hide();
    covid.hide();
    GK.hide();
    ansBox.show();
    next.show();
    tub.show();
    person.show();
    choice = 1
    var x = document.getElementById("check")
    x.checked = true
  

    spaceQuestion();
  }

  document.getElementById('virus').onclick = function(){
    sky.hide();
    covid.hide();
    GK.hide();
    ansBox.show();
    next.show();
    person.show();
    tub.show();
    choice = 2

    covidQuestion();
  }

  document.getElementById('white').onclick = function(){
    sky.hide();
    covid.hide();
    GK.hide();
    ansBox.show();
    next.show();
    person.show();
    tub.show();
    choice = 3

    gkQuestion();
  }

}
function myCheckedEvent() {
  if (this.checked()) {
    console.log('Checking!');
  } else {
    console.log('Unchecking!');
  }
}

function press(){
  play.hide();
  
}

function spaceQuestion(){
   sQuestion = Math.round(random(0,star.length-1))
  ask1.html("")
  ask1.html(star[sQuestion])
  
  

}

function covidQuestion(){
  cQuestion = Math.round(random(0,virus.length-1))
  ask1.html("")
  ask1.html(virus[cQuestion])
}

function gkQuestion(){
  gQuestion = Math.round(random(0,generel.length-1))
  ask1.html("")
  ask1.html(generel[gQuestion])
}

function answer(){
 if(ansBox.value()==spaceAns[sQuestion]||ansBox.value()==virusAns[cQuestion]||ansBox.value()==generelAns[gQuestion]){
   console.log("message")
 } else {y = y+50
  person.position(1200,y)}
 if(choice===1){
   spaceQuestion();
 }
 if(choice===2){
   covidQuestion();
 }
 if(choice===3){
   gkQuestion();
 }
 


}