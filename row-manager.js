// Authors: Ryan Patrick
// Description: Class to handle row-level data and functions.
class RowManager {

    constructor(hexString) {
        this.row = 0;
        this.arr = hexString.split('');
        this.quickMgr = new QuickSortManager();
        this.quickGenerator = this.quickMgr.quicksortGenerator(this.arr);
        this.selectMgr = new SelectSortManager();
        this.selectGenerator = this.selectMgr.selectsortGenerator(this.arr);
    }

    set_arr(hexString) {
        this.arr = hexString.split('');
        this.quickGenerator = this.quickMgr.quicksortGenerator(this.arr);
        this.selectGenerator = this.selectMgr.selectsortGenerator(this.arr);
    }

    update_row() {
        let results = [];
        let done = true;
        // One pass of Mergesort
        // One pass of Quicksort
        let val = this.quickGenerator.next().value;
        console.log(val);
        results.push(val);
        // One pass of Selection Sort
        //let val = this.selectGenerator.next().value;
        //console.log(val);
        //results.push(val);
        // One pass of Gold's Pore Sort

        // Val will be undefined only once the sort has finished.
        // Therefore, all vals must be undefined for us to be done.
        results.forEach(val => {
            if(typeof val != 'undefined') {
                done = false;
            }
        });

        this.row++;
        return done;
    }
}