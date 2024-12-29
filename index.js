window.onload = function() {
    const titles = [
        "My Goongoon",
        "Pippo ki jaan",
        "Panda ki Mahi",
        "Panda ki jaan",
        "Mera Baccha",
        "My Babbbyyy",
        "My Gunnnii",
        "My Sunflower",
        "My sunshine",
        "Mere Balkaan di maa",
        "My Bae",
        "My Janeman",
        "My Jaan",
        "Mere Billu ki mumma",
        "My Billo Rani",
        "My Cuttiee",
        "My Cutie Pie",
        "My Cutie Patootie",
    ];
    // Pick a random title from the list
    const randomTitle = titles[Math.floor(Math.random() * titles.length)];
    // Set the random title to the document
    document.title = randomTitle;
};
// Messages for the love letter
const messages = [
    "My dear gungun<br><br>Helloo babbyy i really really love you alot and i wanna marry you, you mean the world to me and idk what i would do without you. <br> Everything about you is perfect and i love you so much. I am sorry that i am behaving so clingy and asking for your time but kal raat se when you had a heart stroke i was so scared of losing you i was constantly asking amaan bhai about you and i remebred my past of where i was all alone and koi nahi tha and you came and made it the most beautiful but hearing all that it was just like a trauma to me.<br> I can't lose you, my life without your presence is nothing i would rather die than living it without you. please mujhse kabhi chor ke nahi jana i promise to be the best one for you will never leave you will never let you down i will always be there for you🥺🥺",
    "Meri gunnii<br><br>I love youu merrii jaann please apne iss panda ko kabhi na chor ke jaana I will always be your side and always love you more than from the day before I loved you and I will always be your forever Will you be mine forever meri gunnu??🥺 Meri pyaari pyaari Gungun,",
    "Mera Pyaara Bachha<br><br>You are the most incredible person I've ever known, and I am truly grateful to have you in my life. Your kindness, your warmth, and your beautiful smile make every day brighter. You bring out the best in me. I smile when I think of us. I still remember the day I first saw you, the way you looked and the way you made me feel like the luckiest person in the world.",
    "Meri Pyaari Pyaari goongoon<br><br> You Have the most amazing smile and your eyes are my favorite view. Nasha hai tumhari aankhon mein and also I see a future full of love, and happiness. I will be therehard moment, also to celebrate your achievements and support you in your challenges. There are so many things I love about you - the way you care for others, your passion, your hobbies, your sense of humor, and the way you make my day special. I LOVE YOUU😽",
    "Meri Mumma ki Bahu<br><br> You are just like the missing piece in the puzzle of my life, and I can't imagine my world without you in it.<br><br> I promise to continue loving and caring for you, to be there in your best moments and during your darkest hours With you. I see my home, my confidence, my entire life and my one true love with you.<br><br> So, my pyaari pyaari gungun, I just want you to know that my love for you is infinite, and I'm excited to have a beautiful life with you. You are the love of my life, and my heart belongs to you now and forever.😭😭😭"
];

let currentMessageIndex = 0;

// Get references to the DOM elements
const messageElement = document.getElementById("message");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

// Function to update the message displayed
function updateMessage() {
    messageElement.innerHTML = messages[currentMessageIndex]; // Use innerHTML to render line breaks and spaces
}

// Event listeners for navigation buttons
prevButton.addEventListener("click", () => {
    if (currentMessageIndex > 0) {
        currentMessageIndex--;
        updateMessage();
    }
});

nextButton.addEventListener("click", () => {
    if (currentMessageIndex < messages.length - 1) {
        currentMessageIndex++;
        updateMessage();
    }
});

// Initialize the first message
window.onload = function() {
    updateMessage();
};
