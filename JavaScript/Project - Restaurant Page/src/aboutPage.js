import Icon from "./restaurant-small.jpg";

const aboutPage = () => {
    // 'Hi! This is the about page.'
    const about = document.createElement('div');

    const img = new Image;
    img.src = Icon;
    about.appendChild(img);

    return about;
}

export default aboutPage;