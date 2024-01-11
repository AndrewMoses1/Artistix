import '../App.css'
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LearnTextAnimation from '../StandAloneComponents/LearnTextAnimation';
import home1stTutorial from "../Media/home-1st-tutorial.png";
import home2ndTutorial from "../Media/home-2nd-tutorial.png";
import home1stCalligraphyBrushImage from "../Media/home-1st-calligraphy-brush-image.png";
import home1stTextureBrushImage from "../Media/home-1st-texture-brush-image.png";
import home2ndTextureBrushImage from "../Media/home-2nd-texture-brush-image.png";
import home2ndCalligraphyBrushImage from "../Media/home-2nd-calligraphy-brush-image.png";
import home3rdCalligraphyBrushImage from "../Media/home-3rd-calligraphy-brush-image.png";
import home3rdTextureBrushImage from "../Media/home-3rd-texture-brush-image.png";
import home4thTextureBrushImage from "../Media/home-4th-texture-brush-image.png";
import home4thCalligraphyBrushImage from "../Media/home-4th-calligraphy-brush-image.png";
import homeAboutBeforeImage from '../Media/home-about-before-image.png';
import homeAboutDuringImage from '../Media/home-about-during-image.gif';
import homeSafariBrowserOnlyAboutAfterImage from '../Media/home-safariBrowserOnly-about-after-image.png';
import tabletViewAndMobileViewInactiveMenu from '../Media/tabletView-and-mobileView-inactive-menu.png';
import tabletViewAndMobileViewactiveMenu from '../Media/tabletView-and-mobileView-active-menu.png';
import { homeResize, homeScroll } from '../App';



