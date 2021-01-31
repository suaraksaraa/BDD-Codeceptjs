const { I } = inject();

const mainPage = require('../pages/mainPage');
const flightPage = require('../pages/reservationFlightPage');
const resultPage = require('../pages/resultPage');
const contactPage = require('../pages/contactPage');
const paymentaPage = require('../pages/paymentPage');
const orderListPage = require('../pages/orderListPage');
const loginPage = require('../pages/loginPage');

Given('user access tiket website', () => {
  I.amOnPage('https://en.tiket.com/');
});

When('user click the flight menu', () => {
  mainPage.clickMenuFlight();
});

Then('user redirected to the flight page', () => {
  flightPage.reservationFlight()
});

When('user makes a ticket reservation', () => {
  flightPage.tickRountrip();
  flightPage.selectDepartureCity();
  flightPage.selectDestinationCity();
  flightPage.selectDepartureDate();
  flightPage.selectReturnDate();
  flightPage.Passenger();
  flightPage.searchFlight();
});

Then('user redirected to the result page', () => {
  resultPage.clickInfo();
});

When('user checks the filter feature for transit & departure time', () => {
  resultPage.filterTransit();
  resultPage.filterDepartureTime();
});

When('select the departure flights', () => {
  resultPage.selectDepartureFlight();
});

When('select the return flights', () => {
  resultPage.selectReturnFlight();
});

Then('user redirected to the Contact Person Detail page', () => {
  contactPage.contactDetailPage();  
});

When('user fill all form detail passenger', () => {
  contactPage.fillFormPassenger();
});

When('continue to the payment page', () => {
  contactPage.continuePayment();
});

Then('user redirected to the Payment Method page', () => {
  paymentaPage.listPayment();
});

When('user selected the virtual account as a payment method', () => {
  paymentaPage.selectVirtualAccount();
});

Then('the virtual account has been selected', () => {
  paymentaPage.virtualAccountPage();
});

When('user go to the order list', () => {
  paymentaPage.clickOrderList();
  orderListPage.checkMyOrder();
});

When('login to the website', () => {
  orderListPage.clickLogin();
  loginPage.fillFormLogin();
});

Then('user success login', () => {
  loginPage.verifyAccount();
});