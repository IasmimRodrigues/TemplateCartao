const cardBrand = ["63", "55", "41"];

document.querySelector("#card-number-input").oninput = () => {
  document.querySelector("#card-number-box").innerText =
    document.querySelector("#card-number-input").value;

  let numberCard = document.querySelector("#card-number-input").value;
  let flagNumber = numberCard.substr(0, 2);

  const found = cardBrand.find((element) => element == flagNumber);

  if (found == 63) {
    document.getElementById("flag-icon").style.background =
      "var(--elo-icon) no-repeat center";
  } else if (found == 55) {
    document.getElementById("flag-icon").style.background =
      "var(--master-icon) no-repeat center";
  } else if (found == 41) {
    document.getElementById("flag-icon").style.background =
      "var(--visa-icon) no-repeat center";
  } /* else if (found != 63 || found != 55 || found != 41) {
        alert("Esse número está incorreto!")
    }*/
};

document.querySelector("#name-input").oninput = () => {
  document.querySelector("#name-box").innerText = document
    .querySelector("#name-input")
    .value.toUpperCase();
};

document.querySelector("#date-input").oninput = () => {
  document.querySelector("#date-box").innerText = document
    .querySelector("#date-input")
    .value.toUpperCase();
};

// MÁSCARA NOS INPUTS
IMask(document.querySelector("#card-number-input"), {
  mask: "0000 0000 0000 0000",
});

IMask(document.querySelector("#date-input"), {
  mask: "MM{/}YY",
  blocks: {
    MM: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 12,
    },
    YY: {
      mask: IMask.MaskedRange,
      from: String(new Date().getFullYear()).slice(2),
      to: String(new Date().getFullYear() + 10).slice(2),
    },
  },
});

// TROCAR A BANDEIRA
