import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Flashback",
      artist: "Blue Wednesday, Shopan",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11225",
      color: ["#9B6599", "#484B8D"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Hereafter",
      artist: "Makzo",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11770",
      color: ["#F8AF64", "#4C639F"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "What Was Before",
      artist: "Philanthrope, Leavv",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11770",
      color: ["#478965", "#D49064"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;
