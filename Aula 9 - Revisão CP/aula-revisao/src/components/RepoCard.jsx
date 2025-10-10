export default function RepoCard({name, description, html_url, stargazers_count, topics=[], id}) {
    return (
        <div className="h-full border border-amber-700">
            <h2>{name}</h2>
            <p>{description}</p>
            <a href={html_url}>{html_url}</a>
            <p>Star {stargazers_count}</p>
            {topics.map(topic =>
                <p>{topic}</p>
            )}
        </div>
    )
}