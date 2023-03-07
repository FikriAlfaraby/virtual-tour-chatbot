class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }
  handleOptions = (options) => {
    const message = this.createChatBotMessage(
      "Maaf, Bagaimana saya bisa membantu Anda? Berikut beberapa opsi yang mungkin.",
      {
        widget: "overview",
        loading: true,
        terminateLoading: true,
        ...options,
      }
    );

    this.addMessageToState(message);
  };
  handleFasilitas = () => {
    const message = this.createChatBotMessage(
      " di SMK Telkom Malang terdapat berbagai macam fasilitas yang mendukung proses belajar mengajar, antara lain :",
      {
        widget: "fasilitas",
        loading: true,
        terminateLoading: true,
      }
    );

    this.addMessageToState(message);
  };

  handleKantin = () => {
    const message = this.createChatBotMessage(
      "Jumlah Kantin di SMK Telkom Maalang ada 10"
    );
    this.addMessageToState(message);
  };

  handleJumlahSiswa = () => {
    const message = this.createChatBotMessage(
      "Pilih Kelas yang ingin anda ketahui ",
      {
        widget: "siswa",
        loading: true,
        terminateLoading: true,
      }
    );

    this.addMessageToState(message);
  };

  handleRPL = () => {
    const message = this.createChatBotMessage(
      "Program Keahlian Rekayasa Perangkat Lunak (RPL) adalah salah satu kompetensi keahlian dalam bidang Teknologi Komputer dan Informatika yang secara khusus mempelajari tentang pemrograman komputer."
    );
    this.addMessageToState(message);
  };

  handleTKJ = () => {
    const message = this.createChatBotMessage(
      "Teknik Komputer dan Jaringan atau yang biasa disebut TKJ adalah teknik yang mempelajari tentang cara instalasi PC, instalasi LAN, memperbaiki PC dan mempelajari program-program PC."
    );
    this.addMessageToState(message);
  };

  handleTanggal = () => {
    const message = this.createChatBotMessage(
      "Tanggal Pendaftaran PPDB Adalah 14 Desember 2023"
    );

    this.addMessageToState(message);
  };

  handleLocalStats = () => {
    const message = this.createChatBotMessage(
      "Here's the latest stats in Sri Lanka.",
      {
        widget: "localStatistics",
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      }
    );

    this.addMessageToState(message);
  };
  handleJurusan = () => {
    const message = this.createChatBotMessage(
      "Ini adalah jurusan di SMK Telkom Malang",
      {
        widget: "jurusan",
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      }
    );

    this.addMessageToState(message);
  };

  handleLuasLapangan = () => {
    const message = this.createChatBotMessage(
      "Luas Lapangan Basket di SMK Telkom Malang adalah 100 x 500"
    );

    this.addMessageToState(message);
  };

  handleThanks = () => {
    const message = this.createChatBotMessage(
      "Sama - Sama Senang membantu anda"
    );

    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((state) => ({
      ...state,
      messages: [...state.messages, message],
    }));
  };
}

export default ActionProvider;
