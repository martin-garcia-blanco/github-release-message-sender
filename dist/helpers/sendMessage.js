"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessage = void 0;
const fetch = require('node-fetch');
const sendMessage = async (url) => {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: 'Sended from the action' })
    };
    await fetch(url, options);
};
exports.sendMessage = sendMessage;
//# sourceMappingURL=sendMessage.js.map