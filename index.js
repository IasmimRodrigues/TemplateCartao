document.querySelector("#card-number-input").oninput = () => {
  document.querySelector("#card-number-box").innerText =
    document.querySelector("#card-number-input").value;

  const cardBrand = ["63", "55", "41"];

  let numberCard = document.querySelector("#card-number-input").value;
  let flagNumber = numberCard.substr(0, 2);

  const found = cardBrand.find((element) => element == flagNumber);

  if (found == 63) {
    document.getElementById("card").style.background = "var(--background-elo)";
    document.getElementById("cardFlip").style.background =
      "var(--background-elo)";

    document.getElementById("flag-icon").style.background =
      "var(--elo-icon) no-repeat center";
  } else if (found == 55) {
    document.getElementById("card").style.background =
      "var(--background-master)";
    document.getElementById("cardFlip").style.background =
      "var(--background-master)";

    document.getElementById("flag-icon").style.background =
      "var(--master-icon) no-repeat center";
  } else if (found == 41) {
    document.getElementById("card").style.background = "var(--background-visa)";
    document.getElementById("cardFlip").style.background =
      "var(--background-visa)";

    document.getElementById("flag-icon").style.background =
      "var(--visa-icon) no-repeat center";
  } else {
    document.getElementById("card").style.background = "var(--background-card)";
    document.getElementById("cardFlip").style.background =
      "var(--background-card)";
      document.getElementById("flag-icon").style.background =
      "#e5e7eb2c";
  }
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

document.querySelector("#cvv-input").oninput = () => {
  document.querySelector("#cvv-number").innerText = document
    .querySelector("#cvv-input")
    .value.toUpperCase();
};

document.querySelector("#cpf-input").oninput = () => {
  document.querySelector("#cpf-number").innerText = document
    .querySelector("#cpf-input")
    .value.toUpperCase();
};

// MÁSCARA NOS INPUTS

IMask(document.querySelector("#card-number-input"), {
  mask: "0000 0000 0000 0000",
});

IMask(document.querySelector("#cpf-input"), {
  mask: "000{.}000{.}000{-}00",
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

function backCard(event) {
  document.getElementById("card").style.display = "none";
  document.getElementById("cpf").style.display = "none";
  document.getElementById("cardFlip").style.display = "block";
}
function frontCard(event) {
    document.getElementById("cpf").style.display = "none";
  document.getElementById("card").style.display = "block";
  document.getElementById("cardFlip").style.display = "none";
}
function cpf(event) {
document.getElementById("cpf").style.display = "flex";
  document.getElementById("card").style.display = "none";
  document.getElementById("cardFlip").style.display = "none";
}
