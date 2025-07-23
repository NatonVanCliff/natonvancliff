// Напиши реализацию функции `formatRange`.
// Функция принимает на вход массив целых чисел и возвращает строку с диапазонами, разделенными запятыми.

function formatRange (arr) {
    // Проверка на пустоту, что бы лишний раз не гонять алгоритм
    if (arr?.length === 0) return '';

    // Сортировка массива
    // arr.sort((a, b) => a - b); // мутируем оригинальный массив
    // const sortedList = [...arr].sort((a, b) => a - b); // не мутируем оригинальный массив (если есть требование)
    const sortedList = [...new Set(arr)].sort((a, b) => a - b); // сортировака, убираем дубликаты (если есть требование)

    const ranges = [];
    let startRange;
    for (let i = 0; i < sortedList.length; i++) {
        if (startRange === undefined) {
            // сохраняем на начало диапазона в указатель
            startRange = sortedList[i];
        }

        if (sortedList[i] + 1 !== sortedList[i+1]) {
            let currentRange = `${startRange}`;

            // случай когда диапазон состоит из одного числа
            if (startRange !== sortedList[i]) {
                currentRange += `-${sortedList[i]}`;
            }

            ranges.push(currentRange);
            // сбрасываем укзатель
            startRange = undefined
        }
    }

    return ranges.join(',');
};

console.log(formatRange([1,4,3,2])); // '1-4'
console.log(formatRange([1,4,5,2,3,9,8,11,0])); // '0-5,8-9,11'


console.log(formatRange()); // ''
console.log(formatRange([])); // ''
console.log(formatRange([5])); // '5'
console.log(formatRange([2,6,8,10])); // '2,6,8,10'
console.log(formatRange([1,2,3,5,6,8,10,11])); // '1-3,5-6,8,10-11'
