/*Chatbox*/
var modal =document.querySelector(".massage")

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
function buildList()
{
  var chatList = getLocal();
  var ulElm = document.querySelector("ul");

  ulElm.innerhtml ="";

  for(var i = 0; i < chatList.length; i++)
  {
  var liElm = document.createElement("li");
  var pElm = document.createElement("p");

  pElm.innerHTML = chatList[i].text;

  liElm.appendChild(pElm);

  ulElm.appendChild(liElm);
  }
}

function submitChatEvent(event)
{
  console.log("submit new chat goes here")

  var chatText = document.querySelector("chatText");

  submitChat(chatText.value);
  buildList();
  modal.style.display = "none";

}

window.onload =function()
{
  buildList();
}

var submitChatBtn = document.querySelector("#addNote");

submitChatBtn.addEventListener("click", submitChatEvent)
