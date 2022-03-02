//https://gist.github.com/319dccff26dae8cb4d9f1b2d90cb9fb9


const menu = {
  _courses: {
     appetizers: [],
     mains: [],
     desserts: [],
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  set appetizers(appetizers) {
    this._courses.appetizers = appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  set mains(mains) {
    this._courses.mains = mains;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set desserts(desserts) {
    this._courses.desserts = desserts;
  },
  get courses() {
    return {
    appetizers: this.appetizers, 
    mains: this.mains, 
    desserts: this.desserts
    };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random()* dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    const appetizers = this.getRandomDishFromCourse('appetizers');
    const mains = this.getRandomDishFromCourse('mains');
    const desserts = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizers.price + mains.price + desserts.price;
    return `Your meal is ${appetizers.name}, ${mains.name} and ${desserts.name}. The price is ${totalPrice}.`;
  }
};
menu.addDishToCourse('appetizers', 'Salat Mewaee', 5.50);
menu.addDishToCourse('appetizers', 'Mast', 6);
menu.addDishToCourse('appetizers', 'Kachaloo', 1.5);
menu.addDishToCourse('mains', 'Qahwa', 3);
menu.addDishToCourse('mains', 'Sheer', 4);
menu.addDishToCourse('mains', 'Chai', 2.5);
menu.addDishToCourse('desserts', 'Freenee', 9);
menu.addDishToCourse('desserts', 'Kheer', 8);
menu.addDishToCourse('desserts', 'Mewa', 10);

let meal = menu.generateRandomMeal();
console.log(meal);




/*TWITTER HANDLE: -------AS ALWAYS, FEEL FREE TO DM ME ON TWITTER @sypher12233 REGARDING ANY ISSUES :) ————*/

