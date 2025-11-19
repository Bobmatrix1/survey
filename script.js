/* LOADER — Waits until all assets finish loading */
window.addEventListener("load", () => {
    document.getElementById("loader").style.display = "none";
    document.querySelector(".survey-container").style.display = "block";
    document.getElementById("successPage").style.display = "none";
});

/* PROGRESS BAR */
const allInputs = document.querySelectorAll("input, textarea");
const progressBar = document.getElementById("progress-bar");

const questionNames = new Set(Array.from(allInputs).map(input => input.name));
const totalQuestions = questionNames.size;

function updateProgressBar() {
    const answeredQuestions = new Set();

    allInputs.forEach(input => {
        if (input.type === 'checkbox') {
            if (input.checked) {
                answeredQuestions.add(input.name);
            }
        } else if (input.value.trim() !== '') {
            answeredQuestions.add(input.name);
        }
    });

    const answeredCount = answeredQuestions.size;
    let p = Math.min((answeredCount / totalQuestions) * 100, 100);
    progressBar.style.width = p + "%";
}

allInputs.forEach(input => {
    input.addEventListener("input", updateProgressBar);
});

/* SCROLL ANIMATION */
const elements = document.querySelectorAll("[data-animate]");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
    });
});

elements.forEach(el => observer.observe(el));

/* TELEGRAM SUBMIT + SHOW SUCCESS PAGE */
document.getElementById("surveyForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    // Show loader
    document.getElementById("loader").style.display = "flex";

    // IMPORTANT: For security, store these in environment variables and load them
    // via a build process or server-side script. Directly exposing them in client-side
    // JavaScript is not recommended for production.
    // For local development or static deployment without a build step,
    // you would manually replace these placeholders:
    const botToken = "8381639037:AAHXpqGjD1h1RTbjDBX4kWYdW3gjX-wEY_Y"; // Replace with your actual bot token
    const chatId = "7081768586";   // Replace with your actual chat ID

    // Ensure tokens are set before proceeding
    if (botToken === "YOUR_BOT_TOKEN" || chatId === "YOUR_CHAT_ID") {
        console.error("Telegram bot token or chat ID not configured. Please update script.js or environment variables.");
        alert("Survey submission is not configured. Please contact the administrator.");
        document.getElementById("loader").style.display = "none"; // HIDE LOADER ON ERROR
        return;
    }

    const formData = new FormData(e.target);
    let message = "📌 *New Survey Response*\n\n";

    formData.forEach((value, key) => {
        message += `*${key}:* ${value}\n`;
    });

    try {
        await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
                parse_mode: "Markdown"
            })
        });
        // Hide loader after successful fetch
        document.getElementById("loader").style.display = "none";

        document.querySelector(".survey-container").style.display = "none";
        document.getElementById("successPage").style.display = "flex";
    } catch (error) {
        console.error("Error sending survey data:", error);
        alert("There was an error submitting your survey. Please try again.");
        document.getElementById("loader").style.display = "none"; // HIDE LOADER ON ERROR
    }
});

/* CLOSE SUCCESS PAGE */
document.getElementById("closeSuccess").addEventListener("click", () => {
    document.getElementById("successPage").style.display = "none";
    document.querySelector(".survey-container").style.display = "block";
    document.getElementById("surveyForm").reset();
    answered = 0;
    progressBar.style.width = "0%";
});
