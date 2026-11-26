let namaMahasiswa = "Ahmad Fathurrahman R";
let nilaiTugas = 80;
let nilaiUTS = 70;
let nilaiUAS = 90;

let nilaiAkhir = (nilaiTugas * 0.3) + (nilaiUTS * 0.3) + (nilaiUAS * 0.4);


let status;
if (nilaiAkhir >= 60) {
  status = "LULUS";
} else {
  status = "TIDAK LULUS";
}

console.log("Nama Mahasiswa : " + namaMahasiswa);
console.log("Nilai Akhir    : " + nilaiAkhir);
console.log("Status         : " + status);