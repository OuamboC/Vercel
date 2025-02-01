async function fetchWishlist() {
    const response = await fetch('/wishlist'); // Correct endpoint
    const data = await response.json();
    updateWishlist(data);
}

function updateWishlist(items) {
    const wishlistDiv = document.getElementById('wishlist');
    wishlistDiv.innerHTML = '';
    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');
        if (item.claimed) {
            itemDiv.classList.add('claimed');
            itemDiv.innerHTML = `
                <span>${item.item} - ${item.price} <a href="${item.url}" target="_blank">${item.item}</a></span>
                <button disabled>Claimed</button>
            `;
        } else {
            itemDiv.innerHTML = `
                <span>${item.item} - ${item.price} <a href="${item.url}" target="_blank">${item.item}</a></span>
                <button onclick="claimItem(${item.id})">Claim</button>
            `;
        }
        wishlistDiv.appendChild(itemDiv);
    });
}

async function claimItem(id) {
    const response = await fetch('/claim', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
    });
    const result = await response.json();
    if (result.success) {
        alert('Item claimed successfully.');
        fetchWishlist(); // Refresh the wishlist
    } else {
        alert('Failed to claim item.');
    }
}

fetchWishlist(); // Fetch and display wishlist on page load

// Function to copy the address to clipboard
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
