export default function HeaderModule() {
    const main = document.querySelector(".main")
    const header = document.querySelector(".hd");
    const mobile = document.querySelector(".mobile");
    const mobileOverlay = document.querySelector(".mobile-overlay");
    const search = document.querySelector(".hd-srch");

    function HandleHeader() {
        if (header && mobile && mobileOverlay) {
            if (window.scrollY > 0) {
                main.classList.add("hd-sticky");
                header.classList.add("sticky");
                mobile.classList.add("sticky");
                mobileOverlay.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
                mobile.classList.remove("sticky");
                mobileOverlay.classList.remove("sticky");
                main.classList.remove("hd-sticky");
            }
        }
    }
    window.addEventListener("scroll", function () {
        HandleHeader();
    });
    $(document).ready(function () {
        HandleHeader();
    });

    // 
    const cart = document.querySelector(".cartJS")
    if (cart) {
        const cartMini = cart.querySelector('.cartMini')
        const cartOver = cart.querySelector('.cartOver')
        const cartClick = cart.querySelector('.cartClick')
        const cartClose = cart.querySelector('.cartClose')
        const cartEditClose = cart.querySelector('.cartEditClose')
        const tableEdit = document.querySelectorAll('.cartx-table .cartx-tr .editJS')

        // mobile cart
        const cartBtn = document.querySelector(".cartBtn")
        if (cartBtn) {
            cartBtn.addEventListener("click", (e) => {
                e.preventDefault();
                Open();
            })
        }
        // cart step
        const carts = document.querySelector(".hd-cart-main")
        const cartEdit = document.querySelector(".cartEdit")


        if (cartClick) {
            cartClick.addEventListener('click', () => {
                Open();
            })
        }

        if (cartClose) {
            cartClose.addEventListener('click', () => {
                Close();
                CloseEdit();
            })
        }
        if (cartEditClose) {
            cartEditClose.addEventListener('click', () => {
                // cartEdit.classList.remove("open")
                Close();
                CloseEdit();
            })
        }
        if (tableEdit) {
            tableEdit.forEach(items => {
                items.addEventListener('click', () => {
                    OpenEdit();
                })
            })
        }

        if (cartOver) {
            cartOver.addEventListener('click', () => {
                Close();
                CloseEdit();
            })
        }
        function Open() {
            if (cartMini && cartOver) {
                cartMini.classList.add('open')
                cartOver.classList.add('open');
                $('body').css('overflow', 'hidden')
            }
        }
        function Close() {
            if (cartMini && cartOver) {
                cartMini.classList.remove('open')
                cartOver.classList.remove('open')
                $('body').css('overflow', 'normal')
            }
        }
        function OpenEdit() {
            if (cartEdit && cartOver) {
                cartEdit.classList.add('open')
                cartOver.classList.add('open');
                $('body').css('overflow', 'hidden')
            }
        }
        function CloseEdit() {
            if (cartEdit && cartOver) {
                cartEdit.classList.remove('open')
                cartOver.classList.remove('open');
                $('body').css('overflow', 'hidden')
            }
        }
        // cart Step

        if (carts && cartEdit) {
            const cartItem = carts.querySelectorAll(".hd-cart-item")
            const confirm = cartEdit.querySelector(".confirmJS")
            cartItem.forEach(items => {
                const edit = items.querySelector(".editJS")
                edit.addEventListener("click", () => {
                    OpenEdit()
                })
            })
            confirm.addEventListener("click", (e) => {
                e.preventDefault();
                cartEdit.classList.remove("open")
            })
        }
    }

    // cate
    const cateSp = document.querySelectorAll('.hd-cate')

    if (cateSp) {
        cateSp.forEach(items => {
            const cateBox = items.querySelector('.hd-cate-box')
            const cateMobile = items.querySelector('.hd-cate-mobile')
            const icOpen = items.querySelector('.ic-open')
            const icClose = items.querySelector('.ic-close')

            icOpen.addEventListener('click', (e) => {

                if (window.innerWidth < 1200) {
                    cateBox.classList.add('open');
                    items.classList.add('active');
                    cateMobile.classList.add('open');
                }
            })
            icClose.addEventListener('click', (e) => {

                if (window.innerWidth < 1200) {
                    cateBox.classList.remove('open');
                    items.classList.remove('active');
                    cateMobile.classList.remove('open');
                }
            })
            document.addEventListener('click', (e) => {
                if (!e.target.matches('.hd-cate, .hd-cate *')) {

                    if (window.innerWidth < 1200) {
                        cateBox.classList.remove('open');
                        items.classList.remove('active');
                        cateMobile.classList.remove('open');
                    }
                }
            })



            const cateLeft = items.querySelector('.hd-cate-left')
            const cateRight = items.querySelector('.hd-cate-right')
            const cateLeftItem = cateLeft.querySelectorAll('.cate-item')
            const cateRightItem = cateRight.querySelectorAll('.content-item')
            const leftWidth = cateLeft.offsetHeight;
            //  cateRight.style.maxHeight = leftWidth + 'px';
            if (cateLeftItem.length !== 0 && cateRightItem.length === cateLeftItem.length) {
                cateLeftItem.forEach((items, index) => {
                    items.addEventListener('mouseover', () => {
                        for (let i = 0; i < cateLeftItem.length; i++) {
                            cateLeftItem[i].classList.remove('active')
                            cateRightItem[i].classList.remove('active')
                        }
                        items.classList.add('active');
                        cateRightItem[index].classList.add('active');

                        const cateRightInner = cateRightItem[index].innerText
                        if (cateRightInner == '') {
                            cateRightItem[index].parentElement.parentElement.style.display = 'none'
                        } else {
                            cateRightItem[index].parentElement.parentElement.style.display = 'block'
                        }
                    })

                })
            }
        })
    }

    // 
    if (search) {
        const srchIp = search.querySelector(".hd-srch-ip")

        window.addEventListener("click", (e) => {
            const input = srchIp.querySelector("input")
            if (!e.target.matches(".hd-srch *")) {
                srchIp.classList.remove("open")
                // console.log("remove");
            } else {
                srchIp.classList.add("open");
                setTimeout(()=> {
                    input.focus();
                },100)
            }
        })

    }
}