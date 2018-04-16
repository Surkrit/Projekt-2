/*Chatbox*/
var modal =document.querySelector(".chatbox")

function setLocal(localNotes)
{
  var jsonData = JSON.stringify(localNotes);

  localStorage.setItem("chat", jsonData);
}
function getLocal()
{
  var chat = localStorage.getItem("chat");

  if(chat == null)
  {
    return [];
  }
  else
  {
    return JSON.parse(chat);
  }
}

function submitNote(text)
{
  var origchat =getLocal();

  var newtext = {
    text:     text,
  };

  origNotes.push(newtext)

  setLocal(origchat)
}
