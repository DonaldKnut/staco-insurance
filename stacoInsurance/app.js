const closeBtn = document.getElementById('close-btn');
const toggleButton = document.querySelector('.toggle-button');
const backDrop = document.querySelector('.backdrop');
const modal = document.querySelector('.primary-nav');
const insurance = document.getElementById('insurance-menu');
const insuranceBackdrop = document.querySelector('.insurance-backdrop');
const insuranceMenuItemsList = document.querySelector('.insurance-menu__items-list');
const insuranceMenuSecondary = document.getElementById('insurance-menu__secondary');
const closeBtn2 = document.getElementById('close-btn2');
const businessPage = document.querySelector('.business-insurance__page');
const businessInsuranceBackdrop = document.querySelector('.business-insurance__page-backdrop');
const businessInsurance = document.getElementById('business-insurance');
const businessInsurancePage = document.querySelector('.business-insurance__page');
const aviationExitBtn = document.getElementById('exitBtn');
const aviationBackdrop = document.querySelector('.aviation-insurance__backdrop');
const aviationPage = document.querySelector('.aviation-insurance__page');
const aviationInsurance = document.getElementById('aviation-insurance');

//About Us Tab
const aboutUsBackDrop = document.querySelector('.about-us__backdrop')
const aboutUsPage = document.querySelector('.about-us');
const aboutUsBtn = document.getElementById('about-us');


const directorAndManagementBtn = document.getElementById('corporate-management__id');
const bio = document.querySelector('.bio-wrapper');
const bioExitBtn = document.querySelector('.exit-btnn');
const aboutUsBtnSecondary = document.getElementById('about-us__menu-secondary');

//Core Values Tab
const coreValueBackdrop = document.querySelector('.core-value__backdrop');
const coreValueBtn = document.getElementById('core-values__id');
const coreValuesPage = document.querySelector('.core-values__page');
const coreValuesCloseBtn = document.getElementById('core-value__close-btn');

//history-tab
const historyBtn = document.getElementById('financial-statement__id');
const historyBackDrop = document.querySelector('.history-backdrop');
const historyTab = document.querySelector('.history');

//life Inaurance Tab
const lifeInsuranceBackdrop = document.querySelector('.life-insurance__backdrop');
const insuranceCloseBtn = document.getElementById('life-insurance__close-btn');
const lifeInsurancePage = document.querySelector('.life-insurance');
const lifeInsuranceBtn = document.getElementById('life-insurance');

//Payment Page Tab
const paymentPageBackdrop = document.querySelector('.payment-backdrop');
const paymentPage = document.querySelector('.payment-sub__wrapper');
const paymentCloseBtn = document.getElementById('payment__close-btn');
const primaryPaymentBtn = document.getElementById('primary-payment__btn');
const secondaryPaymentBtn = document.getElementById('secondary-payment__btn');

//Contact Us Page
const contactUsBackdrop = document.querySelector('.contact-backdrop');
const contactCloseBtn = document.getElementById('contact-us__close-btn');
const contactUsPage = document.querySelector('.contact');
// const getQuoteBtn = document.getElementById('get-quote__id');
const secondaryGetQuote = document.getElementById('get-quote__sec');
const reportClaims = document.getElementById('report-claims');
const contactButton = document.querySelector('.contact-button');
const inquireButton = document.querySelector('.plan-button__1');
const inquireButton2 = document.querySelector('.plan-button__2');



document.addEventListener('DOMContentLoaded', ()=> {
        const loginForm = document.getElementById('login');
        const creatAccountForm = document.getElementById('create-account');

        document.querySelector('#linkCreateAccount').addEventListener('click', e => {
            e.preventDefault();
            loginForm.classList.add('form-hidden');
            createAccountForm.classList.remove('form-hidden');
        });

        document.querySelector("#link-login").addEventListener('click', e => {
            e.preventDefault();
            loginForm.classList.remove("form-hidden");
            createAccountForm.classList.add("form-hidden");
        })
});

// Login & Create Account Page
// const secondaryLoginBtn = document.querySelector('#secondary-login');
// const primaryLoginBtn = document.querySelector('#primary-login');
const loginBackdrop = document.querySelector('.form-backdrop');
const form = document.querySelector('.form-wrapper');
const loginCloseBtn = document.getElementById('login__close-btn');


const login = document.querySelector('#login');
const createAccountForm = document.querySelector('#create-account');
const formWrapper = document.querySelector('#form-wrapper');
const createAccountBtn = document.querySelector('#linkCreateAccount');
const formElement = document.querySelector('.form-message');
const alreadyHaveAnccount = document.querySelector('#link-login');






const setFormMessage = (formElement, type, message) => {
        const messageElement = formElement;
        messageElement.textContent = message;
        messageElement.classList.remove('form-message__success', 'form-message__error');
        messageElement.classList.add(`form-message__${type}`);
};


function setInputError (){
    
}


createAccountBtn.addEventListener('click', (e) => {
        e.preventDefault();
        login.classList.add('form-hidden');
        createAccountForm.classList.remove('form-hidden');
        login.addEventListener('submit', e => {
            e.preventDefault();
            //Perform your Ajax/Fetch Login
        setFormMessage(login, 'error', 'invalid username/password combination');
        });

});







const closeContactUsPage = () => {
    contactUsBackdrop.style.display = 'none';
    contactUsPage.style.display = 'none';
};

const openContactUsPage = () => {
    contactUsBackdrop.style.display = 'block';
    contactUsPage.style.display = 'block';
    // modal.style.display = 'none';
    // backDrop.style.display = 'none';
};


