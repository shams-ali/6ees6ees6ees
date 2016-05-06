import Bee from './Bee'

class ForagerBee {
  constructor(){
    super();
    this.age = 10;
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];
  };
  forage(value){
    this.treasureChest.push(value)
  }
};

export default ForagerBee;
