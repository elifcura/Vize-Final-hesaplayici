function hesapla() {
    let vize = Number(document.getElementById("vize").value);
    let final = Number(document.getElementById("final").value);

    let ortalama = (vize * 0.4) + (final * 0.6);

    let sonuc = document.getElementById("sonuc");

    if (ortalama > 50) {
        sonuc.style.color = "green";
        sonuc.textContent = "Ortalama: " + ortalama.toFixed(2) + " - GEÇTİ";
    } else {
        sonuc.style.color = "red";
        sonuc.textContent = "Ortalama: " + ortalama.toFixed(2) + " - KALDI";
    }
}