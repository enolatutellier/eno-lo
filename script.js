function toggle_text1(event) {
    var span1 = document.getElementsByClassName("plongée");
    var videos1 = document.getElementsByClassName("videos");
    for (i=0; i<span1.length;i++){
        span1[i].style.display ="none";
    }

    for (i=0; i<videos1.length;i++){
        videos1[i].style.display ="none";
    }

    var button = event.target.id.split('_')[1];
    var span2 = document.getElementById("span_"+button);
    span2.style.display = "inline";
    var videos2 = document.getElementById("videos_"+button);
    videos2.style.display = "inline";
}



function toggle_text2(event) {
  var span3 = document.getElementsByClassName("croisière");
  var videos3 = document.getElementsByClassName("videos2");
  for (i=0; i<span3.length;i++){
      span3[i].style.display ="none";
  }

  for (i=0; i<videos3.length;i++){
      videos3[i].style.display ="none";
  }

  var button2 = event.target.id.split('_')[1];
  var span4 = document.getElementById("span2_"+button2);
  span4.style.display = "inline";
  var videos4 = document.getElementById("videos2_"+button2);
  videos4.style.display = "inline";
}



function toggle_text3(event) {
  var span5 = document.getElementsByClassName("nautique");
  var videos5 = document.getElementsByClassName("videos3");
  for (i=0; i<span5.length;i++){
      span5[i].style.display ="none";
  }

  for (i=0; i<videos5.length;i++){
      videos5[i].style.display ="none";
  }

  var button = event.target.id.split('_')[1];
  var span6 = document.getElementById("span3_"+button);
  span6.style.display = "inline";
  var videos6 = document.getElementById("videos3_"+button);
  videos6.style.display = "inline";
}

function toggle_text4(event) {
  var span7 = document.getElementsByClassName("randonnée");
  var videos7 = document.getElementsByClassName("videos4");
  for (i=0; i<span7.length;i++){
      span7[i].style.display ="none";
  }

  for (i=0; i<videos7.length;i++){
      videos7[i].style.display ="none";
  }

  var button = event.target.id.split('_')[1];
  var span8 = document.getElementById("span4_"+button);
  span8.style.display = "inline";
  var videos8 = document.getElementById("videos4_"+button);
  videos8.style.display = "inline";
}

function toggle_text5(event) {
  var span9 = document.getElementsByClassName("excursion");
  var videos9 = document.getElementsByClassName("videos5");
  for (i=0; i<span9.length;i++){
      span9[i].style.display ="none";
  }

  for (i=0; i<videos9.length;i++){
      videos9[i].style.display ="none";
  }

  var button = event.target.id.split('_')[1];
  var span10 = document.getElementById("span5_"+button);
  span10.style.display = "inline";
  var videos10 = document.getElementById("videos5_"+button);
  videos10.style.display = "inline";
}

function toggle_text6(event) {
  var span11 = document.getElementsByClassName("détente");
  var videos11 = document.getElementsByClassName("videos6");
  for (i=0; i<span11.length;i++){
      span11[i].style.display ="none";
  }

  for (i=0; i<videos11.length;i++){
      videos11[i].style.display ="none";
  }

  var button = event.target.id.split('_')[1];
  var span12 = document.getElementById("span6_"+button);
  span12.style.display = "inline";
  var videos12 = document.getElementById("videos6_"+button);
  videos12.style.display = "inline";
}



/* ------------------------------------------------*/



/* 


function toggle_text1() {
    var span1 = document.getElementById("span_txt1");
    var span2 = document.getElementById("span_txt2");
    var span3 = document.getElementById("span_txt3");
    var span4 = document.getElementById("span_txt4");
    if(span1.style.display == "none") {
      span1.style.display = "inline";
    } else {
      span1.style.display = "none";
    }

    if(span2.style.display == "inline" || span3.style.display == "inline" || span4.style.display == "inline") {
        span2.style.display = "none"
        span3.style.display = "none"
        span4.style.display = "none";
    } else {
        span2.style.display = "none";
        span3.style.display = "none"
        span4.style.display = "none"
    }
  }

  function toggle_text2() {
    var span1 = document.getElementById("span_txt1");
    var span2 = document.getElementById("span_txt2");
    var span3 = document.getElementById("span_txt3");
    var span4 = document.getElementById("span_txt4");
    
    if(span2.style.display == "none") {
      span2.style.display = "inline";
    } else {
      span2.style.display = "none";
    }

    if(span1.style.display == "inline" || span3.style.display == "inline" || span4.style.display == "inline") {
        span1.style.display = "none"
        span3.style.display = "none"
        span4.style.display = "none";
    } else {
        span1.style.display = "none";
        span3.style.display = "none"
        span4.style.display = "none"
    }
  }

  function toggle_text3() {
    var span1 = document.getElementById("span_txt1");
    var span2 = document.getElementById("span_txt2");
    var span3 = document.getElementById("span_txt3");
    var span4 = document.getElementById("span_txt4");
    
    if(span3.style.display == "none") {
      span3.style.display = "inline";
    } else {
      span3.style.display = "none";
    }

    if(span1.style.display == "inline" || span2.style.display == "inline" || span4.style.display == "inline") {
        span1.style.display = "none"
        span2.style.display = "none"
        span4.style.display = "none";
    } else {
        span1.style.display = "none";
        span2.style.display = "none"
        span4.style.display = "none"
    }
  }

  function toggle_text4() {
    var span1 = document.getElementById("span_txt1");
    var span2 = document.getElementById("span_txt2");
    var span3 = document.getElementById("span_txt3");
    var span4 = document.getElementById("span_txt4");
    
    if(span4.style.display == "none") {
      span4.style.display = "inline";
    } else {
      span4.style.display = "none";
    }

    if(span1.style.display == "inline" || span2.style.display == "inline" || span3.style.display == "inline") {
        span1.style.display = "none"
        span2.style.display = "none"
        span3.style.display = "none";
    } else {
        span1.style.display = "none";
        span2.style.display = "none"
        span3.style.display = "none"
    }
  }
  
  */