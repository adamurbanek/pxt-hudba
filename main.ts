let zacatekcasu = 0;
let koneccasu = 0;
let delkapipnuti = 0;
let skore = 0;

let novahra = () => {
    delkapipnuti = randint(400, 2500);
    music.playTone(Note.C, delkapipnuti);
}

let pocitejskore = (cas: number) => {
    console.log(delkapipnuti);
    console.log(cas);
    if (Math.abs(delkapipnuti - cas) < 400) {
        basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
    } else {
        basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    }
    novahra();
}

let zacnimerit = () => {
    zacatekcasu = control.millis();
}

let prestanmerit = () => {
    koneccasu = control.millis();
    pocitejskore(koneccasu - zacatekcasu);
}

let bylozmacknuto = false

novahra();

while (true) {
    if (input.buttonIsPressed(Button.A)) {
        if (!bylozmacknuto) {
            zacnimerit();
        }
        bylozmacknuto = true;
    } else {
        if (bylozmacknuto) {
            prestanmerit();
        }
        bylozmacknuto = false;
    }
}