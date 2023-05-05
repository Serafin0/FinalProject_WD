var login_username="serafino";
var login_password="12345";


//function for how the page will load
function load(){
    $(document).ready(function(){
       $(".login").show(); 
       $(".logout").hide(); 
    });	
  }




  //function for loging in
function checkuserlogin()
{
    
     var un,pw;

     $(document).ready(function(){
        //assigning un and pw to the username and password input
   un = document.getElementById("username").value;
   pw = document.getElementById("password").value;

   // making an if statement for the login
    if(un == login_username && pw == login_password)
    {
        alert('Welcome to website');
        //changing the non interactive menu frame to the interactive menu frame
        parent.frames.Menu_Frame.location.href = "NMenu.html";
        document.getElementById("usname").innerHTML = "Welcome " + login_username + "<br>";
        //will hide all login classes
        $(".login").hide();
        //will show logout classes including the logout button
        $(".logout").show();
    }
    else
    {
        //else for incorrect credentials
        alert("incorrect credentials please try serafino, 12345");
        $(".login").show(); //show class login
        $(".logout").hide(); //hide class logout
        //will clear the input boxes for retrying 
	  document.getElementById("password").value="";
	  document.getElementById("password").focus();
      //will still show the non interactive menu frame
	  parent.frames.Menu_Frame.location.href ="FMenu.html";

    }
   })
}

//making a logout function
function checklogout ()
{
    alert('thank you for visiting "Website Name"');
    document.getElementById("username").value="";
    document.getElementById("password").value="";
    document.getElementById("username").focus();
    //changin the menu frame from interactive to fake
    parent.frames.Menu_Frame.location.href = "FMenu.html";
    //making a jquery functioon to show and hide the login and logout button
    $(document).ready(function(){
        $(".login").show(); //show class login
        $(".logout").hide(); //hide class logout
     });	
}
  
 