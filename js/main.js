window.addEventListener('load', function() {   
  const pricelist = {
    econom: {
      r0: 0,
      r12: 4500,
      r13: 4500,
      r14: 4500,
      r15: 4500,
      r16: 5500,
      r17: 5500,
      r18: 6500,
      r19: 7500,
      r20: 8500
    },
    standart: {
      r0: 0,
      r12: 5500,
      r13: 5500,
      r14: 5500,
      r15: 6500,
      r16: 7500,
      r17: 7500,
      r18: 8500,
      r19: 9500,
      r20: 10500
    },
    candy: {
      r0: 0,
      r12: 8500,
      r13: 8500,
      r14: 8500,
      r15: 8500,
      r16: 8500,
      r17: 8500,
      r18: 10500,
      r19: 11500,
      r20: 12500
    },
    elit: {
      r0: 0,
      r12: 8500,
      r13: 8500,
      r14: 8500,
      r15: 8500,
      r16: 8500,
      r17: 8500,
      r18: 10500,
      r19: 11500,
      r20: 12500
    }
  }

  const dlForm2 = document.querySelector('#dlForm2');

  const choiceRadius = dlForm2.querySelector('#choice-radius');
  const choiceVisible = dlForm2.querySelector('#choice-visible');
  const result = dlForm2.querySelector('#result');
  const formPainting = dlForm2.querySelector('#form-painting');
  const formNumberColors = dlForm2.querySelector('#form-number-colors');
  const formPolish = dlForm2.querySelector('#form-polish');

  let formPaintingValue = 'standart';
  let formNumberColorsValue = 1;
  let formPolishValue = 0;
  let choiceRadiusValue = 'r0';

  const questionPrice = dlForm2.querySelector('#question-price');
  const questionName = dlForm2.querySelector('#question-name');
  const questionPhone = dlForm2.querySelector('#question-phone');
  const questionEmail = dlForm2.querySelector('#question-email');
  const questionButton = dlForm2.querySelector('#question-button');

  choiceRadius.addEventListener('change', (event) => {
    choiceRadiusValue = choiceRadius.options[choiceRadius.options.selectedIndex].dataset.radius;
    priceCalculate();
  })

  formPainting.addEventListener('change', (event) => {
    formPaintingValue = formPainting.options[formPainting.options.selectedIndex].dataset.painting;
    priceCalculate();
  })

  formNumberColors.addEventListener('change', (event) => {
    formNumberColorsValue = parseInt(formNumberColors.options[formNumberColors.options.selectedIndex].dataset.numberColors);
    priceCalculate();
  })

  formPolish.addEventListener('change', (event) => {
    formPolishValue = parseInt(formPolish.options[formPolish.options.selectedIndex].dataset.polish);
    console.log(formPolishValue);
    priceCalculate();
  })

  const priceCalculate = function() {

    const basePriceValue = pricelist[formPaintingValue][choiceRadiusValue];

    if(basePriceValue === 0) {
      result.value = `Выбирайте свой радиус и нужные услуги`;
    }
    else {
      const totalPrice = basePriceValue * formNumberColorsValue + formPolishValue;
      result.value = `Цена работ: ${totalPrice} руб.`;

      questionPrice.value = `${totalPrice}; ${choiceRadiusValue}; ${formPaintingValue}; ${formNumberColorsValue}; ${formPolishValue}`;
      questionName.classList.remove('invisible');
      questionPhone.classList.remove('invisible');
      questionEmail.classList.remove('invisible');
      questionButton.classList.remove('invisible');
    }
  }

  



});