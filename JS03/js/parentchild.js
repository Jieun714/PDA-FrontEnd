class Man {
    constructor(irum, age){
        console.log('constructor');
        this._irum = irum;
        this._age = age;
    }
    get irum(){
        console.log('getter irum');
        // return this._irum;
        return this._irum;
    }

    set irum(irum){
        console.log('setter irum');
        this._irum = irum;
    }

    get age(){
        console.log('getter age');
        return this._age;
    }

    set age(age){
        console.log('setter age');
        this._age = age;
    }
}

let m1 = new Man('hong', 20); //생성자 호출
console.log(m1._age);
console.log(m1._irum);

console.log("==============================");

class P1{
    constructor(age){
        this._age = age;
    }

    prt=function(){
        console.log('P1 prt method');
    }
}

class C1 extends P1{
    constructor(irum, age){
        super(age);
        this._irum = irum;
    }
    show=function(){
        console.log('C1 show method');
    }
    //Overriding
    prt=function(){
        console.log('C1 prt method');
    }
}

let ins = new P1(20);
ins.prt();

let ins2 = new C1('park', 27);
ins2.show();
ins2.prt();
