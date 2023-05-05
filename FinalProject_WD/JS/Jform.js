function search() {
  // Create an array of objects, where each object contains information about a particular subject.
  var subjects = [
    {
      name: "Whapmagoostui",
      info: "<p>Population of 1021 (as of the year 2021) and a size 202.49 sqare kilometers (78.18 sqare miles), Whapmagoostui (Cree: ᐙᐱᒫᑯᔥᑐᐃ/Wâpimâkuštui, meaning place of the beluga)  is the northernmost community located at the mouth of the Great Whale River on the coast of Hudson Bay in Nunavik.</p>" +
      "<p>The community is accessible only by air (Kuujjuarapik Airport) and, in late summer, by boat.</p>" +
      "<p>The land is cohabited between the Inuit and Cree at the mouth of the Great Whale River, with the Inuit close to the coast and the Cree more in the interior.</p>" +
      "<p>The Chief of Whapmagoostui is Louisa Wynne.</p>" 
    },
    {
      name: "Chisasibi",
      info: "<p>Population of 5264 (as of the year 2021) and a size of 776 square kilometres (300 square miles), Chisasibi(Cree: ᒋᓵᓰᐲ, meaning Great/Big River) sits on the south shore of the La Grande River on the Coast of James Bay and is the second northernmost Cree community in Eeyou Istchee. </p>" +
      "<p>The nation also has a terre réservée crie or Cree reserved land of the same name. </p>" +
      "<p>The Chief of Chisasibi is Daisy House.</p>"
    },
    {
      name: "Eastmain",
      info: "<p>Population of 917 (as of the year 2021) and a size of 147 square kilometers (56.76 square miles), Eastmain (Cree: ᐙᐸᓅᑖᐤ/Wâpanûtâw meaning Lands east of James Bay) is located on the east coast of James Bay and on the shore of the Eastmain River. </p>" +
      "<p>Its members primarily live in the Terres réservées aux Cris or Cree reserved land (Indian reserve) of Eastmain, Quebec.</p>" +
      "<p>Eastmain is named after the Hudson Bay trading post that was originally located on the north shore of the Eastmain River.</p>" +
      "<p>The Chief of Eastmain is Kenneth Cheezo.</p>" 
    },
    {
      name: "Waskaganish",
      info:"<p>Population of 2039 (as of the year 2021) and a size of 502 square kilometers (56.76 square miles), Waskaganish (Cree: ᐙᔅᑳᐦᐄᑲᓂᔥ/Wâskâhîkaniš, meaning Little House) is located at the mouth of the Rupert River on the south-east shore of James Bay. </p>" +
      "<p>Formerly called Fort Rupert, the location is one of three original Hudson's Bay Company posts on James Bay, the other two being Fort Albany on the west shore, and Moose Factory on the south.</p>" +
      "<p>The Chief of Waskaganish is Darlene Cheechoo..</p>" 
    },
    {
      name: "Nemaska",
      info:"<p>Population of 851 (as of the year 2021) and a size of 54.7 square kilometers (21.12 square miles), Nemaska (Cree: ᓀᒥᔅᑳᐤ/Nemiskâw, meaning “where there is plentiful of fish”) is a Cree village municipality in the territory of Eeyou Istchee in northern Quebec </p>" +
      "<p>Nemaska is one of the inland communities located on the shores of Lake Champion and is where the head office of the Grand Council of the Crees (Eeyou Istchee) and the Cree Nation Government is located.</p>" +
      "<p>The Chief of Nemaska is Clarence Jolly Sr.</p>" 
    },
    {
      name:"Waswanipi",
      info:"<p>Population of 459 (as of the year 2021) and a size of 385.83 square kilometers (148.97 square miles), Waswanipi (Cree: ᐙᔅᐙᓂᐲ/Wâswânipî, meaning Light on the Water) is a Cree community located long Route 113 and near the confluence of the Chibougamau and Waswanipi Rivers.  </p>" +
      "<p>The original location of the village was on an island in Lake Waswanipi. It was the site of a Hudson's Bay Company trading post until 1965 when the post was closed.</p>" +
      "<p> The Chief of Waswanipi is Marcel Happyjack.</p>" 
    },
    {
      name:"Ouje-Bougoumou",
      info:"<p>Population of 929 (as of the year 2021) and a size of 60 square kilometres (37 square mi), Waswanipi (Cree: ᐆᒉᐳᑯᒨ / Ûcêpukumû, meaning the Place Where People Gather) is one of the Cree community one of the inland communities located along the shore of Lake Opemiska.</p>" +
      "<p>Being one of the newest communities, it was designed by community members with the assistance of professional planners. The architectural theme was developed together with Douglas Cardinal and was built in the early 1990's.</p>" +
      "<p>The Chief of Oujé-Bougoumou is Curtis Bosum.</p>" 
    },
    {
      name:"Mistissini",
      info:"<p>Population of 929 (as of 2021) and a size of 776 square kilometres (300 square mi), Mistissini (Cree: ᒥᔅᑎᓯᓃ, meaning Big Rock) is a Cree First Nation of Canada. It is headquartered at the Cree village of Mistissini and also has a terre réservée crie of the same name, both in Northern Quebec.</p>" +
      "<p>It is where the main offices for the Cree School Board, the Cree Human Resources Development Department, and Eeyou Istchee’s regional radio station, the James Bay Cree Communications Society are located.</p>" +
      "<p>The Chief of Oujé-Bougoumou is Thomas Neeposh.</p>"
    },
    {
      name:"Cree",
      info:"<p>Out of all the Indigenous nations in both Quebec and Canada the Cree are one of the most populated communities to exist, with an estimate total of 90000 across the continent, 21000 of that sample living in Quebec alone, and a total of 356 655 claiming to have some Cree ancestory across Canada, according to a 2016 census </p>" +
      "<p>Among these population are multiple languages and dialect that have formed due to the scale of the land they traveled. These included but  not limited to, Plains Cree (nehiyawak) that formed in Alberta & Saskatchewan.Sakawiyiniwak in Saskatchewan & Manitoba,as well as Eeyouch in Quebec. </p>"+
      "<p>Despite being one of the most populated remaining indigenous communities, with some of the largest spread across Canada. The Cree live almost exclusively in a few settlements. One of the larger of these settlemtns, for example, was founded in 1993, the village of Oujé-Bougoumou, with its modern architecture, became a model for integrating the modern Indigenous way of life. Designed by architect Douglas Cardinal, it has garnered numerous international awards, including one from the United Nations.</p>" +
      "<p>Unfortunately efforts are still underway to improve the quality of life in Cree settlements.In some provinces, over 60% of indigenous children live in poverty.</p>"+ 
      "<p>The child poverty rate among status First Nations children hovers around 50%, a rate that puts these nations on par with Mexico.Issues in these settlements include but are not limited to, overcrowded housing with the number of those living in the house being higher then the number of rooms, a low education rate with the typical canadian 80.9% rate of employement for educated citizens being low as 71% for indigenous people such as the Cree. </p>"
    }

  ];
  
  // Get the subject that was searched and insert it into the variable "query"
  var query = document.getElementById("search").value.toLowerCase();
  // Get the content element so we can display the info later
  var content = document.getElementById("content");
  
  // Loop through the "subjects" array and check if the query matches any of the subject names
  for (var i = 0; i < subjects.length; i++) {
    if (query.includes(subjects[i].name.toLowerCase())) {
      // If a match is found, display the corresponding information from the "info" property of the matching object
      content.innerHTML = subjects[i].info;
      // Exit the loop, since we only need to display info for one subjects
      break;
    } else {
      // If no match is found, display a message indicating that the subject was not found
      content.innerHTML = "<p>Sorry, we could not find any information for the subject you searched for. Try Whapmagoostui,Chisasibi,Eastmain,Waskaganish,Nemaska,Waswanipi,Ouje-Bougoumou,Mistissini or Cree</p>";
    }
  }
}