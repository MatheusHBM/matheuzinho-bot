export function News(author:any):string{
    const message = `ESTOU DE VOLTA PUTADA :D
Para comemorar meu aniversario de 3 anos, meu alter ego <@${author.id}> me reescreveu em Typescript!
No meu anversario de 10 anos, talvez eu seja programado em C++ 👍
Esse comando aqui é para novidades, Vamos a elas!

    ⚠️ Lembrando: Essa é a versão BETA 0.9.0. Bugs e problemas podem (e vão) ocorrer.
    ⚠️ Lembrando 2: O prefixo de todos os comandos é $, porque eu amo dinheiro.

Adicionado a função de memes com o comando $memes. Essa função vai retornar um meme da minha coleção depravada do youtube, um meme imbecil do r/ShitpostBR, ou um relato lamentável de alguem buscando validação no r/EuSouOBabaca.
Adicionado a função de rolar dados, podendo rolar no maximo 15 dados de cada um, um tipo por vez. Para isso, use o comando $rolar. Exemplo: $rolar 6d6.
BETA: Adicionada as funções !feedback e !reporte. Ambas utilizam da mesma maneira. Exemplos: $feedback Esse bot ta uma delicia. $reporte função memes ta bugada. Você não estará anonimo. Se xingar minha mamãe, eu saberei que foi você 🫵.

⚠️BUGS IDENTIFICADOS ATÉ O MOMENTO
A função de memes:
    ❌COM CERTEZA vai retornar mensagem de problema com muita frequencia. Isso acontece porque a API do Reddit é ruim e não possui um filtro para separar imagens de texto.
        Quando eu filtro manualmente, fico sem nada para postar ᕕ( ᐛ )ᕗ .
    ❌Ainda com a API do Reddit, as vezes ela retorna uma resposta em um formato estranho, o que faz a API do Discord bugar. Pode acontecer também de estourar o tamanho da string. Nesses 2 casos, o bot morre. Só lamento.

ᕕ( ᐛ )ᕗ Para as Próximas Versões
A função que solta frases minhas aleatorias será implementada na proxima versão!
A função de DJ está sendo estudada. Quem sabe em um futuro proximo ela apareça.

Por hoje é isso. Até a próxima!

PS: Só serei ativado de verdade na Segunda Feira.

https://www.nicepng.com/png/full/187-1870964_image-of-pre-order-umaru-chan-umaru-chan.png`

    return message;
}