export default function PopupModule() {
    const popupClose = document.querySelectorAll(".popup-close");
    const popupOverlay = document.querySelectorAll(".popup-overlay");
    const body = document.getElementsByTagName("body")[0];
    const popup = document.querySelectorAll(".popup");
    if (popupClose) {
        popupClose.forEach((item) => {
            item.addEventListener("click", () => {
                // popup.forEach((item) => {
                //     item.classList.remove("open");
                //     body.classList.remove("no-scroll");
                // });

                // make it close closest popup clicked 
                const parentPopup = item.closest(".popup");
                if (parentPopup && parentPopup.classList.contains("open")) {
                    parentPopup.classList.remove("open");
                    if (!document.querySelector(".popup.open")) {
                        body.classList.remove("no-scroll");
                    }
                }
            });
        });
    }
    if (popupClose) {
        popupClose.forEach((item) => {
            item.addEventListener("click", () => {
            });
        });
    }
    if (popupOverlay) {
        popupOverlay.forEach((item) => {
            item.addEventListener("click", () => {
                popup.forEach((item) => {
                    item.classList.remove("open");
                    body.classList.remove("no-scroll");
                });
            });
        });
    }

    const popupOpens = document.querySelectorAll(".popup-open");
    if (popupOpens) {
        popupOpens.forEach((item) => {
            item.addEventListener("click", (e) => {
                e.preventDefault();
                const idString = item.getAttribute("data-popup");
                if (popup) {
                    popup.forEach((item) => {
                        if (item.getAttribute("data-popup-id") == idString) {
                            item.classList.add("open");
                            body.classList.add("no-scroll");
                        }
                    });
                }
            });
        });
    }
}