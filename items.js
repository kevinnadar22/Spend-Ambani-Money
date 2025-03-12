// Array of items that can be purchased
const items = [
    {
        id: 1,
        name: "Vada Pav",
        image: "https://i.ibb.co/JZRm6Q2/Vada-Pav-500x500.jpg",
        price: 15, // ₹15
        description: "Mumbai's favorite street food snack."
    },
    {
        id: 2,
        name: "Pani Puri",
        image: "https://i.ibb.co/3yhYjgVn/800px-Pani-Puri1.jpg",
        price: 20, // ₹20
        description: "Crispy hollow puris filled with spicy water."
    },
    {
        id: 3,
        name: "Mc Spicy",
        image: "https://i.ibb.co/CsB0XGqj/product-Mc-Spicy-2024-desktop.png",
        price: 200, // ₹200
        description: "A spicy chicken burger from McDonald's."
    },
    {
        id: 4,
        name: "Cold Coffee",
        image: "https://i.ibb.co/8nWhBSbz/angelica-reyes-6x-Bv-VSs2-G8c-unsplash-1.jpg",
        price: 350, // ₹350
        description: "Refreshing cold coffee from Starbucks."
    },
    {
        id: 5,
        name: "PS5",
        image: "https://i.ibb.co/KjzgVTm9/ps5-product-thumbnail-01-en-14sep21-facebook.webp",
        price: 55000, // ₹55,000
        description: "Next-gen gaming console for the ultimate gaming experience."
    },
    {
        id: 6,
        name: "iPhone 15 Pro Max",
        image: "https://i.ibb.co/6RK8R4w9/Apple-i-Phone-15-Pro-Max-blue-titanium-featured-image-packshot-review.jpg",
        price: 160000, // ₹1,60,000
        description: "Apple's flagship smartphone with cutting-edge features."
    },
    {
        id: 7,
        name: "Auto Rickshaw",
        image: "https://i.ibb.co/RkxbGWYZ/2c5e1485755e664bcf7614cc4d492003.jpg",
        price: 200000, // ₹2,00,000
        description: "The iconic three-wheeler transport vehicle of India."
    },
    {
        id: 8,
        name: "MacBook Pro",
        image: "https://i.ibb.co/KZT92Qk/spacegrey-macbook-pro-14.jpg",
        price: 200000, // ₹2,00,000
        description: "Apple's premium laptop for professionals."
    },
    {
        id: 9,
        name: "Classic 350",
        image: "https://i.ibb.co/4Zr9n6xG/stealth-black-000.png",
        price: 250000, // ₹2,50,000
        description: "The legendary motorcycle known for its thump and heritage."
    },
    {
        id: 10,
        name: "Gaming PC Setup",
        image: "https://i.ibb.co/wZsYJ7G0/hq720.jpg",
        price: 400000, // ₹4,00,000
        description: "High-end gaming PC with RGB lighting and top-tier components."
    },
    {
        id: 11,
        name: "Weekend Stay at Taj Lake Palace",
        image: "https://i.ibb.co/0j4sbPTv/Taj-Lake-Palace-Udaipur.jpg",
        price: 500000, // ₹5,00,000
        description: "Luxury weekend at the iconic floating palace in Udaipur."
    },
    {
        id: 12,
        name: "Private Jet Charter",
        image: "https://i.ibb.co/Zp2FGbkG/private-jets-charter-bom.jpg",
        price: 1000000, // ₹10,00,000
        description: "One hour of flying in a private jet."
    },
    {
        id: 13,
        name: "Rolex Watch",
        image: "https://i.ibb.co/MysxSRSz/m278273-0019.png",
        price: 1500000, // ₹15,00,000
        description: "A premium luxury watch from the renowned Swiss brand."
    },
    {
        id: 14,
        name: "7-Star Hotel Suite (Burj Al Arab)",
        image: "https://i.ibb.co/wrgB0b6V/Hoga6-FB5-Jumeirah-Group-Burj-Al-Arab-1200x800.jpg",
        price: 1500000, // ₹15,00,000/night
        description: "One night in the world's most luxurious hotel suite."
    },
    {
        id: 15,
        name: "Toyota Fortuner",
        image: "https://i.ibb.co/HLqYnSq1/Fortuner-static.jpg",
        price: 5000000, // ₹50,00,000
        description: "A premium SUV known for its power and reliability."
    },
    {
        id: 16,
        name: "Bitcoin (1 BTC)",
        image: "https://i.ibb.co/mwvnWV5/Bitcoin-Logo.png",
        price: 71000000, // ₹71,00,000
        description: "One Bitcoin, the world's leading cryptocurrency."
    },
    {
        id: 17,
        name: "1BHK Flat in Mumbai",
        image: "https://i.ibb.co/fz2NfGpW/AGM-Sales-Floor-Plans-A3-Pages-01-2-1024x724.png",
        price: 15000000, // ₹1,50,00,000
        description: "A one-bedroom apartment in the city of dreams."
    },
    {
        id: 18,
        name: "Lamborghini Huracán",
        image: "https://i.ibb.co/s9RCxXV2/huracan-evo-spyder-m.jpg",
        price: 45000000, // ₹4,50,00,000
        description: "A high-performance Italian supercar."
    },
    {
        id: 19,
        name: "3BHK Flat in Bandra",
        image: "https://i.ibb.co/pBbKMxCD/chand-terraces-for-sale-3-bhk.jpg",
        price: 60000000, // ₹6,00,00,000
        description: "A luxury apartment in Mumbai's posh Bandra area."
    },
    {
        id: 20,
        name: "Rolls-Royce Phantom",
        image: "https://i.ibb.co/zHjxzh4b/phantom-exterior-right-front-three-quarter.jpg",
        price: 100000000, // ₹10,00,00,000
        description: "The epitome of luxury automobiles."
    },
    {
        id: 23,
        name: "Anant-Radhika Wedding",
        image: "https://i.ibb.co/nMBxtrdC/anant-ambani-radhika-merchant-wedding.jpg",
        price: 5000000000, // ₹500 crore
        description: "Host a wedding as grand as the Ambani family celebration."
    },
    {
        id: 21,
        name: "Make a Movie",
        image: "https://i.ibb.co/h1yWNxLk/film.jpg",
        price: 1000000000, // ₹100 crore
        description: "Produce your own Bollywood blockbuster."
    },
    {
        id: 22,
        name: "Private Island",
        image: "https://i.ibb.co/Z60CBTt9/Aerial.jpg",
        price: 1000000000, // ₹100 crore
        description: "Your own private island paradise near Goa."
    },

    {
        id: 24,
        name: "Boeing 747",
        image: "https://i.ibb.co/FLPj8g88/trto-b747-hero.webp",
        price: 33200000000, // ₹3,320 crore
        description: "Own the iconic jumbo jet aircraft."
    },
    {
        id: 25,
        name: "Shah Rukh Khan (Net Worth)",
        image: "https://i.ibb.co/tMvSyCnP/when-shah-rukh-khan-gave-an-epic-one-liner-answer-to-muslims-are-everywhere-in-the-film-world-but-do.jpg",
        price: 63000000000, // ₹6,300 crore
        description: "Have the net worth of Bollywood's King Khan."
    },

    {
        id: 26,
        name: "Chennai Super Kings",
        image: "https://i.ibb.co/4wM5VL3X/CSK-IPL-Dashboard-l-Radarr.png",
        price: 70000000000, // ₹7,000 crore
        description: "Own the popular IPL cricket franchise."
    },
    {
        id: 27,
        name: "Mumbai Indians",
        image: "https://i.ibb.co/xtv1Z8wt/78145880.jpg",
        price: 80000000000, // ₹8,000 crore
        description: "Own the most successful IPL cricket franchise."
    },
    {
        id: 28,
        name: "Antilia",
        image: "https://i.ibb.co/HZWBYZG/p-9932-antilia-is-a-lavish.jpg",
        price: 150000000000, // ₹15,000 crore
        description: "The world's most expensive private residence."
    },
    {
        id: 29,
        name: "OLA (Company Valuation)",
        image: "https://i.ibb.co/mFCZm5Yd/ola-cabs-logo-5986.png",
        price: 540000000000, // ₹54,000 crore
        description: "Own the entire ride-hailing company at its current valuation."
    }
];

