let x: unknown; // Sempre que recebemos algo que não sabemos o que será utilizamos o unknow para checar o tipo para checar a váriavel

x = 100;
x = 'Luis';
x = 900;
x = 10;
const y = 800;

if (typeof x === 'number') console.log(x + y);
