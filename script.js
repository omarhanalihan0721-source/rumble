function openTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
const themeBtn = document.getElementById('themeToggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    themeBtn.textContent = document.body.classList.contains('light-mode') ? '🌑 DARK' : '☀ LAB';
});
const tempSlider = document.getElementById('tempSlider');
const currentTempEl = document.getElementById('currentTemp');
const statusText = document.getElementById('statusText');
if (tempSlider) {
    let currentTemp = 18.0;
    setInterval(() => {
        let target = parseFloat(tempSlider.value);
        document.getElementById('targetDisplay').textContent = target;
        let diff = target - currentTemp;
        currentTemp += diff * 0.05;
        let noise = (Math.random() - 0.5) * 0.15;
        let displayVal = currentTemp + noise;
        currentTempEl.textContent = displayVal.toFixed(1);
        if (displayVal > target + 1.5) {
            statusText.textContent = "⚠ ОХЛАЖДЕНИЕ ВКЛЮЧЕНО";
            statusText.style.color = "#ff4444";
        } else if (displayVal < target - 1.5) {
            statusText.textContent = "⚠ НАГРЕВ ВКЛЮЧЕН";
            statusText.style.color = "#44ccff";
        } else {
            statusText.textContent = "✓ ТЕМПЕРАТУРА В НОРМЕ";
            statusText.style.color = "#00ff88";
        }

    }, 1500);
}