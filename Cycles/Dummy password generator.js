function generateDumbPasswords(n, l) {
    let result = '';

    for (let sym1 = 1; sym1 <= n; sym1++) {
        for (let sym2 = 1; sym2 <= n; sym2++) {
            for (let char1 = 97; char1 < 97 + l; char1++) {
                for (let char2 = 97; char2 < 97 + l; char2++) {
                    for (let sym5 = 1; sym5 <= n; sym5++) {
                        if (sym5 > sym1 && sym5 > sym2) {
                            result += `${sym1}${sym2}${String.fromCharCode(char1)}${String.fromCharCode(char2)}${sym5} `;
                        }
                    }
                }
            }
        }
    }

    console.log(result.trim());
}

generateDumbPasswords(2, 3);
