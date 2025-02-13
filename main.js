const openButton = document.querySelector(".open");
const flowers = document.querySelector(".flowers");
const textContainer = document.querySelector(".text-container");
const textElement = document.querySelector("#text");

const audio = new Audio("Romantic_Happy_Birthday.mp3");

const sentences = [
  "Hallo Abelkuuu",
  "Selamat Valentine",
  "Maaf kalau lewat\n online dulu hehe",
  "Semoga suka yah sayangg",
  "Tetep sama aku terus yahh",
  "I'am Always With You",
  "Nihh ada bunga virtual",
  "yang asli nyusul",
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

      // Ganti \n dengan elemen <br> untuk line break
      const formattedSentence = sentence.split("\n").map((part) => {
        const div = document.createElement("div");
        part.split("").forEach((char, i) => {
          const span = document.createElement("span");
          span.textContent = char === " " ? "\u00A0" : char; // Menangani spasi
          div.appendChild(span);

          // Tambahkan animasi delay untuk tiap karakter
          span.style.animationDelay = `${i * 0.1}s`;
        });
        return div;
      });

      // Menambahkan kalimat yang sudah diformat ke dalam textElement
      formattedSentence.forEach((div) => textElement.appendChild(div));

      index++;

      // Tunggu sampai kalimat selesai muncul sebelum menampilkan kalimat berikutnya
      setTimeout(() => {
        addNextSentence();
      }, sentence.length * 100 + 1000); // Durasi animasi tiap kalimat
    }
  }

  // Mulai menambahkan kalimat pertama
  addNextSentence();
}

onload = () => {
  document.body.classList.remove("container");
};
