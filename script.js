let optionsButtons = document.querySelectorAll(".button");
let advancesOptionButton = document.querySelectorAll(".colourbuttonbutton");
let writingArea = document.getElementById(".textarea");
let alignButtons = document.querySelectorAll(".align");
let formatButtons = document.querySelectorAll(".toggle");

const initializer = () => {
  //function call for highlighting buttons except undo redo
  highlighter(alignButtons, true);
  highlighter(formatButtons, false);
};

const highlighter = (className, needsRemoval) => {
  className.forEach((button) => {
    button.addEventListener("click", () => {
      //needsRemoval = true means only one button should be highlight and other would be normal

      if (needsRemoval) {
        let alreadyActive = false;
        //if currently clicked buton is already active

        if (button.classList.contains("active")) {
          alreadyActive = true;
        }

        //Remove highlight from other buttons
        highlighterRemover(className);
        if (!alreadyActive) {
          //highlight clicked button
          button.classList.add("active");
        }
      } else {
        //if other buttons can be highlighted
        button.classList.toggle("active");
      }
    });
  });
};

const highlighterRemover = (className) => {
  className.forEach((button) => {
    button.classList.remove("active");
  });
};

//bold function
boldbtn.addEventListener("click", () => {
  document.execCommand("bold");
});
//underline funtion
underlinebtn.addEventListener("click", () => {
  document.execCommand("underline");
});
//italic funtion
italicbtn.addEventListener("click", () => {
  document.execCommand("italic");
});
//font colour change funtion
colourbtn.addEventListener("input", () => {
  document.execCommand("forecolor", false, colourbtn.value);
});
//justifiy text to left in this function
leftbtn.addEventListener("click", () => {
  document.execCommand("justifyLeft", true, leftbtn.value);
});
//justify text to center in this function
centerbtn.addEventListener("click", () => {
  document.execCommand("justifyCenter", true, centerbtn.value);
});
//justifiy text to right in this function
rightbtn.addEventListener("click", () => {
  document.execCommand("justifyRight", true, leftbtn.value);
});
//justify text full in this funtion
justifybtn.addEventListener("click", () => {
  document.execCommand("justifyFull", true, justifybtn.value);
});
//undo function
undobtn.addEventListener("click", () => {
  document.execCommand("undo", true, undobtn.value);
});
//redo funtion
redobtn.addEventListener("click", () => {
  document.execCommand("redo", true, redobtn.value);
});
window.onload = initializer();
