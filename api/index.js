import axios from "axios";

const memeAPI = "https://api.imgflip.com/get_memes";


export async function getMemes() {
    try {
        const response = await axios.get(`${memeAPI}`);
        const data = await response.data;
        const images = data.data.memes;
        const image = images[Math.floor(Math.random() * images.length)];
        const img = image.url;
        return img;
      } catch(err) {
        console.log(err);
      };
    }