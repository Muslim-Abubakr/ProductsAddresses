"use strict";
app.get('/products', (req, res) => {
    res.send(products);
});
app.get('/addresses', (req, res) => {
    res.send(addresses);
});
