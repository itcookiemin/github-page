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
  // const footer = document.querySelector(".footer");
  // const wrap = document.querySelector(".wrap");
  // var options = {
  //   rootMargin: "0px 0px -16px 0px",
  //   threshold: 0,
  // };
  // const io = new IntersectionObserver((entries) => {
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       Object.assign(scrBtn.style, {
  //         position: "absolute",
  //         top: `${wrap.clientHeight - 197}px`,
  //         bottom: "0",
  //       });
  //     } else {
  //       Object.assign(scrBtn.style, {
  //         position: "fixed",
  //         top: "unset",
  //         bottom: "37px",
  //       });
  //     }
  //   });
  // }, options);
  window.addEventListener("scroll", function (e) {
    if (window.scrollY > 0) {
      // io.observe(footer);
      scrBtn.style.display = "block";
      setTimeout(() => {
        scrBtn.style.opacity = "1";
      }, 10);
    } else {
      scrBtn.style.opacity = "0";
      setTimeout(() => {
        scrBtn.style.display = "none";
        // io.unobserve(footer);
      }, 230);
    }
  });
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
