async function fetchWishlist() {
    const response = await fetch('/api/wishlist'); // Use the correct endpoint for Vercel
    const data = await response.json();
    updateWishlist(data);
}

function updateWishlist(items) {
    const wishlistDiv = document.getElementById('wishlist');
    wishlistDiv.innerHTML = '';
    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');
        itemDiv.setAttribute('data-id', item.id); // Add data-id attribute to each item

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
    const confirmClaim = confirm('Do you want to offer this item?');
    if (confirmClaim) {
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
            fetchWishlist(); // Refresh the wishlist
        } else {
            alert('Failed to claim item.');
        }
    }
}

fetchWishlist(); // Fetch and display wishlist on page load



// Retrieve the current dark mode status from local storage
let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');

// Function to enable dark mode
const enableDarkmode = () => {
    document.body.classList.add('darkmode'); // Add dark mode class to the body
    localStorage.setItem('darkmode', 'active'); // Store the status in local storage
};

// Function to disable dark mode
const disableDarkmode = () => {
    document.body.classList.remove('darkmode'); // Remove dark mode class from the body
    localStorage.setItem('darkmode', null); // Remove the status from local storage
};

// Apply dark mode if previously enabled
if (darkmode === "active") enableDarkmode();

// Add event listener to the theme switch button
themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode'); // Refresh dark mode status
    // Toggle dark mode based on current status
    if (darkmode !== "active") {
        enableDarkmode();
    } else {
        disableDarkmode();
    }
});
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
