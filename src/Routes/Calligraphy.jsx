import "../App.css";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import tabletViewAndMobileViewInactiveMenu from '../Media/tabletView-and-mobileView-inactive-menu.png'
import tabletViewAndMobileViewactiveMenu from '../Media/tabletView-and-mobileView-active-menu.png'
import { routeResizePORTANDCAL, routeScrollPORTANDCAL } from '../App';

function Calligraphy() {

    function scrollToTop() {
        var bodyElement = document.querySelector('body');
        const tabletViewAndMobileViewMenuContent = document.querySelector(".tabletView-and-mobileView-menu-content");
        const tabletViewAndMobileViewInactiveMenu = document.querySelector(".tabletView-and-mobileView-inactive-menu");
        bodyElement.style.overflowY = 'auto';
        tabletViewAndMobileViewMenuContent.style.display = 'none';
        tabletViewAndMobileViewInactiveMenu.style.opacity = '1';
        window.scrollTo(0, 0);
    }; 

    const [isDivVisible, setIsDivVisible] = useState(false);

    const toggleDivVisibility = () => {
        setIsDivVisible(!isDivVisible);
        const bodyElement = document.querySelector('body');
        const tabletViewAndMobileViewMenuContent = document.querySelector(".tabletView-and-mobileView-menu-content");
        const tabletViewAndMobileViewInactiveMenu = document.querySelector(".tabletView-and-mobileView-inactive-menu");
        tabletViewAndMobileViewInactiveMenu.style.opacity = tabletViewAndMobileViewInactiveMenu.style.opacity === '0' ? '1' : '0';
        tabletViewAndMobileViewMenuContent.style.display = tabletViewAndMobileViewMenuContent.style.display === 'flex' ? 'none' : 'flex';
        bodyElement.style.overflowY = bodyElement.style.overflowY === 'hidden' ? 'auto' : 'hidden';
    };

    useEffect(() => {

        window.addEventListener('resize', routeResizePORTANDCAL);
        window.addEventListener('scroll', routeScrollPORTANDCAL);

        return () => {
            window.removeEventListener('resize', routeResizePORTANDCAL);
            window.removeEventListener('scroll', routeScrollPORTANDCAL);
        }
    })
  
    const [opacity, setOpacity] = useState(0);
    const [translateY, setTranslateY] = useState(0);
    // This useEffect was added so that step 1 is transitioned into the page on pageload regardless of any conditions.  For a breakdown of how it works, view the first useEffect in the Portraits.jsx route because it is identical.
    useEffect(() => {
        const transitionDuration = 1000; 
        const framesPerSecond = 60;
        const opacityIncrement = 1 / (transitionDuration / (1000 / framesPerSecond));
        const translateYIncrement = -2 / (transitionDuration / (1000 / framesPerSecond));
        let interval;

        interval = setInterval(() => {
          setOpacity((prevOpacity) => {
            if (prevOpacity < 1) {
              return prevOpacity + opacityIncrement;
            } else {
              clearInterval(interval); 
              return 1;
            }
          });
      
          setTranslateY((prevTranslateY) => {
            if (prevTranslateY < 2) {
              return prevTranslateY + translateYIncrement;
            } else {
              return -2; 
            }
          });
        }, 1000 / framesPerSecond);
        return () => {
          clearInterval(interval);
        };
      }, []); 

    const [opacity2, setOpacity2] = useState(0);
    const [translateY2, setTranslateY2] = useState(0);
    // This useEffect was added so at certain viewport widths and heights, step 2 is transitioned into the page on pageload for a better aesthetic appearance.  For a breakdown of how it works, view the first useEffect in the Portraits.jsx route because it is nearly identical.
    useEffect(() => {
      var routeStep2Movie = document.querySelector(".route-step2-movie");
      const transitionDuration = 1000; 
      const framesPerSecond = 60;
      const opacityIncrement = 1 / (transitionDuration / (1000 / framesPerSecond));
      const translateYIncrement = -2 / (transitionDuration / (1000 / framesPerSecond));
      let interval;

      if (((window.innerWidth <= 1800 && window.innerWidth > 1200) && (window.innerHeight > 1200)) || (window.innerWidth <= 650 && window.innerHeight > 1200)) {
        routeStep2Movie.play();
        interval = setInterval(() => {
          setOpacity2((prevOpacity) => {
            if (prevOpacity < 1) {
              return prevOpacity + opacityIncrement;
            } else {
              clearInterval(interval); 
              return 1;
            }
          });

          setTranslateY2((prevTranslateY) => {
            if (prevTranslateY < 2) {
              return prevTranslateY + translateYIncrement;
            } else {
              return -2;
            }
          });
        }, 1000 / framesPerSecond);
      } 
      return () => {
        clearInterval(interval);
      };
    }, []);
    
    return (
        // Refer to the Home.jsx page for a breakdown of the HTMl tag naming and structure.
        <>
            <header class="route-header">
                <div class="route-title-content-container">
                    <h1 class="route-title" onClick={scrollToTop}><Link to="/"> artistix </Link></h1>
                    <img class="tabletView-and-mobileView-inactive-menu" onClick={toggleDivVisibility} src={tabletViewAndMobileViewInactiveMenu} alt="inactive"></img>
                    <img class="tabletView-and-mobileView-active-menu" src={tabletViewAndMobileViewactiveMenu} alt="active"></img>
                    <nav class="route-desktopView-nav">
                        <ul class="route-desktopView-nav-ul">
                            <li class="route-desktopView-nav-li" onClick={scrollToTop}><Link to="/"> Home </Link></li>
                            <li class="route-desktopView-nav-li" onClick={scrollToTop}><Link to="/Portraits"> Portraits </Link></li>
                            <li class="route-desktopView-nav-li" onClick={scrollToTop}><Link to="/Cartoons"> Cartoons </Link></li>
                            <li class="route-desktopView-nav-li" onClick={scrollToTop}><Link to="/Calligraphy"> Calligraphy </Link></li>
                            <li class="route-desktopView-nav-li" onClick={scrollToTop}><Link to="/Animations"> Animations </Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div class="tabletView-and-mobileView-menu-content" alt="content">
                <div class="tabletView-and-mobileView-menu-cover"></div>
                <h2 class="tabletView-and-mobileView-menu-content-title"> Learn To Draw</h2>
                <ul class="tabletView-and-mobileView-menu-content-ul">
                    <li class="tabletView-and-mobileView-menu-content-li"> <p class="tabletView-and-mobileView-menu-content-p1" onClick={scrollToTop}><Link to="/Portraits"> Portraits </Link></p> </li>
                    <li class="tabletView-and-mobileView-menu-content-li"> <p class="tabletView-and-mobileView-menu-content-p2" onClick={scrollToTop}><Link to="/Cartoons"> Cartoons </Link></p> </li>
                    <li class="tabletView-and-mobileView-menu-content-li"> <p class="tabletView-and-mobileView-menu-content-p3" onClick={scrollToTop}><Link to="/Calligraphy"> Calligraphy </Link></p> </li>
                    <li class="tabletView-and-mobileView-menu-content-li"> <p class="tabletView-and-mobileView-menu-content-p4" onClick={scrollToTop}><Link to="/Animations"> Animations </Link></p> </li>
                </ul>
                <p class="tabletView-and-mobileView-menu-content-homeLink" onClick={scrollToTop}><Link to="/"> Back To Homepage </Link></p>
            </div>


            <main class="route-mainPORTANDCAL">
                <span class="route-name">Calligraphy</span>
                <span class="route-procreate-app">( All designs are done using the Procreate app for IPad )</span>
                <span class="route-step1">Step 1</span>
                <video autoPlay playsInline muted loop class="route-step1-movie" style={{ opacity: opacity, transform: `translateY(${translateY}vw)` }}><source src="https://artistix.blob.core.windows.net/artistix/route-cal-step1.mp4" type="video/mp4" /></video>
                <span class="route-step2">Step 2</span>
                <video muted playsInline loop class="route-step2-movie" style={{ opacity: opacity2, transform: `translateY(${translateY2}vw)` }}><source src="https://artistix.blob.core.windows.net/artistix/route-cal-step2.mp4" type="video/mp4" /></video>
                <span class="route-step3">Step 3</span>
                <video muted playsInline loop class="route-step3-movie"><source src="https://artistix.blob.core.windows.net/artistix/route-cal-step3.mp4" type="video/mp4" /></video>
                <span class="route-step4">Step 4</span>
                <video muted playsInline loop class="route-step4-movie"><source src="https://artistix.blob.core.windows.net/artistix/route-cal-step4.mp4" type="video/mp4" /></video>
            </main>

        </>
    )
}

export default Calligraphy;
