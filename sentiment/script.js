const button1 = document.getElementById('1');
const label1 = document.querySelector('#label1');
const button2 = document.getElementById('2');
const label2 = document.querySelector('#label2');
const button3 = document.getElementById('3');
const label3 = document.querySelector('#label3');
const button4 = document.getElementById('4');
const label4 = document.querySelector('#label4');
const button5 = document.getElementById('5');
const label5 = document.querySelector('#label5');
button1.addEventListener('change', () => {
    if (button1.checked) {
        label1.style.color = 'yellow';
        label2.style.color = 'black';
        label3.style.color = 'black';
        label4.style.color = 'black';
        label5.style.color = 'black';
    }
});
button2.addEventListener('change', () => {
    if (button2.checked) {
        label1.style.color = 'yellow';
        label2.style.color = 'yellow';
        label3.style.color = 'black';
        label4.style.color = 'black';
        label5.style.color = 'black';
    }
});
button3.addEventListener('change', () => {
    if (button3.checked) {
        label1.style.color = 'yellow';
        label2.style.color = 'yellow';
        label3.style.color = 'yellow';
        label4.style.color = 'black';
        label5.style.color = 'black';
    }
});
button4.addEventListener('change', () => {
    if (button4.checked) {
        label1.style.color = 'yellow';
        label2.style.color = 'yellow';
        label3.style.color = 'yellow';
        label4.style.color = 'yellow';
        label5.style.color = 'black';
    }
});
button5.addEventListener('change', () => {
    if (button5.checked) {
        label1.style.color = 'yellow';
        label2.style.color = 'yellow';
        label3.style.color = 'yellow';
        label4.style.color = 'yellow';
        label5.style.color = 'yellow';
    }
});

// testing-Josh

// function highlightStars(rating) {
//     for (let i = 1; i <= 5; i++) {
//         const label = document.getElementById('label' + i);
//         if (i <= rating) {
//             label.classList.add('highlight');
//         } else {
//             label.classList.remove('highlight');
//         }
//     }
// }

// document.querySelectorAll('input[name="stars"]').forEach((radio) => {
//     radio.addEventListener('change', function() {
//         const rating = parseInt(this.value);
//         highlightStars(rating);
//     });
// });

//testing-Josh(It seems like there isn't an easy way to do the connecting thing in CSS)
