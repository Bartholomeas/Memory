const cardImgs = ['one', 'one', 'two', 'two', 'three', 'three',
    'four', 'four', 'five', 'five', 'six', 'six', 'seven', 'seven',
    'eight', 'eight', 'nine', 'nine'];

const allCards = document.querySelectorAll('div');

let cards = [...allCards]
console.log(cards);

// const init = () => {
//     cards.forEach(card => {
//         const position = Math.floor(Math.random() * cardImgs.length);
//         card.classList.add(cardImgs[position]);
//         cardImgs.splice(position, 1);
//     })
// };

const init = () => {
    cards.forEach(card => {
        const position = Math.floor(Math.random() * cardImgs.length);
        card.classList.add(cardImgs[position]);
        cardImgs.splice(position, 1);
        console.log(card);
    })
};

init();