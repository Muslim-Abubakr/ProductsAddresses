"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const products_router_1 = require("./Routes/products-router");
const addresses_router_1 = require("./Routes/addresses-router");
// create express app
const app = (0, express_1.default)();
const port = process.env.PORT || 4000;
const products = [{ id: 1, title: 'tomato' }, { id: 2, title: 'orange' }];
const addresses = [{ id: 1, value: 'Mitinskaya' }, { id: 2, value: 'Selickaga' }];
const parserMiddleware = (0, body_parser_1.default)({});
app.use(parserMiddleware);
app.get('/', (req, res) => {
    res.send('Добро пожаловать на главную страницу!');
});
app.use('/products', products_router_1.productsRouter);
app.use('/addresses', addresses_router_1.addressesRouter);
// start app 
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
