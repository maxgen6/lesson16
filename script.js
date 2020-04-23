'use strict';

class First{
    hello(){
        console.log('Привет я метод родителя!');
    }
}

class Second extends First{
    helloReport(){
        console.log('А я наследуемый метод!');
    }
}

const first1 = new First();
first1.hello();
const second2 = new Second();
second2.hello();
second2.helloReport();