export function Help() : string{
    let help : string = `Comandos do bot:
    $roll -> Rola alguns dados. somente um tipo de dado por vez, e até 15 unidades dele. Ex: $roll 6d6
    $memes -> Retorna um meme da minha coleção depravada do youtube, ou de algum lugar obscuro do Reddit
    $feedback -> Para elogiar ou fazer criticas ao bot (não anônimo). Ex: $feedback que bot delicioso
    $reporte -> Exclusivamente para reportar bugs com o bot. Ex: $reporte memes parou de funcionar
    $novidades -> Retorna as novidades da ultima versão do bot
    $frases -> Retorna uma frase aleatória minha fora de contexto
    $ajuda -> Como chegou aqui sem esse comando?
    `
    return help;
}