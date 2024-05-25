import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const selectDateTime = document.querySelector('#datetime-picker');
const buttonStart = document.querySelector('[data-start]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

//===========================inputWithDate=======================================

buttonStart.disabled = true;
let userSelectedDate = 'date not selected';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    buttonStart.disabled = false;
    if (selectedDates[0] < new Date()) {
      iziToast.error({
        message: 'Please choose a date in the future',
        position: 'topRight',
        backgroundColor: '#f80909b6',
        progressBar: false,
        close: false,
        timeout: 2000,
      });
      buttonStart.disabled = true;
      return;
    }
    userSelectedDate = selectedDates[0];
    console.log(convertMs(userSelectedDate - Date.now()));
  },
};
flatpickr(selectDateTime, options);


//============================startButton=========================================

buttonStart.addEventListener('click', timerOn);
function timerOn() {
  buttonStart.disabled = true;
  selectDateTime.disabled = true;

  const timer = setInterval(() => {
    const timerData = convertMs(userSelectedDate - Date.now());

    days.textContent = pad(timerData.days);
    hours.textContent = pad(timerData.hours);
    minutes.textContent = pad(timerData.minutes);
    seconds.textContent = pad(timerData.seconds);

    if(userSelectedDate < Date.now()) {
      clearInterval(timer);
      selectDateTime.disabled = false;
      hours.textContent = '00';
      minutes.textContent = '00';
      seconds.textContent = '00';
      days.textContent = '00';
    }

    console.log(timerData);
  }, 1000);
};

//=============================functions======================================


function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
};

function pad(value){
  return String(value).padStart(2, '0');
};




