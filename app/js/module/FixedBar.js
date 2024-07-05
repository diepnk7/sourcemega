export default function FixedBar(){
    const header = document.querySelector('.hd');
    try {
        const scrollTop = document.querySelector(".backToTop");
    
        if (scrollTop) {
            scrollTop.addEventListener("click", () => {
            document.body.scrollIntoView({ behavior: "smooth", block: "start" });
        });
        }
    
        // const menuListLink = document.querySelector(".action-fixed");
        // window.addEventListener("scroll", () => {
        //     if (menuListLink) {
        //         if (window.scrollY > 10) {
        //             menuListLink.classList.add("active");
        //         } else {
        //             menuListLink.classList.remove("active");
        //         }
        //     }
        // });

        var prevScrollpos = window.scrollY;
        const menuListLink = document.querySelector(".sidefix");
        var barBottom = menuListLink.offsetTop + menuListLink.offsetHeight;
        
        window.addEventListener('scroll', ()=> {
            var currentScrollPos = window.scrollY;
            
            if (prevScrollpos > currentScrollPos  || currentScrollPos < barBottom){  
                menuListLink.classList.add('active');
            }
            else{
                menuListLink.classList.remove('active');
            } 
        
            prevScrollpos = currentScrollPos;
        })

        window.addEventListener('scroll', ()=> {
            if(window.scrollY <= header.clientHeight) {
                menuListLink.classList.remove('active');
            }
        })
        
    } 
    catch (error) {
        console.log(error);
    }
}