/* Obsluz probe wyslania formularza */

document.querySelector('form').addEventListener('submit', function(e){


/* w funkcji zwrotnej zdarzenia obslugujacego wysylanie formularza stworz
stale, do ktorych przypisz walidwane pola */
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const agreementCheckbox = document.getElementById('agreement-1');
const messageList = document.getElementById('message');

messageList.innerText = '';//odznacza pola jesli sa zaznaczone

/* sprawdz czy pole z imieniem i nazwiskiem jest puste. Jezeli tak
to stworz elemen li, dodaj do niego komunikati element li dodaj
do listy z id message */

if(nameInput.value.trim() === ''){
    e.preventDefault();
    const msgName = document.createElement('li');
    msgName.innerText = 'Wpisz imię i nazwisko!!';
    messageList.appendChild(msgName);   
    }
if(emailInput.value.trim()=== ''){
    e.preventDefault();
    const emailName = document.createElement('li');
    emailName.innerText = 'Wpisz maila!!';
    messageList.appendChild(emailName);
    }
if(!agreementCheckbox.checked){
    e.preventDefault();
    const msgAgreement = document.createElement('li');
    msgAgreement.innerText = 'Zaznacz pierwszą zgodę!!';
    messageList.appendChild(msgAgreement);

    }
});

document.getElementById('all-agreements').addEventListener('change', function(){
    /* stworz zmienne z referecja do pierwszego i drugiego checkboxa */
    const agreementCheckboxFirst = document.getElementById('agreement-1');
    const agreementCheckboxSecond = document.getElementById('agreement-2');
    if(this.checked){
       /*  agreementCheckboxFirst.checked = true;
        agreementCheckboxSecond.checked = true;
    } else{
        agreementCheckboxFirst.checked = false;
        agreementCheckboxSecond.checked = false; */
    }
        agreementCheckboxFirst.checked = this.checked;
        agreementCheckboxSecond.checked = this.checked; 
        agreementCheckboxFirst.checked = this.checked;
        agreementCheckboxSecond.checked = this.checked;
});