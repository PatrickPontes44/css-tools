const tl = gsap.timeline({paused: 'true', reversed: 'true'});
tl.to(
    '.header__menu i', 0.4, {
        rotate: 90,
        ease: Power1.easeInOut
    }
);
tl.to(
    '.sidemenu', 0.4,{
        width: "30%",
        ease: Power1.easeInOut
    }
)
document.querySelector(".header__menu").addEventListener("click", (e)=>{
    if(tl.isActive()){
        e.preventDefault();
        e.stopImmediatePropagation();
        return false;
    }
    toggleTween(tl);
})

function toggleTween(tween){
    tween.reversed() ? tween.play() : tween.reverse();
}