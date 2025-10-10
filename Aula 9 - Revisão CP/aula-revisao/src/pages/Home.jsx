import RepoCard from "../components/RepoCard";
import Section from "../components/Section";
import { useState, useEffect } from "react";

export default function Home() {
  
  const [repos, setRepos] = useState([]);
  const API = import.meta.env.VITE_GITHUB_API;

  useEffect(() => {
    fetch(`${API}react&per_page=5`)
    .then(res => res.json())
    .then(data => setRepos(data.items))
  }, [])

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">GitHub Repositories Explorer</h1>
      <Section titulo="Ola">

        {repos.map(repo => (
          <RepoCard
          key={repo.id}
          {...repo}
          />
        ))}

      </Section>
      <Section titulo="Ola">
        <p>oi</p>
        <p>oi</p>
        <p>oi</p>
      </Section>
      <Section titulo="Ola">
        <p>oi</p>
        <p>oi</p>
        <p>oi</p>
      </Section>
    </div>
  );
}
