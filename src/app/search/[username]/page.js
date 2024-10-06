import SearchResult from './searchResult';

export default function SearchResultPage({ params }) {
  const { username } = params;
  return <SearchResult username={username} />;
}
