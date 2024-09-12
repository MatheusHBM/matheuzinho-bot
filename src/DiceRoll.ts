export function d4_roll(tag:string):string{
    const regex = /^(\d*)d4$/;
    const match = tag.match(regex);

    if (!match) {
        return 'Formato inválido';
    }

    // Se não houver número antes de 'd', assume-se 1 dado
    const n = match[1] ? parseInt(match[1], 10) : 1;

    // Validar se n é maior que 15
    if (n > 15) {
        return 'Erro: Não é permitido rolar mais de 15 dados';
    }

    // Gerar números aleatórios e somar
    const resultados: number[] = [];
    let soma = 0;

    for (let i = 0; i < n; i++) {
        const valor = Math.floor(Math.random() * 4) + 1; // Gera número entre 1 e 4
        resultados.push(valor);
        soma += valor;
    }

    // Retornar o resultado no formato solicitado
    return `Resultado: ${soma} (${resultados.join(',')})`;
}

export function d6_roll(tag: string): string {
    const regex = /^(\d*)d6$/;
    const match = tag.match(regex);

    if (!match) {
        return 'Formato inválido';
    }

    const n = match[1] ? parseInt(match[1], 10) : 1;

    if (n > 15) {
        return 'Erro: Não é permitido rolar mais de 15 dados';
    }

    const resultados: number[] = [];
    let soma = 0;

    for (let i = 0; i < n; i++) {
        const valor = Math.floor(Math.random() * 6) + 1; 
        resultados.push(valor);
        soma += valor;
    }

    return `Resultado: ${soma} (${resultados.join(', ')})`;
}

export function d8_roll(tag: string): string {
    const regex = /^(\d*)d8$/;
    const match = tag.match(regex);

    if (!match) {
        return 'Formato inválido';
    }

    const n = match[1] ? parseInt(match[1], 10) : 1;

    if (n > 15) {
        return 'Erro: Não é permitido rolar mais de 15 dados';
    }

    const resultados: number[] = [];
    let soma = 0;

    for (let i = 0; i < n; i++) {
        const valor = Math.floor(Math.random() * 8) + 1; 
        resultados.push(valor);
        soma += valor;
    }

    return `Resultado: ${soma} (${resultados.join(', ')})`;
}

export function d10_roll(tag: string): string {
    const regex = /^(\d*)d10$/;
    const match = tag.match(regex);

    if (!match) {
        return 'Formato inválido';
    }

    const n = match[1] ? parseInt(match[1], 10) : 1;

    if (n > 15) {
        return 'Erro: Não é permitido rolar mais de 15 dados';
    }

    const resultados: number[] = [];
    let soma = 0;

    for (let i = 0; i < n; i++) {
        const valor = Math.floor(Math.random() * 10) + 1; 
        resultados.push(valor);
        soma += valor;
    }

    return `Resultado: ${soma} (${resultados.join(', ')})`;
}

export function d12_roll(tag: string): string {
    const regex = /^(\d*)d12$/;
    const match = tag.match(regex);

    if (!match) {
        return 'Formato inválido';
    }

    const n = match[1] ? parseInt(match[1], 10) : 1;

    if (n > 15) {
        return 'Erro: Não é permitido rolar mais de 15 dados';
    }

    const resultados: number[] = [];
    let soma = 0;

    for (let i = 0; i < n; i++) {
        const valor = Math.floor(Math.random() * 12) + 1; 
        resultados.push(valor);
        soma += valor;
    }

    return `Resultado: ${soma} (${resultados.join(', ')})`;
}

export function d20_roll(tag: string): string {
    const regex = /^(\d*)d20$/;
    const match = tag.match(regex);

    if (!match) {
        return 'Formato inválido';
    }

    const n = match[1] ? parseInt(match[1], 10) : 1;

    if (n > 15) {
        return 'Erro: Não é permitido rolar mais de 15 dados';
    }

    const resultados: number[] = [];
    let soma = 0;

    for (let i = 0; i < n; i++) {
        const valor = Math.floor(Math.random() * 20) + 1; 
        resultados.push(valor);
        soma += valor;
    }

    return `Resultado: ${soma} (${resultados.join(', ')})`;
}

export function d100_roll(tag: string): string {
    const regex = /^(\d*)d100$/;
    const match = tag.match(regex);

    if (!match) {
        return 'Formato inválido';
    }

    const n = match[1] ? parseInt(match[1], 10) : 1;

    if (n > 15) {
        return 'Erro: Não é permitido rolar mais de 15 dados';
    }

    const resultados: number[] = [];
    let soma = 0;

    for (let i = 0; i < n; i++) {
        const valor = Math.floor(Math.random() * 100) + 1; 
        resultados.push(valor);
        soma += valor;
    }

    return `Resultado: ${soma} (${resultados.join(', ')})`;
}
