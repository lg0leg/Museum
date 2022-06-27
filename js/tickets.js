let basicTicketCounter = 1;
let seniorTicketCounter = 1;
let totalForTickets = 0;
let permanentExhibition = 20;
let temporaryExhibition = 25;
let combinedAdmission = 40;
let ticketType = 20;

const radioTickets = document.querySelector('#ticket-type');
const radioPermanent = document.querySelector('#radio_1');
const radioTemporary = document.querySelector('#radio_2');
const radioCombined = document.querySelector('#radio_3');

const btnMinBasic = document.querySelector('#button-minus-basic');
const btnPlusBasic = document.querySelector('#button-plus-basic');
const btnMinSenior = document.querySelector('#button-minus-senior');
const btnPlusSenior = document.querySelector('#button-plus-senior');

const basicInput = document.querySelector('#basic-input');
const seniorInput = document.querySelector('#senior-input');
const totalInput = document.querySelector('#input-total');

const buttonBuyNow = document.querySelector('#button-buy-now');

btnMinBasic.addEventListener('click', (e) => {
  e.preventDefault();
  if (basicTicketCounter > 0) {
    basicTicketCounter -= 1;
  }
  basicInput.value = basicTicketCounter;
  total();
});

btnPlusBasic.addEventListener('click', (e) => {
  e.preventDefault();
  if (basicTicketCounter < 22) {
    basicTicketCounter += 1;
  }
  basicInput.value = basicTicketCounter;
  total();
});

btnMinSenior.addEventListener('click', (e) => {
  e.preventDefault();
  if (seniorTicketCounter > 0) {
    seniorTicketCounter -= 1;
  }
  seniorInput.value = seniorTicketCounter;
  total();
});

btnPlusSenior.addEventListener('click', (e) => {
  e.preventDefault();
  if (seniorTicketCounter < 22) {
    seniorTicketCounter += 1;
  }
  seniorInput.value = seniorTicketCounter;
  total();
});

radioTickets.addEventListener('click', (e) => {
  // e.preventDefault();
  total();
});

buttonBuyNow.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('buy');
});

function checkTicketType() {
  if (radioPermanent.checked) {
    ticketType = permanentExhibition;
  }
  if (radioTemporary.checked) {
    ticketType = temporaryExhibition;
  }
  if (radioCombined.checked) {
    ticketType = combinedAdmission;
  }
}

function total() {
  checkTicketType();
  totalForTickets =
    ticketType * (basicTicketCounter + (1 / 2) * seniorTicketCounter);
  totalInput.value = totalForTickets;
}
