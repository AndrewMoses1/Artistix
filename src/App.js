import './App.css';

// The reason for this function's name is because it applies only to the Portraits and Calligraphy routes since they are the only routes with an additional step (Step 4).
function routeScrollPORTANDCAL() {
  // Using the rectangles of elements is a common occurence throughout this project to provide the most efficient way to add scroll animations.
  var routeName = document.querySelector(".route-name");
  var routeNameRect = routeName.getBoundingClientRect().top;
  var routeTitleContentContainer = document.querySelector(".route-title-content-container");
  var routeTitleContentContainerRect = routeTitleContentContainer.getBoundingClientRect().bottom;
  var routeStep2Movie = document.querySelector(".route-step2-movie");
  var routeStep2MovieRect = routeStep2Movie.getBoundingClientRect().top;
  var routeStep3Movie = document.querySelector(".route-step3-movie");
  var routeStep3MovieRect = routeStep3Movie.getBoundingClientRect().top;
  var routeStep4Movie = document.querySelector(".route-step4-movie");
  var routeStep4MovieRect = routeStep4Movie.getBoundingClientRect().top; 
    // Because of the VW structure of this project, certain viewport widths and heights were selected to execute scroll transitions instead of transitions that load when the component mounts for aesthetic purposes.
    if (window.innerWidth > 1800 || (window.innerWidth <= 1200 && window.innerWidth > 650) || (window.innerWidth < 650 && window.innerHeight <= 1200) || ((window.innerWidth <= 1800 && window.innerWidth > 1200) && (window.innerHeight <= 1200))) {
      if(routeStep2MovieRect < (window.innerHeight * .99)) {
        routeStep2Movie.style.transition = "opacity 2s, transform 2s";
        routeStep2Movie.style.transform = "translateY(-2vw)";
        routeStep2Movie.style.opacity = 1;
        routeStep2Movie.play();
      }
    }
    if (routeStep3MovieRect < (window.innerHeight * .99)) {
      routeStep3Movie.style.transition = "opacity 2s, transform 2s";
      routeStep3Movie.style.transform = "translateY(-2vw)";
      routeStep3Movie.style.opacity = 1;
      routeStep3Movie.play();
    }
    if (routeStep4MovieRect < (window.innerHeight * .99)) {
      routeStep4Movie.style.transition = "opacity 2s, transform 2s";
      routeStep4Movie.style.transform = "translateY(-2vw)";
      routeStep4Movie.style.opacity = 1;
      routeStep4Movie.play();
    } 
    // This effect was added for the desktop view portion of the project to make the black on black visibility between the route-name and the route-title-content-container not appear as harshly.  It is removed for the tablet and mobile views due to adverse functionality.
    if (window.innerWidth > 1200) {
      if ((routeNameRect * 1.2) > routeTitleContentContainerRect) {
        routeName.style.filter = 'none';
      }
      if ((routeNameRect * 1.2) < routeTitleContentContainerRect) {
        routeName.style.filter = 'blur(2px)';
      }
      if ((routeNameRect * 1.4) < routeTitleContentContainerRect) {
        routeName.style.filter = 'blur(4px)';
      }
      if ((routeNameRect * 1.6) < routeTitleContentContainerRect) {
        routeName.style.filter = 'blur(5px)';
      }
      if ((routeNameRect * 1.8) < routeTitleContentContainerRect) {
        routeName.style.filter = 'blur(6px)';
      }
      if ((routeNameRect * 2) < routeTitleContentContainerRect) {
        routeName.style.filter = 'blur(7px)';
      }
      if ((routeNameRect * 2.2) < routeTitleContentContainerRect) {
        routeName.style.filter = 'blur(8px)';
      }
      if ((routeNameRect * 2.4) < routeTitleContentContainerRect) {
        routeName.style.filter = 'blur(9px)';
      }
      if ((routeNameRect * 2.6) < routeTitleContentContainerRect) {
        routeName.style.filter = 'blur(10px)';
      }
    }
}

