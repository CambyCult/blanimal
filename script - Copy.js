

function openTab(tabName) {
    var i, x;
    x = document.getElementsByClassName("containerTab");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
  } 

function toggleText(){
    var t2 = document.getElementById("t2");
    var t3 = document.getElementById("t3");
    var t4 = document.getElementById("t4");
    var t5 = document.getElementById("t5");
    if (t1.style.display === "block"){
            t1.style.display = "none";
        } else if (t2.style.display === "block"){
                t2.style.display = "none";
            } else if (t3.style.display === "block"){
                    t3.style.display = "none"
                }else if (t4.style.display === "block"){
                        t4.style.display = "none"
                }else if (t5.style.display === "block"){
                             t5.style.display = "none"
                    }   
    }
        
            
