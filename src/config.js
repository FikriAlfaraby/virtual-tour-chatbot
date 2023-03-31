import { createChatBotMessage } from "react-chatbot-kit";
import Jurusan from "./components/Jurusan";
import Overview from "./components/Overview";
import CoBotAvatar from "./CoBotAvatar";
import Fasilitas from "./components/Fasilitas";
import JmlSiswa from "./components/Siswa";
import PrestasiSiswa from "./components/PrestasiSiswa";
import PrestasiGuru from "./components/PrestasiGuru";

function getTimeGreeting() {
  const currentHour = new Date().getHours();

  if (currentHour >= 4 && currentHour < 10) {
    return "Selamat Pagi";
  } else if (currentHour >= 10 && currentHour < 15) {
    return "Selamat Siang";
  } else if (currentHour >= 15 && currentHour < 19) {
    return "Selamat Sore";
  } else {
    return "Selamat Malam";
  }
}

const greeting = getTimeGreeting();
const config = {
  initialMessages: [
    createChatBotMessage(`Halo, ${greeting}! Ada yang bisa kami bantu?`),
    createChatBotMessage(
      "Berikut Opsi tentang bantuan yang bisa saya berikan. Anda juga bisa mengetikkan pesan.",
      {
        withAvatar: false,
        delay: 400,
        widget: "overview",
      }
    ),
  ],
  botName: "BOMBI BOT",
  lang: "id",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#ee2b47",
    },
    chatButton: {
      backgroundColor: "#ee2b47",
    },
  },
  state: {
    gist: "",
    infoBox: "",
  },
  customComponents: { botAvatar: (props) => <CoBotAvatar {...props} /> },
  widgets: [
    {
      widgetName: "overview",
      widgetFunc: (props) => <Overview {...props} />,
    },
    {
      widgetName: "jurusan",
      widgetFunc: (props) => <Jurusan {...props} />,
    },
    {
      widgetName: "siswa",
      widgetFunc: (props) => <JmlSiswa {...props} />,
    },
    {
      widgetName: "fasilitas",
      widgetFunc: (props) => <Fasilitas {...props} />,
    },
    {
      widgetName: "prestasiSiswa",
      widgetFunc: (props) => <PrestasiSiswa {...props} />,
    },
    {
      widgetName: "prestasiGuru",
      widgetFunc: (props) => <PrestasiGuru {...props} />,
    },
  ],
};

export default config;
