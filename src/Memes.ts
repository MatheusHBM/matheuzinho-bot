import axios from 'axios';

async function getRandomImage(): Promise<string | null> {
    try {
        const response = await axios.get(`https://meme-api.com/gimme`);
        
        console.log()
        return response.data.url
        
    } catch (error) {
        console.error('Erro ao buscar post do subreddit:', error);
        return 'Erro ao buscar post';
    }
}


export async function Memes(): Promise<string | null> {
    try{
        const memeType = Math.floor(Math.random() * 2);
    

        if(memeType === 0){
            const array:Array<string> = [
                'https://youtu.be/h2mcHLzO1vg',
                'https://www.ahnegao.com.br/wp-content/uploads/2018/04/corvo.jpg',
                'https://youtu.be/R5QzUgvgSnQ?si=pinHYaoiVu0iiUJg',
                'https://youtu.be/TKNeu63cWR4?si=B4BRQGvuLBvD8cUb',
                'https://youtu.be/r7pnV69FKeU?si=VbW3oIsW7Z5wPaEQ',
                'https://youtu.be/6vMrdTlwrIU?si=rCTfTk3-aGgZ2PUR',
                'https://youtu.be/iE3kD4X_Fwg?si=9EA-nPJR3T8d2GZh',
                'https://youtu.be/4KHbvrsdpw4?si=Iw3nDrI8FAyZaseW',
                'https://youtu.be/WRFmVxpiICc?si=PE13YXEDoNmxpRSE',
                'https://youtu.be/AP3h0sWuVdM?si=Z87GS4fs2wExmo5M',
                'https://youtu.be/GSV5UDaTXDA?si=SnJCWESrkUlAtpCg',
                'https://youtu.be/HIZlcIoJ_yE?si=5KH6KSmN1wtcEPL0',
                'https://youtu.be/TqZoOXELWYg?si=NOm9D_hw5KM6W82-',
                'https://youtu.be/1JABdS-HN5A?si=b4rwn4gZa6xujquU',
                'https://youtu.be/3m0Se8RMaYQ?si=gNZJaHa99XeQSGtr',
                'https://youtu.be/IIqr94NDeTE?si=v2rrJD31lDeOZRRR',
                'https://youtu.be/8GA3U-tnWlQ?si=ArPlKrXe916jNVIJ',
                'https://youtu.be/uukvEcd25oQ?si=pNOgmY1GfC0qoR9J',
                'https://youtu.be/bzQinu2Bwcs?si=ILkAILyULOeYYC2-',
                'https://youtu.be/qGk4E9ss95s?si=A1jCktoVylu9kiwS',
                'https://youtu.be/utrAEkWmFZc?si=3ZzsKz1SrQyeYqzW',
                'https://youtu.be/ujKYH9l_QlU?si=JT8sUIRYOcdf67CW',
                'https://youtu.be/tYzMYcUty6s?si=bGStW1ieSFfEZ2-a',
                'https://youtu.be/nM2Wz6NdPZs?si=aZ-HZSGIDwFEilWW',
                'https://youtu.be/bS96QAcq43U?si=_Z9rPYTjQxzaDIW_',
                'https://youtu.be/XoNzPrL0Wiw?si=VwnKZgl959cmDXOE',
                'https://youtu.be/sE6DMfgixws?si=88hoGfRfHhHyWSMy',
                'https://youtu.be/XgtopghkBZc?si=Kb6p2-JM2HHi5rsj',
                'https://youtu.be/nUnR8Q_hF4U?si=_qY0Md5lV6mseuQs',
                'https://youtu.be/cIsd1XRifyo?si=bEQFWXAg9mtkEEQp',
                'https://youtu.be/AbCU11kGYqk?si=ktDAErkk8HKHTEOw',
                'https://youtu.be/DAosuzT9LoQ?si=NWJ1_ShEq1ZLF8kd',
                'https://youtu.be/zKa92AeSByo?si=k_1fJZx3O2cTycWW',
                'https://youtu.be/R-NntxjsDD8?si=2GYSKyyo3vG0ewbY',
                'https://youtu.be/sRTdzGtu3yA?si=QtRG2wHj312qg5PU',
                'https://youtu.be/KDrpPqsXfVU?si=Fz_ND29STDtKpx5i',
                'https://youtu.be/M6o1lTztQRQ?si=2jorSZ51zizyCT7t'    
        
            ]    
            const randomIndex = Math.floor(Math.random() * array.length);
            return array[randomIndex];
        }
        if(memeType === 1){
            let meme:string | null = await getRandomImage();
            return meme; 
        }
           
        return "Houve um problema com a função de memes :/" 

    }catch(error){
        console.log(error);
        return "Houve um problema com a função de memes :/"        
    }
       
}