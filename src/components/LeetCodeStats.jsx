import { useEffect, useState } from "react";
import {StatsService} from "../service/StatsService.js";
import {StatBox} from "./StatBox.jsx";
import {SiLeetcode} from "react-icons/si";

export function LeetCodeStats() {
    const lcs = new StatsService();
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        lcs.getLeetCodeUserData("tneske93")
            .then(setData)
    }, []);

    if (error) return <div>Fehler: {error}</div>;
    if (!data) return <div>Lade LeetCode-Statistiken...</div>;

    return (
        <div className="p-4 bg-gray-100 rounded">
            <ul id="stat-list">
                <a href="https://leetcode.com/u/tneske93/" target="_blank">
                    <SiLeetcode size={45} color="#FFA116" />
                </a>
                <li> <StatBox titel={'Einfach'} current={data.easySolved} total={data.totalEasy}/></li>
                <li> <StatBox titel={'Medium'} current={data.mediumSolved} total={data.totalMedium}/></li>
                <li> <StatBox titel={'Hart'} current={data.hardSolved} total={data.totalHard}/></li>
                <li> <StatBox titel={'Gelöst'} current={data.totalSolved} total={data.totalQuestions}/></li>
            </ul>
        </div>
    );
}
