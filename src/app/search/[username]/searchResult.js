import { fetchUserRepos } from '@/lib/github';
import Link from 'next/link';

export default async function SearchResult({ username }) {
  let repos = [];

  try {
    repos = await fetchUserRepos(username);
  } catch (error) {
    return (
      <div className="text-center p-10">
        <h2 className="text-2xl">Error: {error.message}</h2>
        <Link href="/search" className="text-blue-500 underline">
          Back to Search
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="mb-6 flex justify-between items-center">
        <Link href="/search" className="text-blue-500 underline">
          &larr; Back to Search
        </Link>
        <Link href={`/user/${username}`} className="text-blue-500 underline">
          View Profile Details
        </Link>
      </div>
      <h1 className="text-3xl font-bold mb-4">{username}'s Repositories</h1>
      {repos.length > 0 ? (
        <ul className="space-y-4">
          {repos.map((repo) => (
            <li key={repo.id} className="border p-4 rounded-md">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold text-blue-600 hover:underline"
              >
                {repo.name}
              </a>
              {repo.description && (
                <p className="text-gray-600">{repo.description}</p>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No repositories found for this user.</p>
      )}
    </div>
  );
}
