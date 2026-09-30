/**
 * Landing Page Special Dynamic Features
 */
const DCBD_LandingPage = {
  startCountdown(targetDate) {
    const timerElem = document.getElementById("landing-countdown");
    if (!timerElem) return;

    function update() {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        timerElem.innerHTML = "অফার শেষ হয়েছে!";
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      timerElem.innerHTML = `
        <span class="badge badge-primary">${days}d</span> :
        <span class="badge badge-primary">${hours}h</span> :
        <span class="badge badge-primary">${minutes}m</span> :
        <span class="badge badge-primary">${seconds}s</span>
      `;
    }
    update();
    setInterval(update, 1000);
  }
};
