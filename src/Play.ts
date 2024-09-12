import { joinVoiceChannel, createAudioPlayer, createAudioResource, AudioPlayerStatus } from '@discordjs/voice';
import { VoiceChannel, GuildMember } from 'discord.js';
import { join } from 'path';
import { existsSync } from 'fs';

export async function Play(member: GuildMember) {
    const voiceChannel = member.voice.channel as VoiceChannel;

    if (!voiceChannel) {
        throw new Error('Você precisa estar em um canal de voz para tocar música!');
    }

    // Conectar ao canal de voz
    const connection = joinVoiceChannel({
        channelId: voiceChannel.id,
        guildId: voiceChannel.guild.id,
        adapterCreator: voiceChannel.guild.voiceAdapterCreator,
    });

    // connection.on("stateChange", (oldState, newState) => {
    //   if (
    //       oldState.status === VoiceConnectionStatus.Ready &&
    //       newState.status === VoiceConnectionStatus.Connecting
    //   ) {
    //       connection.configureNetworking();
    //   }
    // });

    const player = createAudioPlayer();
    
    // Use join para criar o caminho absoluto
    // const musicPath = join(__dirname, 'Music', 'teste.mp3');
    const musicPath = join("C:\\Users\\Matheus\\Documents\\Programação\\matheuzinho-bot\\src\\Music\\teste.mp3");
    const resource = createAudioResource(musicPath);
    
    player.play(resource);
    
    connection.subscribe(player);

    player.on(AudioPlayerStatus.Idle, () => {
        connection.destroy(); // Desconecta do canal ao finalizar a música
    });

    player.on('error', error => {
        console.error('Erro ao tocar a música:', error);
        connection.destroy(); // Desconecta no caso de erro
    });
}

// export async function tocarMusica(voiceChannel: VoiceChannel, url: string) {
//   const connection = joinVoiceChannel({
//     channelId: voiceChannel.id,
//     guildId: voiceChannel.guild.id,
//     adapterCreator: voiceChannel.guild.voiceAdapterCreator
//   });

//   const listeners = voiceChannel.members.filter(member => !member.user.bot).size;
//   console.log("usuarios no canal: ",listeners)
//   if (listeners === 0) {
//       console.log('Nenhum ouvinte no canal de voz.');
//       connection.destroy();
//       return;
//   }


//   console.log('Conectado ao canal de voz:', voiceChannel.name);
  

//   const player = createAudioPlayer();
//   if (!existsSync(url)) {
//     console.error('Arquivo de música não encontrado!');
//     return;
// }
//   const resource = createAudioResource(url); // Use o parâmetro url para o caminho do arquivo
//   resource.volume?.setVolume(1);

//   player.play(resource);
//   connection.subscribe(player);

//   player.on('error', error => {
//     console.error('Erro ao tocar a música:', error);
//     connection.destroy(); // Desconecta no caso de erro
//   });  

// player.on('stateChange', (oldState, newState) => {
//   console.log(`Player mudou de ${oldState.status} para ${newState.status}`);
// });

// connection.on('stateChange', (oldState, newState) => {
//   console.log(`Conexão mudou de ${oldState.status} para ${newState.status}`);
// });

// connection.on('error', error => {
//   console.error('Erro na conexão de voz:', error);
// });


// connection.on('stateChange', (oldState, newState) => {
//     console.log(`Conexão mudou de ${oldState.status} para ${newState.status}`);
// });

//   console.log('Recurso de áudio adicionado ao player.');
// }

export async function tocarMusica(voiceChannel: VoiceChannel, url: string) {
  const connection = joinVoiceChannel({
    channelId: voiceChannel.id,
    guildId: voiceChannel.guild.id,
    adapterCreator: voiceChannel.guild.voiceAdapterCreator
  });

  const listeners = voiceChannel.members.filter(member => !member.user.bot).size;
  console.log("usuarios no canal: ",listeners)
  if (listeners === 0) {
      console.log('Nenhum ouvinte no canal de voz.');
      connection.destroy();
      return;
  }


  console.log('Conectado ao canal de voz:', voiceChannel.name);
  

  const player = createAudioPlayer();
  if (!existsSync(url)) {
    console.error('Arquivo de música não encontrado!');
    return;
}

const { createReadStream } = require('fs');
const stream = createReadStream(url);
const resource2 = createAudioResource(stream);
player.play(resource2);
connection.subscribe(player);

  // const resource = createAudioResource(url); // Use o parâmetro url para o caminho do arquivo
  // resource.volume?.setVolume(1);

  // player.play(resource);
  // connection.subscribe(player);

  player.on('error', error => {
    console.error('Erro ao tocar a música:', error);
    connection.destroy(); // Desconecta no caso de erro
  });  

player.on('stateChange', (oldState, newState) => {
  console.log(`Player mudou de ${oldState.status} para ${newState.status}`);
});

connection.on('stateChange', (oldState, newState) => {
  console.log(`Conexão mudou de ${oldState.status} para ${newState.status}`);
});

connection.on('error', error => {
  console.error('Erro na conexão de voz:', error);
});

  console.log('Recurso de áudio adicionado ao player.');
}
