import React, { useEffect, useState } from 'react';
import img_nature_wide from './images/img_nature_wide.jpg';
import img_snow_wide from './images/img_snow_wide.jpg';
import img_mountains_wide from './images/img_mountains_wide.jpg';

class ImageItem {
    constructor(id, imageUrl, description) {
        this.id = id;
        this.imageUrl = imageUrl;
        this.description = description;
    }
}

const createImageItems = () => {
    return [
        new ImageItem(1, img_nature_wide, 'Landscape with trees.'),
        new ImageItem(2, img_snow_wide, 'Landscape with snowy mountains.'),
        new ImageItem(3, img_mountains_wide, 'River with mountain.'),
    ];
};

const ImageComponent = ({ imageItem }) => {
    return (
        <>
            <img src={imageItem.imageUrl} alt={imageItem.description} />
            <p>{imageItem.description}</p>
        </>
    );
};

const Carousel = () => {
    const imageItems = createImageItems();
    const imagesLength = imageItems.length;
    const [index, setIndex] = useState(0);
    const [timer, setTimer] = useState();

    const handleLeftClick = () => {
        setIndex((prevIndex) => {
            if (prevIndex === 0) {
                return imagesLength - 1;
            } else {
                return prevIndex - 1;
            }
        });
    };
    const handleRightClick = () => {
        setIndex((prevIndex) => {
            if (prevIndex === imagesLength - 1) {
                return 0;
            } else {
                return prevIndex + 1;
            }
        });
    };

    const handleAutomatic = () => {
        if (timer) {
            clearInterval(timer);
            setTimer(null);
        } else {
            let tempTimer = setInterval(() => {
                handleRightClick();
            }, 3000);
            setTimer(tempTimer);
        }
    };

    return (
        <>
            <ImageComponent imageItem={imageItems[index]} />

            <label>
                Automatic
                <input type="checkbox" onChange={() => handleAutomatic()} />
            </label>
            <div>
                <button onClick={() => handleLeftClick()}>{'<'}</button>
                <button onClick={() => handleRightClick()}>{'>'}</button>
            </div>
        </>
    );
};

export default Carousel;
