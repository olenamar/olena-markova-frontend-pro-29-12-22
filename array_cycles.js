const arrOne = ['Дніпро', 'Київ', 'Одеса', 'Харків', 'Миколаїв', 'Кривий Ріг'];
const arrTwo = ['Ужгород', 'Львів', 'Дніпро', 'Харків', 'Херсон', 'Київ']; 



function arrCity(array) {
const city = []; 
    for (let i = 0; i < arrOne.length; i++) {
        const element = arrOne[i];
        if(!(arrTwo.includes(element))) {
            city.push(element);
        }
    }
    for (let j = 0; j < arrTwo.length; j++) {
        const elementTwo = arrTwo[j];
        if(!(arrOne.includes(elementTwo))) {
            city.push(elementTwo);
        }
    }
return city;
}
console.log(arrCity(arrOne, arrTwo));
