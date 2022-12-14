class Github {
	constructor() {
		this.client_id = 'd9308aacf8b204d361fd';
		this.client_secret = '84969aeef73956f4ec9e8716d1840532802bb81b';
		this.repos_count = 5;
		this.repos_sort = 'created: asc';
	}

	async getUser(user) {
		const profileResponse = await fetch(
			`https://api.github.com/users/${user}?per_page=${this.repos_count}client_id=${this.client_id}&client_secret=${this.client_secret}`
		);

		const reposResponse = await fetch(
			`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
		);

		const profile = await profileResponse.json();
		const repos = await reposResponse.json();

		return {
			profile,
			repos,
		};
	}
}
