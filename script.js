
// Smooth scroll to the signup section
function scrollToSignup() {
  const section = document.getElementById("signup");
  section.scrollIntoView({ behavior: "smooth" });
}

// Redirects to WhatsApp or Telegram links
function redirectTo(platform) {
  if (platform === 'whatsapp') {
    // Replace this with your actual WhatsApp opt-in URL
    window.location.href = "https://wa.me/XXXXXXXXXXX";
  } else if (platform === 'telegram') {
    // Replace this with your actual Telegram bot/channel URL
    window.location.href = "https://t.me/YourTelegramBot";
  }
}
