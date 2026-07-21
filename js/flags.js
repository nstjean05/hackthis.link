function checkFlag1() {
    // Get the input field and its value
    const input = document.getElementById('flag-input-1');
    const result = document.getElementById('flag-result-1');
    const checker = input.parentElement;
    const userInput = input.value.trim();
    
    // The correct flag
    const correctFlag = 'FLAG{blizzard}';
    
    // Check if correct
    if (userInput === correctFlag) {
        // Correct!
        checker.classList.remove('incorrect');
        checker.classList.add('correct');
        result.textContent = '✓ Correct!';
        input.disabled = true; // Prevent further edits
    } else if (userInput === '') {
        // Empty input
        checker.classList.remove('correct', 'incorrect');
        result.textContent = '';
    } else {
        // Incorrect
        checker.classList.remove('correct');
        checker.classList.add('incorrect');
        result.textContent = '✗ Incorrect';
        
        // Remove error state after animation
        setTimeout(() => {
            checker.classList.remove('incorrect');
            result.textContent = '';
        }, 2000);
    }
}

// Allow Enter key to submit
document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('flag-input-1');
    if (input) {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                checkFlag1();
            }
        });
    }
});