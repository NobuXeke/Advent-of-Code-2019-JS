function findPossiblePasswords() {
	let passwords = [];
	for (let i = 124075; i <= 580769; i++) {
		let password = i.toString();
		for (let a = 1; a < password.length; a++) {
			if (password[a] < password[a - 1]) {
				break;
			}
			if (a === 5) {
				for (let b = 1; b < password.length; b++) {
					if (password[b] === password[b - 1]) {
						passwords.push(Number(password));
						break;
					}
				}
				break;
			}
		}
	}
	return passwords;
}
console.log(findPossiblePasswords());
console.log(findPossiblePasswords().length);
