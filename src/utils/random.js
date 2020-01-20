const random = (list) => {
	const index = Math.floor(Math.random() * Math.floor(25));
	if (!list[index]) {
		return index;
	}
	return random(list);
};

export default random;
