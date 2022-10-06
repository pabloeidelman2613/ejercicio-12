import imagesData from '../data/images.json'

export const images = (n) => {
    const imagesArray = [];

    for (let index = 0; index < n; index++) {
        const imageIndex = Math.floor(Math.random() * imagesData.length);
        imagesArray.push(imagesData[imageIndex]);
    }
    
    
    return imagesArray;

};