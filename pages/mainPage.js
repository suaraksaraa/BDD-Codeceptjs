const { I } = inject();

module.exports = {
  elements: {
    menu: String('Flights'),
    
  },
  clickMenuFlight(){
    I.click(this.elements.menu);
  },
  
}
