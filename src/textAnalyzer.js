function textCount(text) {

    const trim = text.trim();
    const wordCount = trim.split(/\s+/).length;
    const charCount = trim.length;
    const sentenceCount = trim.split(/[.!?]+/).filter(Boolean).length;
    const longestWord = trim.split(/\s+/).reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    }, '');
    const linescount = trim.split(/\n/).length;

    return {
        wordCount,
        charCount,
        sentenceCount,
        longestWord,
        linescount
    }
}

const content = fs.readFileSync('./file-examples/quotes.txt', 'utf8');
console.log(textCount(content));
console.log(textCount('This is a sample text. It has multiple sentences! And some lines?\nYes, indeed.\n'));
const sampleText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
console.log(textCount(sampleText));