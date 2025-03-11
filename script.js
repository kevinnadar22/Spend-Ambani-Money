// Constants and Variables
const INITIAL_MONEY = 1000000000000; // ₹10,00,00,00,000
let currentMoney = INITIAL_MONEY;
let cart = {};
let displayedSpeech = false;
let cartItemCount = 0;

// DOM Elements
const moneyAmountEl = document.getElementById('money-amount');
const remainingAmountEl = document.getElementById('remaining-amount');
const itemsContainerEl = document.querySelector('.items-container');
const receiptItemsEl = document.getElementById('receipt-items');
const speechBubbleEl = document.getElementById('speech-bubble');
const speechTextEl = document.getElementById('speech-text');
const moneyRainEl = document.querySelector('.money-rain');
const cartSidebarEl = document.querySelector('.cart-sidebar');
const cartOverlayEl = document.querySelector('.cart-overlay');
const cartButtonEl = document.querySelector('.cart-button');
const closeCartBtnEl = document.querySelector('.close-cart-btn');
const cartCountEl = document.getElementById('cart-count');

// Format number to Indian currency format (with commas)
function formatMoney(amount) {
    // Convert to string
    let str = amount.toString();
    
    // For numbers less than 1000, no formatting needed
    if (str.length <= 3) {
        return str;
    }
    
    // Format according to Indian number system (lakhs, crores)
    let lastThree = str.substring(str.length - 3);
    let otherNumbers = str.substring(0, str.length - 3);
    
    if (otherNumbers !== '') {
        lastThree = ',' + lastThree;
    }
    
    let formattedNumber = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree;
    return formattedNumber;
}

// Update money display
function updateMoneyDisplay() {
    moneyAmountEl.textContent = formatMoney(currentMoney);
    remainingAmountEl.textContent = '₹' + formatMoney(currentMoney);
    
    // Update the buy buttons based on current money
    updateBuyButtons();
    
    // Display speech bubble based on spending
    displaySpeechBubble();
}

// Update cart count notification
function updateCartCount() {
    cartItemCount = 0;
    
    // Count total items in cart
    for (const itemId in cart) {
        cartItemCount += cart[itemId];
    }
    
    // Update the cart count display
    cartCountEl.textContent = cartItemCount;
    
    // Add animation if there are items
    if (cartItemCount > 0) {
        cartCountEl.classList.add('active');
        cartButtonEl.style.animation = 'pulse 2s infinite';
    } else {
        cartCountEl.classList.remove('active');
        cartButtonEl.style.animation = 'none';
    }
}

// Toggle cart sidebar
function toggleCart() {
    cartSidebarEl.classList.toggle('open');
    cartOverlayEl.classList.toggle('active');
    
    // Update receipt when opening cart
    if (cartSidebarEl.classList.contains('open')) {
        updateReceipt();
        
        // Highlight cart notification before opening
        if (cartItemCount > 0) {
            cartCountEl.classList.add('animate__animated', 'animate__bounceIn');
            setTimeout(() => {
                cartCountEl.classList.remove('animate__animated', 'animate__bounceIn');
            }, 1000);
        }
    }
}

// Close cart when clicking outside
function closeCartOnOutsideClick() {
    if (cartSidebarEl.classList.contains('open')) {
        toggleCart();
    }
}

// Update the buy buttons based on current money
function updateBuyButtons() {
    const buyButtons = document.querySelectorAll('.buy-button');
    
    buyButtons.forEach(button => {
        const itemId = button.dataset.itemId;
        const itemPrice = items.find(item => item.id == itemId).price;
        
        if (currentMoney < itemPrice) {
            button.disabled = true;
        } else {
            button.disabled = false;
        }
    });
}

