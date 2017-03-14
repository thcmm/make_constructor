'use strict';

class KaffeKopp { // Example av bas klass
  constructor (color, size, name, temp) {
    this.color = color;
    this.size = size;
    this.name = name;
    this.temp = temp;
  }

  prop2String() {
    return `base-class props: ${this.color} | ${this.size} | ${this.name} | ${this.temp}`;
  }
}

class Ikopp extends KaffeKopp { // Example extend bas klass
  constructor (color, size, name, temp, liquidType, fillLevel, isFlammable) {
    super(color, size, name, temp);
    this.liquidType = liquidType;
    this.fillLevel = fillLevel;
    this.isFlammable = isFlammable;
  }

  getBaseProps() {
    return super.prop2String();
  }

  getSubProps() {
    return `sub-class props: ${this.liquidType} | ${this.fillLevel} | ${this.isFlammable}`;
  }
}


let test = new KaffeKopp('red', '8oz', 'Mitt', 'hot');
console.log('test base props: ', test.prop2String());
let test2 = new Ikopp('red', '8oz', 'Mitt', 101, 'bensin', 33, true);
console.log('Access to base class method: ', test2.getBaseProps());
console.log('Acess to subclass method', test2.getSubProps());
