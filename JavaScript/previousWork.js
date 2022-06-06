/////////////////////////////////////////////////////////
///// Change the language progress percentages HERE /////
/////////////////////////////////////////////////////////

function findPercent(language) {
  var percent = 0;
  switch (language) {
    case "html":
      percent = 90;
      break;
    case "css":
      percent = 70;
      break;
    case "js":
      percent = 30;
      break;
    case "c":
      percent = 50;
      break;
    case "cpp":
      percent = 70;
      break;
    case "sql":
      percent = 80;
      break;
    default:
      percent = 0;
  }
  return percent;
}

/////////////////////////////////////////////////////////////////
/// This function was taken from Sitepoint (see ReadMe) /////////
/////////////////////////////////////////////////////////////////
function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return elemBottom <= docViewBottom && elemTop >= docViewTop;
}

//Move the progress bars based on the percentages from the findPercentage() method
function move(language) {
  var percent = findPercent(language);
  var elem = document.getElementById(language.concat("Progress"));
  var width = 1;
  var reset = setInterval(frame, 50);
  function frame() {
    if (width >= percent) {
      clearInterval(reset);
    } else {
      width++;
      elem.style.width = width + "%";
      elem.innerHTML = width + "%";
    }
  }
}

var Flag = 0;
window.onscroll = function () {
  if (isScrolledIntoView(document.getElementById("c")) && Flag == 0) {
    move("html");
    move("css");
    move("js");
    move("c");
    move("cpp");
    move("sql");
    Flag = 1;
  }
};
