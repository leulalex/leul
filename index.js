window.onscroll = function() {scrollFunction()};

const logo = document.getElementById("leul")
const bar = document.getElementById("bar")
const service = document.getElementById("service-option")
const project = document.getElementById("project-option")
const contact = document.getElementById("contact-option")



function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("bar").style.paddingTop = "15px";
      document.getElementById("bar").style.paddingBottom = "15px";
      document.getElementById("bar").style.backgroundColor = "rgb(48, 47, 47)";

    } else {
      document.getElementById("bar").style.paddingTop = "30px";
      document.getElementById("bar").style.backgroundColor = "rgb(32, 31, 31)";
    }
  }





















