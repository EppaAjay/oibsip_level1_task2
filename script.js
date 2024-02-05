var typed = new Typed(".typing", {
    strings: ["Web Designer", "Web Developer", "Frontend Developer"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
 
  })
// about
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for(var tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for(var tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    console.log("Tabname is", tabname)
    var selectedTabLink = document.querySelector('[onclick="opentab(\'' + tabname + '\')"]');
    selectedTabLink.classList.add("active-link");

    var selectedTabContent = document.getElementById(tabname);
    selectedTabContent.classList.add("active-tab");
}