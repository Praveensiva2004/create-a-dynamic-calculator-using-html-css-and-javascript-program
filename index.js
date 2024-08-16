document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('.input');

    // Function to handle button clicks
    function buttonClick(value) {
        if (value === 'C') {
            input.value = '';
        } else if (value === 'Del') {
            input.value = input.value.slice(0, -1);
        } else if (value === '=') {
            try {
                input.value = eval(input.value);
            } catch {
                input.value = 'Error';
            }
        } else {
            input.value += value;
        }
    }

    // Add event listeners to buttons
    const buttons = document.querySelectorAll('.button button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttonClick(button.textContent);
        });
    });
});
