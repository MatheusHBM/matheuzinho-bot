import * as fs from 'fs';

export function Feedback(user: string, msg: string): string {
    const message = `${user}: ${msg}\n`;
    const path = 'C:\\Users\\Matheus\\Documents\\Programação\\matheuzinho-bot\\src\\txt\\feedback.txt';   
    fs.writeFileSync(path, message, { flag: 'a' });
    return "Obrigado pelo Feedback! Em alguns anos ele será lido"
}