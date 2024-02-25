export default function ModalPopup({ id, header, body, footer, onClose }) {
    return (
        <div id={id || "modal"} className="modal-container">
            <div className="content-container">
                <div className="header-container">
                    <span className="close-modal-icon" onClick={onClose}>&times;</span>
                    <h2>{header ? header : "Modal Header"}</h2>
                </div>
                <div className="body-container">
                    {
                        body
                            ? body
                            : <div>
                                <p>Modal Body</p>
                            </div>
                    }
                </div>
                <div className="footer-container">
                    <h2>{footer ? footer : "Modal Footer"}</h2>
                </div>
            </div>
        </div>
    )
}