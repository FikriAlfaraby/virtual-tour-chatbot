class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    message = message.toLowerCase();
    console.log(message);

    if (
      message.includes("jumlah siswa") ||
      message.includes("kelas")
      // message.includes("")
    ) {
      return this.actionProvider.handleJumlahSiswa({ withAvatar: true });
    }

    if (
      message.includes("jurusan")
      // message.includes("")
    ) {
      return this.actionProvider.handleJurusan({ withAvatar: true });
    }

    if (message.includes("fasilitas")) {
      return this.actionProvider.handleFasilitas({ withAvatar: true });
    }

    if (
      message.includes("tanggal ppdb") ||
      message.includes("kapan ppdb")
      // message.includes("")
    ) {
      return this.actionProvider.handleTanggal({ withAvatar: true });
    }

    if (
      message.includes("luas lapangan basket") ||
      message.includes("ukuran lapangan basket")
      // message.includes("")
    ) {
      return this.actionProvider.handleLuasLapangan({ withAvatar: true });
    }

    if (
      message.includes("luas lapangan basket") ||
      message.includes("ukuran lapangan basket")
      // message.includes("")
    ) {
      return this.actionProvider.handleLuasLapangan({ withAvatar: true });
    }

    
    if (
      message.includes("kantin")
      // message.includes("")
    ) {
      return this.actionProvider.handleKantin({ withAvatar: true });
    }

    // if (
    //   message.includes("stats") ||
    //   message.includes("statistics") ||
    //   message.includes("deaths")
    // ) {
    //   return [
    //     this.actionProvider.handleGlobalStats(),
    //     this.actionProvider.handleLocalStats(),
    //   ];
    // }

    if (message.includes("terimakasih") || message.includes("terimakasi")) {
      return this.actionProvider.handleThanks();
    }

    return this.actionProvider.handleOptions({ withAvatar: true });
  }
}

export default MessageParser;
