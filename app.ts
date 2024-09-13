import { config } from 'dotenv';
import { Client, GatewayIntentBits, Message, TextChannel, VoiceChannel  } from 'discord.js';
import { d4_roll,d6_roll,d8_roll,d100_roll,d10_roll,d20_roll, d12_roll } from './src/DiceRoll';
import { News } from './src/News';
import { Memes } from './src/Memes';
import { Play, tocarMusica } from './src/Play';
import { Feedback } from './src/Feedback';
import { Report } from './src/Report';

config();

const TOKEN: string = process.env.token || '';

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

const prefix = '$'; 

client.once('ready', () => {
    console.log(`${client.user?.tag} está online!`);
});

client.on('messageCreate', async (message: Message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
  
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift()?.toLowerCase();
  
    if (command === "roll") {
      const rollMessage = args.join(' ');
      const regex = /^(\d*)d(4|6|8|10|12|20|100)$/;
      const match = rollMessage.match(regex);
  
      if (!match) {
        if (message.channel instanceof TextChannel) {
          message.channel.send(
            "Formato inválido. Use $roll xdy (x-> número de dados (até 15), y-> tipo do dado (d4,d6,d8,d10,d12,d20,d100))"
          );
        }
        return;
      }
  
      const max = parseInt(match[2], 10);
  
      if (max === 4) {
        if (message.channel instanceof TextChannel) {
            message.channel.send(d4_roll(rollMessage));
          }        
      }
      if (max === 6) {
        if (message.channel instanceof TextChannel) {
            message.channel.send(d6_roll(rollMessage));
          }        
      }
      if (max === 8) {
        if (message.channel instanceof TextChannel) {
            message.channel.send(d8_roll(rollMessage));
          }        
      }
      if (max === 10) {
        if (message.channel instanceof TextChannel) {
            message.channel.send(d10_roll(rollMessage));
          }        
      }
      if (max === 12) {
        if (message.channel instanceof TextChannel) {
            message.channel.send(d12_roll(rollMessage));
          }        
      }
      if (max === 20) {
        if (message.channel instanceof TextChannel) {
            message.channel.send(d20_roll(rollMessage));
          }        
      }
      if (max === 100) {
        if (message.channel instanceof TextChannel) {
            message.channel.send(d100_roll(rollMessage));
          }        
      }
    }
    if (command === "novidades") {
        if (message.channel instanceof TextChannel) {
          const user = message.author
            message.channel.send(News(user));
          }        
    }
    if (command === "memes") {
      try{
        if (message.channel instanceof TextChannel) {
          message.channel.send(await Memes() || "Houve um problema com a função de memes :/");
        }  
      }catch(error){
        if (message.channel instanceof TextChannel) {
          message.channel.send("Houve um problema com a função de memes :/");
        }  
      }
             
    }
    if (command === "feedback") {
      if (message.channel instanceof TextChannel) {
        const feedback = args.join(' ');
          message.channel.send(Feedback(message.author.username,feedback));
        }        
  }
  if (command === "reporte") {
    if (message.channel instanceof TextChannel) {
      const report = args.join(' ');
        message.channel.send(Report(message.author.username,report));
      }          
}
    if (command === "tocar") {
      if (message.channel instanceof TextChannel) {
          message.channel.send("Infelizmente, a função de tocar música ainda não funciona :/");
        }       
        
    }
    if (command === "playtest") {
      try {
          if (message.member) {
              if (message.member?.voice.channel) {
                  const voiceChannel = message.member.voice.channel as VoiceChannel;
                  await tocarMusica(voiceChannel,"C:\\Users\\Matheus\\Documents\\Programação\\matheuzinho-bot\\src\\Music\\teste2.mp3");
                } else {
                  message.reply('Você não está em um canal de voz!');
                }
              await Play(message.member);
              if (message.channel instanceof TextChannel) {
                  message.channel.send('Tocando música!');
              }                
          }
      } catch (error) {
          if (message.channel instanceof TextChannel) {
              message.channel.send('Erro ao tentar tocar a música!');
          }  
          console.error(error);
      }
      
  }
  });
  

client.login(TOKEN);
