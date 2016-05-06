import ForagerBee from './ForagerBee';

class RetiredForagerBee {
  super();
  constructor(){
    this.age = 40;
    this.job = 'gamble';
    this.canFly = false;
    this.color ='grey';
  }
  forage(){
    return 'i am too old, let me play cards instead';
  }
  gamble(){
    return this.treasureChest.push('treasure')
  }
};

export default RetiredForagerBee;
