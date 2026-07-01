import { useState, useEffect, useRef } from "react";
import logo from "./assets/logo.png";
import momentuLogo from "./assets/momentu-logo.png";
import meta from "./assets/meta-logo.png";
import togetherLogo from "./assets/togetherlabs.png";
import vertualizeLogo from "./assets/vertualize.png";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";
import img6 from "./assets/img6.png";
import img7 from "./assets/img7.png";
import img8 from "./assets/img8.png";
import img9 from "./assets/img9.png";
import img10 from "./assets/img10.png";
import img11 from "./assets/img11.jpg";
import img17 from "./assets/img17.png"
import video1 from "./assets/Orc_Video.mp4";
import profile from "./assets/profile.png";
import horrorBg from "./assets/horrorBg.jpg";
import render from './assets/render.png'
import render2 from './assets/render2.png'
import img14 from "./assets/img14.png";
import img15 from "./assets/img15.png";
import { softwareLogos } from "./assets/software-logos";



const skills = [
  "ENVIRONMENT DESIGN",
  "ENVIRONMENT & PROPS MODELING",
  "SCULPTING",
  "RETOPOLOGY & OPTIMIZATION",
  "UV MAPPING",
  "SHADERS & TEXTURING",
  "GAME SHADERS",
  "LIGHTING COMPOSITION",
  "REAL-TIME 3D VISUALIZATION",
  "KEYART COMPOSITION",
  "CONCEPT ART",
  "ENVIRONMENT STORYTELLING",
  "CINEMATIC VISUAL DESIGN & RENDERING",
];

