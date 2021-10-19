$(document).on("click", ".sidebar-navigation .nav-item-scroll", function (e) {
  if (window.innerWidth < 767) {
    window.scroll({
      top: 380,
      behavior: "smooth",
    });
  }
});
