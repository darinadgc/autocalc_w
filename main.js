/*Значения из текстовых инпутов*/
const anInitialFee = document.getElementById('an-initial-fee'),
	  creditTerm = document.getElementById('credit-term');

/*Значения из range инпутов*/
const anInitialFeeRange = document.getElementById('an-initial-fee-range'),
	  creditTermRange = document.getElementById('credit-term-range');

/*Итоговые значения*/
const totalAmountOfCredit = document.getElementById('amount-of-credit'),
	  totalMonthlyPayment = document.getElementById('monthly-payment');

const inputsRange = document.querySelectorAll('.input-range');

const assignValue = () => {
	anInitialFee.value = anInitialFeeRange.value;
	creditTerm.value = creditTermRange.value;
};

assignValue();

// Модальное окно
const btnOpenConf = document.getElementById('open-configure'),
	wrapperModal = document.getElementById('wrapper-modal'),
	overlay = document.getElementById('overlay');

const saveConf = document.getElementById('saveConf'),
	cancelConf = document.getElementById('cancelConf');

btnOpenConf.addEventListener('click', () => {
	wrapperModal.classList.add('active');
});

const closeModal = () => {
	wrapperModal.classList.remove('active');
}

overlay.addEventListener('click', () => closeModal());
saveConf.addEventListener('click', () => closeModal());
cancelConf.addEventListener('click', () => closeModal());

// CONFIGURATE AUTO
const cars = document.querySelectorAll('.car'),
	dots = document.querySelectorAll('.dot');

const currentPrecent = 8.7;

let totalPriceOfConf = 0;
const additionalAmount = document.getElementById('additionalAmount');
additionalAmount.innerHTML = totalPriceOfConf;

const priceOfAuto = 700000;
const priceOfAutoElement = document.getElementById('priceOfAuto');
priceOfAutoElement.innerHTML = priceOfAuto;

for (input of inputsRange) {
	input.addEventListener('input', () => {
		assignValue();
		calculation(anInitialFee.value, creditTerm.value);
	})
};

const calculation = (anInitialFee = 100000, creditTerm = 1) => {


const amountOfPrecents = (((priceOfAuto + totalPriceOfConf) - anInitialFeeRange.value + currentPrecent) /100);

const totalPriceOfCredit = (priceOfAuto + totalPriceOfConf) - anInitialFeeRange.value + amountOfPrecents;

// Количество месяцев
	const numberOfMonths = 12 * creditTerm;
	// Ежемесячный платеж
	const monthlyPayment = totalPriceOfCredit / numberOfMonths;
	// Размер кредита
	if (totalPriceOfCredit < 0) {
		return false;
	} else {
			totalAmountOfCredit.innerHTML = Math.round(totalPriceOfCredit);
			totalMonthlyPayment.innerHTML = Math.round(monthlyPayment);
			}
		}

		calculation();

const pricesOfColors = {
	blue: 0,
	brown: 2000,
	orange: 4000,
	pink: 6000,
	red: 8000
};

let currentPriceOfColor = pricesOfColors.blue;

const activeColor = color => {
	for (car of cars) {
 	car.classList.remove('active');
};
	for (dot of dots){
		dot.classList.remove('active');
};

Array.from(cars).filter(item => {
	return item.dataset.color == color;
}).forEach(item => {
	item.classList.add('active');
});

currentPriceOfColor = pricesOfColors['${color'];
checkTotalPriceOfConf();
};

for (dot of dots) { 
		dot.addEventListener('click', e => {
		e.target.classList.add('active');
	});
}

const engine = document.getElementById('engine'),
	  complectation = document.getElementById('complectation');

const checkTotalPriceOfConf = () => {
	totalPriceOfConf = +(engine.value) + (complectation.value) + currentPriceOfColor;
	additionalAmount.innerHTML = totalPriceOfConf;
	calculation(anInitialFee.value, creditTerm.value);
};

saveConf.addEventListener('click', () => checkTotalPriceOfConf());
engine.addEventListener('change', () => checkTotalPriceOfConf());	  		