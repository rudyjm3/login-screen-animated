//Use window.onload to execute JavaScript only after the HTML has loaded
//Syntax: 
window.onload = function() {
   let logo = document.getElementsByClassName('logo')[0];
   let message = document.getElementsByClassName('welcome-box')[0];
   
   logo.style = "right: 0px; opacity: 1;";
   message.style = "top: 0px; opacity: 1;";
 };

//Check input has value before submit button is enable
function manage(txt) {
   let btn = document.getElementById('submit-btn');
   let ele = document.getElementsByTagName('input'); 
   // Loop through each element.
   for (i = 0; i < ele.length; i++) {

       // Check the element type
       if (ele[i].type == 'text' && ele[i].value == '') { //Need to figure out how to check diffrent input types
           btn.disabled = true;    // Disable the button.
           return false;
       }
       else {
           btn.disabled = false;   // Enable the button.
       }
   }
}

function submitForm() {
   let user = document.getElementById('user-id').value;
   let overlay = document.createElement('div');//Create Overlay div
   overlay.classList.add('overlay');//Give created overlay div a class name
   let messageBox = document.createElement('div');//Create Message box div
   messageBox.classList.add('message-box'); 
   let p = document.createElement('p');
   let h = document.createElement('h2');
   
   document.body.prepend(overlay); //prepend adds element to the begining of assigned element
   overlay.style.opacity = "1";
   overlay.appendChild(messageBox);
   p.textContent = 'Hello user: ' + user;
   h.textContent = 'You are now logged in';
   messageBox.appendChild(p); // Is there a way to combine these 2 lines
   messageBox.appendChild(h);



   

}


