var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
  });
}

function makeSound(buttonInnerHTML) {
  switch (buttonInnerHTML) {
    case "أ":
      var alif = new Audio("sounds/alif.mp3");
      alif.play();
      break;

    case "ب":
      var ba = new Audio("sounds/ba.mp3");
      ba.play();
      break;

    case "ت":
      var taa = new Audio("sounds/taa.mp3");
      taa.play();
      break;

    case "ث":
      var tha = new Audio("sounds/tha.mp3");
      tha.play();
      break;

    case "ج":
      var jeem = new Audio("sounds/jeem.mp3");
      jeem.play();
      break;

    case "ح":
      var haa = new Audio("sounds/haa.mp3");
      haa.play();
      break;
    case "خ":
      var khaa = new Audio("sounds/khaa.mp3");
      khaa.play();
      break;

    case "د":
      var dal = new Audio("sounds/dal.mp3");
      dal.play();
      break;

    case "ذ":
      var dhal = new Audio("sounds/dhal.mp3");
      dhal.play();
      break;
    case "ر":
      var raa = new Audio("sounds/raa.mp3");
      raa.play();
      break;

    case "ز":
      var zaa = new Audio("sounds/zaa.mp3");
      zaa.play();
      break;

    case "س":
      var seen = new Audio("sounds/seen.mp3");
      seen.play();
      break;
    case "ش":
      var sheen = new Audio("sounds/sheen.mp3");
      sheen.play();
      break;

    case "ص":
      var saad = new Audio("sounds/saad.mp3");
      saad.play();
      break;

    case "ض":
      var dhaad = new Audio("sounds/dhaad.mp3");
      dhaad.play();
      break;
    case "ط":
      var toa = new Audio("sounds/toa.mp3");
      toa.play();
      break;

    case "ظ":
      var dhaa = new Audio("sounds/dhaa.mp3");
      dhaa.play();
      break;

    case "ع":
      var ain = new Audio("sounds/ain.mp3");
      ain.play();
      break;
    case "غ":
      var ghain = new Audio("sounds/ghain.mp3");
      ghain.play();
      break;

    case "ف":
      var faa = new Audio("sounds/faa.mp3");
      faa.play();
      break;

    case "ق":
      var qaaf = new Audio("sounds/qaaf.mp3");
      qaaf.play();
      break;

    case "ك":
      var kaaf = new Audio("sounds/kaaf.mp3");
      kaaf.play();
      break;

    case "ل":
      var laam = new Audio("sounds/laam.mp3");
      laam.play();
      break;

    case "م":
      var meem = new Audio("sounds/meem.mp3");
      meem.play();
      break;

    case "ن":
      var noon = new Audio("sounds/noon.mp3");
      noon.play();
      break;

    case "ه":
      var ha = new Audio("sounds/ha.mp3");
      ha.play();
      break;

    case "و":
      var waw = new Audio("sounds/waw.mp3");
      waw.play();
      break;

    case "ي":
      var yaa = new Audio("sounds/yaa.mp3");
      yaa.play();
      break;
  }
}
