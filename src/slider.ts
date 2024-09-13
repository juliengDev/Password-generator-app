const slider = document.getElementById(
  "char-length-slider"
) as HTMLInputElement | null;
const sliderValue = document.getElementById(
  "sliderValue"
) as HTMLElement | null;

function updateSlider(): void {
  if (!slider || !sliderValue) return;

  const value: number = parseInt(slider.value, 10);
  const min: number = parseInt(slider.min, 10);
  const max: number = parseInt(slider.max, 10);
  const percentage: number = ((value - min) / (max - min)) * 100;

  slider.style.background = `linear-gradient(to right, var(--color-neonGreen) ${percentage}%, var(--color-veryDarkGrey) ${percentage}%)`;
  sliderValue.textContent = value.toString();
}

if (slider) {
  slider.addEventListener("input", updateSlider);
  updateSlider();
}
