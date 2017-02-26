/**
 * Created by rakesh.katti on 26/02/17.
 */

const splitTheWord = (word) => {
    word = word ? word : "hello";
    word = word.toUpperCase();
    let wordArray = word.split(""), newWordArray = [], buffer = "";
    wordArray.map((character) => {
        buffer += character;
        newWordArray.push(buffer);
    });
    return newWordArray;
};

export { splitTheWord }
