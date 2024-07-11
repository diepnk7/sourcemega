export default function ScrollAddClass(){
    const _confObserver = {
        rootMargin: '-50px -50px -50px -50px',
        threshold: [0, 0.25, 0.75, 1]
    };
    
    const addActives = document.querySelectorAll('.js-add');
    
    const observerAddActives = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.classList.add('inview')
            } else {
                entry.target.classList.remove('inview')
            }
        });
    }, _confObserver);
    
    addActives.forEach(ele => {
        observerAddActives.observe(ele);
    });
}