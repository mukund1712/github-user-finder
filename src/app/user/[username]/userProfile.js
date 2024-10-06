import { fetchUserDetails } from '@/lib/github';
import Link from 'next/link';

export default async function UserProfile({ username }) {
  let user = null;

  try {
    user = await fetchUserDetails(username);
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
      <div className="mb-6">
        <Link href="/search" className="text-blue-500 underline">
          &larr; Back to Search
        </Link>
      </div>
      <div className="flex items-center mb-6">
        <img
          src={user.avatar_url}
          alt={`${user.login}'s avatar`}
          className="w-24 h-24 rounded-full mr-4"
        />
        <div>
          <h1 className="text-3xl font-bold">{user.name || user.login}</h1>
          {user.bio && <p className="text-gray-600">{user.bio}</p>}
          {user.company && <p className="text-gray-700">Company: {user.company}</p>}
          {user.location && <p className="text-gray-700">Location: {user.location}</p>}
          {user.email && <p className="text-gray-700">Email: {user.email}</p>}
          <p className="text-gray-700">
            Followers: {user.followers} | Following: {user.following}
          </p>
          <p className="text-gray-700">Public Repositories: {user.public_repos}</p>
          <p className="text-gray-700">
            Joined: {new Date(user.created_at).toLocaleDateString()}
          </p>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View GitHub Profile
          </a>
        </div>
      </div>
      <Link href={`/search/${username}`} className="text-blue-500 underline">
        View Repositories
      </Link>
    </div>
  );
}
