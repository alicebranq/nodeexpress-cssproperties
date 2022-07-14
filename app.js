import input from 'input';
import chalk from 'chalk'; 

async function getInput() {
    let elementsList = [];
    let cssQuestion;

    do {
        cssQuestion ? elementsList .push(cssQuestion) : '';
        cssQuestion = (await input.text('Digite uma propriedade CSS: \n')).toLowerCase();
    } while (cssQuestion != 'sair');

    elementsList  = elementsList .sort();

    for(let i=0;i < elementsList.length; i++){
        console.log(chalk.bgMagenta(`Propriedades CSS: ${elementsList[i]}`));
    }
}

getInput();
