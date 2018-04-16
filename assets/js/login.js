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
      window.open("index.html") && window.close("login.html");
    }
  }
  alert("Incorrect username or password")
}
