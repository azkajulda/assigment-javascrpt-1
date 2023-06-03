
// Select
const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phoneNumber');
const selectVacancy = document.getElementById('vacancy');
const selectPosition = document.getElementById('position');

const listVacancy = [
  {value: 'Programmer', label: 'Programmer'},
  {value: 'Junior Programmer', label: 'Junior Programmer'},
  {value: 'System Analys', label: 'System Analys'},
  {value: 'System Administrator', label: 'System Administrator'},
  {value: 'Project Manager', label: 'Project Manager'},
];

const listPosition = [
  {value: 'Bandung', label: 'Bandung'},
  {value: 'Jakarta', label: 'Jakarta'},
  {value: 'Bali', label: 'Bali'},
  {value: 'Aceh', label: 'Aceh'},
  {value: 'Lampung', label: 'Lampung'},
];
// console.log({selectPosition})
listVacancy.forEach(data => {
  const opt = document.createElement('option');
  opt.value = data.value;
  opt.innerHTML = data.label;
  selectVacancy.appendChild(opt);
});

listPosition.forEach(data => {
  const opt = document.createElement('option');
  opt.value = data.value;
  opt.innerHTML = data.label;
  selectPosition.appendChild(opt);
});


// Result 
const submitResult = () => {
  document.getElementById('fullname-result').innerHTML = fullname.value;
  document.getElementById('email-result').innerHTML = email.value;
  document.getElementById('phone-number-result').innerHTML = phoneNumber.value;
  document.getElementById('vacancy-result').innerHTML = selectVacancy.value;
  document.getElementById('position-result').innerHTML = selectPosition.value;

  const errorFullName = document.getElementById('errorFullName');
  const errorEmail = document.getElementById('errorEmail');
  const errorPhoneNumber = document.getElementById('errorPhoneNumber');
  const errorVacancy = document.getElementById('errorVacancy');
  const errorPosition = document.getElementById('errorPosition');

  const result = document.getElementById('result');

  if (
    !(!fullname.value ||
    !email.value ||
    !phoneNumber.value ||
    !selectVacancy.value ||
    !selectPosition.value)
  ) {
    result.classList.remove('d-none');
  } else {
    !fullname.value ? errorFullName.classList.remove('d-none') : errorFullName.classList.add('d-none');
    !email.value ? errorEmail.classList.remove('d-none') : errorEmail.classList.add('d-none');
    !phoneNumber.value ? errorPhoneNumber.classList.remove('d-none') : errorPhoneNumber.classList.add('d-none');
    !selectVacancy.value ? errorVacancy.classList.remove('d-none') : errorVacancy.classList.add('d-none');
    !selectPosition.value ? errorPosition.classList.remove('d-none') : errorPosition.classList.add('d-none');

    alert('Isi Form Dengan Teliti ya!')
  }
  
}

