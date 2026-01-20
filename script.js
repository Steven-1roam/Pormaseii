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

  const porsi = document.getElementById("porsi");
  porsi.innerHTML = `
    <li>Karbohidrat: 45–65% (nasi, roti, kentang)</li>
    <li>Protein: 15–25% (ikan, telur, tahu, tempe)</li>
    <li>Lemak sehat: 20–30% (kacang, alpukat)</li>
    <li>Sayur & buah: minimal 5 porsi per hari</li>
  `;

  document.getElementById("result").style.display = "block";
}
