import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-indigo-200">
      <div className="text-center p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-5xl font-extrabold text-primary mb-6">
          GitHub User Finder
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          Discover GitHub users and explore their profiles and repositories.
        </p>
        <Link href="/search">
          <button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}
