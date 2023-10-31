document.addEventListener('DOMContentLoaded', function () {
	// Додайте інтерактивність для галереї та відеопрезентації
	const galleryContainer = document.querySelector('.gallery-container')
	const images = galleryContainer.querySelectorAll('img')
	let currentImageIndex = 0

	function showImage(index) {
		images.forEach((image, i) => {
			if (i === index) {
				image.style.display = 'block'
			} else {
				image.style.display = 'none'
			}
		})
	}

	// Перемикач для галереї
	function nextImage() {
		currentImageIndex = (currentImageIndex + 1) % images.length
		showImage(currentImageIndex)
	}

	function prevImage() {
		currentImageIndex = (currentImageIndex - 1 + images.length) % images.length
		showImage(currentImageIndex)
	}

	// Запуск галереї
	showImage(currentImageIndex)

	// Наприклад, можна додати слайд-шоу для галереї
	// Запуск слайд-шоу кожні 3 секунди
	setInterval(nextImage, 3000)

	// Можливість відтворення / призупинення відео
	const videoFrame = document.querySelector('iframe')
	let isVideoPlaying = true

	function toggleVideoPlayback() {
		if (isVideoPlaying) {
			videoFrame.contentWindow.postMessage(
				'{"event":"command","func":"pauseVideo","args":""}',
				'*'
			)
		} else {
			videoFrame.contentWindow.postMessage(
				'{"event":"command","func":"playVideo","args":""}',
				'*'
			)
		}
		isVideoPlaying = !isVideoPlaying
	}

	// Додайте інтерактивність для кнопки відео
	const videoButton = document.querySelector('#video button')
	videoButton.addEventListener('click', toggleVideoPlayback)

	// Наприклад, можна вивести повідомлення при кліці на посилання на проект
	const projectLinks = document.querySelectorAll('#projects a')
	projectLinks.forEach(link => {
		link.addEventListener('click', function (e) {
			e.preventDefault()
			alert(`Ви вибрали проект: ${link.textContent}`)
		})
	})
})
