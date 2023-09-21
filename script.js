const messages = {
    first: ['Bake', 'Eat', 'Destroy'],
    second: ['delicious', 'disgusting', 'acceptable'],
    third: ['pizzas!', 'apple pies!', 'chickens!']
}

const randomNumber1 = Math.floor(Math.random() * 3);
const randomNumber2 = Math.floor(Math.random() * 3);
const randomNumber3 = Math.floor(Math.random() * 3);


function getMessage() {
    console.log(messages.first[randomNumber1] + ' ' + messages.second[randomNumber2] + ' ' + messages.third[randomNumber3]);
}

getMessage();