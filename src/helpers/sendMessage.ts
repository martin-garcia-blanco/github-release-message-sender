const fetch = require('node-fetch');
export const sendMessage = async (url: string): Promise<void> => {

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: 'Sended from the action'})
    }


    await fetch(url, options)
}