// Cartoon character speech lines
const speeches = {
    start: [
        "Alright, let's see how fast you can burn through my fortune!",
        "Go ahead, flex those spending muscles—make me regret this!",
        "My wallet is your wallet… until you bankrupt me!",
        "Welcome to the VIP life! Don't embarrass me now!",
        "Money is just a number, and I have too many of them!",
        "Spend recklessly! Financial advisors HATE me!"
    ],
    smallPurchase: [
        "Bruh, is that all? My grandma spends more on cat food!",
        "Wow, big spender! Next, you gonna buy a single peanut?",
        "Pfft. My goldfish has a higher budget.",
        "Lemme guess, you're saving up for a yacht? No? Then SPEND MORE!",
        "Bro, at this rate, even inflation is laughing at you!",
        "You're treating my money like it's yours—stop being responsible!"
    ],
    mediumPurchase: [
        "Okay, now we're getting somewhere!",
        "You're finally spending like a mildly unhinged millionaire!",
        "Ooo, I feel that one in my bank account. Nice!",
        "Now that's a proper flex!",
        "You're getting a taste for luxury, I see. Dangerous!",
        "Nice choice! But why stop now? Bankrupt me!"
    ],
    bigPurchase: [
        "HOLY— okay, that one stung a little.",
        "Now you're cooking! With GOLD!",
        "That's the kind of spending that gets accountants fired!",
        "Luxury looks disturbingly good on you!",
        "You just made a random billionaire even richer!",
        "I hope you enjoy it, because my wallet just cried a little!"
    ],
    cantAfford: [
        "Whoops! Even bottomless pockets have a bottom!",
        "Congratulations, you have successfully bankrupted me!",
        "No money? Time to sell a kidney, I guess!",
        "You've hit rock bottom… and it's not even marble.",
        "RIP my funds. Gone but never forgotten.",
        "Sorry, but even I can't afford your dreams!"
    ],
    almostBroke: [
        "Uh-oh, I'm feeling kinda broke… Nah, just kidding. (Or am I?)",
        "My accountant just fainted. Good job!",
        "You're one purchase away from me having to WORK for money!",
        "I can hear my credit card crying. It sounds beautiful.",
        "This is what 'financially reckless' looks like. I'm so proud.",
        "One more splurge, and we officially enter 'oops' territory!"
    ]
};
