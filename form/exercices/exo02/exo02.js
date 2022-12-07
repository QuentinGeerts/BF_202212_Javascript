const form = document.form;

form.onsubmit = (e) => {
    e.preventDefault();

    let formOK = true;

    const rgx = /^[a-zA-Z- éèêîûôâ']{1,10}$/;

    // Vérification des champs
    if (!rgx.test(form.firstname.value)) {
        formOK = false;
        form.firstname.style.border = "1px solid red";
    }
    else {
        form.firstname.style.border = "";
    }

    if (!rgx.test(form.lastname.value)) {
        formOK = false;
        form.lastname.style.border = "1px solid red";
    }
    else {
        form.lastname.style.border = "";
    }

    if (!/^[0-9]{4}$/.test(form.cp.value) || +form.cp.value < 1000) {
        formOK = false;
        form.cp.style.border = "1px solid red";
    }
    else {
        form.cp.style.border = "";
    }

    if (formOK) {
        console.log("Formulaire envoyé");
    }
    else {
        console.log("Le formulaire n'est pas valide.");
    }

};

form.autocomplete.onclick = () => {
    form.lastname.value = "Dupont";
    form.firstname.value = "Jean";
};

form.resetBtn.onclick = () => {
    // form.lastname.value = "";
    // form.firstname.value = "";

    document.form.reset();
};
