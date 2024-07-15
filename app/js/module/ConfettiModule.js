export default function ConfettiModule() {

    const selectTestLevel = document.querySelector('.tl')
    if (selectTestLevel) {
        function Confetti() {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        }

        window.onload = function () {

            Confetti();

            window.resizeWindow = function () {
                Confetti();
            };

            window.addEventListener('resize', resizeWindow, false);
        }
    }
}   