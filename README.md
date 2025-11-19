<div align="center">
  <img src="assets/logo.jpeg" alt="Survey Logo" width="150"/>
  <h1>Student Entrepreneurship Survey</h1>
  <p>A web-based survey to gather insights into student interest in entrepreneurship and the impact of financial support.</p>
  
  <p>
    <a href="#-features">Features</a> •
    <a href="#-setup-and-usage">Setup</a> •
    <a href="#-telegram-bot-integration">Telegram Bot</a> •
    <a href="#-contributing">Contributing</a> •
    <a href="#-license">License</a>
  </p>
  
  <p>
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License">
    <img src="https://img.shields.io/github/last-commit/your-username/your-repository-name" alt="Last Commit">
    <img src="https://img.shields.io/github/stars/your-username/your-repository-name" alt="GitHub Stars">
  </p>
</div>

---

## ✨ Features

- **Interactive Survey Form:** Multiple sections with various question types.
- **Live Progress Bar:** Tracks completion as you fill out the survey.
- **Sticky Progress Bar:** Stays visible at the top of the page while scrolling.
- **Glow Title Effect:** Enhances the visual appeal of the main survey title.
- **Telegram Bot Integration:** Submits survey responses directly to a Telegram chat.
- **Success Page:** A confirmation page shown upon successful submission.
- **Responsive Design:** Adapts to various screen sizes for a seamless experience on any device.

## 🚀 Setup and Usage

To get this project running locally, follow these simple steps:

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/Bobmatrix1/survey
    cd your-repository-name
    ```

2.  **Open `index.html`:**
    No special setup needed! Just open the `index.html` file in your favorite web browser.

## 🤖 Telegram Bot Integration

This survey uses a Telegram bot to collect responses securely. Here’s how to set it up:

1.  **Create a New Bot with `@BotFather`:**
    - Open Telegram and search for `@BotFather`.
    - Follow the instructions to create a new bot.
    - `@BotFather` will give you an API token. Copy this token.
    - In `script.js`, replace `"YOUR_BOT_TOKEN"` with your new API token.

2.  **Get Your Chat ID:**
    - Find your new bot on Telegram and send it a message.
    - Go to `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates` (replace `<YOUR_BOT_TOKEN>` with your bot's token).
    - Look for the `"chat":{"id":...}` field in the JSON response. The number is your Chat ID.
    - In `script.js`, replace `"YOUR_CHAT_ID"` with your Chat ID.

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📜 License

This project is distributed under the MIT License. See `LICENSE` for more information.