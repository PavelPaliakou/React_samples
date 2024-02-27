import "./styles.css";

export default function UserCard({ user }) {
    const { avatar_url, name, login, html_url, created_at, public_repos, followers, following } = user;

    const createdDate = new Date(created_at);

    return (
        <div className="profile-data-container">
            <img
                className="profile-avatar"
                src={avatar_url}
                alt={`${name || login} avatar`} />
            <h2><a href={html_url}>{name || login}</a></h2>
            <p>
                User joined on{" "}
                {`${createdDate.getDate()} 
                ${createdDate.toLocaleString("en-us", { month: "short" })} 
                ${createdDate.getFullYear()}`}
            </p>
            <p>Public repos: {public_repos}</p>
            <p>Followers: {followers}</p>
            <p>Following: {following}</p>
        </div>
    )
}