// The reason for this function's name is because it applies only to the Portraits and Calligraphy routes since they are the only routes with an additional step (Step 4).
function routeResizePORTANDCAL() {
  var bodyElement = document.querySelector('body');
  bodyElement.style.overflowY = 'auto';
  var tabletViewAndMobileViewInactiveMenu = document.querySelector(".tabletView-and-mobileView-inactive-menu");
  tabletViewAndMobileViewInactiveMenu.style.opacity = '1';
  var tabletViewAndMobileViewMenuContent = document.querySelector(".tabletView-and-mobileView-menu-content")
  tabletViewAndMobileViewMenuContent.style.display = 'none';
  // The following 2 lines of code were added so that the routeName does not get stuck with a blur effect on it when the user resizes the screen to the tablet or mobile view.
  var routeName = document.querySelector(".route-name");
  routeName.style.filter = "none";
  // This effect was added so that the user cannot resize the screen and have the routeStepMovies not be present on the page.  This look is not aesthetically pleasing so this block of code ensures that all of the routeStepMovies will be visible when the window is resized.
  if (window.innerHeight > 1200) {
    var routeStep2Movie = document.querySelector(".route-step2-movie");
    var routeStep3Movie = document.querySelector(".route-step3-movie");
    var routeStep4Movie = document.querySelector(".route-step4-movie");
    routeStep2Movie.style.transform = "translateY(-2vw)";
    routeStep2Movie.style.opacity = 1;
    routeStep2Movie.play();
    routeStep3Movie.style.transform = "translateY(-2vw)";
    routeStep3Movie.style.opacity = 1;
    routeStep3Movie.play();
    routeStep4Movie.style.transform = "translateY(-2vw)";
    routeStep4Movie.style.opacity = 1;
    routeStep4Movie.play();
  }
}

// This function applies to all of the routes other than Calligraphy and Home.
function routeScroll() {
  var routeName = document.querySelector(".route-name");
  var routeNameRect = routeName.getBoundingClientRect().top;
  var routeTitleContentContainer = document.querySelector(".route-title-content-container");
  var routeTitleContentContainerRect = routeTitleContentContainer.getBoundingClientRect().bottom;
  var routeStep2Movie = document.querySelector(".route-step2-movie");
  var routeStep2MovieRect = routeStep2Movie.getBoundingClientRect().top;
  var routeStep3Movie = document.querySelector(".route-step3-movie");
  var routeStep3MovieRect = routeStep3Movie.getBoundingClientRect().top;
    if (window.innerWidth > 1800 || (window.innerWidth <= 1200 && window.innerWidth > 650) || (window.innerWidth < 650 && window.innerHeight <= 1200)) {
      if (routeStep2MovieRect < (window.innerHeight * .99)) {
        routeStep2Movie.style.transition = "opacity 2s, transform 2s";
        routeStep2Movie.style.transform = "translateY(-2vw)";
        routeStep2Movie.style.opacity = 1;
        routeStep2Movie.play();
      }
    }
    if (routeStep3MovieRect < (window.innerHeight * .99)) {
      routeStep3Movie.style.transition = "opacity 2s, transform 2s";
      routeStep3Movie.style.transform = "translateY(-2vw)";
      routeStep3Movie.style.opacity = 1;
      routeStep3Movie.play();
    }
    if (window.innerWidth > 1200) {
      if ((routeNameRect * 1.2) > routeTitleContentContainerRect) {
        routeName.style.filter = 'none';
      }
      if ((routeNameRect * 1.2) < routeTitleContentContainerRect){
        routeName.style.filter = 'blur(2px)';
      }
      if ((routeNameRect * 1.4) < routeTitleContentContainerRect) {
        routeName.style.filter = 'blur(4px)';
      }
      if ((routeNameRect * 1.6) < routeTitleContentContainerRect) {
        routeName.style.filter = 'blur(5px)';
      }
      if ((routeNameRect * 1.8) < routeTitleContentContainerRect) {
        routeName.style.filter = 'blur(6px)';
      }
      if ((routeNameRect * 2) < routeTitleContentContainerRect) {
        routeName.style.filter = 'blur(7px)';
      }
      if ((routeNameRect * 2.2) < routeTitleContentContainerRect) {
        routeName.style.filter = 'blur(8px)';
      }
      if ((routeNameRect * 2.4) < routeTitleContentContainerRect) {
        routeName.style.filter = 'blur(9px)';
      }
      if ((routeNameRect * 2.6) < routeTitleContentContainerRect) {
        routeName.style.filter = 'blur(10px)';
      }
    }
}

