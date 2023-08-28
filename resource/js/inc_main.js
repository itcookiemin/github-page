var MinsMain = {
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
  /* Go Sub Main */
  goSubMain: (movePage) => {
    var _url_sub_main = "";
    if (movePage === "LOADING") {
      _url_sub_main = "./loading/loading_main.html";
    } else {
      _url_sub_main = "./jonwick/jonwick_main.html";
    }

    //go sub main
    window.location.href = _url_sub_main;
  },
};
