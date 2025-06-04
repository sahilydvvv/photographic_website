var tl=gsap.timeline()
tl.from("#nav h3",{
    y:-50,
    opacity:0,
    delay:0.4,
    duration:0.8,
    stagger:0.3
})
tl.from("#main h1",{
    x:-500,
    opacity:0,
    delay:0.4,
    duration:0.8,
    stagger:0.3
})
tl.from("img",{
    x:200,
    opacity:0,
    rotate:45,
    duration:1,
    stagger:0.5
})
tl.from('#bottom h4',{
    x:200,
    opacity:0,
    delay:0.4,
    duration:0.8,
    stagger:0.3
})