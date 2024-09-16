import "../css/style.css";
import "./slider";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

function generatePassword(
  length: number,
  includeUppercase: boolean,
  includeLowercase: boolean,
  includeNumbers: boolean,
  includeSymbols: boolean
): string {
  let allChars = "";
  if (includeUppercase) allChars += uppercaseChars;
  if (includeLowercase) allChars += lowercaseChars;
  if (includeNumbers) allChars += numberChars;
  if (includeSymbols) allChars += symbolChars;

  if (allChars === "") return "P4$5W0rD!"; // Default password if no option is selected

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  return password;
}

function evaluatePasswordStrength(password: string): string {
  let strength = 0;
  if (password.length >= 12) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^A-Za-z0-9]/.test(password)) strength++;

  if (strength <= 2) return "TOO WEAK!";
  if (strength === 3) return "WEAK";
  if (strength === 4) return "MEDIUM";
  return "STRONG";
}

function updateStrengthBars(strength: string): void {
  const strengthText = document.getElementById("strength-text");
  const bars = document.querySelectorAll<HTMLDivElement>(".strength-bars .bar");

  if (strengthText) strengthText.textContent = strength;

  const strengthConfig = {
    "TOO WEAK!": { color: "var(--color-red)", filledBars: 1 },
    WEAK: { color: "var(--color-orange)", filledBars: 2 },
    MEDIUM: { color: "var(--color-yellow)", filledBars: 3 },
    STRONG: { color: "var(--color-neonGreen)", filledBars: 4 },
  };

  const config = strengthConfig[strength] || { color: "", filledBars: 0 };

  bars.forEach((bar, index) => {
    bar.classList.remove("filled", "empty");
    bar.style.backgroundColor = "";

    if (index < config.filledBars) {
      bar.classList.add("filled");
      bar.style.backgroundColor = config.color;
    } else {
      bar.classList.add("empty");
    }
  });
}
function updatePasswordOutput(password: string): void {
  const outputElement = document.getElementById("password-display");
  if (outputElement) {
    outputElement.textContent = password;
  }
}

function copyToClipboard(): void {
  const outputElement = document.getElementById("password-display");
  if (outputElement) {
    const textArea = document.createElement("textarea");
    textArea.value = outputElement.textContent || "";
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);

    // Show "COPIED" message
    const copiedMessage = document.querySelector(
      ".password__output-label__copied"
    );
    copiedMessage?.classList.remove("hidden");

    // Remove the message after 2 seconds
    setTimeout(() => {
      copiedMessage?.classList.add("hidden");
    }, 2000);
  }
}

function initializePasswordGenerator(): void {
  const slider = document.getElementById(
    "char-length-slider"
  ) as HTMLInputElement | null;
  const sliderValue = document.getElementById("slider-value");
  const generateButton = document.getElementById("generate-password");
  const copyButton = document.getElementById("copy-password");

  if (slider && sliderValue) {
    slider.addEventListener("input", () => {
      sliderValue.textContent = slider.value;
    });
    // Initialiser la valeur affichée
    sliderValue.textContent = slider.value;
  }

  if (generateButton) {
    generateButton.addEventListener("click", () => {
      if (slider) {
        const length = parseInt(slider.value, 10);
        const includeUppercase =
          (document.getElementById("include-uppercase") as HTMLInputElement)
            ?.checked ?? false;
        const includeLowercase =
          (document.getElementById("include-lowercase") as HTMLInputElement)
            ?.checked ?? false;
        const includeNumbers =
          (document.getElementById("include-numbers") as HTMLInputElement)
            ?.checked ?? false;
        const includeSymbols =
          (document.getElementById("include-symbols") as HTMLInputElement)
            ?.checked ?? false;

        const password = generatePassword(
          length,
          includeUppercase,
          includeLowercase,
          includeNumbers,
          includeSymbols
        );
        updatePasswordOutput(password);
        const strength = evaluatePasswordStrength(password);
        updateStrengthBars(strength);
      }
    });
  }

  if (copyButton) {
    copyButton.addEventListener("click", copyToClipboard);
  }
}

document.addEventListener("DOMContentLoaded", initializePasswordGenerator);
