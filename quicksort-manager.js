class QuickSortManager {      
    *quicksortGenerator(array, min=0, max=array.length) {
        if (max - min <= 1) return array;

        let [pivot, less, greater] = [array[min], [], []];
        for (var i = min + 1; i < max; i++) {
            if (array[i] < pivot) less.push(array[i]);
            else greater.push(array[i]);
            array.splice(min, i - min + 1, ...less.concat(pivot, greater));
            
        }
        yield array;
        
        yield* this.quicksortGenerator(array, min, min + less.length);
        yield* this.quicksortGenerator(array, min + less.length + 1, max);
    }
}