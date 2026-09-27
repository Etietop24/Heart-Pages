
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
    "writing-13.html",
    "writing-14.html",
    "writing-15.html",
    "writing-16.html",
    "writing-17.html",
    "writing-18.html"
];

   

    const randomWhisper =
        whispers[Math.floor(Math.random() * whispers.length)];

    window.location.href = randomWhisper;
}

/* =================================
   WHISPER SEARCH & COLLECTIONS
================================= */

document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("whisperSearch");
    const clearButton = document.getElementById("clearSearch");
    const resultText = document.getElementById("searchResults");

    const cards = document.querySelectorAll(".writing-card");
    const collectionButtons =
        document.querySelectorAll(".collection-button");


    // Stop if the search section isn't on this page
    if (!searchInput || cards.length === 0) {
        return;
    }


    /*
        THEMES FOR EACH WHISPER

        These are the words visitors can search for.
    */

    const whisperTags = {

        "writing-1.html":
            "love letter relationship memories distance emotions feelings",

        "writing-2.html":
            "reflection love relationship pain confusion healing feelings",

        "writing-3.html":
            "reflection love attraction feelings vulnerability relationship",

        "writing-4.html":
            "fragment pain heartbreak memories loss sadness feelings",

        "writing-5.html":
            "reflection love friendship relationship confusion feelings connection",

        "writing-6.html":
            "declaration love desire identity devotion feelings relationship",

        "writing-7.html":
            "reflection longing curiosity love memories feelings waiting",

        "writing-8.html":
            "letter love regret memories vulnerability waiting sadness",

        "writing-9.html":
            "reflection love self-love self-worth healing choosing yourself",

        "writing-10.html":
            "reflection womanhood self-worth fear courage healing strength",

        "writing-11.html":
            "reflection healing second chances past hope change growth",

        "writing-12.html":
            "fantasy reflection deception attraction warning mystery feelings",

        "writing-13.html":
            "reflection journey choices memories life change growth",

        "writing-14.html":
            "reflection love flaws acceptance feelings memories relationship",

        "writing-15.html":
            "letter love loss longing memories attachment feelings missing",

        "writing-16.html":
            "letter love trust relationship vulnerability acceptance feelings",

        "writing-17.html":
            "reflection love confusion vulnerability trust acceptance feelings",

        "writing-18.html":
            "fragment competition attraction jealousy confusion uncertainty feelings"
    };


    let activeFilter = "all";


    function filterWhispers() {

        const searchTerm =
            searchInput.value.toLowerCase().trim();

        let visibleCount = 0;


        cards.forEach(function (card) {

            const link = card.querySelector("a");

            if (!link) {
                return;
            }


            const href = link.getAttribute("href");

            const tags =
                whisperTags[href] || "";


            const cardText =
                card.textContent.toLowerCase();


            const searchableText =
                cardText + " " + tags;


            const matchesSearch =
                searchTerm === "" ||
                searchableText.includes(searchTerm);


            const matchesCategory =
                activeFilter === "all" ||
                tags.split(" ").includes(activeFilter);


            if (matchesSearch && matchesCategory) {

                card.classList.remove("search-hidden");

                visibleCount++;

            } else {

                card.classList.add("search-hidden");

            }

        });


        if (searchTerm !== "" || activeFilter !== "all") {

            resultText.textContent =
                visibleCount +
                (visibleCount === 1
                    ? " whisper found."
                    : " whispers found.");

        } else {

            resultText.textContent = "";

        }

    }


    // SEARCH AS YOU TYPE

    searchInput.addEventListener(
        "input",
        filterWhispers
    );


    // CLEAR BUTTON

    if (clearButton) {

        clearButton.addEventListener(
            "click",
            function () {

                searchInput.value = "";

                activeFilter = "all";


                collectionButtons.forEach(
                    function (button) {

                        button.classList.remove("active");

                    }
                );


                const allButton =
                    document.querySelector(
                        '[data-filter="all"]'
                    );


                if (allButton) {

                    allButton.classList.add("active");

                }


                filterWhispers();

                searchInput.focus();

            }
        );

    }


    // COLLECTION BUTTONS

    collectionButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    collectionButtons.forEach(
                        function (btn) {

                            btn.classList.remove("active");

                        }
                    );


                    this.classList.add("active");


                    activeFilter =
                        this.dataset.filter;


                    filterWhispers();

                }
            );

        }
    );


    // INITIAL STATE

    filterWhispers();

});
