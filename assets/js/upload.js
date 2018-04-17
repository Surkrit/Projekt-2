//var storeSub = document.querySelector("sub, title, dur, year, com");

//function setLocal(localSub)
//{
//  var jsonData = JSON.stringify(localSub);

//  localStorage.setItem("submission", jsonData);
//}

//function getLocal()
//{
//  var notes = localStorage.getItem("submission");

//  if (notes == null){
//      return [];
//    }
//    else {
//      return JSON.parse(submission);
//    }
//}

function onloadSub(){
  var subject = document.getElementById('sub').value;
  //var uploadFiles = document.getElementById("files");
  var title = document.getElementById('title').value;
  var duration = document.getElementById('dur').value;
  var year = document.getElementById('year').value;
  var com = document.getElementById('com').value;

  if (subject && title && duration && year && com){
    var uploadArray = {
      subject : subject,
      title : title,
      duration : dur,
      year : year,
      com : com
    }
    console.log("does work");
    globalvalue(uploadArray);
  } else {
    console.log("does not work");
}
}

function globalvalue(obj) {
  obj = obj || null;
  if(obj !== null){
    var getlocalstorage = localStorage.getItem("contentPost");
    var mylocal = [];
    if (getlocalstorage !== null){
      var mylocal = JSON.parse(getlocalstorage);
    }
    mylocal.push(obj);
    var jsonData = JSON.stringify(mylocal);
    localStorage.setItem("contentPost", jsonData);
    showSubject(mylocal)
  }
}

function showSubject(obj=null) {
  var divLocation = document.getElementById("adding");
  divLocation.innerHTML = "";
  obj = obj || null;
  if(obj == null) {
    var localstorage = localstorage.getItem("ContentPost");
    var obj = JSON.parse(localStorage);
}
if(typeof obj !== "undefined" && obj != null) {
  obj.forEach(function(arg,ii) {
    if (arg.subject && arg.title && arg.duration && arg.year && arg.com) {
      var divBox = document.createElement("div");

      var divSub = document.createElement("h1");
      divSub.innerHTML = arg.subject;
      divBox.appendChild(divSub);

      var divTitle = document.createElement("h2");
      divTitle.innerHTML = arg.title;
      divBox.appendChild(divTitle);

      var divYear = document.createElement("p");
      divYear.innerHTML = arg.year;
      divBox.appendChild(divYear);

      divLocation.appendChild(divBox);

    } else {
      console.log("no onload");
    }
    });
  }
}


window.addEventListener("load",function() {

  var show = window.location.hash;
  if(show.length <2){


    var newButton = document.getElementById("uploadbutton");
    newButton.addEventListener("click",function(){
      onloadSub();
    });
  }
});

//    };
//    console.log("det virker");:
//    submission.push(uploadArray)

//    setLocal(origSub)
//  }
//}

//function buildList()
//{
//  var spawnsub = getLocal()
//  var divSub = document.querySelect("")

//}
