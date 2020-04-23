'use strict';

class First{
    hello(){
        console.log('Привет я метод родителя!');
    }
}

class Second extends First{
    hello(){
        super.hello()
        console.log('А я наследуемый!');
    }
}

const second2 = new Second();
second2.hello();
