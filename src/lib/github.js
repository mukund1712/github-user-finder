// lib/github.js
export async function searchGitHubUsers(query) {
    const response = await fetch(`https://api.github.com/search/users?q=${encodeURIComponent(query)}`);
    if (!response.ok) {
      throw new Error('Error fetching users');
    }
    const data = await response.json();
    console.log(data);
    return data.items;
}

  