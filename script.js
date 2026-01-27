function hitungPorsi() {
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;
  const activity = document.getElementById("activity").value;

  if (age === "" || gender === "" || activity === "") {
    alert("Harap lengkapi semua data!");
    return;
  }

  let kalori = 0;

  if (gender === "male") {
    kalori = 2500;
  } else {
    kalori = 2000;
  }

  if (activity === "low") kalori -= 300;
  if (activity === "high") kalori += 300;

  document.getElementById("kalori").innerText =
    "Perkiraan kebutuhan energi: " + kalori + " kkal/hari";

  // Persentase gizi (berubah sesuai kalori)
  let karbo, protein, lemak;

  if (kalori <= 2000) {
    karbo = "50%";
    protein = "20%";
    lemak = "30%";
  } else if (kalori <= 2400) {
    karbo = "55%";
    protein = "20%";
    lemak = "25%";
  } else {
    karbo = "60%";
    protein = "20%";
    lemak = "20%";
  }

  const porsi = document.getElementById("porsi");
  porsi.innerHTML = `
    <li>
      <b>Karbohidrat: ${karbo}</b>
      <br>• Nasi: 1 porsi = ±100 gram (±175 kkal)
      <br>• Roti: 1 porsi = 1 lembar
      <br>• Kentang: 1 porsi = 1 buah sedang
    </li>
    <li>
      <b>Protein: ${protein}</b>
      <br>• Telur: 1 butir
      <br>• Ikan: ±75 gram
      <br>• Tahu/Tempe: 1 potong sedang
    </li>
    <li>
      <b>Lemak Sehat: ${lemak}</b>
      <br>• Minyak: 1 sdt
      <br>• Kacang: segenggam kecil
      <br>• Alpukat: ½ buah
    </li>
    <li>
      <b>Sayur & Buah</b>
      <br>• Sayur: 1 mangkuk
      <br>• Buah: 1 buah sedang
      <br>• Minimal 5 porsi per hari
    </li>
  `;

  document.getElementById("result").style.display = "block";
}

