import axios from 'axios';

function randomFossil(evt) {
    axios.get('/random-fossil.json')
        .then((res) => {
            console.log(res)
            const dinoImg = res.data.img
            const dinoName = res.data.name
            console.log(dinoImg, dinoName)
            document.querySelector('#random-fossil-image').innerHTML = `<img id="random-fossil-image" src="${dinoImg}" />`
            document.querySelector('#random-fossil-name').innerText = dinoName + ' ^^^ :)'
        })
};

document.querySelector('#get-random-fossil').addEventListener('click', randomFossil);