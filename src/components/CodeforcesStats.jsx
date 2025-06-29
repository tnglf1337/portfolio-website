import {StatsService} from "../service/StatsService.js";
import {useEffect, useState} from "react";
import {SiLeetcode} from "react-icons/si";
import {StatBox} from "./StatBox.jsx";
import {CFStatBox} from "./CFStatBox.jsx";

export function CodeforcesStats() {
    const lcs = new StatsService();
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        lcs.getCodeforcesUserData("neske.timo93")
            .then(setData)
    }, []);

    if (error) return <div>Fehler: {error}</div>;
    if (!data) return <div>Lade LeetCode-Statistiken...</div>;

    return (
        <>
            <div className="p-4 bg-gray-100 rounded">
                <ul id="stat-list">
                    <a href="https://codeforces.com/profile/neske.timo93" target="_blank">
                        <svg role="img"  viewBox="0 0 24 24" width={50} height={50} fill='#1f8acb' xmlns="http://www.w3.org/2000/svg">
                            <title>Codeforces</title>
                            <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.673 21 0 20.328 0 19.5V9c0-.828.673-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.827 0-1.5-.672-1.5-1.5v-15c0-.828.673-1.5 1.5-1.5h3zm9 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z" />
                        </svg>
                    </a>
                    <li> <CFStatBox titel={'Rating'} rating={data.maxRating}/></li>
                </ul>
            </div>
        </>
    )
}