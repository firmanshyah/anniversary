const openButton = document.querySelector(".open");
const flowers = document.querySelector(".flowers");
const textContainer = document.querySelector(".text-container");
const textElement = document.querySelector("#text");

const audio = new Audio("Romantic_Happy_Birthday.mp3");

const sentences = [
  "Hallo Kamu",
  "Selamat Anniversary",
  "Maaf yah telat bikinnya hehe",
  "Walapun udah kita udah gini",
  "Jangan lupakan aku yah",
  "Nihh ada bunag virtual",
  "Kamu kan suka bunga",
  "I Love You❤️",
];

openButton.addEventListener("click", () => {
  // Tambahkan kelas 'out' ke tombol untuk memulai efek scale dan fade
  openButton.classList.add("out");

  // Aktifkan animasi pada elemen flowers
  flowers.classList.add("animate");

  audio.play();

  setTimeout(() => {
    textContainer.style.display = "block"; // Menampilkan elemen .text-container
    animateText(sentences);
  }, 2000);

  // Sembunyikan tombol setelah animasi selesai
  setTimeout(() => {
    openButton.style.display = "none";
  }, 2000); // Durasi disesuaikan dengan durasi transition di CSS (2 detik)
});

function animateText(sentences) {
  let index = 0;
  function addNextSentence() {
    if (index < sentences.length) {
      const sentence = sentences[index];
      textElement.innerHTML = ""; // Kosongkan sebelumnya
      sentence.split("").forEach((char, i) => {
        const span = document.createElement("span");
        span.textContent = char === " " ? "\u00A0" : char;
        textElement.appendChild(span);

        // Tambahkan animasi pada setiap span
        span.style.animationDelay = `${i * 0.1}s`; // Setiap huruf muncul secara bertahap
      });
      index++;
      setTimeout(addNextSentence, sentence.length * 100 + 1200); // Tunggu sampai kalimat selesai
    }
  }
  addNextSentence();
}

onload = () => {
  document.body.classList.remove("container");
};
