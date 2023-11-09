import "./DragAndDrop.css";
import UploadIcon from "../../Assets/i_upload.svg"

export default function DragAndDrop() {
    return (
        <div className="dragAndDrop__container">
            <img src={UploadIcon} className="dnd__icon"/>
            <p className="dnd__label">Drag and Drop files here or <a className="chooseFile">choose file</a></p>
        </div>
    );
}