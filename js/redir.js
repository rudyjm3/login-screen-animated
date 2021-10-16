window.onload = function(){
   countdown();
   returnToForm();
}

function returnToForm() {

   setTimeout(function(){window.location.href="index.html"}, 16000);
};

function countdown() {
   let sec = 15;

   setInterval(function countdown () {
      document.getElementById('time-remaining').innerHTML = sec;
      sec--;
      if (sec < 0) {
         ++sec;
      }
   }, 1000);
};

 function returnToFormbtn() {
   window.location.href="index.html";
 };