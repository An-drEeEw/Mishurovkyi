document.addEventListener('DOMContentLoaded', function () {
	const errorMessage = document.getElementById('error-message')
	const captchaInput = document.getElementById('captcha')
	const captchaImage = document.getElementById('captcha-image')
	const registrationForm = document.getElementById('registration-form')
	const showPasswordButton = document.getElementById('show-password')
	const showConfirmPasswordButton = document.getElementById(
		'show-confirm-password'
	)
	const passwordInput = document.getElementById('password')
	const confirmPasswordInput = document.getElementById('confirm-password')

	showPasswordButton.addEventListener('click', function () {
		togglePasswordVisibility(passwordInput, showPasswordButton)
	})

	showConfirmPasswordButton.addEventListener('click', function () {
		togglePasswordVisibility(confirmPasswordInput, showConfirmPasswordButton)
	})

	function togglePasswordVisibility(inputElement, buttonElement) {
		if (inputElement.type === 'password') {
			inputElement.type = 'text'
			buttonElement.textContent = 'Сховати'
		} else {
			inputElement.type = 'password'
			buttonElement.textContent = 'Показати'
		}
	}

	registrationForm.addEventListener('submit', function (e) {
		e.preventDefault()

		const password = passwordInput.value
		const confirmPassword = confirmPasswordInput.value
		if (password !== confirmPassword) {
			errorMessage.textContent = 'Пароль не підтверджено правильно!'
			return
		}

		const captchaValue = captchaInput.value.trim()
		if (captchaValue !== '25081') {
			errorMessage.textContent = 'Капча вказана не вірно!'
			return
		}

		registrationForm.reset()
		errorMessage.textContent = ''
		alert('Реєстрація успішна!')
	})

	document
		.getElementById('clear-button')
		.addEventListener('click', function () {
			registrationForm.reset()
			errorMessage.textContent = ''
		})
})
