import React from "react";

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

export function updateChildProps(children, propsFn) {
	return React.Children.map(children,
		(child, index) => React.cloneElement(child, propsFn(child, index)));
}

export function camelCase(str) {
	let strArr = str.split(" "),
		i,
		len = strArr.length,
		newArr = new Array();

	for (i = 0; i < len; i++) {
		newArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
	}

	return newArr.join("");
}