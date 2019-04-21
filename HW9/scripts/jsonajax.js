 $(document).ready(function () {

                $("#emojiInfo").load("data/emojis.json", function(responseText){
                    var emojis = JSON.parse(responseText);
                    $("#emojiInfo").html("Jan 20 – Feb 18: " + emojis.aquarius
                    + "<br>Feb 18 – Mar 20:" + emojis.pisces
                    + "<br>Mar 20 – Apr 20:" + emojis.aries
                    + "<br>Apr 20 – May 21:" + emojis.taurus
                    + "<br>May 21 – Jun 21:" + emojis.gemini
                    + "<br>Jun 21 – Jul 23:" + emojis.cancer
                    + "<br>Jul 23 – Aug 23" + emojis.leo
                    + "<br>Aug 23 – Sep 23" + emojis.virgo
                    + "<br>Sep 23 – Oct 23" + emojis.libra
                    + "<br>Oct 23 – Nov 22" + emojis.scorpius
                    + "<br>Nov 22 – Dec 22" + emojis.sagittarius
                    + "<br>Dec 22 – Jan 20" + emojis.capricorn);


              });
     });



      //  $("button").click(function(){
      //    $.getJSON("demo_ajax_json.js", function(result){
      //      $.each(result, function(i, field){
      //        $("div").append(field + " ");
    //     });
      //    });
    //    });


       /* function fadeText()
        {
            $("#bikeInformation").fadeOut("slow").fadeIn("slow");
        }
        */
