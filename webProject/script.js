//this is the code for the fade in key frames
document.addEventListener("DOMContentLoaded", function () {
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        });
    }, appearOptions);

    // ⏱️ Delay the observer setup by 1000ms (match navbar animation)
    setTimeout(() => {
        faders.forEach(fader => {
            appearOnScroll.observe(fader);
        });
    }, 1000); // 1000 ms or 1 second
});