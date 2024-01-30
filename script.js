function loaderpage(){
    var tl = gsap.timeline()

    tl.from(".load h1,.load h2",{
        y:120,
        duration:0.7,
        delay:0.2,
        stagger:0.2
    })
    tl.to(".load",{
        opacity:0,
        delay:1.6,
        stagger:-0.2
    })
    tl.to("#loader",{
        top:"-100%",
        duration:1,
        ease:"power4.out"
    })
    
    
    var timer = document.querySelector("#timer h4")
    var grow = 0
    
    var int = setInterval(function(){
        if (grow<100){
            grow++
            timer.innerHTML = grow
        }
    },35)
    
    
    setTimeout(function(){
        clearInterval(int)
    },4000)
 }
 loaderpage()

 Shery.mouseFollower() 
 Shery.makeMagnet("#nav h4") 

 function page2Animation(){
    var videoC = document.querySelector("#video-container")
    videoC.addEventListener("mouseenter", function () {
        gsap.to(".mousefollower", {
            opacity: 0
        })
    })
    videoC.addEventListener("mouseleave", function () {
        gsap.to(".mousefollower", {
            opacity: 1
        })
   
        gsap.to("#play-btn", {
            left: "70%",
            top: "-15%"
        })
    })
   
    var videoImage = document.querySelector("#video-container img")
    var videoVideo = document.querySelector("#video-container video")
   
    var flag = 0
   
    videoC.addEventListener("click", function () {
        if (flag == 0) {
   
            gsap.to(videoVideo, {
                opacity: 1
            })
   
            gsap.to("#play-btn", {
                scale: 0.8
            })
            document.querySelector("#play-btn").innerHTML = '<i class="ri-pause-line"></i>'
            videoVideo.play()
            flag = 1
        } else {
            gsap.to(videoVideo, {
                opacity: 0
            })
            gsap.to("#play-btn", {
                scale: 1
            })
            document.querySelector("#play-btn").innerHTML = '<i class="ri-play-fill"></i>'
   
            videoVideo.pause()
            flag = 0
        }
    })
   
    videoC.addEventListener("mousemove", function (dets) {
        gsap.to("#play-btn", {
            left: dets.x - 555,
            top: dets.y - 200
        })
    })
   
 }
 page2Animation()