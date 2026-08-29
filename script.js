
const whispers = [
    "Some feelings arrive without names.",
    "Not everything meant to be felt needs to be spoken.",
    "Perhaps silence has its own language.",
    "Some thoughts only become clear when written.",
    "There are things the heart knows before words arrive.",
    "Maybe these words found you for a reason."
];


// DAILY QUOTE

const whisperElement = document.getElementById("daily-quote");

if (whisperElement) {

    const randomWhisper =
        whispers[Math.floor(Math.random() * whispers.length)];

    whisperElement.textContent = randomWhisper;

}


// ROTATING FEATURED WRITINGS

const featuredWritings = [

    {
        title: "Was It Self-Love or…",
        description: "A reflection on love, self-worth, and the moment you realize that choosing yourself can be an act of love too.",
        link: "writing-9.html",
        button: "Read the Reflection →"
    },

    {
        title: "I’ll Be Waiting",
        description: "A letter filled with memories, vulnerability, love, regret, and the things that were never easy to say.",
        link: "writing-8.html",
        button: "Read the Letter →"
    },

    {
        title: "A Clue of You",
        description: "Some people leave, yet somehow remain. A reflection on longing, curiosity, and the mysterious pull of someone you cannot forget.",
        link: "writing-7.html",
        button: "Read the Reflection →"
    },

    {
        title: "Ordered Request",
        description: "A declaration of desire, identity, and devotion—for the people whose names have become part of the rhythm of your heart.",
        link: "writing-6.html",
        button: "Read the Declaration →"
    },

    {
        title: "Why Me",
        description: "An unexpected meeting. A friendship that became something more. And a question that still remains: how did we end up here?",
        link: "writing-5.html",
        button: "Read the Reflection →"
    },

    {
        title: "You Broke ME",
        description: "A story that began with a simple note, became a journey of moments and choices, and ended with a book left unfinished.",
        link: "writing-4.html",
        button: "Read the Fragment →"
    },

    {
        title: "Stripped Bare by Him",
        description: "A cold and withered garden. A stranger with warmth. And the unexpected way one person can change the world you thought you had to live in.",
        link: "writing-3.html",
        button: "Read the Reflection →"
    },

    {
        title: "How Do I Go From Here?",
        description: "Some people come into our lives and change the way we see ourselves. But what happens when the person who helped put the pieces together becomes the one who leaves them scattered?",
        link: "writing-2.html",
        button: "Read the Reflection →"
    },

    {
        title: "A Letter to My Love",
        description: "A letter from the places where love, memories, distance, and emotions meet.",
        link: "writing-1.html",
        button: "Read the Letter →"
    }

];


let featuredIndex = 0;

const featuredTitle =
    document.getElementById("featured-title");

const featuredDescription =
    document.getElementById("featured-description");

const featuredLink =
    document.getElementById("featured-link");


function showFeaturedWriting(index) {

    const writing = featuredWritings[index];

    if (!featuredTitle ||
        !featuredDescription ||
        !featuredLink) {
        return;
    }

    featuredTitle.textContent = writing.title;

    featuredDescription.textContent =
        writing.description;

    featuredLink.textContent =
        writing.button;

    featuredLink.href =
        writing.link;

}


showFeaturedWriting(featuredIndex);


setInterval(() => {

    featuredIndex++;

    if (featuredIndex >= featuredWritings.length) {
        featuredIndex = 0;
    }

    showFeaturedWriting(featuredIndex);

}, 5000);


// RANDOM WHISPER

function giveMeAWhisper() {

    const whispers = [
        "writing-1.html",
        "writing-2.html",
        "writing-3.html",
        "writing-4.html",
        "writing-5.html",
        "writing-6.html",
        "writing-7.html",
        "writing-8.html",
        "writing-9.html",
        "writing-10.html",
        "writing-11.html",
        "writing-12.html",
        "writing-13.html"
    ];

    const randomWhisper =
        whispers[Math.floor(Math.random() * whispers.length)];

    window.location.href = randomWhisper;
}