// Create and display item cards
function displayItems() {
    items.forEach(item => {
        const itemCard = document.createElement('div');
        itemCard.className = 'item-card animate__animated animate__fadeIn';
        
        itemCard.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="item-image">
            <div class="item-details">
                <h3 class="item-name">${item.name}</h3>
                <p class="item-price">₹${formatMoney(item.price)}</p>
                <div class="item-controls">
                    <button class="control-button sell-button" data-item-id="${item.id}" ${!cart[item.id] || cart[item.id] === 0 ? 'disabled' : ''}>Sell</button>
                    <span class="quantity" id="quantity-${item.id}">${cart[item.id] || 0}</span>
                    <button class="control-button buy-button" data-item-id="${item.id}" ${currentMoney < item.price ? 'disabled' : ''}>Buy</button>
                </div>
            </div>
        `;
        
        itemsContainerEl.appendChild(itemCard);
    });
}

// Add event listeners to buy and sell buttons
function addEventListeners() {
    itemsContainerEl.addEventListener('click', function(e) {
        // Buy button clicked
        if (e.target.classList.contains('buy-button')) {
            const itemId = e.target.dataset.itemId;
            buyItem(itemId);
        }
        
        // Sell button clicked
        if (e.target.classList.contains('sell-button')) {
            const itemId = e.target.dataset.itemId;
            sellItem(itemId);
        }
    });
    
    // Cart button
    cartButtonEl.addEventListener('click', toggleCart);
    
    // Close cart button
    closeCartBtnEl.addEventListener('click', toggleCart);
    
    // Close cart when clicking overlay
    cartOverlayEl.addEventListener('click', closeCartOnOutsideClick);
    
    // Prevent closing when clicking inside cart
    cartSidebarEl.addEventListener('click', function(e) {
        e.stopPropagation();
    });
    
    // Show cart tooltip on hover
    cartButtonEl.addEventListener('mouseenter', function() {
        // Show cart info tooltip if there are items
        if (cartItemCount > 0) {
            cartButtonEl.setAttribute('data-tooltip', `${cartItemCount} items in cart`);
        }
    });
    
    // Item card hover effects for mobile
    const itemCards = document.querySelectorAll('.item-card');
    itemCards.forEach(card => {
        let touchTimeout;
        
        card.addEventListener('touchstart', function(e) {
            // Prevent default to avoid triggering hover and click at the same time
            e.preventDefault();
            
            // Clear any existing timeout
            clearTimeout(touchTimeout);
            
            // Add a temporary class for touch effect
            this.classList.add('touch-active');
        });
        
        card.addEventListener('touchend', function() {
            const currentCard = this;
            
            // Set a small timeout to allow for tap recognition
            touchTimeout = setTimeout(() => {
                currentCard.classList.remove('touch-active');
            }, 300);
        });
        
        // Also remove the class when touch is moved away
        card.addEventListener('touchmove', function() {
            this.classList.remove('touch-active');
        });
    });
}

// Buy an item
function buyItem(itemId) {
    const item = items.find(item => item.id == itemId);
    
    // Check if the user has enough money
    if (currentMoney >= item.price) {
        // Update money
        currentMoney -= item.price;
        
        // Update cart
        cart[itemId] = (cart[itemId] || 0) + 1;
        
        // Update UI
        document.getElementById(`quantity-${itemId}`).textContent = cart[itemId];
        document.querySelector(`.sell-button[data-item-id="${itemId}"]`).disabled = false;
        
        // Update cart count
        updateCartCount();
        
        // Update receipt
        updateReceipt();
        
        // Update money display
        updateMoneyDisplay();
        
        // Play sound effect
        sounds.buy.play();
        
        // Add item animation
        animateItemBuy(itemId);
    } else {
        // Play can't afford sound
        sounds.cantAfford.play();
        
        // Flash the money counter
        moneyAmountEl.classList.add('animate__animated', 'animate__headShake');
        setTimeout(() => {
            moneyAmountEl.classList.remove('animate__animated', 'animate__headShake');
        }, 1000);
    }
}

// Sell an item
function sellItem(itemId) {
    const item = items.find(item => item.id == itemId);
    
    // Check if the user has the item in the cart
    if (cart[itemId] && cart[itemId] > 0) {
        // Update money
        currentMoney += item.price;
        
        // Update cart
        cart[itemId]--;
        
        // Update UI
        document.getElementById(`quantity-${itemId}`).textContent = cart[itemId];
        
        // Disable sell button if quantity is 0
        if (cart[itemId] === 0) {
            document.querySelector(`.sell-button[data-item-id="${itemId}"]`).disabled = true;
        }
        
        // Update cart count
        updateCartCount();
        
        // Update receipt
        updateReceipt();
        
        // Update money display
        updateMoneyDisplay();
        
        // Play sound effect
        sounds.sell.play();
        
        // Add item animation
        animateItemSell(itemId);
    }
}

// Update the receipt
function updateReceipt() {
    // Clear current receipt
    receiptItemsEl.innerHTML = '';
    
    // Check if cart is empty
    let isEmpty = true;
    for (const itemId in cart) {
        if (cart[itemId] > 0) {
            isEmpty = false;
            break;
        }
    }
    
    // If cart is empty, show message
    if (isEmpty) {
        const emptyLi = document.createElement('li');
        emptyLi.textContent = 'Your shopping cart is empty!';
        emptyLi.style.textAlign = 'center';
        emptyLi.style.fontStyle = 'italic';
        emptyLi.className = 'animate__animated animate__fadeIn';
        receiptItemsEl.appendChild(emptyLi);
        return;
    }
    
    // Add items to receipt
    for (const itemId in cart) {
        if (cart[itemId] > 0) {
            const item = items.find(item => item.id == itemId);
            const li = document.createElement('li');
            li.className = 'animate__animated animate__fadeIn';
            
            li.innerHTML = `
                <span>${item.name} x ${cart[itemId]}</span>
                <span>₹${formatMoney(item.price * cart[itemId])}</span>
            `;
            
            receiptItemsEl.appendChild(li);
        }
    }
}

// Display a speech bubble with a random message
function displaySpeechBubble() {
    // Calculate percentage of money spent
    const percentageSpent = ((INITIAL_MONEY - currentMoney) / INITIAL_MONEY) * 100;
    
    let messageType;
    if (percentageSpent === 0) {
        messageType = 'start';
    } else if (percentageSpent < 10) {
        messageType = 'smallPurchase';
    } else if (percentageSpent < 50) {
        messageType = 'mediumPurchase';
    } else if (percentageSpent < 90) {
        messageType = 'largePurchase';
    } else {
        messageType = 'hugeSpending';
    }
    
    // Get a random message of this type
    const messages = speeches[messageType];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    // Set the message
    speechTextEl.textContent = randomMessage;
    
    // Show the speech bubble if it's not already displayed
    if (!displayedSpeech) {
        speechBubbleEl.classList.remove('hidden');
        displayedSpeech = true;
        
        // Hide after 4 seconds
        setTimeout(() => {
            speechBubbleEl.classList.add('hidden');
            displayedSpeech = false;
        }, 4000);
    }
}

// Create money rain animation
function createMoneyRain() {
    // Create 30 money icons
    for (let i = 0; i < 30; i++) {
        createMoneyIcon();
    }
}

// Create a single money icon for the rain
function createMoneyIcon() {
    const money = document.createElement('div');
    money.className = 'money';
    
    // Random position
    const left = Math.random() * 100;
    money.style.left = `${left}%`;
    
    // Random duration
    const duration = 5 + Math.random() * 10; // 5-15 seconds
    money.style.animationDuration = `${duration}s`;
    
    // Random delay
    money.style.animationDelay = `${Math.random() * 15}s`;
    
    // Add to DOM
    moneyRainEl.appendChild(money);
    
    // Remove after animation completes
    setTimeout(() => {
        money.remove();
        createMoneyIcon(); // Create a new one to keep the count consistent
    }, duration * 1000);
}

// Animate buying an item
function animateItemBuy(itemId) {
    const quantityEl = document.getElementById(`quantity-${itemId}`);
    quantityEl.classList.add('animate__animated', 'animate__bounceIn');
    setTimeout(() => {
        quantityEl.classList.remove('animate__animated', 'animate__bounceIn');
    }, 1000);
}

// Animate selling an item
function animateItemSell(itemId) {
    const quantityEl = document.getElementById(`quantity-${itemId}`);
    quantityEl.classList.add('animate__animated', 'animate__rubberBand');
    setTimeout(() => {
        quantityEl.classList.remove('animate__animated', 'animate__rubberBand');
    }, 1000);
}

// Initialize the app
function init() {
    // Format initial money
    updateMoneyDisplay();
    
    // Display items
    displayItems();
    
    // Add event listeners
    addEventListeners();
    
    // Create money rain animation
    createMoneyRain();
    
    // Initialize cart count
    updateCartCount();
    
    // Display initial speech bubble after 1 second
    setTimeout(() => {
        displaySpeechBubble();
    }, 1000);
}

// Initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', init); 