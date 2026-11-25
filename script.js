
document.addEventListener("DOMContentLoaded", function () {

    // Welcome message
    console.log("Welcome to Aspire Art & Sports Pathway!");

    // Animate cards when they are hovered over
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transition = "0.3s";
        });
    });

    // Motivational messages
    const messages = [
        "Believe in your talent!",
        "Your future is built by the choices you make today.",
        "Creativity has no limits!",
        "Champions never stop learning.",
        "Your passion can become your profession!",
        "Be brave enough to follow your dreams."
    ];

    // Create motivational button
    const motivationButton = document.createElement("button");
    motivationButton.textContent = "✨ Get Motivation";
    motivationButton.className = "motivation-btn";

    document.body.appendChild(motivationButton);

    motivationButton.addEventListener("click", function () {
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        alert(randomMessage);
    });

});
