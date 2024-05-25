import iziToast from 'izitoast';
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');


form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();

  const delay = form.delay.value;
  const getState = form.state.value;

  const delayPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (getState === 'fulfilled') {
        resolve(`✅ Fulfilled promise in ${delay}ms`);
      } else if (getState === 'rejected') {
        reject(`❌ Rejected promise in ${delay}ms`);
      }
    }, delay);
  });

  delayPromise
    .then(result => {
      iziToast.success({
        message: result,
        position: 'topRight',
        backgroundColor: '#309b2096',
        progressBar: false,
        timeout: `2000`,
        icon: false,
        close: false,
      });
    })
    .catch(error => {
      iziToast.error({
        message: error,
        position: 'topRight',
        backgroundColor: '#ff00009b',
        progressBar: false,
        timeout: 2000,
        icon: false,
        close: false,
      });
    });

  form.delay.value = '';
};
