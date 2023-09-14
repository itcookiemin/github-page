const CookieFuncList = {
  /* Loading URL */
  goHome: (moveType) => {
    //
    var _url_index = "";

    if (moveType === "HOME") {
      _url_index = "./index.html";
    } else if (moveType === "PAGE") {
      _url_index = "../index.html";
    }

    //go home index
    window.location.href = _url_index;
  },
};

function init() {
  scrollTopBtn();
}

function scrollTopBtn() {
  const scrBtn = document.querySelector(".icon-top");

  scrBtn.addEventListener("click", function (e) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  init();
});
