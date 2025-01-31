async function fetchWishlist() {
    const response = await fetch('/api/wishlist');
    const data = await response.json();
    updateWishlist(data);
}

async function claimItem(id) {
    const response = await fetch('/api/wishlist', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
    });
    const result = await response.json();
    if (result.success) {
        alert('Item claimed successfully.');
        fetchWishlist();
    } else {
        alert('Failed to claim item.');
    }
}

//Function to copy the address to clipboard
function copyAddress() {
    var addressField = document.getElementById("address");

    // Select the text field
    addressField.select();
    addressField.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    document.execCommand("copy");

    // Optional: Alert the user that the address has been copied
    alert("Address copied to clipboard!");
}