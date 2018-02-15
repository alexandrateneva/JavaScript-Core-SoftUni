function countOccurrences(targetWord, text) {
    let counter = 0;
    let index = text.indexOf(targetWord, 0);
    while (index > -1) {
        counter++;
        index = text.indexOf(targetWord, index + 1);
    }
    console.log(counter);
}

countOccurrences('the', 'The quick brown fox jumps over the lay dog.');
countOccurrences('ma', 'Marine mammal training is the training and caring for marine life such as, dolphins, killer ' +
    'whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical ' +
    'exercises to keep the animal healthy and happy.');