// This function applies to all of the routes other than Calligraphy and Home.
function routeResize() {
  var tabletViewAndMobileViewMenuContent = document.querySelector(".tabletView-and-mobileView-menu-content")
  tabletViewAndMobileViewMenuContent.style.display = 'none';
  var bodyElement = document.querySelector('body');
  bodyElement.style.overflowY = 'auto';
  var tabletViewAndMobileViewInactiveMenu = document.querySelector(".tabletView-and-mobileView-inactive-menu");
  tabletViewAndMobileViewInactiveMenu.style.opacity = '1';
  var routeName = document.querySelector(".route-name");
  routeName.style.filter = "none";
  if (window.innerHeight > 1200) {
    var routeStep2Movie = document.querySelector(".route-step2-movie");
    var routeStep3Movie = document.querySelector(".route-step3-movie");
    routeStep2Movie.style.transform = "translateY(-2vw)";
    routeStep2Movie.style.opacity = 1;
    routeStep2Movie.play();
    routeStep3Movie.style.transform = "translateY(-2vw)";
    routeStep3Movie.style.opacity = 1;
    routeStep3Movie.play();
  }
}

function homeResize() {
  var bodyElement = document.querySelector('body');
  bodyElement.style.overflowY = 'auto';
  var tabletViewAndMobileViewInactiveMenu = document.querySelector(".tabletView-and-mobileView-inactive-menu");
  tabletViewAndMobileViewInactiveMenu.style.opacity = '1';
  var tabletViewAndMobileViewMenuContent = document.querySelector(".tabletView-and-mobileView-menu-content")
  tabletViewAndMobileViewMenuContent.style.display = 'none';
  var homeMain = document.querySelector(".home-main");
  if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
  if (window.innerWidth <= 1200) {
  homeMain.style.backgroundSize = "7vw";
  }
  if (window.innerWidth > 1200 ) {
    homeMain.style.backgroundSize = "4vw";
  }
}
}

