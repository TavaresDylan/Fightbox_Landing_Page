const getImageUrl = (subfolder: string, name: string) => {
	return new URL(`../assets/${subfolder}/${name}`, import.meta.url).href;
};

export default getImageUrl;
