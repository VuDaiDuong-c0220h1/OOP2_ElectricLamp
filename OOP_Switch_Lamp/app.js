let SwitchButton = function () {
    this.status = false;
    this.connectToLamp = function (electriclamp) {
        electriclamp.status = this.status;
    };
    this.switchOn = function () {
        this.status = true;
    };
    this.switchOff = function () {
        this.status = false;
    };
};

let ElectricLamp = function () {
    this.status = false;
    this.light = function () {
        if(this.status){
            console.log("Lighting");
        } else {
            console.log("Not lighting");
        }
    };
};
let lamp = new ElectricLamp();
let button = new SwitchButton();

function changeStatus() {
    if (button.status) {
        button.switchOff();
        button.connectToLamp(lamp);
        lamp.light();
    } else {
        button.switchOn();
        button.connectToLamp(lamp);
        lamp.light();
    }
}