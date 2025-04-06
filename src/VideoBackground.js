import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Navbar.css";

const VideoBackground = () => {
  const videoRef = useRef(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const navbar = navbarRef.current;
    let src = video.currentSrc || video.src;
    
    gsap.registerPlugin(ScrollTrigger);

    const once = (el, event, fn, opts) => {
      const onceFn = function (e) {
        el.removeEventListener(event, onceFn);
        fn.apply(this, arguments);
      };
      el.addEventListener(event, onceFn, opts);
      return onceFn;
    };

    // Enable video autoplay on mobile when user interacts
    once(document.documentElement, "touchstart", function () {
      video.play();
      video.pause();
    });


   


    // Hide/Show Navbar on Scroll
    ScrollTrigger.create({
      trigger: video,
      start: "top top",
      end: "+=146%",
      scrub: true,
      onUpdate: (self) => {
        if (self.progress >= 1) {
          gsap.to(navbar, {
            y: -100, 
            opacity: 0,
            duration: 0.1,
            onComplete: () => {
              navbar.style.display = "none"; // Hide the navbar completely
            },
          });
        } else {
          navbar.style.display = "flex"; // Restore when scrolling up
          gsap.to(navbar, { y: 0, opacity: 1, duration: 0.1 });
        }
      },
    });

    // Scroll-controlled Video Playback
    const tl = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: "#container",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    once(video, "loadedmetadata", () => {
      tl.fromTo(
        video,
        { currentTime: 0 },
        { currentTime: video.duration || 1, ease: "none" }
      );
    });

    // Optimize Video Loading (Reduces Lag)
    setTimeout(() => {
      if (window.fetch) {
        fetch(src)
          .then((response) => response.blob())
          .then((response) => {
            const blobURL = URL.createObjectURL(response);
            const t = video.currentTime;
            once(document.documentElement, "touchstart", function () {
              video.play();
              video.pause();
            });
            video.setAttribute("src", blobURL);
            video.currentTime = t + 0.01;
          });
      }
    }, 1000);
  }, []);

  return (
    <>
      <nav ref={navbarRef} className="navbar">
        <div className="navbar-logo">
          <img src={`${process.env.PUBLIC_URL}/W_Logo.png`} alt="Watermelon Logo" className="logo-image" />
          WATERMELON-SUGAR
        </div>
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#why-us">Why Us?</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>

      <div id="container">
        <video ref={videoRef} id="carousel-video" className="video-background" muted loop>
          <source src={`${process.env.PUBLIC_URL}/Watermelon.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
};

export default VideoBackground;
