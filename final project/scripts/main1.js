var imageTags = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10"];
var correct= "images/correct1.png";
var incorrect = "images/tryagain.png";

var actualImages = new Array();

function createImageArray()
{
    // create an array of actual images
  //var actualImagePath = ["images/elephant.jpg", "images/frog.jpg", "images/giraffe.jpg", "images/koala.jpg", "images/orangutan.jpg","images/ostrich.jpg","images/shrimp.jpg","images/sloth.jpg","images/slug.jpg","images/snail.jpg"];
//var count = [0,1,2,3,4,5,6,7,8,9];

  }


  function start() {

    var myQuestion = document.getElementById("question");

    myQuestion.innerHTML = "<p> This is the only animal that can't jump. </p>";



  }

function question1() {

  //var myQuestion = document.getElementById("question");
  var image = document.getElementById('elephantQuestion');

  //myQuestion.innerHTML = "<p> This is the only animal that can't jump </p>";

  if( question  == image.src.indexOf ("elephant")!= -1)  {
      image.src = "images/correct1.png";
      var myQuestion = document.getElementById("question");

      myQuestion.innerHTML = "<p>  It is possible to hypnotize this animal by placing it on its back and gently stroking its stomach. </p>";

      //question2();
   } else {
      image.src = "images/tryagain.png";

     }
}


function question2() {


  var image = document.getElementById("frogQuestion");
  if (question  == image.src.indexOf("frog")!= -1) {
    image.src = "images/correct1.png";
    var myQuestion = document.getElementById("question");

    myQuestion.innerHTML = "<p>  The fingerprints of this animal are indistinguishable from humans. </p>";

//    question3();
 } else {

    image.src = "images/tryagain.png";

}


}

function question3() {


  var image = document.getElementById("koalaQuestion");
  if (question  == image.src.indexOf('koala')!= -1) {
    image.src = "images/correct1.png";
    var myQuestion = document.getElementById("question");

     myQuestion.innerHTML = "<p> This animal has no vocal chords. </p>";
 } else {
    image.src = "images/tryagain.png";
  }



}
function question4() {


  var image = document.getElementById("giraffeQuestion");
  if (question  == image.src.indexOf("giraffe")!=-1) {
    image.src = "images/correct1.png";
    var myQuestion = document.getElementById("question");

    myQuestion.innerHTML = "<p>  The heart of a this animal is located in its head.</p>";
  //  question5();
 } else {
    image.src = "images/tryagain.png";
  }



}

function question5() {


  var image = document.getElementById("shrimpQuestion");
  if (question  == image.src.indexOf("shrimp")!=-1) {
    image.src = "images/correct1.png";
    var myQuestion = document.getElementById("question");

    myQuestion.innerHTML = "<p>  Around 50 percent of this animal has fractured bones, due to falling out of trees on a regular basis.</p>";

  //  question5();
 } else {
    image.src = "images/tryagain.png";
  }


}

function question6() {


  var image = document.getElementById("orangutanQuestion");
  if (question  == image.src.indexOf("orangutan")!=-1) {
    image.src = "images/correct1.png";
    var myQuestion = document.getElementById("question");

    myQuestion.innerHTML = "<p>  This animal can have four noses.</p>";

  //  question5();
  } else {
    image.src = "images/tryagain.png";
  }
  }
function question7() {


  var image = document.getElementById("slugQuestion");
  if (question  == image.src.indexOf("slug")!=-1) {
    image.src = "images/correct1.png";
    var myQuestion = document.getElementById("question");

    myQuestion.innerHTML = "<p>  This animal can sleep for up to three years.</p>";

  //  question5();
  } else {
    image.src = "images/tryagain.png";
  }
  }

function question8() {


  var image = document.getElementById("snailQuestion");
  if (question  == image.src.indexOf("snail")!=-1) {
    image.src = "images/correct1.png";
    var myQuestion = document.getElementById("question");

    myQuestion.innerHTML = "<p>  This animal takes two weeks to digest its food.</p>";

  //  question5();
 } else {
    image.src = "images/tryagain.png";
  }
}
function question9() {


  var image = document.getElementById("slothQuestion");
  if (question  == image.src.indexOf("sloth")!=-1) {
    image.src = "images/correct1.png";
    var myQuestion = document.getElementById("question");

    myQuestion.innerHTML = "<p>  This animal's eye is bigger than it's brain.</p>";

  //  question5();
 } else {
    image.src = "images/tryagain.png";
  }

}
function question10() {


  var image = document.getElementById("ostrichQuestion");
  if (question  == image.src.indexOf("ostrich")!=-1) {
    image.src = "images/correct1.png";
    var myQuestion = document.getElementById("question");

    myQuestion.innerHTML = "<h1> Great job!</h1>";

  //  question5();
 } else {
    image.src = "images/tryagain.png";
  }


}
