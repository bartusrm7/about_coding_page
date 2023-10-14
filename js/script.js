// SLIDER LANGUAGES
const boxLanguages = document.querySelector(".languages__box");
const nextBtn = document.querySelector(".next");
const backBtn = document.querySelector(".back");

nextBtn.addEventListener("click", () => {
	boxLanguages.style.scrollBehavior = "smooth";
	boxLanguages.scrollLeft += 450;
});

backBtn.addEventListener("click", () => {
	boxLanguages.scrollLeft -= 450;
});

// FOOTER YEAR
const footerYear = document.querySelector(".footer__year");

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();

// NAV BAR
const navMenu = document.querySelector(".nav__items");
const navBar = document.querySelector(".burger-btn");

navBar.addEventListener("click", () => {
	navMenu.classList.toggle("hide");
});

document.addEventListener("click", event => {
	if (event.target.classList.contains("nav__item")) {
		navMenu.classList.add("hide");
	}
});
