import Options from "./Options";

const GeneralOptions = (props) => {
  const options = [
    {
      name: "Fasilitas di SMK Telkom Malang",
      handler: props.actionProvider.handleFasilitas,
      id: 1,
    },
    {
      name: "Jumlah kantin SMK Telkom Malang",
      handler: props.actionProvider.handleKantin,
      id: 2,
    },
    {
      name: "Jumlah siswa tiap kelas",
      handler: props.actionProvider.handleJumlahSiswa,
      id: 3,
    },
    {
      name: "Jurusan SMK Telkom Malang",
      handler: props.actionProvider.handleJurusan,
      id: 4,
    },
  ];
  return <Options options={options} title="Options" {...props} />;
};

export default GeneralOptions;
