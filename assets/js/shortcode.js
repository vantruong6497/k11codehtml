





/**
 * Dark Light Mode
 * Header Connect
 * Loadmore Item
 * headerFixed
 * retinaLogo
 * ajaxContactForm
 * mobileNav
 * ajaxSubscribe
 * alertBox
 * loadmore
 */

 (function ($) {
  "use strict";

  //Scroll back to top
  function handlePreloader() {
    if ($(".preloader").length) {
      $("body").addClass("page-loaded");
      $(".preloader").delay(400).fadeOut(0);
    }
  }

  var themesflatTheme = {
    // Main init function
    init: function () {
      this.config();
      this.events();
    },

    // Define vars for caching
    config: function () {
      this.config = {
        $window: $(window),
        $document: $(document),
      };
    },

    // Events
    events: function () {
      var self = this;

      // Run on document ready
      self.config.$document.on("ready", function () {
        // Retina Logos
        self.retinaLogo();
      });

      // Run on Window Load
      self.config.$window.on("load", function () {});
    },

    // Retina Logos
    retinaLogo: function () {
      var retina = window.devicePixelRatio > 1 ? true : false;
      var $logo = $("#site-logo img");
      var $logo2 = $("#logo-footer img");
      var $logo_retina = $logo.data("retina");

      if (retina && $logo_retina) {
        $logo.attr({
          src: $logo.data("retina"),
          width: $logo.data("width"),
          height: $logo.data("height"),
        });
      }
      if (retina && $logo_retina) {
        $logo2.attr({
          src: $logo.data("retina"),
          width: $logo.data("width"),
          height: $logo.data("height"),
        });
      }
    },
  }; // end themesflatTheme

  // Start things up
  themesflatTheme.init();

  // Header Fixed
  var headerFixed = function () {
    if ($("body").hasClass("header-fixed")) {
      var nav = $("#header_main");
      if (nav.length) {
        var offsetTop = nav.offset().top,
          headerHeight = nav.height(),
          injectSpace = $("<div />", {
            height: headerHeight,
          }).insertAfter(nav);
        $(window).on("load scroll", function () {
          if ($(window).scrollTop() > 200) {
            nav.addClass("is-fixed");
            injectSpace.show();
          } else {
            nav.removeClass("is-fixed");
            injectSpace.hide();
          }

          if ($(window).scrollTop() > 400) {
            nav.addClass("is-small");
          } else {
            nav.removeClass("is-small");
          }
        });
      }
    }
  };
  var goTop = function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 800) {
        $("#scroll-top").addClass("show");
      } else {
        $("#scroll-top").removeClass("show");
      }
    });

    $("#scroll-top").on("click", function () {
      $("html, body").animate({ scrollTop: 0 }, 200, "easeInOutExpo");
      return false;
    });
  };

  // Mobile Navigation
  var mobileNav = function () {
    var mobile = window.matchMedia("(max-width: 1024px)");
    var wrapMenu = $(".header__right");
    var navExtw = $(".nav-extend.active");
    var navExt = $(".nav-extend.active").children();

    responsivemenu(mobile);

    mobile.addListener(responsivemenu);

    function responsivemenu(mobile) {
      if (mobile.matches) {
        $("#main-nav")
          .attr("id", "main-nav-mobi")
          .appendTo("#header_main")
          .hide()
          .children(".menu")
          .append(navExt)
          .find("li:has(ul)")
          .children("ul")
          .removeAttr("style")
          .hide()
          .before('<span class="arrow"></span>');
      } else {
        $("#main-nav-mobi")
          .attr("id", "main-nav")
          .removeAttr("style")
          .prependTo(wrapMenu)
          .find(".ext")
          .appendTo(navExtw)
          .parent()
          .siblings("#main-nav")
          .find(".sub-menu")
          .removeAttr("style")
          .prev()
          .remove();

        $(".mobile-button").removeClass("active");
        $(".mobile-button-style2").removeClass("active");
        $(".sub-menu").css({ display: "block" });
      }
    }
    $(document).on("click", ".mobile-button", function () {
      $(this).toggleClass("active");
      $("#main-nav-mobi").slideToggle();
    });
    $(document).on("click", ".mobile-button-style2", function () {
      $(this).toggleClass("active");
      $("#main-nav-mobi").slideToggle();
    });
    $(document).on("click", "#main-nav-mobi .arrow", function () {
      $(this).toggleClass("active").next().slideToggle();
    });
  };

  var alertBox = function () {
    $(document).on("click", ".close", function (e) {
      $(this).closest(".flat-alert").remove();
      e.preventDefault();
    });
  };

  var flatAccordion = function () {
    var args = { duration: 300 };
    $(".flat-toggle .toggle-title.active").siblings(".toggle-content").show();

    $(".flat-toggle.enable .toggle-title").on("click", function () {
      $(this).closest(".flat-toggle").find(".toggle-content").slideToggle(args);
      $(this).toggleClass("active");
    }); // toggle

    $(".flat-accordion .toggle-title").on("click", function () {
      $(".flat-accordion .flat-toggle").removeClass("active");
      $(this).closest(".flat-toggle").toggleClass("active");

      if (!$(this).is(".active")) {
        $(this)
          .closest(".flat-accordion")
          .find(".toggle-title.active")
          .toggleClass("active")
          .next()
          .slideToggle(args);
        $(this).toggleClass("active");
        $(this).next().slideToggle(args);
      } else {
        $(this).toggleClass("active");
        $(this).next().slideToggle(args);
        $(".flat-accordion .flat-toggle").removeClass("active");
      }
    }); // accordion
  };

  var flatCounter = function () {
    if ($(document.body).hasClass("counter-scroll")) {
      var a = 0;
      $(window).scroll(function () {
        var oTop = $(".counter").offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
          if ($().countTo) {
            $(".counter")
              .find(".number")
              .each(function () {
                var to = $(this).data("to"),
                  speed = $(this).data("speed");

                $(this).countTo({
                  to: to,
                  speed: speed,
                });
              });
          }
          a = 1;
        }
      });
    }
  };

  var flattabs = function () {
    $(".flat-tabs").each(function () {
      $(this).find(".content-tab").children().hide();
      $(this).find(".content-tab").children().first().show();
      $(this)
        .find(".menu-tab")
        .children("li")
        .on("click", function () {
          var liActive = $(this).index();
          var contentActive = $(this)
            .siblings()
            .removeClass("active")
            .parents(".flat-tabs")
            .find(".content-tab")
            .children()
            .eq(liActive);
          contentActive.addClass("active").fadeIn("slow");
          contentActive.siblings().removeClass("active");
          $(this)
            .addClass("active")
            .parents(".flat-tabs")
            .find(".content-tab")
            .children()
            .eq(liActive)
            .siblings()
            .hide();
        });
    });
  };

  // Show pass
  $(".toggle-password").click(function () {
    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $(".pass");
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });
  $(".toggle-password1").click(function () {
    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $(".pass1");
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });

  // Sidebar Toggle

  $(".btn").click(function () {
    $(this).toggleClass("click");
    $(".dashboard__sidebar").toggleClass("show");
    $(".dashboard").toggleClass("show");
  });
  $(".feat-btn").click(function () {
    $("nav ul .feat-show").toggleClass("show");
  });

  $(".sidebar__menu li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  $(function () {
    var url = window.location.pathname,
      urlRegExp = new RegExp(url.replace(/\/$/, "") + "$"); // create regexp to match current url pathname and remove trailing slash if present as it could collide with the link in navigation in case trailing slash wasn't present there
    // now grab every link from the navigation
    $(".sidebar__menu a").each(function () {
      // and test its normalized href against the url pathname regexp
      if (urlRegExp.test(this.href.replace(/\/$/, ""))) {
        $(this).addClass("active");
      }
    });
  });
  // End Sidebar Toggle

  $(".image-box").click(function(event) {
    var previewImg = $(this).children("img");
  
    $(this)
      .siblings()
      .children("input")
      .trigger("click");
  
    $(this)
      .siblings()
      .children("input")
      .change(function() {
        var reader = new FileReader();
  
        reader.onload = function(e) {
          var urll = e.target.result;
          $(previewImg).attr("src", urll);
          previewImg.parent().css("background", "transparent");
          previewImg.show();
          previewImg.siblings("p").hide();
          previewImg.siblings("svg").hide();
        };
        reader.readAsDataURL(this.files[0]);
      });
  });

  var popupVideo = function () {
    if ($().magnificPopup) {
      $(".popup-youtube").magnificPopup({
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
      });
    }
  };

  $(".icon-star").on("click", function () {
    $(this).toggleClass("active");
  });

  jQuery(document).ready(function () {
    ImgUpload();
  });


  
  function ImgUpload() {
    var imgWrap = "";
    var imgArray = [];
  
    $('.upload__inputfile').each(function () {
      $(this).on('change', function (e) {
        imgWrap = $(this).closest('.upload__box').find('.upload__img-wrap');
        var maxLength = $(this).attr('data-max_length');
  
        var files = e.target.files;
        var filesArr = Array.prototype.slice.call(files);
        var iterator = 0;
        filesArr.forEach(function (f, index) {
  
          if (!f.type.match('image.*')) {
            return;
          }
  
          if (imgArray.length > maxLength) {
            return false
          } else {
            var len = 0;
            for (var i = 0; i < imgArray.length; i++) {
              if (imgArray[i] !== undefined) {
                len++;
              }
            }
            if (len > maxLength) {
              return false;
            } else {
              imgArray.push(f);
  
              var reader = new FileReader();
              reader.onload = function (e) {
                var html = "<div class='upload__img-box'><div style='background-image: url(" + e.target.result + ")' data-number='" + $(".upload__img-close").length + "' data-file='" + f.name + "' class='img-bg'><div class='upload__img-close'></div></div></div>";
                imgWrap.append(html);
                iterator++;
              }
              reader.readAsDataURL(f);
            }
          }
        });
      });
    });
  
    $('body').on('click', ".upload__img-close", function (e) {
      var file = $(this).parent().data("file");
      for (var i = 0; i < imgArray.length; i++) {
        if (imgArray[i].name === file) {
          imgArray.splice(i, 1);
          break;
        }
      }
      $(this).parent().parent().remove();
    });
  }

  var colorPalette = ['000000', 'FF9966', '6699FF', '99FF66', 'CC0000', '00CC00', '0000CC', '333333', '0066FF', 'FFFFFF'];
  var forePalette = $('.fore-palette');
  var backPalette = $('.back-palette');

  for (var i = 0; i < colorPalette.length; i++) {
    forePalette.append('<a href="#" data-command="forecolor" data-value="' + '#' + colorPalette[i] + '" style="background-color:' + '#' + colorPalette[i] + ';" class="palette-item"></a>');
    backPalette.append('<a href="#" data-command="backcolor" data-value="' + '#' + colorPalette[i] + '" style="background-color:' + '#' + colorPalette[i] + ';" class="palette-item"></a>');
  }

  $('.toolbar a').click(function(e) {
    var command = $(this).data('command');
    if (command == 'h1' || command == 'h2' || command == 'p') {
      document.execCommand('formatBlock', false, command);
    }
    if (command == 'forecolor' || command == 'backcolor') {
      document.execCommand($(this).data('command'), false, $(this).data('value'));
    }
    if (command == 'createlink' || command == 'insertimage') {
      url = prompt('Enter the link here: ', 'http:\/\/');
      document.execCommand($(this).data('command'), false, url);
    } else document.execCommand($(this).data('command'), false, null);
  });

  $(function() {                       
  $(".show-editor").click(function() {  
    $('.main').addClass("active");      
    $('.group-btn').addClass("active");      
  });
  $(".btn").click(function() {  
    $('.main').removeClass("active");    
    $('.group-btn').removeClass("active");    
  }); 
});



