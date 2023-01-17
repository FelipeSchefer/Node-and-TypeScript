"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const body_parser_1 = __importDefault(require("body-parser"));
const path = require('path');
const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(express_1.default.static(path.join(__dirname, 'public')));
app.use(adminRouter);
app.use(shopRouter);
app.use((req, res, next) => {
    res.status(401).sendFile(path.join(__dirname, 'views', '404.html'));
});
const server = http_1.default.createServer(app);
server.listen('3001', () => {
    console.log("Server running!");
});
