gsap.registerPlugin(ScrollTrigger);
        gsap.to('.main__animate-image', {
            scrollTrigger: ".main__animate-image",
            opacity: 1,
            duration: 1,
            x: 0,
            delay: .5,
            stagger: 0.5
        });
        gsap.to('.main__animate-text', {
            scrollTrigger: ".main__animate-text",
            opacity: 1,
            duration: 1,
            y: 0,
            delay: 1,
            stagger: 0.5
        });
        gsap.to('.main__animate-button', {
            scrollTrigger: ".main__animate-button",
            opacity: 1,
            duration: 1,
            x: 0,
            delay: 2,
            stagger: 0.5
        });
        gsap.from('.animate--first', {
            scrollTrigger: ".animate--first",
            opacity: 0, duration: 1,
            x: -100,
            delay: .5
        });
        gsap.from('.animate--second', {
            scrollTrigger: ".animate--second",
            opacity: 0,
            duration: 1,
            x: 100,
            delay: .5
        });
        gsap.from('.animate--third', {
            scrollTrigger: ".animate--third",
            opacity: 0,
            duration: 1,
            x: -100,
            delay: .5
        });