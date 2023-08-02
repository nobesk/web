let celkovySoucetCeny = 0;
// ------tlacitko----------------------------------------
document.getElementById("vypocetCeny").addEventListener("click", () => {
  let c = 0;
  for (let i = 1; i < 5; i++) {
    const kontrola = document.getElementById("kolo" + i).checked;
    if (kontrola) {
      let cena = [500, 200, 1500, 2500];
      const cislo = document.querySelector(".kolo" + i).value;
      let poradi = i - 1;
      let soucet = cislo * cena[poradi];
      //   console.log(soucet);
      c = c + soucet;
    }
  }
  //   console.log(c);

  //   -----Pocet dnu----------------------------------------------------------------

  let pocetDnu = document.getElementById("pocetDnu").value;

  // -----procenta-----------------------------------------------------

  for (let i = 1; i < 4; i++) {
    var x = document.getElementById("cyklonosic" + i).checked;
    if (x) {
      var s = document.getElementById("cyklonosic" + i).value;
    }
  }
  // console.log(s);
  // -------celkova cena---------------------------------------------------

  //   console.log(pocetDnu);

  let vaseUtrata = c * s * pocetDnu;
  //   console.log(vaseUtrata);

  let vypis = (document.getElementById("vypisCeny").value =
    Math.round(vaseUtrata));

  //   console.log(vypis);

  // ----------------------------------------------------------------------------
  let tvojeCastka = document.getElementById("tvojeCastka").value;
  //   console.log(tvojeCastka);

  if (tvojeCastka >= vaseUtrata) {
    document.getElementById("masNaTo").value = "Mas na to";
  } else {
    document.getElementById("masNaTo").value = "Bohuzel nemas dost";
  }
  let email = document.getElementById("email").value;
  function validateEmail(email) {
    const res = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return res.test(String(email).toLowerCase());
  }

  if (validateEmail(email)) {
    document.getElementById("odeslat").disabled = false;
  }

  console.log(validateEmail(email));
});
