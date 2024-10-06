import UserProfile from './userProfile';

export default function UserProfilePage({ params }) {
  const { username } = params;
  return <UserProfile username={username} />;
}
