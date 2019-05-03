var imageTags = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10"];
var correct= "images/correct1.png";
var incorrect = "images/tryagain.png";
 
var actualImages = new Array();

function createImageArray()
{
    // create an array of actual images
    var actualImagePath = ["images/elephant.jpg", "images/frog.jpg", "images/giraffe.jpg", "images/koala.jpg", "images/orangutan.jpg","images/ostrich.jpg","images/shrimp.jpg","images/sloth.jpg","images/slug.jpg","images/snail.jpg"];
      // do I need this? var count = [0,1,2,3,4,5,6,7,8,9];

  }


  function start() {

    var myQuestion = document.getElementById("question");

    myQuestion.innerHTML = "<p> This is the only animal that can't jump </p>";

  }

function question1() {

  //var myQuestion = document.getElementById("question");
  var image = document.getElementById('elephantQuestion');

  //myQuestion.innerHTML = "<p> This is the only animal that can't jump </p>";

  if( question  == image.src.match ("elephant"))  {
      image.src = "images/tryagain.png";
   } else {
      image.src = "images/correct1.png";
    }


}
function changeImage2() {
  var image = document.getElementById("myImage2");
  if (image.src.match("frog")) {
    image.src = "images/correct1.png";
 } else {
    image.src = "images/tryagain.png";
  }
}
