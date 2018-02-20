function decypherPhrase (charactersMap, phrase) {
	var inverseCharacterMap = {};
	for (let key in charactersMap) {
		let newProperty = charactersMap[key];
		inverseCharacterMap[newProperty] = key;
	}
	return cypherPhrase(inverseCharacterMap, phrase);
}

var charactersMap = {a: 'o', c: 'd', t: 'g'}
decypherPhrase(charactersMap, 'kiggy dog'); 