$('.moreless-button-1').click(function(e) {
  
  $('.moretext').slideToggle();
  if ($('.moreless-button-1').text() == "View all") {
    $(this).text("Shorten")
  } else {
    $(this).text("View all")
  }
});

$('.moreless-button-2').click(function(e) {
  
  $('.moretext-2').slideToggle();
  if ($('.moreless-button-2').text() == "View all") {
    $(this).text("Shorten")
  } else {
    $(this).text("View all")
  }
});




$('.edit').click(function(){
  $(this).hide();
  $('.box').addClass('editable');
  $('.toolbar.s1').addClass('active');
  $('.moretext').attr('contenteditable', 'true');
  $('.text').attr('contenteditable', 'true');
  $('.editor').attr('contenteditable', 'true');    
  $('.save').show();
});

$('.save').click(function(){
  $(this).hide();
  $('.box').removeClass('editable');
  $('.toolbar.s1').removeClass('active');
  $('.text-edit').removeAttr('contenteditable');
  $('.text').removeAttr('contenteditable');
  $('.moretext').removeAttr('contenteditable');
  $('.editor').removeAttr('contenteditable');
  $('.edit').show();
});



$('.setting').on('click', function(){
  $('.setting-content').toggleClass('active');
});



$('#edit').click(function(){
  $(this).hide();
  $('.banner.s1').addClass('active');
  $('.title').attr('contenteditable', 'true');
   
  $('#save').show();
});

$('#save').click(function(){
  $(this).hide();
  $('.banner.s1').removeClass('active');
  $('.title').removeAttr('contenteditable');
  
  $('#edit').show();
});




  // Dom Ready
  $(function () {
    handlePreloader();
    headerFixed();
    goTop();
    mobileNav();
    alertBox();
    flatAccordion();
    flatCounter();
    flattabs();
    popupVideo();
  });
})(jQuery);