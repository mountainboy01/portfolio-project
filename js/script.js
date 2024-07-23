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
const contactIcon =document.querySelector("#contact-icon");
const body = document.querySelector("#body");
const logo = document.querySelector("#logo");
const footerLogo = document.querySelector("#footer-logo");
const emailIcon = document.querySelector("#email-icon");
const code =document.querySelector("#code");
const edu =document.querySelector("#edu");
const project =document.querySelector("#project");
const showIcon = document.querySelector("#show-more");
const submit = document.querySelector("#submit");
const show = document.querySelector("#how-more");
const serviceIcon =document.querySelectorAll(".service-icon");
console.log(serviceIcon);

moon.addEventListener("click",()=>{
	document.body.classList.toggle("dark-theme");
	if(document.body.classList.contains("dark-theme")){
		moon.src="images/sun_icon.png";
		contactIcon.src="images/arrow-icon-dark.png";
		logo.src="images/logo_dark.png";
		footerLogo.src="images/logo_dark.png";
		emailIcon.src="images/mail_icon_dark.png";
		hamburger.src="images/menu-white.png";
		closeIcon.src="images/close-white.png";
		code.src="images/code-icon-dark.png";
		edu.src="images/edu-icon-dark.png";
		project.src="images/project-icon-dark.png";
		showIcon.src="images/right-arrow-white.png";
		mobile.style.background="#11001f";
		submit.style.background="#11001f";
		submit.style.border="1px solid #fff";
		serviceIcon.forEach((icon)=>{
			icon.src="images/right-arrow-white.png";
		});
	}

	else{
		moon.src="images/moon_icon.png";
		contactIcon.src="images/arrow-icon.png";
		logo.src="images/logo.png";
		footerLogo.src="images/logo.png";
		emailIcon.src="images/mail_icon.png";
		hamburger.src="images/menu-black.png";
		closeIcon.src="images/close-black.png";
		code.src="images/code-icon.png";
		edu.src="images/edu-icon.png";
		project.src="images/project-icon.png";
		showIcon.src="images/right-arrow-bold.png";
		mobile.style.background="#f3e3e6";
		submit.style.background="#000";
		submit.style.border="none";
		serviceIcon.forEach((icon)=>{
			icon.src="images/right-arrow-bold.png";
		});
	}
});



/************** LIGHT/DARK THEME ***********/