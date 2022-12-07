const form = document.form;

form.onsubmit = (e) => {
    e.preventDefault();
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