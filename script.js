function loaderpage() {
  var tl = gsap.timeline();

  tl.from(".load h1,.load h2", {
    y: 120,
    duration: 0.7,
    delay: 0.2,
    stagger: 0.2,
  });
  tl.to(".load", {
    opacity: 0,
    delay: 1.6,
    stagger: -0.2,
  });
  tl.to("#loader", {
    top: "-100%",
    duration: 1,
    ease: "power4.out",
  });

  var timer = document.querySelector("#timer h4");
  var grow = 0;

  var int = setInterval(function () {
    if (grow < 100) {
      grow++;
      timer.innerHTML = grow;
    }
  }, 35);

  setTimeout(function () {
    clearInterval(int);
  }, 4000);
}
loaderpage();

function SherryAnimmation() {
  Shery.mouseFollower();
  Shery.makeMagnet("#nav h4");
  Shery.imageEffect(" #img-text ", {
    style: 6,
    // debug: true,
    gooey: true,
    config: {
      noiseDetail: { value: 7.44, range: [0, 100] },
      distortionAmount: { value: 2.98, range: [0, 10] },
      scale: { value: 36.36, range: [0, 100] },
      speed: { value: 0.79, range: [0, 1] },
      zindex: { value: -9996999, range: [-9999999, 9999999] },
      aspect: { value: 0.8484878563073406 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: false },
      growSize: { value: 4, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: false },
      maskVal: { value: 1, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: true },
      onMouse: { value: 0 },
      noise_speed: { value: 0.92, range: [0, 10] },
      metaball: { value: 0.39, range: [0, 2] },
      discard_threshold: { value: 0.5, range: [0, 1] },
      antialias_threshold: { value: 0.01, range: [0, 0.1] },
      noise_height: { value: 0.5, range: [0, 2] },
      noise_scale: { value: 10, range: [0, 100] },
    },
    config: {
      noiseDetail: { value: 7.44, range: [0, 100] },
      distortionAmount: { value: 3.59, range: [0, 10] },
      scale: { value: 36.36, range: [0, 100] },
      speed: { value: 0.79, range: [0, 1] },
      zindex: { value: -9996999, range: [-9999999, 9999999] },
      aspect: { value: 0.7666676046914661 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: false },
      growSize: { value: 4, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: true },
      maskVal: { value: 1.25, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: true },
      onMouse: { value: 0 },
      noise_speed: { value: 0.92, range: [0, 10] },
      metaball: { value: 0.39, range: [0, 2] },
      discard_threshold: { value: 0.5, range: [0, 1] },
      antialias_threshold: { value: 0.01, range: [0, 0.1] },
      noise_height: { value: 0.5, range: [0, 2] },
      noise_scale: { value: 10, range: [0, 100] },
    },
  });
}
SherryAnimmation();
function page2Animation() {
  var videoC = document.querySelector("#video-container");
  videoC.addEventListener("mouseenter", function () {
    gsap.to(".mousefollower", {
      opacity: 0,
    });
  });
  videoC.addEventListener("mouseleave", function () {
    gsap.to(".mousefollower", {
      opacity: 1,
    });

    gsap.to("#play-btn", {
      left: "70%",
      top: "-15%",
    });
  });

  var videoImage = document.querySelector("#video-container img");
  var videoVideo = document.querySelector("#video-container video");

  var flag = 0;

  videoC.addEventListener("click", function () {
    if (flag == 0) {
      gsap.to(videoVideo, {
        opacity: 1,
      });

      gsap.to("#play-btn", {
        scale: 0.8,
      });
      document.querySelector("#play-btn").innerHTML =
        '<i class="ri-pause-line"></i>';
      videoVideo.play();
      flag = 1;
    } else {
      gsap.to(videoVideo, {
        opacity: 0,
      });
      gsap.to("#play-btn", {
        scale: 1,
      });
      document.querySelector("#play-btn").innerHTML =
        '<i class="ri-play-fill"></i>';

      videoVideo.pause();
      flag = 0;
    }
  });

  videoC.addEventListener("mousemove", function (dets) {
    gsap.to("#play-btn", {
      left: dets.x - 555,
      top: dets.y - 200,
    });
  });
}
page2Animation();
