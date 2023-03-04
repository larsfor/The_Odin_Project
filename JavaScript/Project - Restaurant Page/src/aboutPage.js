import Icon from "./restaurant-small.jpg";

const aboutPage = () => {
    // 'Hi! This is the about page.'
    const about = document.createElement('div');
    const aboutImg = new Image;
    // const imageStyle = `
    //     display: block;
    //     margin-left: auto;
    //     margin-right: auto;
    // `;
    // img.style.cssText = imageStyle;
    aboutImg.classList.add("centered");
    aboutImg.src = Icon;

    const aboutText = document.createElement("p");
    aboutText.innerHTML = `
    Enjoy breakfast in the clouds, lunch in the sky or dinner beneath the stars and fall 
    under the spell of being perched so high up that you get the feeling Paris is all yours. 
    Chic & elegant dresscode requested (no shorts or sportswear). Strict doors policy on this requirement
    `;
    
    aboutText.classList.add("pageText");

    about.appendChild(aboutImg);
    about.appendChild(aboutText);

    return about;
}

export default aboutPage;