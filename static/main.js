const openNavigation = () => {
	const bodyEl = document.body
	const navEl = document.querySelector('.nav ul')
	const burgerEl = document.querySelector('.burgerNav')

	bodyEl.classList.toggle('overflow')
	burgerEl.classList.toggle('open')
	navEl.classList.toggle('visible')
}

document.addEventListener('DOMContentLoaded', () => {
	document.querySelector('.burgerNav').addEventListener('click', openNavigation)
	document.querySelectorAll('.navLink').forEach(el =>
		el.addEventListener('click', () => {
			const bodyEl = document.body
			const navEl = document.querySelector('.nav ul')
			const burgerEl = document.querySelector('.burgerNav')

			bodyEl.classList.remove('overflow')
			burgerEl.classList.remove('open')
			navEl.classList.remove('visible')
		})
	)
})
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollToTopBtn").style.display = "block";
  } else {
    document.getElementById("scrollToTopBtn").style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
window.addEventListener('scroll', function() {
  var nav = document.querySelector('.nav');
  nav.classList.toggle('fixed', window.scrollY > 0);
});

document.querySelectorAll('.navLink').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    var target = document.querySelector(this.getAttribute('href'));
    window.scrollTo({
      top: target.offsetTop - 100, // Adjusted value according to your layout
      behavior: 'smooth'
    });
  });
});


