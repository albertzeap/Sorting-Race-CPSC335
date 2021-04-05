class GoldSortManager {
    
    *goldsortGenerator(array) {
        let len = array.length;
        let swapped;
        do {
            swapped = false;
            for (let i = 0; i < len; i++) {
                if (array[i] > array[i + 1]) {
                    let tmp = array[i];
                    array[i] = array[i + 1];
                    array[i + 1] = tmp;
                    swapped = true;
                }
            }
            yield array;
        } while (swapped);
        return array;
    }
}