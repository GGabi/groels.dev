!function (scroller) {
  'use-strict'
  scroller('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if(location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "")
    && location.hostname == this.hostname) {
      var xe = scroller(this.hash)
      if((xe = xe.length ? xe : scroller("[name="+this.hash.slice(1)+"]")).length) {
        return scroller("html, body").animate({
          scrollTop: scroller.offset().top      
        }, 1e3, "easeInOutExpo"), !1
      }
    }
  }), scroller(".js-scroll-trigger").click(function() {
    scroller(".navbar-collapse").collapse("hide")
  }), scroller("body").scrollspy({
    target: "#sideNav"
  })
}(jQuery)