// Authors: Ryan Patrick
// Description: Class to handle row-level data and functions.
class RowManager {

    constructor() {
        this.row = 0;
    }

    update_row(hexString) {
        let arr = hexString.split('');
        let finishedCount = 4;
        console.log(arr);
        // One pass of Mergesort (array unchanged? finishedCount++)
        // One pass of Quicksort (array unchanged? finishedCount++)
        // One pass of Selection Sort (array unchanged? finishedCount++)
        // One pass of Gold's Pore Sort (array unchanged? finishedCount++)

        this.row++;
        return finishedCount === 4;
    }
}