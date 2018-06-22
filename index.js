module.exports = {
	/**
	 * Sawed your string in half? Slap some Flex Tape on it!
	 * @param {any} args 
	 */
	slap (...args) {
		returnstring = "";
		args.forEach(arg => {
			if (Array.isArray(arg)) {
				returnstring += arg.join(" ");
			} else {
				returnstring += arg;
			}
		});
		return returnstring;
	}
}