// A viewport width (responsive unit) structure was used for the entire project because the nature of the home-desktopView-video-banner made it more aesthetically appealing to do it this way.
// Typically, this type of structure is not one that I like to use, but the home-desktopView-video-banner was very specific and detailed concerning its width and height dimensions that it couldnt be widened or shortened upon window resize.
// Most videos, when resized, can add additional content or remove content and still look visually pleasing.  However, that was not the case with the home-desktopView-video-banner and a viewport width responsive structure was needed.
function Home() {

    function scrollToTop() {
        var bodyElement = document.querySelector('body');
        const tabletViewAndMobileViewMenuContent = document.querySelector(".tabletView-and-mobileView-menu-content");
        const tabletViewAndMobileViewInactiveMenu = document.querySelector(".tabletView-and-mobileView-inactive-menu");
        bodyElement.style.overflowY = 'auto';
        tabletViewAndMobileViewMenuContent.style.display = 'none';
        tabletViewAndMobileViewInactiveMenu.style.opacity = '1';
        window.scrollTo(0, 0);
    }; 

    useEffect(() => {
        // The following if statement was added because the gif image was being cached in Safari browsers so it was having an adverse effect.  This block of code removes the gif image altogether in Safari browsers and degrades gracefully with a regular png.
        if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
            var homeAboutBeforeImage = document.querySelector(".home-about-before-image");
            var homeAboutDuringImage = document.querySelector(".home-about-during-image");
            var homeSafariBrowserOnlyAboutAfterImage = document.querySelector(".home-safariBrowserOnly-about-after-image");
            var homeMobileViewAboutContent1 = document.querySelector(".home-mobileView-about-content1");
            var homeMain = document.querySelector(".home-main");
            homeAboutBeforeImage.style.position = 'absolute';
            homeAboutDuringImage.style.display = 'none';
            homeAboutBeforeImage.style.opacity = 0;
            homeAboutDuringImage.style.opacity = 0;
            homeSafariBrowserOnlyAboutAfterImage.style.display = 'flex';
            if (window.innerWidth <= 600) {
            homeMobileViewAboutContent1.style.marginTop = "-2vw";
            }
            if (window.innerWidth <= 1200) {
                homeMain.style.backgroundSize = "7vw";
                }
            if (window.innerWidth > 1200 ) {
                  homeMain.style.backgroundSize = "4vw";
                }
        } else {
        }
            window.addEventListener('resize', homeResize);
            window.addEventListener('scroll', homeScroll);
        return () => {
            window.removeEventListener('resize', homeResize);
            window.removeEventListener('scroll', homeScroll);
        }
    }, []);

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
    

    return (
        // Tags are named based on their route first and then their view style (the three viewstyles are desktopView, tabletView, and mobileView).  If a tag doesn't have a view style in its naming then it applies to all view styles.
        // If a tag doesnt have a route at the beginning then it applies to all routes in the project.  If it has the word route at the beginning then it applies to most routes.  Exceptions will be placed at the end of the tag in capital letters.  
        <>
            <header class="home-header">
                <div class="home-title-content-container">
                    <h1 class="home-title" onClick={scrollToTop}><Link to="/"> artistix </Link></h1>
                    <LearnTextAnimation />
                    <img class="tabletView-and-mobileView-inactive-menu" onClick={toggleDivVisibility} src={tabletViewAndMobileViewInactiveMenu} alt="inactive"></img>
                    <img class="tabletView-and-mobileView-active-menu" src={tabletViewAndMobileViewactiveMenu} alt="active"></img>
                    <nav class="home-desktopView-nav">
                        <ul class="home-desktopView-nav-ul">
                            <li class="home-desktopView-nav-li" onClick={scrollToTop}><Link to="/"> Home </Link></li>
                            <li class="home-desktopView-nav-li" onClick={scrollToTop}><Link to="/Portraits"> Portraits </Link></li>
                            <li class="home-desktopView-nav-li" onClick={scrollToTop}><Link to="/Cartoons"> Cartoons </Link></li>
                            <li class="home-desktopView-nav-li" onClick={scrollToTop}><Link to="/Calligraphy"> Calligraphy </Link></li>
                            <li class="home-desktopView-nav-li" onClick={scrollToTop}><Link to="/Animations"> Animations </Link></li>
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
            <video autoPlay muted loop playsInline class="home-desktopView-video-banner"> <source src="https://artistix.blob.core.windows.net/artistix/home-desktopView-video-banner.mp4" type="video/mp4" /> </video>
            <video autoPlay muted loop playsInline class="home-tabletView-video-banner"> <source src="https://artistix.blob.core.windows.net/artistix/home-tabletView-video-banner.mp4" type="video/mp4" /> </video>
            <video autoPlay muted loop playsInline class="home-mobileView-video-banner"> <source src="https://artistix.blob.core.windows.net/artistix/home-mobileView-video-banner.mp4" type="video/mp4" /> </video>
            <main class="home-main">
                <div class="home-tutorials">
                    <div class="home-1st-tutorial">
                        <img class="home-1st-tutorial-image" src={home1stTutorial} alt="home1st"></img>
                        <div class="home-1st-tutorial-cover"></div>
                        <p class="home-1st-tutorial-youtube-text">YouTube &nbsp;Tutorial</p>
                        <p class="home-1st-tutorial-artist-text">Artist: Cory Romeiser</p>
                            { /*eslint-disable-next-line */ }
                        <a class="home-1st-tutorial-link" href="https://www.youtube.com/watch?v=W23J3wTR1VU&t=103s"></a>
                    </div> 
                    <p class="home-tabletView-and-mobileView-middle-youtube-text">YouTube Tutorials</p>
                    <div class="home-2nd-tutorial">
                        <img class="home-2nd-tutorial-image" src={home2ndTutorial} alt="home2nd"></img>
                        <div class="home-2nd-tutorial-cover"></div>
                        <p class="home-2nd-tutorial-youtube-text">YouTube &nbsp;Tutorial</p>
                        <p class="home-2nd-tutorial-artist-text">Artist: Lisa Glanz</p>
                            { /*eslint-disable-next-line */ }
                        <a class="home-2nd-tutorial-link" href="https://www.youtube.com/watch?v=NZ5W05iSgg4"></a>
                    </div>
                </div>
                <div class="home-brushes">
                    <div class="home-wavy-rectangle1"></div>
                    <div class="home-wavy-rectangle2"></div>
                </div>
                <p class="home-brush-text">Procreate Brush Sets</p>
                <div class="home-brush-sets-all">
                    <div class="home-brush-sets-1st">
                        <a class="home-brush-sets-a-tags" href="https://www.etsy.com/listing/675326191/the-ultimate-procreate-lettering-bundle"> <img class="home-1st-calligraphy-set" src={home1stCalligraphyBrushImage} alt="brush1a"></img> </a>
                        <a class="home-brush-sets-a-tags" href="https://www.truegrittexturesupply.com/products/grain-shader-brush-set"> <img class="home-1st-texture-set" src={home1stTextureBrushImage} alt="brush2a"></img> </a>
                    </div>
                    <div class="home-brush-sets-2nd">
                        <a class="home-brush-sets-a-tags" href="https://www.designcuts.com/product/delicious-texture-brushes-stamps-for-procreate"> <img class="home-2nd-texture-set" src={home2ndTextureBrushImage} alt="brush3a"></img> </a>
                        <a class="home-brush-sets-a-tags" href="https://creativemarket.com/mollysuberthorpe/4690844-Calligraphy-Nibs-Procreate-Brush-Set?utm_source=google&utm_medium=cpc&utm_campaign=PPC_GOOG_PerfMax_US_All&utm_content=&utm_term=&gad_source=1&gclid=CjwKCAiA-bmsBhAGEiwAoaQNmsttAvKWd8wjkS8Kd78eZoNDjl2DtGSQ_YnEef7Mak8AyDjpTAcP4hoC2xUQAvD_BwE"> <img class="home-2nd-calligraphy-set" src={home2ndCalligraphyBrushImage} alt="brush4a"></img> </a>
                    </div>
                    <div class="home-brush-sets-3rd">
                        <a class="home-brush-sets-a-tags" href="https://www.designcuts.com/product/lettering-calligraphy-brush-set-for-procreate"> <img class="home-3rd-calligraphy-set" src={home3rdCalligraphyBrushImage} alt="brush5a"></img> </a>
                        <a class="home-brush-sets-a-tags" href="https://www.theme-junkie.com/procreate-texture-brushes"> <img class="home-3rd-texture-set" src={home3rdTextureBrushImage} alt="brush6a"></img> </a>
                    </div>
                    <div class="home-brush-sets-4th">
                        <a class="home-brush-sets-a-tags" href="https://www.lisaglanz.com/shop/the-magic-canvas-procreate-texture-overlay-documents"> <img class="home-4th-texture-set" src={home4thTextureBrushImage} alt="brush7a"></img> </a>
                        <a class="home-brush-sets-a-tags" href="https://create.every-tuesday.com/products/font-lovers-procreate-lettering-brushes"> <img class="home-4th-calligraphy-set" src={home4thCalligraphyBrushImage} alt="brush8a"></img> </a>
                    </div>
                </div>
                <div class="home-1st-pink-line"></div>
                <div class="home-2nd-pink-line"></div>
                <div class="home-about-content-box"></div>
                <div class="home-about-content-box2"></div>
                    {/* home-about-before-image and home-about-during-image are both aligned to the left in the mobile view because the animation uses the spacing to the right of the About text, which was causing overflowX issues. */}
                <img class="home-about-before-image" src={homeAboutBeforeImage} alt="homeaboutbefore"></img>
                <img class="home-about-during-image" src={homeAboutDuringImage} alt="homeaboutduring"></img>
                <img class="home-safariBrowserOnly-about-after-image" src={homeSafariBrowserOnlyAboutAfterImage} alt="homeaboutsafari"></img>
                <p class="home-about-content1"> Artistix was created for those looking to </p>
                <p class="home-about-content2"> improve their art skills. &nbsp;Here you will find </p>
                <p class="home-about-content3"> key concepts and insightful information that </p>
                <p class="home-about-content4"> will make the learning process much quicker. </p>
                <p class="home-about-content5"> I began my art journey 2 months ago and quickly </p>
                <p class="home-about-content6"> learned that knowing the fundamentals and </p>
                <p class="home-about-content7"> developing coordination through practice are </p>
                <p class="home-about-content8"> the keys to becoming a better artist. </p>
                    {/* home-mobileView-about-content1-7 was shortened from its original state because it looked better than having a long text box.  Also, enough of the text remained to get the point across.  */}
                    {/* home-mobileView-about-content1-7 are aligned to the right of the home-about-content-box2 for aesthetic purposes related to the problem explained in the note for home-about-before-image up above */}
                <p class="home-mobileView-about-content1"> Artistix was created for </p>
                <p class="home-mobileView-about-content2"> those looking to improve </p>
                <p class="home-mobileView-about-content3"> their art skills. &nbsp;Here you</p>
                <p class="home-mobileView-about-content4"> will find key concepts and</p>
                <p class="home-mobileView-about-content5"> insightful information that </p>
                <p class="home-mobileView-about-content6"> will make the learning process </p>
                <p class="home-mobileView-about-content7"> much quicker. </p>
            </main>
        </>
    )

}
export default Home;
