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
    "My dear gungun<br><br>I never knew that I am capable of loving someone so much as I love you. You know, I feel kinda jealous of the people who can see you every day, who can hear your voice and be around you. I always be like 'mera time kab aayega,' but just think, ek din aayega zaroor, and I'm just waiting for it.<br><br>I am sorry that I am kinda super possessive, that I even feel insecure when you are with any other opposite gender😭. I am really very sorry for that😞, but I love you so much, meri gungun. I wanna be with you, I wanna hold your hand and spend my entire life with you. I want to stay close to you so that there will be no gap even for the air to pass between us😭.<br><br>I just wanna stick to you and tell you how much I love you. I wish ye time jaldi jaldi chala jaye and hum miljaye 😭😭. Mujhse to raha nahi jaata aise. Every day, I wish to be with you, and at the end of the day, I just give myself hope ki ek din reduce hogaya and we will meet soon karke 🥹",
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