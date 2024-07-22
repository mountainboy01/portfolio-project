/************** NAVBAR ***********/
const hamburger = document.querySelector("#hamburger");
const closeIcon = document.querySelector("#close-icon");
const menu = document.querySelector("#menu");
const mobile = document.querySelector("#mobile");


hamburger.addEventListener("click",()=>{
      mobile.classList.add("active");
});

closeIcon.addEventListener("click",()=>{
      mobile.classList.remove("active");
});


/************** NAVBAR ***********/


/************** LIGHT/DARK THEME ***********/
const moon = document.querySelector("#moon");
const body = document.querySelector("#body");
const logo = document.querySelector("#logo");
const footerLogo = document.querySelector("#footer-logo");
const emailIcon = document.querySelector("#email-icon");


moon.addEventListener("click",()=>{
	document.body.classList.toggle("dark-theme");
	if(document.body.classList.contains("dark-theme")){
		moon.src="images/sun_icon.png";
		logo.src="images/logo_dark.png";
		footerLogo.src="images/logo_dark.png";
		emailIcon.src="images/mail_icon_dark.png";
	}

	else{
		moon.src="images/moon_icon.png";
		logo.src="images/logo.png";
		footerLogo.src="images/logo.png";
		emailIcon.src="images/mail_icon.png";
	}
});



/************** LIGHT/DARK THEME ***********/