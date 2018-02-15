function captureNumbers(input) {
    let text = input.join('');
    let regex = /\d+/g;
    let matches = text.match(regex);
    console.log(matches.join(' '));
}

captureNumbers(['The300',
    'What is that?',
    'I think it’s the 3rd movie.',
    'Lets watch it at 22:45']);