console.log('document.forms :>> ', document.forms);

// console.log(document.forms[0]);
// console.log(document.forms['myForm2']);
// console.log(document.myForm1);

const form = document.myForm1;

form.addEventListener('submit', (e) => {

    // console.log(e);
    e.preventDefault();

    console.dir(form);

    // console.log(form[0].value);
    // console.log(form[1].value);
    // console.log(form['lastname'].value);
    // console.log(form['firstname'].value);
    // console.log(form.firstname.value);
    // console.log(form.lastname.value);

    console.log(form[2].value);
    console.log(form['code-postal'].value);
    // console.log(form.code-postal.value); // Ne fonctionne pas

});