function cypherPhrase (charactersMap, str) {

	 return getTransformedArray(str.split(''), function(letter) {
	 	return charactersMap[letter] || letter;
	 }).join('');
}
          

var charactersMap = {a: 'o', c: 'd', t: 'g'}
cypherPhrase(charactersMap, 'kitty cat' ); // -> “kiggy dog”
 