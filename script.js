const generateButton = document.getElementById('generate-button');
const copyButton = document.getElementById('copy-button');
const passwordInput = document.getElementById('password');
const lengthInput = document.getElementById('length');
const lengthValue = document.getElementById('length-value');
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const strengthDisplay = document.getElementById('strength');


function getRandomElement(array) {
    let randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function generatePassword(length, options) {
    let charset = [];

    if (options.uppercase) {
        charset.push.apply(charset, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''));
    }
    if (options.lowercase) {
        charset.push.apply(charset, 'abcdefghijklmnopqrstuvwxyz'.split(''));
    }
    if (options.numbers) {
        charset.push.apply(charset, '0123456789'.split(''));
    }
    if (options.symbols) {
        charset.push.apply(charset, '!@#$%^&*()_+[]{}|;:,.<>?'.split(''));
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        password += getRandomElement(charset);
    }

    return password;
}

generateButton.addEventListener('click', () => {
    const length = parseInt(lengthInput.value, 10);
    const options = {
        uppercase: uppercaseCheckbox.checked,
        lowercase: lowercaseCheckbox.checked,
        numbers: numbersCheckbox.checked,
        symbols: symbolsCheckbox.checked
    };

    const password = generatePassword(length, options);
    passwordInput.value = password;

    if(length >= 12) {
        const strength = 'Strong';
        strengthDisplay.textContent = strength;
    }
    
    else if (length >= 8) {
        const strength = 'Medium';
        strengthDisplay.textContent = strength;
    }
    
    else {
        const strength = 'Weak';
        strengthDisplay.textContent = strength;
    }
});

copyButton.addEventListener('click', () => {
    const password = passwordInput.value;
    if (password) {
        navigator.clipboard.writeText(password)
                const tooltip = copyButton.querySelector('.tooltiptext');
                tooltip.textContent = 'Copied';
                tooltip.style.visibility = 'visible';
                tooltip.style.opacity = 1;

                setTimeout(() => {
                    tooltip.style.visibility = 'hidden';
                    tooltip.style.opacity = 0;
                }, 1500);
        }
});

lengthInput.addEventListener('input', () => {
    lengthValue.textContent = lengthInput.value;
});
