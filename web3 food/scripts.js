
document.addEventListener('DOMContentLoaded', function () {
    // Get the button element
    const connectWalletButton = document.getElementById('connect-wallet');

    // Ensure the button exists
    if (connectWalletButton) {
        connectWalletButton.addEventListener('click', function () {
            console.log('Connect Wallet button clicked');
            // Add additional logic for connecting the wallet if needed
        });
    } else {
        console.error('Connect Wallet button not found');
    }
});

document.getElementById('withdraw-wallet').addEventListener('click', function() {
    window.location.href = 'balance.html';
});


<<<<<<< HEAD
=======
document.addEventListener('DOMContentLoaded', function () {
    const foodItems = document.querySelectorAll('.food-item');

    foodItems.forEach(item => {
        const text = item.getAttribute('data-text');
        const description = item.getAttribute('data-description');
        const link = item.getAttribute('data-link');

        const foodInfo = document.createElement('div');
        foodInfo.classList.add('food-info');
        
        foodInfo.innerHTML = `
            <a href="${link}" class="food-link">
                <h3>${text}</h3>
                <p>${description}</p>
            </a>
        `;

        item.appendChild(foodInfo);
    });
});
>>>>>>> c4e7c10ff91036840aa93ef8647d63f16492cecb

