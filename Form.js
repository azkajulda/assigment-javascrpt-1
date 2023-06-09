
// Select
const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phoneNumber');
const selectVacancy = document.getElementById('vacancy');
const selectPosition = document.getElementById('position');

const listVacancy = [
  {value: 'Programmer', label: 'Programmer', kuota: 1},
  {value: 'Junior Programmer', label: 'Junior Programmer', kuota: 2},
  {value: 'System Analys', label: 'System Analys', kuota: 3},
  {value: 'System Administrator', label: 'System Administrator', kuota: 4},
  {value: 'Project Manager', label: 'Project Manager', kuota: 5},
];

const listPosition = [
  {value: 'Bandung', label: 'Bandung'},
  {value: 'Jakarta', label: 'Jakarta'},
  {value: 'Bali', label: 'Bali'},
  {value: 'Aceh', label: 'Aceh'},
  {value: 'Lampung', label: 'Lampung'},
];

listVacancy.forEach(data => {
  const opt = document.createElement('option');
  opt.value = `${data.value} - ${data.kuota}` ;
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
const resultDesc = document.getElementById('result-description');
const errorFullName = document.getElementById('errorFullName');
const errorEmail = document.getElementById('errorEmail');
const errorPhoneNumber = document.getElementById('errorPhoneNumber');
const errorVacancy = document.getElementById('errorVacancy');
const errorPosition = document.getElementById('errorPosition');
const buttonSubmit = document.getElementById('btnSubmit');


let tempData = [];
let isOutVacancy = false;
const checkKuota = data => {
  const splitVacancyVal = data.split(' - ');
  const kuota = parseInt(splitVacancyVal[1]);
  const vacancy = splitVacancyVal[0];
  const isAvailable = tempData.map(temp => temp.vacancy === vacancy);
  const sisaKuota = kuota - isAvailable.length ?? 0;

  errorVacancy.classList.remove('d-none')
  if (sisaKuota > 2) {
    errorVacancy.classList.remove('text-danger');
    errorVacancy.classList.remove('text-warning');
    errorVacancy.classList.add('text-success');
    errorVacancy.innerHTML = `Kuota tersedia anda dapat memilih lowongan ${vacancy}`;
    buttonSubmit.removeAttribute('disabled');
  } else if (sisaKuota > 0) {
    errorVacancy.classList.remove('text-danger');
    errorVacancy.classList.remove('text-success');
    errorVacancy.classList.add('text-warning');
    errorVacancy.innerHTML = `Kuota tersisa untuk lowongan ${vacancy} hanya ${sisaKuota} pendaftar`;
    buttonSubmit.removeAttribute('disabled');
  } else {
    errorVacancy.classList.remove('text-warning');
    errorVacancy.classList.remove('text-success');
    errorVacancy.classList.add('text-danger');
    errorVacancy.innerHTML = `Mohon maaf, rekrutasi untuk lowongan ${vacancy} sudah penuh. dan tidak dapat dipilih.`;
    buttonSubmit.setAttribute('disabled', '');
  }
}

const submitResult = () => {
  const splitVacancyVal = selectVacancy.value.split(' - ');
  const vacancy = splitVacancyVal[0];
  const fullnameResult =  document.getElementById('fullname-result');
  const emailResult =  document.getElementById('email-result');
  const phoneResult =  document.getElementById('phone-number-result');
  const vacancyResult =  document.getElementById('vacancy-result');
  const positionResult =  document.getElementById('position-result');

  const result = document.getElementById('result');

  const registeredEmail = tempData.find(data => data.email === email.value);

  const setResult = () => {
    fullnameResult.innerHTML = fullname.value;
    emailResult.innerHTML = email.value;
    phoneResult.innerHTML = phoneNumber.value;
    vacancyResult.innerHTML = vacancy;
    positionResult.innerHTML = selectPosition.value;
  }
  
  const alertField = () => {
    !fullname.value ? errorFullName.classList.remove('d-none') : errorFullName.classList.add('d-none');
    !email.value || registeredEmail ? errorEmail.classList.remove('d-none') : errorEmail.classList.add('d-none');
    !phoneNumber.value ? errorPhoneNumber.classList.remove('d-none') : errorPhoneNumber.classList.add('d-none');
    !selectVacancy.value ? errorVacancy.classList.remove('d-none') : errorVacancy.classList.add('d-none');
    !selectPosition.value ? errorPosition.classList.remove('d-none') : errorPosition.classList.add('d-none');
  }

  const resetForm = () => {
    fullname.value = "";
    email.value = "";
    phoneNumber.value = "";
    selectVacancy.value = "";
    selectPosition.value = "";
  }

  if (
    !(!fullname.value ||
      !email.value ||
      registeredEmail ||
      !phoneNumber.value ||
      !selectVacancy.value ||
      !selectPosition.value
    ) 
  ) {
    result.classList.remove('d-none');
    resultDesc.innerHTML = `Terima kasih atas melakukan pengisian, anda adalah orang ke-${tempData.length + 1} yang telah mendaftar, permintaan ada akan segera kami proses`;
    alertField();
    setResult();
    tempData.push({
      fullname: fullname.value,
      email: email.value,
      phoneNumber: phoneNumber.value,
      vacancy: selectVacancy.value,
      position: selectPosition.value,
    });
    resetForm();
  } else {
    alertField();
    if (registeredEmail) {
      errorEmail.innerHTML = 'Email sudah terdaftar silahkan memakai email yang lain!';
    }
    alert('Isi Form Dengan Teliti ya!')
  }
  
}

