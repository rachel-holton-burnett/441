<script>
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var x = 50;
    var y = 50;
    var square2;


    ctx.fillStyle = "#0000FF";
    drawSquare1();
    drawSquare2();

    setInterval(update, 1000);


    function update()
    {

        ctx.clearRect(0,0,800,600);
        drawSquare1();
        drawSquare2();

    }

 function drawSquare1()
    {
     ctx.fillRect(x, y, 20, 20);
        //x=100
      x=x+10
      y=y+10
   ctx.fillStyle = "#0000FF";

    }



    function drawSquare2()
          {
             ctx.fillRect(x, y, 20, 20);
            ctx.fillStyle="red";




     }

function getKey(event)
{
var char = event.which || event.keyCode;
var actualLetter = String.fromCharCode(char);
if(actualLetter == "w")
{
  moveUp();
}
drawSquare2();

}

function moveUp()
{
y=-10;
}




</script>
