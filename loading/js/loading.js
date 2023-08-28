/*
 * TYPE : Javascript
 * TITLE: MINS Loading Progress
 */

var MinsLoading = {
  /* Loading URL */
  progress: async (paramLoading) => {
    var returnUrl = "";
    if (paramLoading === "rect") {
      returnUrl = "./loading-rect.html";
    } else if (paramLoading === "rect2") {
      returnUrl = "./loading-rect2.html";
    } else if (paramLoading === "tire") {
      returnUrl = "./loading-tire.html";
    } else if (paramLoading === "gradient") {
      returnUrl = "./loading-gradient.html";
    } else if (paramLoading === "spinner") {
      returnUrl = "./loading-spinner.html";
    }

    document.getElementById("load-progress").innerHTML =
      "<object width='100%' height='100%' data='" + returnUrl + "'></object>";
  },
};