function homeScroll() {
  var homeAboutBeforeImage = document.querySelector(".home-about-before-image");
  var homeAboutBeforeImageRect = homeAboutBeforeImage.getBoundingClientRect().bottom;
  var homeAboutDuringImage = document.querySelector(".home-about-during-image");
  var homeAboutContentBox = document.querySelector(".home-about-content-box");
  var homeAboutContentBox2 = document.querySelector(".home-about-content-box2");
  var homeAboutContent1 = document.querySelector(".home-about-content1");
  var homeAboutContent2 = document.querySelector(".home-about-content2");
  var homeAboutContent3 = document.querySelector(".home-about-content3");
  var homeAboutContent4 = document.querySelector(".home-about-content4");
  var homeAboutContent5 = document.querySelector(".home-about-content5");
  var homeAboutContent6 = document.querySelector(".home-about-content6");
  var homeAboutContent7 = document.querySelector(".home-about-content7");
  var homeAboutContent8 = document.querySelector(".home-about-content8");
  var homeMobileViewAboutContent1 = document.querySelector(".home-mobileView-about-content1");
  var homeMobileViewAboutContent2 = document.querySelector(".home-mobileView-about-content2");
  var homeMobileViewAboutContent3 = document.querySelector(".home-mobileView-about-content3");
  var homeMobileViewAboutContent4 = document.querySelector(".home-mobileView-about-content4");
  var homeMobileViewAboutContent5 = document.querySelector(".home-mobileView-about-content5");
  var homeMobileViewAboutContent6 = document.querySelector(".home-mobileView-about-content6");
  var homeMobileViewAboutContent7 = document.querySelector(".home-mobileView-about-content7");
  var homeSafariBrowserOnlyAboutAfterImage = document.querySelector(".home-safariBrowserOnly-about-after-image");
  var homeAboutContent1Rect = homeAboutContent1.getBoundingClientRect().top;
  var homeAboutContent2Rect = homeAboutContent2.getBoundingClientRect().top;
  var homeAboutContent3Rect = homeAboutContent3.getBoundingClientRect().top;
  var homeAboutContent4Rect = homeAboutContent4.getBoundingClientRect().top;
  var homeAboutContent5Rect = homeAboutContent5.getBoundingClientRect().top;
  var homeAboutContent6Rect = homeAboutContent6.getBoundingClientRect().top;
  var homeMobileViewAboutContent1Rect = homeMobileViewAboutContent1.getBoundingClientRect().top;
  var homeMobileViewAboutContent2Rect = homeMobileViewAboutContent2.getBoundingClientRect().top;
  var homeMobileViewAboutContent3Rect = homeMobileViewAboutContent3.getBoundingClientRect().top;
  var homeMobileViewAboutContent4Rect = homeMobileViewAboutContent4.getBoundingClientRect().top;
  var homeMobileViewAboutContent5Rect = homeMobileViewAboutContent5.getBoundingClientRect().top;
  var homeMobileViewAboutContent6Rect = homeMobileViewAboutContent6.getBoundingClientRect().top;
    if ((homeAboutBeforeImageRect * .95) < window.innerHeight) {
      homeAboutDuringImage.style.display = "block";
      setTimeout(function() {
        homeAboutDuringImage.style.transition = "transform 2s";
        homeAboutDuringImage.style.transform = "translateY(-10vw)";
        homeAboutContentBox.style.transition = "transform 2s";
        homeAboutContentBox.style.transform = "translateY(-10vw)";
        homeAboutContentBox2.style.transition = "transform 2s";
        homeAboutContentBox2.style.transform = "translateY(-10vw)";
        homeSafariBrowserOnlyAboutAfterImage.style.transition = "transform 2s";
        homeSafariBrowserOnlyAboutAfterImage.style.transform = "translateY(-10vw)";
        // homeIPadImageBackgroundDecoration.style.transition = "height 2s";
        // homeIpadImageBackgroundDecoration.style.height = "73vw";
        homeAboutBeforeImage.style.opacity = 0;
      }, 100);
      setTimeout(function() {
        homeAboutContent1.style.transition = "opacity 1s, transform 1s";
        homeAboutContent1.style.transform = "translateY(-2vw)";
        homeAboutContent1.style.opacity = 1;
        homeMobileViewAboutContent1.style.transition = "opacity 1s, transform 1s";
        homeMobileViewAboutContent1.style.transform = "translateY(-2vw)";
        homeMobileViewAboutContent1.style.opacity = 1;
      }, 1500);
      setTimeout(function() {
        homeAboutContent2.style.transition = "opacity 1s, transform 1s";
        homeAboutContent2.style.transform = "translateY(-2vw)";
        homeAboutContent2.style.opacity = 1;
        homeMobileViewAboutContent2.style.transition = "opacity 1s, transform 1s";
        homeMobileViewAboutContent2.style.transform = "translateY(-2vw)";
        homeMobileViewAboutContent2.style.opacity = 1;
      }, 1700);
      setTimeout(function() {
        homeAboutContent3.style.transition = "opacity 1s, transform 1s";
        homeAboutContent3.style.transform = "translateY(-2vw)";
        homeAboutContent3.style.opacity = 1;
        homeMobileViewAboutContent3.style.transition = "opacity 1s, transform 1s";
        homeMobileViewAboutContent3.style.transform = "translateY(-2vw)";
        homeMobileViewAboutContent3.style.opacity = 1;
      }, 1900);
      setTimeout(function() {
        homeAboutContent4.style.transition = "opacity 1s, transform 1s";
        homeAboutContent4.style.transform = "translateY(-2vw)";
        homeAboutContent4.style.opacity = 1;
        homeMobileViewAboutContent4.style.transition = "opacity 1s, transform 1s";
        homeMobileViewAboutContent4.style.transform = "translateY(-2vw)";
        homeMobileViewAboutContent4.style.opacity = 1;
      }, 2100);
      setTimeout(function() {
        homeAboutContent5.style.transition = "opacity 1s, transform 1s";
        homeAboutContent5.style.transform = "translateY(-2vw)";
        homeAboutContent5.style.opacity = 1;
        homeMobileViewAboutContent5.style.transition = "opacity 1s, transform 1s";
        homeMobileViewAboutContent5.style.transform = "translateY(-2vw)";
        homeMobileViewAboutContent5.style.opacity = 1;
      }, 2300);
      setTimeout(function() {
        homeAboutContent6.style.transition = "opacity 1s, transform 1s";
        homeAboutContent6.style.transform = "translateY(-2vw)";
        homeAboutContent6.style.opacity = 1;
        homeMobileViewAboutContent6.style.transition = "opacity 1s, transform 1s";
        homeMobileViewAboutContent6.style.transform = "translateY(-2vw)";
        homeMobileViewAboutContent6.style.opacity = 1;
      }, 2500);
      setTimeout(function() {
        homeAboutContent7.style.transition = "opacity 1s, transform 1s";
        homeAboutContent7.style.transform = "translateY(-2vw)";
        homeAboutContent7.style.opacity = 1;
        homeMobileViewAboutContent7.style.transition = "opacity 1s, transform 1s";
        homeMobileViewAboutContent7.style.transform = "translateY(-2vw)";
        homeMobileViewAboutContent7.style.opacity = 1;
      }, 2700);
      setTimeout(function() {
        homeAboutContent8.style.transition = "opacity 1s, transform 1s";
        homeAboutContent8.style.transform = "translateY(-2vw)";
        homeAboutContent8.style.opacity = 1;
      }, 2900);
      // setTimeout(function() {
        // homeAboutDuringImage.style.transition = "transform 2s";
        // homeAboutDuringImage.style.transform = "translateY(-10vw)";
        // homeAboutContentBox.style.transition = "transform 2s";
        // homeAboutContentBox.style.transform = "translateY(-10vw";
      // }, 3100);
    }
  if ((homeAboutBeforeImageRect * .95) > window.innerHeight) {
    homeAboutContentBox.style.border = ".3vw solid rgba(0, 0, 0, 0)";
    homeAboutContentBox.style.backgroundColor = "rgb(225, 224, 224, 0.0)";
  }
  if ((homeAboutBeforeImageRect * .95) < window.innerHeight) {
    homeAboutContentBox.style.border = ".3vw solid rgba(0, 0, 0, 0.15)";
    homeAboutContentBox.style.backgroundColor = "rgb(225, 224, 224, 0.15)";
  }
  if (window.innerHeight >= homeAboutContent1Rect || window.innerHeight >= homeAboutContent1Rect) {
    homeAboutContentBox.style.border = ".3vw solid rgba(0, 0, 0, 0.3)";
    homeAboutContentBox.style.backgroundColor = "rgb(225, 224, 224, 0.3)";
  }
  if (window.innerHeight >= homeAboutContent2Rect || window.innerHeight >= homeAboutContent2Rect) {
    homeAboutContentBox.style.border = ".3vw solid rgba(0, 0, 0, 0.35)";
    // homeAboutContentBox.style.backgroundColor = "rgb(225, 224, 224, 0.4)";
    homeAboutContentBox.style.backgroundColor = "rgb(225, 224, 224, 0.45)";
  }
  if (window.innerHeight >= homeAboutContent3Rect || window.innerHeight >= homeAboutContent3Rect) {
    homeAboutContentBox.style.border = ".3vw solid rgba(0, 0, 0, 0.6)";
    // homeAboutContentBox.style.backgroundColor = "rgb(225, 224, 224, 0.42)";
    homeAboutContentBox.style.backgroundColor = "rgb(225, 224, 224, 0.6)";
  }
  if (window.innerHeight >= homeAboutContent4Rect || window.innerHeight>= homeAboutContent4Rect) {
    homeAboutContentBox.style.border = ".3vw solid rgba(0, 0, 0, 0.75)";
    homeAboutContentBox.style.backgroundColor = "rgb(225, 224, 224, 0.75)";
  }
  if (window.innerHeight >= homeAboutContent5Rect || window.innerHeight >= homeAboutContent5Rect) {
    homeAboutContentBox.style.border = ".3vw solid rgba(0, 0, 0, 0.9)";
    homeAboutContentBox.style.backgroundColor = "rgb(225, 224, 224, 0.9)";
  }
  if (window.innerHeight >= homeAboutContent6Rect || window.innerHeight >= homeAboutContent6Rect) {
    homeAboutContentBox.style.border = ".3vw solid rgba(0, 0, 0, 1)";
    homeAboutContentBox.style.backgroundColor = "rgb(225, 224, 224, 1)";
  }
  if (homeAboutBeforeImageRect > window.innerHeight) {
    homeAboutContentBox2.style.border = "1vw solid rgba(0, 0, 0, 0)";
    homeAboutContentBox2.style.backgroundColor = "rgb(225, 224, 224, 0.0)";
  }
  if (homeAboutBeforeImageRect < window.innerHeight) {
    homeAboutContentBox2.style.border = "1vw solid rgba(0, 0, 0, 0.15)";
    homeAboutContentBox2.style.backgroundColor = "rgb(225, 224, 224, 0.15)";
  }
  if (window.innerHeight >= homeMobileViewAboutContent1Rect) {
    homeAboutContentBox2.style.border = "1vw solid rgba(0, 0, 0, 0.3)";
    homeAboutContentBox2.style.backgroundColor = "rgb(225, 224, 224, 0.3)";
  }
  if (window.innerHeight >= homeMobileViewAboutContent2Rect) {
    homeAboutContentBox2.style.border = "1vw solid rgba(0, 0, 0, 0.45)";
    homeAboutContentBox2.style.backgroundColor = "rgb(225, 224, 224, 0.45)";
  }
  if (window.innerHeight >= homeMobileViewAboutContent3Rect) {
    homeAboutContentBox2.style.border = "1vw solid rgba(0, 0, 0, 0.6)";
    homeAboutContentBox2.style.backgroundColor = "rgb(225, 224, 224, 0.6)";
  }
  if (window.innerHeight >= homeMobileViewAboutContent4Rect) {
    homeAboutContentBox2.style.border = "1vw solid rgba(0, 0, 0, 0.75)";
    homeAboutContentBox2.style.backgroundColor = "rgb(225, 224, 224, 0.75)";
  }
  if (window.innerHeight >= homeMobileViewAboutContent5Rect) {
    homeAboutContentBox2.style.border = "1vw solid rgba(0, 0, 0, 0.9)";
    homeAboutContentBox2.style.backgroundColor = "rgb(225, 224, 224, 0.9)";
  }
  if (window.innerHeight >= homeMobileViewAboutContent6Rect) {
    homeAboutContentBox2.style.border = "1vw solid rgba(0, 0, 0, 1)";
    homeAboutContentBox2.style.backgroundColor = "rgb(225, 224, 224, 1)";
  }


  // var homeIpadImageBackgroundDecoration = document.querySelector(".home-iPad-image-background-decoration");
  // var homeIpadImageBackgroundDecorationRect = homeIpadImageBackgroundDecoration.getBoundingClientRect().bottom;
  // var iPad1 = document.querySelector('.iPad1');
  // var iPad2 = document.querySelector('.iPad2');
  // var iPad3 = document.querySelector('.iPad3');
  // var iPad4 = document.querySelector('.iPad4');
  // var finished1 = document.querySelector('.finished1');
  // var finished2 = document.querySelector('.finished2');
  // var finished3 = document.querySelector('.finished3');
  // var finished4 = document.querySelector('.finished4');
  // var art1 = document.querySelector('.art100');
  // var art2 = document.querySelector('.art200');
  // var art3 = document.querySelector('.art300');
  // var art4 = document.querySelector('.art400');
  // var p1 = document.querySelector('.p1');
  // var p2 = document.querySelector('.p2');
  // var p3 = document.querySelector('.p3');
  // var p4 = document.querySelector('.p4');

  // if (window.innerHeight < homeIpadImageBackgroundDecorationRect * .5) {
    // iPad1.style.opacity = '0';
    // iPad2.style.opacity = '0';
    // iPad3.style.opacity = '0';
    // iPad4.style.opacity = '0';
    // finished1.style.opacity = '0';
    // finished2.style.opacity = '0';
    // finished3.style.opacity = '0';
    // finished4.style.opacity = '0';
  // }
  // if (window.innerHeight > homeIpadImageBackgroundDecorationRect * .5 && window.innerHeight <= homeIpadImageBackgroundDecorationRect * .7) {
    // iPad1.style.opacity = '0';
    // iPad2.style.opacity = '0';
    // iPad3.style.opacity = '0';
    // iPad4.style.opacity = '1';
    // finished1.style.opacity = '1';
    // finished2.style.opacity = '0';
    // finished3.style.opacity = '0';
    // finished4.style.opacity = '0';
  // }
  // if (window.innerHeight > homeIpadImageBackgroundDecorationRect * .7 && window.innerHeight <= homeIpadImageBackgroundDecorationRect * .8) {
    // iPad1.style.opacity = '0';
    // iPad2.style.opacity = '0';
    // iPad3.style.opacity = '1';
    // iPad4.style.opacity = '0';
    // finished1.style.opacity = '0';
    // finished2.style.opacity = '1';
    // finished3.style.opacity = '0';
    // finished4.style.opacity = '0';
  // }
  // if (window.innerHeight > homeIpadImageBackgroundDecorationRect * .8 && window.innerHeight <= homeIpadImageBackgroundDecorationRect * .9) {
    // iPad1.style.opacity = '0';
    // iPad2.style.opacity = '1';
    // iPad3.style.opacity = '0';
    // iPad4.style.opacity = '0';
    // finished1.style.opacity = '0';
    // finished2.style.opacity = '0';
    // finished3.style.opacity = '1';
    // finished4.style.opacity = '0';
  // }
  // if (window.innerHeight > homeIpadImageBackgroundDecorationRect * .9 && window.innerHeight <= homeIpadImageBackgroundDecorationRect * 1) {
    // iPad1.style.opacity = '1';
    // iPad2.style.opacity = '0';
    // iPad3.style.opacity = '0';
    // iPad4.style.opacity = '0';
    // finished1.style.opacity = '0';
    // finished2.style.opacity = '0';
    // finished3.style.opacity = '0';
    // finished4.style.opacity = '1';
  // }
  // if (window.innerHeight > homeIpadImageBackgroundDecorationRect * .8 && window.innerHeight <= homeIpadImageBackgroundDecorationRect * .9) {
  //   art4.style.opacity = '1';
  //   art4.style.marginTop = '12vw';
  // }
  // if (window.innerHeight > homeIpadImageBackgroundDecorationRect * .9) {
  //   art4.style.opacity = '1';
  //   art4.style.marginTop = '24vw';
  // }
  // if (window.innerHeight > homeIpadImageBackgroundDecorationRect) {
  //   art1.style.display = 'none';
  //   art2.style.display = 'none';
  //   art3.style.display = 'none';
  //   art4.style.display = 'flex';
  // }
}
export { homeScroll, homeResize, routeScroll, routeResize, routeScrollPORTANDCAL, routeResizePORTANDCAL };