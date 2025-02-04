# Password Generator App

![Design preview for the Password Generator App](./design/desktop-preview.jpg)

## Overview

This project is an **interactive password generator app** that allows users to create strong passwords based on selected criteria. It includes a **strength indicator**, a **clipboard copy feature**, and a **responsive design** for an optimal user experience.

### Key Features

- **Customizable password generation** based on user-selected options  
- **Clipboard copy functionality** for quick password usage  
- **Strength evaluation system** to rate generated passwords  
- **Responsive design** ensuring optimal display on all devices  
- **Hover and focus states** for interactive elements  

## How It Works

1. **Select Password Options**  
   - Choose **length**, **uppercase/lowercase letters**, **numbers**, and **special characters**  
   - Adjust settings dynamically with checkboxes and sliders  

2. **Generate & Evaluate Password**  
   - A **random password** is generated based on selected criteria  
   - The **strength indicator** rates the security level of the password  

3. **Copy to Clipboard**  
   - A **single click** copies the generated password for easy use  

## Live Demo

[Password Generator App](https://juliengdev-password-generator.netlify.app/)

## Built With

- **TypeScript** for strong typing and maintainability  
- **Semantic HTML5** for structured content  
- **SCSS (BEM methodology)** for organized styling  
- **CSS Customization** for interactive elements like sliders and checkboxes  
- **Clipboard API** for seamless copy functionality  

## What I Learned

This project helped me **refine my front-end skills** while implementing **custom logic from scratch**. Key takeaways include:

- **Building a password generator from a functional spec**  
- **Improving code documentation** with structured comments and docstrings  
- **Enhancing UI/UX** with advanced **CSS effects** for hover and active states  
- **Deepening my understanding of TypeScript** for better maintainability  

### Code Example: Password Generation Logic
```typescript
const generatePassword = (length: number, options: string[]): string => {
  const charSets: { [key: string]: string } = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+[]{}<>?",
  };

  let availableChars = "";
  options.forEach(option => availableChars += charSets[option]);
  
  return Array.from({ length }, () => availableChars.charAt(Math.floor(Math.random() * availableChars.length))).join('');
};
```

## Continued Development

Future improvements planned:
- Auto-save feature to remember user preferences
- Animated strength indicator for better UX
- Dark mode toggle for improved accessibility
- Integration with a password security API for real-time validation

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**
```bash
git clone https://github.com/juliengDev/password-generator-app.git
cd password-generator-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Build for production**
```bash
npm run build
```

5. **Preview the production build**
```bash
npm run preview
```

## Useful Resources

- [GitHub Repository: Password Generator App](#)
- [MDN Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API) - Used for copy-to-clipboard functionality
- [CSS-Tricks: Custom Range Sliders](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/) - Helped with customizing sliders
- [OWASP Password Guidelines](https://owasp.org/www-community/controls/Authentication_Cheat_Sheet#password-creation-guidelines) - Best practices for password security

## Author

- **Portfolio** - [Julien Gilbert](#)
- **GitHub** - [@juliengDev](#)
- **LinkedIn** - [Julien Gilbert](#)

*Creating secure passwords has never been easier! Try it now and enhance your digital security.* 🚀
