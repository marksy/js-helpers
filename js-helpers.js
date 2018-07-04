const convertToKebabCase = function something(text) {
	return text.toLocaleLowerCase().replace(/ /g, '-');
}

export default convertToKebabCase;