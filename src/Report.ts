import * as fs from 'fs';

export function Report(user: string, msg: string): string {
    const message = `${user}: ${msg}\n`;
    const path = 'C:\\Users\\Matheus\\Documents\\Programação\\matheuzinho-bot\\src\\txt\\report.txt'; 
    fs.writeFileSync(path, message, { flag: 'a' });
    return "Obrigado pelo reporte. Tentarei corrigir o mais rapido possivel!"
}