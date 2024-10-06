import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="container mx-auto p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to GitHub User Finder</h1>
      <p className="text-lg text-gray-600 mb-6">
        Search for GitHub users and view their profiles!
      </p>
      <Link href="/search" className="bg-blue-500 text-white px-6 py-2 rounded-md">
        Search GitHub Users
      </Link>
    </div>
  );
}
