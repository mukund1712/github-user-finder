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
          <h2 className="text-2xl">Error: {error.message}</h2>
        </div>
      );
    }
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl text-center mb-6">GitHub User Finder</h1>
      <form method="get" className="flex justify-center mb-8">
        <input
          type="text"
          name="query"
          defaultValue={query}
          placeholder="Search GitHub Users"
          className="px-4 py-2 border rounded-md w-1/2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2"
        >
          Search
        </button>
      </form>

      {users.length > 0 && (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.map((user) => (
            <li key={user.login} className="border p-4 rounded-md">
              <Link href={`/user/${user.login}`} className="flex items-center">
                <img
                  src={user.avatar_url}
                  alt={`${user.login}'s avatar`}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <span className="text-lg font-semibold">{user.login}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
