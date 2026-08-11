const whispers = [
    "Some feelings arrive without names.",
    "Not everything meant to be felt needs to be spoken.",
    "Perhaps silence has its own language.",
    "Some thoughts only become clear when written.",
    "There are things the heart knows before words arrive.",
    "Maybe these words found you for a reason."
];

const whisperElement = document.getElementById("daily-quote");

if (whisperElement) {
    const randomWhisper =
        whispers[Math.floor(Math.random() * whispers.length)];

    whisperElement.textContent = randomWhisper;
}