module.exports = (req, res) => {
    let wishlist = [
        { id: 1, item: 'AirPods Max', price: '£499', url: 'https://www.apple.com/uk/shop/buy-airpods/airpods-max/midnight?fnode=91f2e5c387ec4c8fb2d51a1db07dcbadaa9ff9abe7ab341b322c55d52ab7765aee21bcc795558b1cb8f6255e3e07cb849ea819322148b68d80927227d84ae168c0bc4e535936cf5f93391b4bd008d7ef419420963dd853ee07d10ba2015cdcbf411ff9d7e18bd8ba58021f2692137b6f8c35c162ce9e994494ee2332a0e20526', claimed: false },
        { id: 2, item: 'Tissot Classic Dream', price: '£290', url: 'https://www.tissotwatches.com/en-gb/T1294103626100.html', claimed: false },
        { id: 3, item: 'Xbox Elite Series 2 Wireless Controller', price: '£149', url: 'https://www.xbox.com/en-GB/accessories/controllers/elite-wireless-controller-series-2', claimed: false },
        { id: 4, item: 'Dell 330W 7.4mm GaN Slim AC Adapter', price: '£146.08', url: 'https://www.dell.com/en-uk/shop/dell-330w-74mm-gan-slim-ac-adapter/apd/450-bcbx/pc-accessories', claimed: false },
        { id: 5, item: 'Bose SoundLink Flex Bluetooth® Speaker', price: '£119.95', url: 'https://www.bose.co.uk/en_gb/products/speakers/portable_speakers/soundlink-flex.html#v=soundlink_flex_black', claimed: false },
        { id: 6, item: 'Stanley Classic Legendary Thermal Flask 1.9L', price: '£57.50', url: 'https://www.amazon.co.uk/Stanley-Classic-Legendary-Vacuum-Bottle/dp/B001EN21BS', claimed: false },
        { id: 7, item: 'Igluu Meal Prep Glass Containers 10 Pack [Rectangle]', price: '£39.95', url: 'https://www.amazon.co.uk/gp/product/B07XJ68DCP/ref=ewc_pr_img_6?smid=A32PQL907CZRIA&th=1', claimed: false }
    ];

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
