const container = document.querySelector('.container');
let chess = [
    ['1a', '1b', '1c', '1d', '1e', '1f', '1g', '1g'],
    ['2a', '2b', '2c', '2d', '2e', '2f', '2g', '2g'],
    ['3a', '3b', '3c', '3d', '3e', '3f', '3g', '3g'],
    ['4a', '4b', '4c', '4d', '4e', '4f', '4g', '4g'],
    ['5a', '5b', '5c', '5d', '5e', '5f', '5g', '5g'],
    ['6a', '6b', '6c', '6d', '6e', '6f', '6g', '6g'],
    ['7a', '7b', '7c', '7d', '7e', '7f', '7g', '7g'],
    ['8a', '8b', '8c', '8d', '8e', '8f', '8g', '8g'],
];

const letTwist = (inrow, incol, Chese) => {
    let board = [];
    let row = '';
    let i = '';

    for (i = 0; i < 8; i++) {
        const div = document.createElement('div');

        chess[i].forEach((r) => {
            if (parseInt(r[0], 10) === inrow && r[1] === incol) {
                row += `<p><b>${Chese}</b></p>`;
                board += 'k';
            } else {
                board += '0';
                row += `<p>0</p>`;
            }
            container.innerHTML = row;
        });
        board += '\n';
    }
    return row;
};

letTwist(2, 'c', 'K');

const determineteMove = () => {
    const containerWithP = document.querySelector('.container');
    console.log(containerWithP);
}

determineteMove();