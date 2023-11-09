import "./Configuration.css";

export default function Configuration() {
    const config = ["Google", "Inbox", "Tvnet", "Jauns", "Delfi"];

    const optionElements = config.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ));
    return (
        <div className="configuration">
            <form className="configuration__form">
                <div className="container">
                    <div className="title">
                        <h2>Configuration</h2>
                    </div>
                    <div className="config__selector">
                        <select className="selector">
                            {optionElements}
                        </select>
                    </div>
                    <div className="link__input">
                        <input type="text" placeholder="Link"></input>
                    </div>
                    <div className="image__compress">
                        <input type="checkbox"></input>
                        <label>Compress images</label>
                    </div>
                    </div>
                    <div className="sendBtn">
                        <button onClick={() => console.log("Test")}>Download</button>
                    </div>
            </form>
        </div>
    );
}