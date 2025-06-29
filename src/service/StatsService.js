export class StatsService {

    async getLeetCodeUserData(username) {
        const res = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
        if (!res.ok) {
            throw new Error('Fehler beim Laden der Daten');
        }
        return await res.json();
    }

    async getCodeforcesUserData(username) {
        const res = await fetch(`https://codeforces.com/api/user.info?handles=${username}`);
        const data = await res.json();
        if (!res.ok) {
            throw new Error('Fehler beim Laden der Daten');
        }

        return await data.result[0];
    }
}