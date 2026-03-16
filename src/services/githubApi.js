const GITHUB_API_BASE = 'https://api.github.com';

const handleResponse = async (response, errorMsg) => {
    if (!response.ok) {
        if (response.status === 404 && errorMsg.includes('User')) throw new Error('User not found');
        throw new Error(errorMsg);
    }
    return await response.json();
}

export const fetchUserProfile = async (username) => {
    const response = await fetch(`${GITHUB_API_BASE}/users/${username}`);
    return await handleResponse(response, 'Failed to fetch user profile');
}

export const fetchUserRepos = async (username, page = 1, perPage = 30) => {
    const response = await fetch(`${GITHUB_API_BASE}/users/${username}/repos?page=${page}&per_page=${perPage}&sort=updated`);
    return await handleResponse(response, 'Failed to fetch user repositories');
}

export const searchRepositories = async (query, page = 1, perPage = 30, sort = 'stars', order = 'desc') => {
    const params = new URLSearchParams({ q: query, page: page.toString(), per_page: perPage.toString(), sort, order });
    const response = await fetch(`${GITHUB_API_BASE}/search/repositories?${params.toString()}`);
    return await handleResponse(response, 'Failed to search repositories');
}

export const fetchRepoDetails = async (owner, repo) => {
    const response = await fetch(`${GITHUB_API_BASE}/repos/${owner}/${repo}`);
    return await handleResponse(response, 'Failed to fetch repository details');
}
