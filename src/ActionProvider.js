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
      "Anda dapat melihat dan menjelajahi Web Virtual Tour SMK Telkom Malang"
    );

    this.addMessageToState(message);
  };

  handleVolly = () => {
    const message = this.createChatBotMessage(
      "Luas lapangan Volly adalah 400 x 500 M"
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

  handlePrestasiSiswa = () => {
    const message = this.createChatBotMessage(
      "Ini adalah Rekap Prestasi Siswa - Siswi SMK Telkom Malang Tahun 2023",
      {
        widget: "prestasiSiswa",
        loading: true,
        terminateLoading: true,
      }
    );
    this.addMessageToState(message);
  };

  handlePrestasiGuru = () => {
    const message = this.createChatBotMessage(
      "Ini adalah prestasi Guru SMK Telkom Malang",
      {
        widget: "prestasiGuru",
        loading: true,
        terminateLoading: true,
      }
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
      "Tanggal Pendaftaran PPDB dibuka hingga 14 Desember 2023, untuk informasi lebih lanjut kunjungi https://ppdb.smktelkom-mlg.sch.id/"
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
