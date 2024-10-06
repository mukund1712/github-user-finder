import { fetchUserDetails } from '@/lib/github';
import Link from 'next/link';

export default async function UserProfile({ username }) {
  let user = null;

  try {
    user = await fetchUserDetails(username);
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
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow">
        <div className="mb-6 flex justify-between items-center">
          <Link href="/search" className="text-primary underline">
            &larr; Back to Search
          </Link>
          <Link
            href={`/search/${username}`}
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
          >
            View Repositories
          </Link>
        </div>
        <div className="flex flex-col md:flex-row items-center mb-6">
          <img
            src={user.avatar_url}
            alt={`${user.login}'s avatar`}
            className="w-32 h-32 rounded-full border-4 border-primary"
          />
          <div className="mt-6 md:mt-0 md:ml-8 text-center md:text-left">
            <h1 className="text-3xl font-bold text-secondary">
              {user.name || user.login}
            </h1>
            {user.bio && <p className="text-gray-600 mt-2">{user.bio}</p>}
            <div className="mt-4 space-y-2">
              {user.company && (
                <p className="text-gray-700">
                  <strong>Company:</strong> {user.company}
                </p>
              )}
              {user.location && (
                <p className="text-gray-700">
                  <strong>Location:</strong> {user.location}
                </p>
              )}
              {user.email && (
                <p className="text-gray-700">
                  <strong>Email:</strong> {user.email}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-around mt-8">
          <div className="text-center">
            <p className="text-xl font-semibold text-secondary">
              {user.followers}
            </p>
            <p className="text-gray-600">Followers</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-semibold text-secondary">
              {user.following}
            </p>
            <p className="text-gray-600">Following</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-semibold text-secondary">
              {user.public_repos}
            </p>
            <p className="text-gray-600">Repositories</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-white px-6 py-3 rounded-md hover:bg-cyan-600 transition"
          >
            Visit GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
}
