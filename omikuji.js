const result = document.querySelector('#fortuneresult');

function omikujishow() {
    var image = '';
    var message = '';
    var number = Math.random();
        if (number < 0.1) {
            message = '大吉です！おめでとうございます！';
            result.innerText = message;
            image = 'daikichi.png';
        }
        else if (number < 0.4) {
            message = '中吉です！いいことが起きるかもしれません！';
            result.innerText = message;
            image = 'cyuukichi.png';
        }
        else {
            message = '小吉です！がんばってください！';
            image = 'syoukichi.png';
            result.innerText = message;
        }
    var object = document.getElementById("omikuji");
    document.getElementById("fortuneImage").src = image;
}

const obj = document.querySelector('#button1');

function omikujiDraw() {
    obj.innerText = 'もう一度おみくじを引く';
}
const button = document.querySelector('#button1');
button.addEventListener('click',omikujiDraw);


function buttoncursor() {
    obj.style.cursor = 'pointer';
}
button.addEventListener('mouseenter', buttoncursor);
button.addEventListener('mouseover', () => {
    obj.style.color = 'blue';
});

obj.addEventListener('mouseout', () => {
    obj.style.color = 'black';
});

