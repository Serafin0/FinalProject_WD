function setCookie(cookiename,cookievalue,expirationdays) {
    const d = new Date();
    d.setTime(d.getTime() + (expirationdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cookiename + "=" + cookievalue + ";" + expires + ";path=/";
  }

  function trackTimeSpentOnPage() {
    // Check if a cookie already exists for time spent on page
    let timeSpentOnPage = parseInt(getCookie("timeSpentOnPage"));
    
    // If no cookie exists, initialize timeSpentOnPage to zero
    if (isNaN(timeSpentOnPage)) {
      timeSpentOnPage = 0;
    }
    
    // Update the cookie every second to track the time spent on page
    setInterval(function() {
      timeSpentOnPage += 1;
      setCookie("timeSpentOnPage", timeSpentOnPage, 365);
    }, 1000);
  }