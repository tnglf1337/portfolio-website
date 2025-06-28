export class LeetCodeService {

    async getUserData(username) {
        const res = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
        if (!res.ok) {
            throw new Error('Fehler beim Laden der Daten');
        }
        return await res.json();
    }
}