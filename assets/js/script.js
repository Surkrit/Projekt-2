/*Chatbox*/
var modal =document.querySelector(".massage")

function setLocal(localNotes)
{
  var jsonData = JSON.stringify(localNotes);

  localStorage.setItem("chat", jsonData);
}

var confirm = [
  {
    username: "Denny123",
    password: "123456"
  }
]


function validate(){
  var username = document.querySelector("#loginuser").value;
  var password = document.querySelector("#loginpassword").value;

  for(i = 0; i < confirm.length; i++) {
    if (username == confirm[i].username && password == confirm[i].password) {
      alert(username + " Correct")
      window.location.href = "www.index.html";
      return
    }
  }
  alert("Incorrect username or password")
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
  var origChat =getLocal();

  var newtext = {
    text:     text,
  };

  origChat.push(newtext)

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

  var usermsg = document.querySelector("usermsg");

  submitChat(usermsg.value);
  buildList();
  modal.style.display = "none";

}

window.onload =function()
{
  buildList();
}

var submitChatBtn = document.querySelector("#submitmsg");

submitChatBtn.addEventListener("click", submitChatEvent);
console.log(submitChatBtn);

/*Forum post starter her */
