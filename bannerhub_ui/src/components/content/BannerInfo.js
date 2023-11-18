import "./BannerInfo.css";
import Trash from "../../Assets/i_trash.svg";
import { useEffect, useState } from "react";
import axios from "axios";

export default function BannerInfo({ banner, onDelete }) {
    const [image, setImage] = useState(null);

    useEffect(() => {
        const importImage = async () => {
            try {
                const dynamicImport = await import(`../../Assets/i_${banner.spec}.svg`);
                setImage(dynamicImport.default);
                console.log(banner.spec)
            } catch (error) {
                console.error('Error loading image:', error);
            }
        };

        importImage();
    }, [banner.spec]);

    const handleDelete = async () => {
        try {

            const response = await axios.delete(`http://localhost:8080/api/v1/banner/delete/${banner.id}`);
            onDelete(banner.id);

        } catch (error) {
            console.error('Error deleting banner:', error);
        }
    };

    return (
        <div className="banner__container">
            <p className="title">{banner.name}</p>
            <div className="vertical__line"></div>
            <p className="dimensions">{banner.dimension}</p>
            <div className="vertical__line"></div>
            <p className="weight">{banner.size.replace(".0", "")}</p>
            <div className="vertical__line"></div>
            <img src={image} className="banner__logo" height="17px" alt="spec"/>
            <div className="vertical__line"></div>
            <img src={Trash} className="trash" onClick={handleDelete} />
        </div>
    );
}