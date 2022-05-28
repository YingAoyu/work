function myFunction2() {
    var A;
    A = document.getElementById("myText").value;

    if (A=="parent") {
        window.location.replace("https://yingaoyu.github.io/lianxi7/index.html")
    } else if (A=="student"){
       window.location.replace("https://yingaoyu.github.io/lianxi7/Course.html")
    }
  else if (A==""){
       alert("Please enter student or parent!")
    }else if(A !="student"){
    alert("Please enter student or parent!")
    } else if(A !="parent"){
     alert("Please enter student or parent!")
    }
}