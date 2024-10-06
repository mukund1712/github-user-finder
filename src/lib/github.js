export async function searchGitHubUsers(query) {
  const response = await fetch(
    `https://api.github.com/search/users?q=${encodeURIComponent(query)}`
  );
  if (!response.ok) {
    throw new Error('Error fetching users');
  }
  const data = await response.json();
  return data.items;
}

export async function fetchUserDetails(username) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  if (!response.ok) {
    throw new Error('Error fetching user details');
  }
  return await response.json();
}

export async function fetchUserRepos(username) {
  const response = await fetch(`https://api.github.com/users/${username}/repos`);
  if (!response.ok) {
    throw new Error('Error fetching repositories');
  }
  return await response.json();
}
