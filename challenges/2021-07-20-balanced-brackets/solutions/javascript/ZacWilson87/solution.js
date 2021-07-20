// # Balanced Brackets
// 
// Given a string of round, curly, and square open and closing brackets, return
// whether the brackets are balanced (well-formed).
// 
// For example, given the string "([])[]({})", you should return true.
// Given the string "([)]" or "((()", you should return false.
// 
// ## Business Rules/Errata
// 
// - The only characters considered to be 'brackets' are `(`, `)`, `[`, `]`, `{`,
//   and `}`.
// - Your input will always be a string.
// - An empty string is considered balanced (return true).
// - **Your string may contain characters that are not brackets.**
// 
// ## Examples
// 
// ```
// balanced_brackets("[[]]({}[])");       // true
// balanced_brackets("[[({}[])");         // false
// balanced_brackets("");                 // true
// balanced_brackets("(5 * 3) + 4");      // true
// ```

function balancedBrackets(input) {
    let openBracket = 0;
    let closeBracket = 0;

    for (let i = 0; i < input.length; i++) {
        let bracket = input[i];

        if (bracket == '{' || bracket == '[' || bracket == '(') {
            openBracket++;
        }
        if (bracket == "}" || bracket == ")" || bracket == "]") {
            closeBracket++;
        }
        if (closeBracket > openBracket) return false;
    }
    //console.log(openBracket);
    //console.log(closeBracket);
    if (openBracket == closeBracket) {
        return true;
    }

    return false;

}

module.exports = balancedBrackets;
