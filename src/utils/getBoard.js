export default function (boardSize){
    let board = [];
    let boardFields = [];
    let currValue = 1;

    for(let i = 0; i < boardSize; i++){
        if(!board[i]) board[i] = [];
        board[i][0] = getField(`${i}0`);
        for(let j = 0; j < boardSize; j++){
            board[i][j] = getField(`${i}${j}`);
            boardFields.push(getField(`${i}${j}`));
        }
    }

    shuffle(boardFields);

    for(let i = 0; i < boardFields.length; i++){
        let field = board
            .find(row => row.find(field => field.index === boardFields[i].index))
            .find(field => field.index === boardFields[i].index);
        field.value = currValue;
        if(i % 2 === 1) ++currValue
    }

    return board

}


function getField(index){
    return {
        index: index,
        isOpen: false,
        isPlayed: false,
        value: null
    }
}



function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i

        // поменять элементы местами
        // мы используем для этого синтаксис "деструктурирующее присваивание"
        // подробнее о нём - в следующих главах
        // то же самое можно записать как:
        // let t = array[i]; array[i] = array[j]; array[j] = t
        [array[i], array[j]] = [array[j], array[i]];
    }
}