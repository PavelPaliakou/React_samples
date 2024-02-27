import "./styles.css";

export default function Suggestions({ data, handleClick }) {
    return (
        <ul className="dropdown-list">
            {
                data && data.length
                    ? data.map((user, index) => {
                        return (
                            <li
                                className="dropdown-item"
                                key={index}
                                onClick={() => handleClick}>
                                {user}
                            </li>
                        )
                    })
                    : null
            }
        </ul>
    )
}