let wishlist = [
    { id: 1, item: 'Tissot Classic Dream', price: '£290', url: 'https://www.tissotwatches.com/en-gb/T1294103626100.html', claimed: false },
    { id: 2, item: 'Aegis Fortress XTS Encryption [1 TB]', price: '£224.96', url:'https://apricorn.com/aegis-fortress-l3?gad_source=1&gbraid=0AAAAAD_h3UtN66pq3tm_zufReYpOxlPpj&gclid=CjwKCAiAqfe8BhBwEiwAsne6gXSO0io-1exk10rvwgvX3zLw6wjj075Iw7HBWE2tGLyXOfvvMaE_bBoCFD0QAvD_BwE', claimed:false },
    { id: 3, item: 'Xbox Elite Series 2 Wireless Controller', price: '£149', url: 'https://www.xbox.com/en-GB/accessories/controllers/elite-wireless-controller-series-2', claimed: false },
    { id: 4, item: 'Dell 330W 7.4mm GaN Slim AC Adapter', price: '£146.08', url: 'https://www.dell.com/en-uk/shop/dell-330w-74mm-gan-slim-ac-adapter/apd/450-bcbx/pc-accessories', claimed: false },
    { id: 5, item: 'JBL Flip 6', price: '£129.99', url: 'https://uk.jbl.com/FLIP-6-.html?cgid=speakers', claimed: false },
    { id: 6, item: '4K HD Spy Camera WiFi Hidden Camera Clock', price: '£79.99', url: 'https://www.amazon.co.uk/gp/product/B0DN1GKXJG/ref=ox_sc_act_title_1?smid=A758J3OG2RWGJ&psc=1', claimed: false },
    { id: 7, item: 'Stanley Classic Legendary Thermal Flask 1.9L', price: '£57.50', url: 'https://www.amazon.co.uk/Stanley-Classic-Legendary-Vacuum-Bottle/dp/B001EN21BS', claimed: false },
    { id: 8, item: 'Testing', price: '£1', url: 'https://www.tissotwatches.com/en-gb/T1294103626100.html', claimed: false }
];
module.exports = (req, res) => {
   

    if (req.method === 'GET') {
        res.status(200).json(wishlist);
    } else if (req.method === 'POST') {
        const { id } = req.body;
        const item = wishlist.find(i => i.id === id);
        if (item) {
            item.claimed = true;
            res.status(200).json({ success: true });
        } else {
            res.status(404).json({ success: false, message: 'Item not found' });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method not allowed' });
    }
};
