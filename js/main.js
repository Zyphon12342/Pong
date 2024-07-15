import { PongController } from './controllers/PongController.js';

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('pongCanvas');
    const controller = new PongController(canvas);
    controller.startGame();
    const slider = document.getElementById('slider');
    const sliderValue = document.getElementById('sliderValue');

    slider.addEventListener('input', function () {
        sliderValue.textContent = slider.value;
    });

    const sliderInc = document.getElementById('sliderInc');
    const sliderValueInc = document.getElementById('sliderValueInc');

    sliderInc.addEventListener('input', function () {
        sliderValueInc.textContent = sliderInc.value;
    });
});