export default function App() {


  // Inside your App function:
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [loading, setLoading] = useState(true);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1029);
  // iphone video
  //const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // 1. Force muted again (iOS fix)
    video.defaultMuted = true;
    video.muted = true;

    const handlePlay = async () => {
      try {
        await video.play();
      } catch (_error) {
        // 2. Fallback: Play on first user interaction
        const playOnGesture = () => {
          video.play();
          ['click', 'touchstart', 'keydown'].forEach(evt =>
            window.removeEventListener(evt, playOnGesture)
          );
        };

        ['click', 'touchstart', 'keydown'].forEach(evt =>
          window.addEventListener(evt, playOnGesture)
        );
      }
    };

    if (!loading) {
      handlePlay();
    }
  }, [loading]);



  useEffect(() => {
    const attemptPlay = () => {
      if (videoRef.current) {
        // Force attributes directly into the DOM node
        videoRef.current.setAttribute("muted", "");
        videoRef.current.setAttribute("playsinline", "");
        videoRef.current.setAttribute("webkit-playsinline", "");
        videoRef.current.muted = true;

        // Force play
        const playPromise = videoRef.current.play();

        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // If autoplay fails (e.g., Low Power Mode), 
            // we listen for a single click anywhere on the screen to start it
            console.log("Autoplay prevented, waiting for user interaction");
            const startVideo = () => {
              if (videoRef.current) {
                const playPromise = videoRef.current.play();
                if (playPromise !== undefined) {
                  playPromise.catch(() => {
                    console.log("User interaction play failed");
                  });
                }
              }
              window.removeEventListener("click", startVideo);
              window.removeEventListener("touchstart", startVideo);
            };
            window.addEventListener("click", startVideo);
            window.addEventListener("touchstart", startVideo);
          });
        }
      }
    };

    if (!loading) {
      attemptPlay();
    }
  }, [loading]);
  //iphone video
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1029);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let imagesLoaded = 0;
    let isMounted = true;

    const images = [
      logo,
      momentuLogo,
      meta,
      togetherLogo,
      vertualizeLogo,
      img1,
      img4,
      img6,
      img7,
      img9,
      img10,
      img11,
      img14,
      img15,
      profile,
      horrorBg,
    ];

    const totalAssets = images.length + 1; // +1 for video

    const checkLoaded = () => {
      imagesLoaded++;
      if (imagesLoaded >= totalAssets && isMounted) {
        setLoading(false);
      }
    };

    // Load images
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = checkLoaded;
      img.onerror = checkLoaded;
    });

    // Load video (iOS safe)
    // --- ADD THE NEW CODE HERE ---
    const videoLoader = document.createElement("video");
    videoLoader.src = video1;
    videoLoader.preload = "auto";
    videoLoader.muted = true; // Essential for browser pre-approval

    // 'onloadeddata' ensures the first frame is ready
    videoLoader.onloadeddata = () => {
      checkLoaded();
    };

    videoLoader.onerror = () => {
      console.error("Video failed to load, skipping loader...");
      checkLoaded();
    };

    // ✅ Fallback timeout (VERY IMPORTANT for iPhone)
    const timeout = setTimeout(() => {
      if (isMounted) setLoading(false);
    }, 5000); // 5 seconds max loader time

    return () => {
      isMounted = false;
      clearTimeout(timeout);
    };
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
        <div className="relative flex flex-col items-center gap-6">

          {/* Glow */}
          <div className="absolute w-40 h-40 rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />

          {/* Logo */}
          <img
            src={logo}
            alt="Loading"
            className="w-20 h-20 object-contain relative z-10"
          />

          {/* Spinner ring */}
          <div className="w-16 h-16 rounded-full border-2 border-white/20 border-t-cyan-400 animate-spin" />

          {/* Text */}
          <p className="text-xs tracking-widest text-gray-300">
            LOADING
          </p>

        </div>
      </div>
    );
  }

  return (
    <div className="bg-black w-full h-full overflow-x-hidden">

      {/* hero section */}
      <div className="relative w-full h-[100vh] lg:h-screen overflow-hidden flex flex-col justify-between">

        {/* Background Video - Enhanced iOS Compatibility */}
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          webkit-playsinline="true"
          preload="auto"
          autoPlay
          onLoadedMetadata={(e) => {
            e.currentTarget.muted = true;
          }}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{
            objectFit: "cover",
            backgroundColor: "black"
          }}
        >
          <source src={video1} type="video/mp4" />
        </video>


        {/* Overlay Content */}
        <div className="relative z-10 flex flex-col justify-between h-full px-4 sm:px-8 md:px-12 pt-6">

          {/* Top Logo Section */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="logo"
                className="w-[12vw] max-w-[80px] object-contain"
              />
            </div>

            <h2 className="text-[6vw] sm:text-[4vw] lg:text-[2.5vw]">
              CREATING GAME ART
            </h2>
          </div>

          {/* Middle Content */}
          <div className="flex flex-col justify-center flex-1">
            <div className="mt-[3vh] sm:max-w-[80%]  lg:max-w-[40%] space-y-[1.5vh]">

              <div className="flex gap-6 items-center">
                <h3 className="font-extrabold
            text-[4vw] sm:text-[2.5vw] lg:text-[1.5vw]">
                  STEFANO CATANIA
                </h3>

                <span className="text-[2.5vw] sm:text-[1.3vw] lg:text-[0.8vw]">
                  SENIOR 3D ARTIST
                </span>
              </div>

              <p className="sm:text-[3vw] md:text-[3vw] lg:text-[1.1vw] leading-relaxed">
                I'm a 3D Artist specialized in environments and props, with solid experience in creating immersive worlds for games and visual projects.
              </p>

            </div>
          </div>

          {/* Bottom Trusted Section */}
          <div className="flex justify-center">
            <p className="text-[3vw] sm:text-[2vw] lg:text-[1.2vw]">
              TRUSTED BY
            </p>
          </div>

        </div>
      </div>

      <section className="w-full flex flex-col space-y-4 lg:flex-row lg:min-h-[191px] px-4 sm:px-8 lg:px-4 py-6 gap-2">
        {/* Left Main Logo */}
        <div className="flex justify-center lg:justify-start mb-8 lg:mb-0">
          <img
            src={logo}
            alt="Logo"
            className="h-[6vh] sm:h-[7vh] lg:h-[8vh] object-contain "
          />
        </div>

        {/* Trusted Logos */}
        <div className="w-full overflow-hidden">
          <div className="flex gap-8 sm:gap-12 animate-scroll whitespace-nowrap items-center">
            {/* First set of logos */}
            <img src={momentuLogo} alt="Momento Studios" className="h-[4vh] sm:h-[5vh] md:h-[6vh] object-contain flex-shrink-0" />
            <img src={meta} alt="Meta" className="h-[4vh] sm:h-[5vh] md:h-[6vh] object-contain flex-shrink-0" />
            <img src={togetherLogo} alt="Together Labs" className="h-[6vh] sm:h-[7vh] md:h-[8vh] lg:h-[123px] object-contain flex-shrink-0" />
            <img src={vertualizeLogo} alt="Virtualize" className="h-[4vh] sm:h-[5vh] md:h-[6vh] object-contain flex-shrink-0" />

            {/* Duplicate set for seamless loop */}
            <img src={momentuLogo} alt="Momento Studios" className="h-[4vh] sm:h-[5vh] md:h-[6vh] object-contain flex-shrink-0" />
            <img src={meta} alt="Meta" className="h-[4vh] sm:h-[5vh] md:h-[6vh] object-contain flex-shrink-0" />
            <img src={togetherLogo} alt="Together Labs" className="h-[6vh] sm:h-[7vh] md:h-[8vh] lg:h-[123px] object-contain flex-shrink-0" />
            <img src={vertualizeLogo} alt="Virtualize" className="h-[4vh] sm:h-[5vh] md:h-[6vh] object-contain flex-shrink-0" />
          </div>
        </div>

      </section>

      <section className="space-y-2 px-2">
        {/* Row 1 */}

        <div className="w-full flex flex-col md:flex-row items-stretch gap-2">
          <div className="w-full md:w-1/2 flex relative group">
            <img
              src={img14}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 flex items-center gap-2">
              <img src={meta} alt="Meta" className="h-4 sm:h-5 object-contain" />
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col sm:flex-row items-stretch gap-2">
            <div className="flex-1 relative group">
              <img
                src={img4}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <img src={meta} alt="Meta" className="h-4 sm:h-5 object-contain" />
              </div>
            </div>
            <div className="flex-1 relative group">
              <img
                src={img6}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <img src={meta} alt="Meta" className="h-4 sm:h-5 object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="w-full flex flex-col md:flex-row-reverse items-stretch gap-2">
          <div className="w-full md:w-1/2 flex relative group">
            <img
              src={img15}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 flex items-center gap-2">
              <img src={momentuLogo} alt="Meta" className="h-4 sm:h-5 object-contain" />
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col sm:flex-row items-stretch gap-2">
            <div className="flex-1 relative group">
              <img
                src={img10}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <img src={meta} alt="Meta" className="h-4 sm:h-5 object-contain" />
              </div>
            </div>
            <div className="flex-1 relative group">
              <img
                src={img7}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <img src={meta} alt="Momentu" className="h-4 sm:h-6 object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/* Row 3 */}
        <div className="w-full flex flex-col md:flex-row gap-2">

          <div className="w-full md:w-1/2 relative group">
            <img
              src={img9}
              alt=""
              className="w-full aspect-[16/9] object-cover"
            />
            <div className="absolute bottom-4 left-4 flex items-center gap-2">
              <img src={meta} alt="Meta" className="h-4 sm:h-5 object-contain" />
            </div>
          </div>

          <div className="w-full md:w-1/2 relative group">
            <img
              src={img1}
              alt=""
              className="w-full aspect-[16/9] object-cover"
            />
            <div className="absolute bottom-4 left-4 flex items-center gap-2">
              <img src={meta} alt="Meta" className="h-4 sm:h-5 object-contain" />
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row items-stretch gap-2">
          <div className="w-full md:w-1/2 flex relative group">
            <img
              src={img3}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 flex items-center gap-2">
              <img src={togetherLogo} alt="Together Labs" className="h-8 sm:h-12 object-contain" />
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col sm:flex-row items-stretch gap-2">
            <div className="flex-1 relative group">
              <img
                src={img2}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <img src={togetherLogo} alt="Together Labs" className="h-8 sm:h-12 object-contain" />
              </div>
            </div>
            <div className="flex-1 relative group">
              <img
                src={img8}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <img src={togetherLogo} alt="Together Labs" className="h-8 sm:h-12 object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/* Last Full Image */}
        <div className="w-full relative group">
          <img
            src={img11}
            alt=""
            className="w-full h-[330px] aspect-[16/9] object-cover"
          />
          <div className="absolute bottom-4 left-4 flex items-center gap-2">
            <img src={togetherLogo} alt="Together Labs" className="h-8 sm:h-12 object-contain" />
          </div>
        </div>

      </section>

      {/* Desktop Workflow Section */}
      {isDesktop && (
        <section
          className="relative w-full overflow-hidden flex flex-col">
          {/* Background Layering for Figma Match */}
          <img
            src={horrorBg}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Layer 1: Base Darkening */}
          <div className="absolute inset-0 bg-black/40 z-0" />

          {/* Layer 2: Pronounced Cyan Atmospheric Glow (Figma Smoky Effect) */}
          <div
            className="absolute inset-x-0 top-[10%] h-[70%] pointer-events-none z-0 opacity-70"
            style={{
              background: 'radial-gradient(ellipse at 50% 50%, rgba(21, 175, 222, 0.5) 0%, rgba(21, 175, 222, 0.2) 40%, transparent 70%)',
              filter: 'blur(100px)'
            }}
          />
          <div
            className="absolute inset-x-0 top-[30%] h-[50%] pointer-events-none z-0 opacity-50"
            style={{
              background: 'radial-gradient(ellipse at 30% 50%, rgba(21, 175, 222, 0.4) 0%, transparent 60%)',
              filter: 'blur(120px)'
            }}
          />

          {/* Layer 3: Vertical Vignette (Top/Bottom Darkening) */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-black/90 z-0" />

          {/* Centered Container for Large Screens */}
          <div className="relative z-10 w-full max-w-[1920px] mx-auto pt-5">
            <div className="w-full flex">
              {/* logo */}
              <img
                src={logo}
                alt="Logo"
                className="p-2 w-auto h-[75px] object-contain "
              />
              <div className="w-full lg:w-[95%] flex justify-center px-4 sm:px-6 lg:px-0">
                <div className="max-w-[80%] ">
                  <h2
                    className="text-center text-white tracking-wider text-lg sm:text-xl md:text-2xl lg:text-2xl max-w-[75%] mx-auto">
                    WORKFLOW & PIPELINE
                  </h2>
                  <p
                    className="mt-4 text-gray-200 uppercase leading-relaxed text-[10px] sm:text-xs md:text-sm"
                  >
                    Establishing a solid workflow and pipeline is one of the most important
                    responsibilities in any project. Optimization, production efficiency,
                    final quality, and all the elements that contribute to a project's
                    success depend on these foundations.
                  </p>

                </div>
              </div>
            </div>

            <div className="relative z-10 w-full pb-10 min-h-fit lg:min-h-[750px] xl:min-h-[800px] flex flex-col lg:block">
              {/* Skills Content - Stacked on mobile (w-full), Absolute on desktop (50% width, 5% left) */}
              <div className="relative w-full lg:w-[50%] lg:left-[5%] lg:absolute z-20 mb-8 lg:mb-0">
                <img src={render} className="w-full object-cover" alt="Render" />
                <div className="text-white w-full">
                  <h2 className="flex justify-start text-2xl md:text-3xl tracking-wide mb-4 mt-6 lg:mt-4">
                    SKILLS
                  </h2>

                  <ul className="space-y-1 text-sm md:text-[15px] text-white">
                    {skills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Renders - Stacked on mobile, Overlapping absolute on desktop */}
              <div className="relative w-full lg:absolute lg:w-[53%] lg:right-[5%] z-10">
                <div className="w-full relative lg:absolute lg:top-[180px]">
                  <img src={render2} className="w-full object-cover" alt="Render 2" />
                  <img src={img17} className="hidden lg:block w-[891px] h-[501px] absolute top-[280px] left-[100px]" alt="Workflow" />
                </div>
              </div>
            </div>

            {/* Software Proficiency - Reduced spacing */}
            <div className="relative z-10 w-full mt-10 lg:mt-16 xl:mt-20">
              <div className="text-center">
                <h3 className="text-white text-[28px] mb-8 tracking-widest pt-10">
                  SOFTWARE PROFICIENCY
                </h3>

                <div className="relative w-full flex justify-center pb-0">
                  {/* Enhanced & Taller Smokey Background */}
                  <div
                    className="pointer-events-none absolute inset-0 -top-20 -bottom-32"
                    style={{
                      background: 'linear-gradient(to bottom, rgba(21, 175, 222, 0) 0%, rgba(21, 175, 222, 0.8) 25%, rgba(10, 82, 115, 0.6) 50%, rgba(5, 41, 58, 0.4) 75%, rgba(0, 0, 0, 0.85) 100%)',
                      filter: 'blur(50px)'
                    }}
                  />

                  {/* Content - Set to 7x2 grid on desktop */}
                  <div className="relative z-10 grid grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-6 md:gap-8 lg:gap-10 w-[95%] lg:max-w-[85%] mx-auto pb-16">
                    {softwareLogos.map((icon, i) => (
                      <div key={i} className="flex justify-center items-center">
                        <img
                          src={icon}
                          alt="Software"
                          className="w-[60px] h-[60px] md:w-[75px] md:h-[75px] lg:w-[85px] lg:h-[85px] object-contain transition-transform hover:scale-110 duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Smooth transition from ground to black */}
              <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black via-black/95 to-transparent pointer-events-none z-0" />
            </div>
          </div>

        </section>
      )}

      {/* Mobile/Tablet Workflow Section - Fully Responsive */}
      {!isDesktop && (
        <section
          className="relative w-full min-h-[800px] overflow-hidden flex flex-col">
          {/* Background */}
          <img
            src={horrorBg}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Content wrapper */}
          <div className="relative z-10 w-full pt-5 ">
            <div className="w-full flex flex-col space-y-4">
              {/* logo */}
              <div className="flex justify-center sm:justify-start">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-auto h-[60px] sm:h-[75px] object-contain"
                />
              </div>

              <div className="w-full flex justify-center px-4 sm:px-6">
                <div className="max-w-[95%] sm:max-w-[85%]">
                  <h2
                    className="text-center font-['Ethnocentric'] text-white tracking-wider text-base sm:text-xl md:text-2xl">
                    WORKFLOW & PIPELINE
                  </h2>
                  <p
                    className="mt-4 text-gray-200 uppercase leading-relaxed text-[10px] sm:text-xs md:text-sm"
                  >
                    Establishing a solid workflow and pipeline is one of the most important
                    responsibilities in any project. Optimization, production efficiency,
                    final quality, and all the elements that contribute to a project's
                    success depend on these foundations.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative z-10 w-full mt-8 flex flex-col space-y-8">
              {/* Skills Section */}
              <div className="w-full px-4">
                <div className="w-full max-w-[600px] mx-auto">
                  <img src={render} className="w-full" alt="Render" />
                  <div className="text-white mt-4">
                    <h2 className="text-center text-xl sm:text-2xl md:text-3xl tracking-wide mb-4 font-['Ethnocentric']">
                      SKILLS
                    </h2>

                    <ul className="space-y-1 text-xs sm:text-sm md:text-base font-medium text-white px-2">
                      {skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Render Section */}
              <div className="w-full px-4">
                <div className="relative w-full max-w-[600px] mx-auto">
                  <img src={render2} className="w-full" alt="Render 2" />
                  <div className="relative w-full mt-4">
                    <img
                      src={img17}
                      className="w-full h-auto object-contain"
                      alt="Workflow"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Software Proficiency */}
            <div className="relative z-10 w-full mt-20">
              <div className="text-center">
                <h3 className="text-white text-xl sm:text-2xl md:text-[28px] mb-8 pt-8">
                  SOFTWARE PROFICIENCY
                </h3>

                <div className="relative w-full flex justify-center pb-0">
                  {/* Enhanced Gradient Synced with Desktop */}
                  <div
                    className="pointer-events-none absolute inset-0 -top-10 -bottom-24"
                    style={{
                      background: 'linear-gradient(to bottom, rgba(21, 175, 222, 0) 0%, rgba(21, 175, 222, 0.8) 25%, rgba(10, 82, 115, 0.6) 50%, rgba(5, 41, 58, 0.4) 75%, rgba(0, 0, 0, 0.85) 100%)',
                      filter: 'blur(40px)'
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10 flex flex-wrap justify-center gap-5 sm:gap-6 w-[95%] h-auto pb-0 mb-[40px]">
                    {softwareLogos.map((icon, i) => (
                      <img
                        key={i}
                        src={icon}
                        alt="Software"
                        className="w-[55px] h-[55px] sm:w-[65px] sm:h-[65px] md:w-[80px] md:h-[80px] object-contain"
                      />
                    ))}
                  </div>
                </div>
              </div>
              {/* Smooth transition for mobile */}
              <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black via-black/90 to-transparent pointer-events-none z-0" />
            </div>
          </div>
        </section>
      )}

      <footer
        className="w-full min-h-fit pb-10"
        style={{
          background: `linear-gradient( to bottom, #000000 0%, #000000 9%, #1f1f1f 18%, #515151 27%,  #838383 36%, #999999 45%, #999999 100%)`
        }}
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 flex flex-col justify-between">
          {/* Top: Logo */}
          <div className="pt-10">
            <img
              src={logo}
              alt="Logo"
              className="w-auto h-[60px] sm:h-[75px] object-contain"
            />
          </div>

          {/* Middle: Content */}
          <div className="flex flex-col lg:flex-row mt-10 gap-10 items-center lg:items-end justify-between">
            {/* Contact Info */}
            <div className="flex flex-col lg:w-1/2 w-full space-y-6">
              <div>
                <h2 className="font-extrabold text-[24px] sm:text-[28px] lg:text-[32px] text-white">
                  Contact
                </h2>
                <p className="text-sm sm:text-base lg:text-lg mt-2 break-words text-white">
                  sc.creativestudio@cataniastefano.com
                </p>
                <a
                  href="https://www.linkedin.com/in/stefano-catania/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base lg:text-lg mt-2 text-white hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 w-fit font-medium"
                >
                  LinkedIn: stefano-catania
                </a>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8 pt-4">
                <span className="font-extrabold text-[16px] sm:text-[18px] lg:text-[20px] text-white">
                  STEFANO CATANIA
                </span>
                <span className="font-extrabold text-[12px] sm:text-[14px] text-white/80">
                  BASED IN ITALY
                </span>
              </div>
            </div>

            {/* Profile Image - Sit flush with bottom or aligned nicely */}
            <div className="flex justify-center lg:justify-end lg:w-1/2 w-full">
              <img
                src={profile}
                alt="Profile"
                className="w-[300px] sm:w-[400px] lg:w-[500px] h-auto object-contain"
              />
            </div>
          </div>

          {/* Bottom: Copyright */}
          <div className="border-t border-white/10 mt-10 pt-6">
            <p className="text-base sm:text-lg lg:text-xl text-white/50">
              © All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>

  )
}