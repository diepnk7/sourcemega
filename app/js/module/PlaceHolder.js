export default function PlaceHolder() {

    const input = document.querySelectorAll(".hd-srch .hd-srch-ip input");
    if (input) {
        input.forEach(items => {
            const placeholderTexts = items.getAttribute("data-placeholder").split(";");
            let currentTextIndex = 0;
            let currentText = placeholderTexts[currentTextIndex];
            let i = 0;

            function typeWriter() {
                if (i < currentText.length) {
                    const placeholder = currentText.substring(0, i + 1);
                    items.setAttribute("placeholder", placeholder);
                    i++;
                    setTimeout(typeWriter, 100);
                } else {
                    i = 0;
                    currentTextIndex = (currentTextIndex + 1) % placeholderTexts.length;
                    currentText = placeholderTexts[currentTextIndex];
                    setTimeout(typeWriter, 500);
                }
            }

            typeWriter()
        })
    }
}