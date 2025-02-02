module.exports = (req, res) => {
    let wishlist = [
        { id: 1, item: 'AirPods Max', price: '£499', url: 'https://www.apple.com/uk/shop/buy-airpods/airpods-max/midnight?fnode=91f2e5c387ec4c8fb2d51a1db07dcbadaa9ff9abe7ab341b322c55d52ab7765aee21bcc795558b1cb8f6255e3e07cb849ea819322148b68d80927227d84ae168c0bc4e535936cf5f93391b4bd008d7ef419420963dd853ee07d10ba2015cdcbf411ff9d7e18bd8ba58021f2692137b6f8c35c162ce9e994494ee2332a0e20526', claimed: false },
        { id: 2, item: 'Tissot Classic Dream', price: '£290', url: 'https://www.tissotwatches.com/en-gb/T1294103626100.html', claimed: false },
        { id: 3, item: 'Aegis Fortress XTS Encryption [1 TB]', price: '£224.96', url:'https://apricorn.com/aegis-fortress-l3?gad_source=1&gbraid=0AAAAAD_h3UtN66pq3tm_zufReYpOxlPpj&gclid=CjwKCAiAqfe8BhBwEiwAsne6gXSO0io-1exk10rvwgvX3zLw6wjj075Iw7HBWE2tGLyXOfvvMaE_bBoCFD0QAvD_BwE', claimed:false },
        { id: 4, item: 'Xbox Elite Series 2 Wireless Controller', price: '£149', url: 'https://www.xbox.com/en-GB/accessories/controllers/elite-wireless-controller-series-2', claimed: false },
        { id: 5, item: 'Dell 330W 7.4mm GaN Slim AC Adapter', price: '£146.08', url: 'https://www.dell.com/en-uk/shop/dell-330w-74mm-gan-slim-ac-adapter/apd/450-bcbx/pc-accessories', claimed: false },
        { id: 6, item: 'Bose SoundLink Flex Bluetooth® Speaker', price: '£119.95', url: 'https://www.bose.co.uk/en_gb/products/speakers/portable_speakers/soundlink-flex.html#v=soundlink_flex_black', claimed: false },
        { id: 7, item: '4K HD Spy Camera WiFi Hidden Camera Clock', price: '£79.99', url: 'https://www.amazon.co.uk/gp/product/B0DN1GKXJG/ref=ox_sc_act_title_1?smid=A758J3OG2RWGJ&psc=1', claimed: false },
        { id: 8, item: 'Stanley Classic Legendary Thermal Flask 1.9L', price: '£57.50', url: 'https://www.amazon.co.uk/Stanley-Classic-Legendary-Vacuum-Bottle/dp/B001EN21BS', claimed: false },
        { id: 9, item: 'Cracking the Coding Interview, 6th Edition', price: '£28.25',url: 'https://www.amazon.co.uk/Cracking-Coding-Interview-6th-Programming/dp/0984782850/ref=sr_1_5?crid=2G7OOO6M7PR8T&dib=eyJ2IjoiMSJ9.VOI2y7HYRxTFVgT0-Zl59gbQLqWldYS92FoKRCiewY6WsU77_jGz396_c4uIMuMp7vO5WoMk_lWEXk6Znzuc_HQ2JlMzZqiQtqL9Oz-rjoPLLA_0dsa1FOmCzd2tR57tlIPezXsw4MPPZEfsx9cgX2azKaiRJxTqKB1ryPfkhsJYRzVqW3ddJrqfc3MxAR8kD2h0xisG04VpXCgQEaos03nkLeL3t4ANUhxK9jP_oak.wuXszGL-rCr90Ey24aGmf4dkhZ8MU86Q9lSh6c_m0Fk&dib_tag=se&keywords=cracking+the+interview&qid=1738482099&sprefix=cracking+The+Interv%2Caps%2C71&sr=8-5', claimed:false},
        { id: 10, item: 'Igluu Meal Prep Glass Containers 10 Pack [Rectangle]', price: '£39.95', url: 'https://www.amazon.co.uk/gp/product/B07XJ68DCP/ref=ewc_pr_img_6?smid=A32PQL907CZRIA&th=1', claimed: false },
        { id: 11, item: 'Swimming Goggles', price: '£17.99', url: 'https://amzn.eu/d/bWJ6JbW', claimed: false},
        { id: 12, item: 'Apron with Pocket Cooking', price: '£6.99', url: 'https://amzn.eu/d/dQ2zoLh', claimed: false },
        { id: 13, item: 'Testing', price: '£0', url: 'https://amzn.eu/d/dQ2zoLh', claimed: false }

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
