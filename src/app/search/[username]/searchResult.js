import { fetchUserRepos } from '@/lib/github';
import Link from 'next/link';

export default async function SearchResult({ username }) {
  let repos = [];

  try {
    repos = await fetchUserRepos(username);
  } catch (error) {
    return (
      <div className="text-center p-10">
        <h2 className="text-2xl text-red-500">Error: {error.message}</h2>
        <Link href="/search" className="text-primary underline">
          Back to Search
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 flex justify-between items-center">
          <Link href="/search" className="text-primary underline">
            &larr; Back to Search
          </Link>
          <Link
            href={`/user/${username}`}
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
          >
            View Profile Details
          </Link>
        </div>
        <h1 className="text-3xl font-bold text-secondary mb-6">
          {username}'s Repositories
        </h1>
        {repos.length > 0 ? (
          <ul className="space-y-4">
            {repos.map((repo) => (
              <li
                key={repo.id}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
              >
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-semibold text-primary hover:underline"
                >
                  {repo.name}
                </a>
                {repo.description && (
                  <p className="text-gray-600 mt-2">{repo.description}</p>
                )}
                <div className="mt-4 flex space-x-4 text-sm text-gray-500">
                  {repo.language && (
                    <span>
                      <strong>Language:</strong> {repo.language}
                    </span>
                  )}
                  <span>
                    <strong>Stars:</strong> {repo.stargazers_count}
                  </span>
                  <span>
                    <strong>Forks:</strong> {repo.forks_count}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-600">
            No repositories found for this user.
          </p>
        )}
      </div>
    </div>
  );
}
