import "./Content.css";
import BannerInfo from "./BannerInfo";

export default function Content({ bannersData, setBannersData }) {

    const handleDelete = (id) => {
        setBannersData((prevBannersData) => prevBannersData.filter((banner) => banner.id !== id));
    };

    return (
        <div className="content__container">
            {bannersData.map((banner, index) => (
                <BannerInfo key={index} banner={banner} onDelete={handleDelete} />
            ))}
        </div>
    );
}