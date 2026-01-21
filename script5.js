apk=gsap.timeline()
apk.from(".a, .b, .c",{
    opacity:0,
    y:-20,
    duration:1,
    stagger:0.5,
})
apk.from(".box1, .box2, .box3, .box4, .box5",{
    opacity:0,
    y:-20,
    duration:2.5,
    stagger:0.5,
}) 