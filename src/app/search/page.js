// app/search/page.js

import { searchGitHubUsers } from '@/lib/github';
import Link from 'next/link';

export default async function SearchPage({ searchParams }) {
  const query = searchParams?.query || '';
  let users = [];

  if (query) {
    try {
      users = await searchGitHubUsers(query);
    } catch (error) {
      return (
        <div className="text-center p-10">
          <h2 className="text-2xl text-red-500">Error: {error.message}</h2>
        </div>
      );
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-primary mb-8">
          Search GitHub Users
        </h1>
        <form method="get" className="flex items-center mb-8">
          <input
            type="text"
            name="query"
            defaultValue={query}
            placeholder="Enter username or keyword"
            className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="bg-primary text-white px-6 py-2 rounded-r-md hover:bg-indigo-700 transition"
          >
            Search
          </button>
        </form>

        {users.length > 0 && (
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {users.map((user) => (
              <li
                key={user.login}
                className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
              >
                <Link
                  href={`/user/${user.login}`}
                  className="flex items-center space-x-4"
                >
                  <img
                    src={user.avatar_url}
                    alt={`${user.login}'s avatar`}
                    className="w-16 h-16 rounded-full"
                  />
                  <span className="text-xl font-semibold text-secondary">
                    {user.login}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