contactCloseBtn.addEventListener('click', closeContactUsPage);
reportClaims.addEventListener('click', openContactUsPage);
contactButton.addEventListener('click', openContactUsPage);
inquireButton.addEventListener('click', openContactUsPage);
inquireButton2.addEventListener('click', openContactUsPage);



const openPaymentPage = () => {
    paymentPage.style.display = 'block';
    paymentPageBackdrop.style.display = 'block';
};


const closePaymentPage = () => {
    paymentPage.style.display = 'none';
    paymentPageBackdrop.style.display = 'none';
};



primaryPaymentBtn.addEventListener('click', openPaymentPage);
secondaryPaymentBtn.addEventListener('click', openPaymentPage);
paymentCloseBtn.addEventListener('click', closePaymentPage);

const openLifeInsurancePage = () => {
    lifeInsuranceBackdrop.style.display = 'block';
    lifeInsurancePage.style.display = 'block';
}



const closeLifeInsurancePage = () => {
    lifeInsuranceBackdrop.style.display = 'none';
    lifeInsurancePage.style.display = 'none';
};



lifeInsuranceBtn.addEventListener('click', openLifeInsurancePage)

insuranceCloseBtn.addEventListener('click', closeLifeInsurancePage);



const openHistoryTab = ()  => {
        historyTab.style.display = 'block';
        historyBackDrop.style.display = 'block';
        aboutUsPage.style.display = 'none';
        aboutUsBackDrop.style.display = 'none';
};


historyBackDrop.addEventListener('click', ()=>{
    historyTab.style.display = 'none';
    historyBackDrop.style.display = 'none';
})

historyBtn.addEventListener('click', openHistoryTab);



const coreValueDisplayPage = () => {
    coreValuesPage.style.display = 'block';
    coreValueBackdrop.style.display = 'block';
    aboutUsPage.style.display = 'none';
    aboutUsBackDrop.style.display = 'none';
    modal.style.display = 'none';
};

coreValuesCloseBtn.addEventListener('click', () =>{
    coreValuesPage.style.display = 'none';
    coreValueBackdrop.style.display = 'none';
    aboutUsBackDrop.style.display = 'none';
    backDrop.style.display = 'none';
})


coreValueBtn.addEventListener('click', coreValueDisplayPage);


const displayManagement = () => {
    bio.style.display = 'block';
    aboutUsPage.style.display = 'none';
    aboutUsBackDrop.style.display = 'none';
}


directorAndManagementBtn.addEventListener('click', displayManagement);
bioExitBtn.addEventListener('click', ()=> {
    bio.style.display = 'none';
    aboutUsBackDrop.style.display = 'none';
    backDrop.style.display = 'none';
})


const addAboutUsPage = () => {
    aboutUsPage.style.display = 'block';
    modal.style.display = 'none'
    aboutUsBackDrop.style.display = 'block';
}

const aboutUsPageDisplay = () => {
    aboutUsPage.style.display = 'none';
    aboutUsBackDrop.style.display = 'none';
    backDrop.style.display ='none';
};

aboutUsBtn.addEventListener('click', addAboutUsPage);
aboutUsBtnSecondary.addEventListener('click', addAboutUsPage);
aboutUsBackDrop.addEventListener('click', aboutUsPageDisplay);


const openAviationInsurance = () => {
        aviationPage.style.display = 'block';
        backDrop.style.display = 'block';
        insuranceMenuItemsList.style.display ='none';
};

const closeAviationInsurance = () => {
    aviationPage.style.display = 'none';
    aviationBackdrop.style.display = 'none';
    insuranceBackdrop.style.display = 'none';
    backDrop.style.display = 'none';
}

aviationExitBtn.addEventListener('click', closeAviationInsurance);
aviationBackdrop.addEventListener('click', closeAviationInsurance);
aviationInsurance.addEventListener('click', openAviationInsurance);

function openModal(){
    backDrop.style.display = 'block';
    modal.style.display = 'block';
}

function closeModal(){
    backDrop.style.display = 'none';
    modal.style.display = 'none';
}

const openInsuranceMenu = () => {
        insuranceBackdrop.style.display = 'block';
        insuranceMenuItemsList.style.display = 'block';
        modal.style.display = 'none';
        backDrop.style.display = 'none';
};

const closeInsuranceMenu = () => {
    insuranceBackdrop.style.display = 'none';
    insuranceMenuItemsList.style.display = 'none';
};

const closeBusinessPage = () => {
    businessPage.style.display = 'none';
    businessInsuranceBackdrop.style.display = 'none';
    insuranceBackdrop.style.display = 'none';
    backDrop.style.display = 'none';
};

const openBusinessInsurancePage = () => {
        backDrop.style.display = 'block';
        businessInsurancePage.style.display = 'block';
        insuranceMenuItemsList.style.display = 'none';
};

businessInsurance.addEventListener('click', openBusinessInsurancePage);

businessInsuranceBackdrop.addEventListener('click', () => {
    businessInsuranceBackdrop.style.display = 'none';
    backDrop.style.display = 'none';
    insuranceBackdrop.style.display = 'none';
})

const closeBusinessInsurancePage = () => {
    insuranceBackdrop.style.display = 'none';
    businessInsurancePage.style.display = 'none';
}

insuranceBackdrop.addEventListener('click', closeBusinessPage);
closeBtn2.addEventListener('click', closeBusinessPage);
insuranceBackdrop.addEventListener('click', closeInsuranceMenu)
toggleButton.addEventListener('click', openModal);
backDrop.addEventListener('click', closeModal)
closeBtn.addEventListener('click', closeModal)
insurance.addEventListener('click', openInsuranceMenu);
insuranceMenuSecondary.addEventListener('click', openInsuranceMenu)