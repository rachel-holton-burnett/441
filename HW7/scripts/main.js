var myViewFinderArray = new Array();

class ViewFinder
{
    constructor(title,image,description,author,year)
    {
        this.title = title;
        this.image = image;
        this.description = description;
        this.author = author;
        this.year = year;
    }

    toString()
    {
      let str;
      str =  "Title: " + this.title + this.image + this.description;
      return str;

    }

    get theTitle()
    {
        return this.title;
    }
    get theImage()
    {
      return this.image;
    }

    set theImage(image){
      this.image = image;
    }

    get theDescription()
    {
      return this.description;
    }
    get theAuthor()
    {
      return this.author;
    }
    get theYear()
    {
      return this.year;
    }
  }


  function initializeArray()
  {


      var myViewFinder = new ViewFinder("record picture" ,"how do I put a pic here?", "My husband and I taking pictures for our save the dates.");
      var myViewFinder1 = new ViewFinder("jkl", "mno","pqr");
      myViewFinderArray.push(myViewFinder);
      myViewFinderArray.push(myViewFinder1);

  }

  function accessInformation()
  {
      /// random object from the array
      var randomNumber = Math.floor(Math.random());
      //console.log(myViewFinder.toString());
      //console.log(myViewFinder.theTitle);
      document.getElementById("title").innerHTML = myViewFinderArray[0].toString();
      document.getElementById("image").innerHTML = myViewFinderArray[1].toString();

  }
