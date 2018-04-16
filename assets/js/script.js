/*Chatbox*/
var massage =document.querySelector(".massage");

function setLocal(localChat)
{
  var jsonData = JSON.stringify(localChat);

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

function submitChat(text)
{
  var origChat = getLocal();

  var newtext = {
    text:     text,
  };

  origChat.push(newtext)

  setLocal(origChat)
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
  event.preventDefault();
  console.log("submit new chat goes here")

  var usermsg = document.querySelector("#usermsg");

  submitChat(usermsg.value);
  buildList();
  message.style.display = "none";
}

window.onload =function()
{
  buildList();
}

var submitChatBtn = document.querySelector("#submitmsg");

submitChatBtn.addEventListener("click", submitChatEvent);
console.log();
