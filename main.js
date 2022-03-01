// Задача 1
typeof(9)
// Предположение: number
// Фактический: number

typeof(1.2)
// Предположение: number
// Фактический: number

typeof(NaN)
// Предположение: number
// Фактический: number

typeof("Hello World")
// Предположение: string
// Фактический: string

typeof(true)
// Предположение: boolean
// Фактический: boolean

typeof(2 != 1)
// Предположение: boolean
// Фактический: boolean

"сыр" + "ы"
// Предположение: сыры
// Фактический: сыры

"сыр" - "ы"
// Предположение: ср
// Фактический: NaN

"2" + "4"
// Предположение: 24
// Фактический: 24

"2" - "4"
// Предположение: -2
// Фактический: -2

"Сэм" + 5
// Предположение: Сэм5
// Фактический: Сэм5

"Сэм" - 5
// Предположение: NaN
// Фактический: NaN

99 * "шары"
// Предположение: NaN
// Фактический: NaN

// Задача 2
console.log('Задача 2');
let a = 2;
let b = 3;
let P = a+b+a+b;
let S = a*b;
console.log(`${a} ${b}`);
console.log(P);
console.log(S);
console.log(`${P/S}`);

// Задача 3
console.log('Задача 3');
let c = 36.6;
let f = (c * 9/5) + 32;
console.log(`${c}°С соответствует ${f}°F`);
f = 100;
c = (f - 32) * (5/9);
console.log(`${f}°F соответствует ${c}°C`);

// Задача 4
console.log('Задача 4');
let y = prompt("Введите год");
alert((y % 4 == 0) && (y % 100 != 0) ? "true" : "false");

// Задача 5
console.log('Задача 5');
a = Number(prompt("число"));
b = Number(prompt("число"));
if(a == 10 || b == 10 || a+b == 10){
    console.log("истина");
}

// Задача 6
console.log('Задача 6');
a = prompt("число");
let ret = '';
for(let i = 1; i <= a; i++)
{
    ret += i + " овечка...";
}
console.log(ret);

// Задача 7
console.log('Задача 7');
for(let i = 0; i <= 15; i++)
{
    if(i % 2 == 0)
        console.log(`"${i} четное"`);
    else
        console.log(`"${i} нечетное"`);
}

// Задача 8
console.log('Задача 8');
for(let i = 1; i <= 12; i++)
{
    let st = '';
    for(let j = 0; j < i; j++)
    {
        if(i % 2 == 0)
            st += "#";
        else
            st += '*';
    }
    console.log(st);
}

// Задача 9
console.log('Задача 9');
let g = [0, -3, 1];
g.sort();
let rets = '';
for(let i = 0; i < g.length; i++){
    if(i != g.length - 1)
        rets += i + ', ';
    else
        rets += i; 
}
console.log(rets);

// Задача 10
console.log('Задача 10');
let arr = [2, -1, 0, -5, -4];
let max = arr[0];
for(let i = 0; i < 5; i++)
{
    if(arr[i] > max)
        max = arr[i];
}
console.log(max);