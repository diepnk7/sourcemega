export default function ScrollTriggerModule() {
    if(window.innerWidth > 1200) {
        gsap.from(".homes-ab .img img", {
            scrollTrigger: {
                scrub: 1,
                trigger: ".homes-ab",
            },
            scale: 1.2
        });
    }
}
