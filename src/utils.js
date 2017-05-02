/* This is the structure required to use this function

let classList = [
	{
		criterion: "reactWizard",
		className: "react-wizard"
	},
	{
		criterion: "isActive",
		className: "active"
	}
];

let cases = {
	reactWizard: true,
	isActive: true
};

*/

export function applyClasses(classList, cases, defaultClasses) {

	let classes = defaultClasses ? new Array(defaultClasses) : new Array(),
	i,
	len = classList.length;

	for (i = 0; i < len; i++) {
		if (cases[classList[i].criterion]) {
			classes = classes.concat(classList[i].className);
		}
	}

	return classes.join(" ");
}

export function uid(length) {
	const charlist = "abcdefghijklmnopqrstuvwzyxABCDEFGHIJKLMNOPQRSTUVWXYZ-_";

	let _uid = new Array(),
		i;

		for (i = 0; i < length; i++) {
			_uid = _uid.concat(charlist.charAt(Math.floor(Math.random() * (charlist.length - 0))));
		}

	return _uid.join("");
}