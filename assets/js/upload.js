

function setLocal(localNotes)
{
  var jsonData = JSON.stringify(localNotes);

  localStorage.setItem("notes", jsonData);
}

function getLocal()
{
  var notes = localStorage.getItem("notes");

  if (notes == null)
    {
      return [];
    }
    else
    {
      return JSON.parse(notes);
    }
}

function newSub(){
  var subject = document.querySelector("sub");
  var uploadFiles = document.querySelector("uploadFiles");
  var addTitle = document.querySelector("title");
  var addDuration = document.querySelector("dur");
  var addYear = document.querySelector("year");
  var addCom = document.querySelector("com");

  if (sub && uploadfiles && title && dur && year && com){
    var uploadArray = {
      subject : sub,
      uploadFiles : uploadFiles,
      addTitle : title,
      addDuration : dur,
      addYear : year,
      addCom : com
    };
console.log(uploadArray);
  }
}
