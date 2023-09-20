const form = document.getElementById("form");

function decrypt(word, key) {
    const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    const initializer = alphabets.split("");
    let sub_initializer = "";
    for (let i = 0; i < initializer.length; i++) {
        let current = i + key;
        let currentAlphabet = initializer[current]
        if (currentAlphabet === undefined) {
         current = current - initializer.length
        }
        currentAlphabet = initializer[current]
        sub_initializer = sub_initializer + currentAlphabet;
     }
    let decryptedWord = "";
    for (let i = 0; i < word.length; i++) {
        const current = word[i]
        const index = sub_initializer.indexOf(current.toUpperCase())
        const found = initializer[index]
        decryptedWord = decryptedWord + found;
    }
    return decryptedWord;
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = form.msg.value.toUpperCase();
    const key = parseInt(form.key.value);
    try {
        const allWords = message.split(" ");
        const response = allWords.map((item) => decrypt(item, key));
        const encrypted = document.getElementById("decrypted")
        encrypted.value = response.join(" ");
    } 
    catch (error) {
        alert(error.message)
    }
});