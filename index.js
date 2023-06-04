document.querySelector("#card-number-input").oninput = () => {
  document.querySelector("#card-number-box").innerText =
    document.querySelector("#card-number-input").value;
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
