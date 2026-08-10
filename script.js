const openBtn = document.getElementById("openBtn");
const letter = document.getElementById("letter");
const typing = document.getElementById("typing");

const message = `Hai

Kalau kau tengah baca ni, thanks sebab sanggup bagi masa kau sikit.

I js want you to know something, ada someone yang diam-diam mengagumi kau. But bukanla sebab kau cantik or what, but sebab diri kau buat aku rasa tertarik.

Maybe kau tak tau un or tak sedar, but because of your smile my day feel better.

Aku tak mengharap pun kau accept confession ni. I js want to confess sebelum aku menyesal one day.

Nanti kalau dah tau aku siapa jangan terkejut pulak hehe, harap kau senyum je.

Take care diri tu selalu.

— Daripada seseorang yang mendoakan kau bahagia selalu. 🤍`;

let index = 0;

openBtn.addEventListener("click", () => {

    letter.classList.remove("hidden");
    letter.classList.add("show");

    openBtn.style.display = "none";

    typeWriter();

});

function typeWriter() {

    if (index < message.length) {

        typing.innerHTML += message.charAt(index)
            .replace(/\n/g, "<br>");

        index++;

        setTimeout(typeWriter, 40);

    }

}