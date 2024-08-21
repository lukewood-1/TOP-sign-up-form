const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.querySelector('#email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const submitBtn = document.querySelector('button[type="submit"]');
const feedback = document.querySelectorAll('.feedback');
const form = document.querySelector('form');


// Semi-automatically change text and toggle styles
const changeStyles = (element) => {
	if(element.validity.valid){
		element.style.cssText = '';
		element.classList.add('validInput'); 
	} else {
		element.classList.remove('validInput');
		element.style.cssText = 'background: #a004; border: 1px solid #000; outline: 1.5px #f00;'
	}
};

// Semi-automatically change feedback text / change style
function feedbackText (target, msg) {
	if(target.previousElementSibling.validity.valid){
		target.textContent = '';
		target.classList.remove('negFeedback');
	} else {
		target.textContent = msg;
		target.classList.add('negFeedback');
	}
};

// form invalid submit prevention
submitBtn.addEventListener('click', e => {
	if(!form.checkValidity()){
		e.preventDefault();
	} else {
		alert('Form valid!');
	}
});

// First name input validation
firstName.addEventListener('input', e => {
	if(e.target.value.length <= 0) {
		changeStyles(e.target);
		feedbackText(e.target.nextElementSibling, 'Your register needs your name.')
	} else {
		changeStyles(e.target);
		feedbackText(e.target.nextElementSibling, '');
	}
});

// Last name input verification
lastName.addEventListener('input', e => {
	if(e.target.value.length <= 0) {
		changeStyles(e.target);
		feedbackText(e.target.nextElementSibling, 'Your register needs your name.')
	} else {
		changeStyles(e.target);
		feedbackText(e.target.nextElementSibling, '');
	}
});

// email input validation
const emailFeedback = document.querySelector('#email ~ .feedback');
email.addEventListener('input', e =>{
	if(e.target.validity.patternMismatch){
		feedbackText(e.target.nextElementSibling, 'Use the correct email format.');
		changeStyles(e.target);
	} else {
		feedbackText(e.target.nextElementSibling, '');
		changeStyles(e.target);
	}
});

//phone number validation
const phoneFeedback = document.querySelector('#phone ~ p');
phone.addEventListener('input', e => {
	if(e.target.validity.patternMismatch){
		changeStyles(e.target);
		feedbackText(e.target.nextElementSibling, 'number is not BR valid')
	} else {
		changeStyles(e.target);
		feedbackText(e.target.nextElementSibling, '')
	}
});
//phone input - unauthorized input prevention
phone.addEventListener('keypress', e=> {
	const phoneRegex = /[0-9\-]/;
	if(!phoneRegex.test(e.key)) e.preventDefault();
});

// password validation
const passwordBtns = document.querySelectorAll('.show-password button');
password.addEventListener('input', e => {
	if(e.target.value.length < 5 || e.target.value.length > 15){
		changeStyles(e.target);
		feedbackText(e.target.nextElementSibling, 'minimum of 5 characters, maximum of 15.');
	} else if	(e.target.validity.patternMismatch){
		changeStyles(e.target);
		feedbackText(e.target.nextElementSibling, 'only letters and numbers allowed.')
	} else {
		changeStyles(e.target);
		feedbackText(e.target.nextElementSibling, '');
	};
});

// confirm password validation
confirmPassword.addEventListener('input', e => {
	if(e.target.value !== password.value){
		e.target.classList.remove('validInput');
		e.target.style.cssText = 'background: #a004; border: 1px solid #000; outline: 1.5px #f00;'
		e.target.nextElementSibling.textContent = 'Must be same as password';
		e.target.nextElementSibling.classList.add('negFeedback');
	} else if(e.target.value === password.value){
		e.target.style.cssText = '';
		e.target.classList.add('validInput');
		e.target.nextElementSibling.textContent = '';
		e.target.nextElementSibling.classList.remove('negFeedback');
	}
});

// password btn
passwordBtns[0].addEventListener('click', e => {
	if(password.type === 'password'){
		password.type = 'text';
	} else {
		password.type = 'password';
	}
});

// confirm password btn
passwordBtns[1].addEventListener('click', e => {
	if(confirmPassword.type === 'password'){
		confirmPassword.type = 'text';
	} else {
		confirmPassword.type = 'password';
	}
});
