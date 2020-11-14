// Header
const header = document.querySelector('header')

const headerScroll = function() {
	if (window.scrollY > 100) {
		header.classList.add('scrolled')
	} else {
		header.classList.remove('scrolled')
	}
}

document.addEventListener("scroll", headerScroll)

// Mobile Menu
const burger = document.querySelector('.burger')
const navMobile = document.querySelector('.nav-mobile')
const links = navMobile.querySelectorAll('.anchor')


burger.addEventListener('click', () => {
	if (!burger.classList.contains('clicked')) {
		burger.classList.add('clicked')
		navMobile.classList.add('showed')
	} else {
		burger.classList.remove('clicked')
		navMobile.classList.remove('showed')
	}
})

links.forEach(link => {
	link.addEventListener('click', () => {
		burger.classList.remove('clicked')
		navMobile.classList.remove('showed')
	})
})
