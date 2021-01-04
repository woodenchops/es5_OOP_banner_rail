import RetailRail from './retail-rail.js';



const railOne = new RetailRail({
    title: 'My retail rail',
    description: 'We have a great offer - this rail came from the RetailRail init function in the main JS file - blah, blah, blah',
    cta: [
        {id: 'bookNow', text: 'BOOK NOW', link: '#', classes: ['learn-more'], eventHandler: () => {alert('Book Now')}},
        {id: 'cancel', text: 'CANCEL', link: '#', classes: ['cancel'], eventHandler: () => {railOne.CloseRail()}},
    ],
    openState: false,
    positionFixedToBottom: false,
    styles: ['dark-blue']
});

const railTwo = new RetailRail({
    title: 'My retail rail Two',
    description: 'We have a great offer - this rail came from the RetailRail init function in the main JS file - blah, blah, blah',
    cta: [
        {id: 'bookNowTwo', text: 'BOOK NOW', link: '#', classes: ['learn-more'], eventHandler: () => {alert('Book Now 2')}},
        {id: 'cancelTwo', text: 'CANCEL', link: '#', classes: ['cancel'], eventHandler: () => {railTwo.CloseRail()}},
    ],
    openState: true,
    positionFixedToBottom: true,
});

console.log(railOne);


const railTwoBtn = document.querySelector('.railTwoBtn');

railTwoBtn.addEventListener('click', () => railTwo.OpenRail())


console.log('continued code');
