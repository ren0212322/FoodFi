
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



