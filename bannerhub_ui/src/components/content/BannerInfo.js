import "./BannerInfo.css";
import Delfi from "../../Assets/i_delfi.svg";
import Google from "../../Assets/i_google.svg";
import Inbox from "../../Assets/i_inbox.svg"
import Jauns from "../../Assets/i_jauns.svg"
import Tvnet from "../../Assets/i_tvnet.svg"
import Trash from "../../Assets/i_trash.svg";

export default function BannerInfo() {

    return (
        <div className="banner__container">
            <p className="title">SwedBank_internetbanka_300x250_lv</p>
            <div className="vertical__line"></div>
            <p className="dimensions">300x250</p>
            <div className="vertical__line"></div>
            <p className="weight">154kb</p>
            <div className="vertical__line"></div>
            <img src={Google} className="banner__logo" height="17px"/>
            <div className="vertical__line"></div>
            <img src={Trash} className="trash" />
        </div>
    );
}