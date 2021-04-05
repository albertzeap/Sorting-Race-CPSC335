// Authors: Ryan Patrick
// Description: Class to handle data for each pass of selection sort.
class SelectSortManager {
//==================================================================
//========================SELECTIONSORT=============================
//==================================================================

/*  The following selection sort code implementation can be found here 
    https://reactgo.com/selection-sort-algorithm-javascript/
*/
    *selectsortGenerator(array) {
        for (var i = 0; i < array.length; ++i){
            let min = i;
            for (var j = i + 1; j < array.length; ++j){
                if (array[min] > array[j]){
                    min = j;
                }
            }
            if ( i !== min){
                [array[i], array[min]] = [array[min], array[i]];
            }
            yield array;
        }   
        return array;
    }
}