"# login-screen-animated" 

ABOUT:
Log-in form with animated entrance. Inputs checked for value before the submit button will be enabled. Overlay pop up with welcome message and value of user id pulled from form and added to welcome message.

What's Used:
- Checking all the input fields and pulling user inputed value to display on page.
- Disable submit button
- Using Javascript to creating elements with class names and inserting into the DOM.
- window.onload = function()
- Prepend: Which adds element to the beging of the element you target
- appendChild:  


//
8/16/2021
function manage(txt) can only check input's that are type="text". Once inputs store number and user id are filled out the submit button becomes enabled even though there is still empty input fields. Need to be able to check any kind of input type. 

Things to add:
- Clear input fields button and function
- Try key frames on the opening animation of the logo and welcome text to get a smoother effect and have more control over when and how long the oppacity property is changed.
- Add a close icon to the overylay pop-up which when clicked will close the pop-up and call the clear input fileds function.
- Add a timeout funtion for the pop-up to make it go away after 8 seconds.
//