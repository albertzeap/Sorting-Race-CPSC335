// Authors: Ryan Patrick
// Description: Class to handle race-level data and functions.
class RaceManager {
    /*
        Mode is intended to be set here by the programmer.
        It defines how the program chooses its initial input.
        Mode=0: Randomly choose hex string.
        Mode=1: Always choose hexStrings[0].
        Mode=2: User inputs hex string.
    */
    mode = 0;
    hexStrings =    ['05CA62A7BC2B6F03', '286E1AD0342D7859',
                     '065DE66B71F040BA', '30E530BC4786AF21',
                     '0684FB89C3D5754E', '328DE47C65C10BA9',
                     '07C9A2D18D3E4B65', '34F2756FD18E90BA',
                     '09F48E7862ED2616', '90BA34F07E56F180',
                     '1FAB3D47905FC286', 'D7859286E2FD0342'];

    constructor() {
        if(this.mode === 0) {
            let i = Math.floor(Math.random() * this.hexStrings.length - 1);
            this.inputString = this.hexStrings[i];
        }
        else if(this.mode === 1) {
            this.inputString = this.hexStrings[0];
        }
        else if(this.mode === 2) {
            this.inputString = document.getElementById('hexString');
        }
        else {
            this.inputString = '07C9A2D18D3E4B65'; // Default value if all else fails
        }
    }

    get_mode() {
        return this.mode;
    }

    start(){
        let originalString = this.inputString;
        let i = 1;
        while(originalString != this.inputString || i === 1) {
            console.log(`Pass #${i}: ${this.inputString}`);
            this.inputString = this.inputString.slice(1) + this.inputString[0];
            i++;
        }
    }
}