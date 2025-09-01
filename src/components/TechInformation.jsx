import StarRatings from 'react-star-ratings';
import {LeetCodeStats} from "./LeetCodeStats.jsx";
import {CodeforcesStats} from "./CodeforcesStats.jsx";

function TechInformation() {
    return (
        <>

        <div id="tech-information-container">
            <div>
                <p>Neben meinem Studium habe ich folgende Fachliteratur gelesen, um weitere Einblicke außerhalb des Curriculums zu gewinnen:</p>
                <ul>
                    <li><em>The Cloud Computing Book – The Future of Computing Explained</em> (Douglas Comer, 2021)</li>
                    <li><em>Clean Architecture – Das Praxis-Handbuch für gutes Softwaredesign</em> (Robert C. Martin, 2018)</li>
                    <li><em>UX Fundamentals for Non-UX Professionals: User Experience Principles for Managers, Writers, Designers, and Developers</em> (Edward Stull, 2018)</li>
                    <li><em>Deep Learning mit Python und Keras – Das Praxis-Handbuch vom Entwickler der Keras-Bibliothek</em> (Francois Chollet, 2018)</li>
                </ul>
            </div>
            <div>
                <p>Mit diesen Sprachen und Frameworks habe ich bisher gearbeitet:</p>
            </div>
            <div id="tech-tables">
                <div className="tech-tables-container">
                    <h3>Languages</h3>
                    <table className="tech-table">
                        <tbody>
                            <tr>
                                <td>Java</td>
                                <td className="star-wrapper">
                                    <StarRatings rating={4} starRatedColor="#fbc02d" numberOfStars={5} starDimension="24px" starSpacing="3px"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Python</td>
                                <td className="star-wrapper">
                                    <StarRatings rating={3} starRatedColor="#fbc02d" numberOfStars={5} starDimension="24px" starSpacing="3px"/>
                                </td>
                            </tr>
                            <tr>
                                <td>C</td>
                                <td className="star-wrapper">
                                    <StarRatings rating={3} starRatedColor="#fbc02d" numberOfStars={5} starDimension="24px" starSpacing="3px"/>
                                </td>
                            </tr>
                            <tr>
                                <td>SQL</td>
                                <td className="star-wrapper">
                                    <StarRatings rating={2.5} starRatedColor="#fbc02d" numberOfStars={5} starDimension="24px" starSpacing="3px"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Javascript</td>
                                <td className="star-wrapper">
                                    <StarRatings rating={2} starRatedColor="#fbc02d" numberOfStars={5} starDimension="24px" starSpacing="3px"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Typescript</td>
                                <td className="star-wrapper">
                                    <StarRatings rating={1.5} starRatedColor="#fbc02d" numberOfStars={5} starDimension="24px" starSpacing="3px"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Swift</td>
                                <td className="star-wrapper">
                                    <StarRatings rating={1.0} starRatedColor="#fbc02d" numberOfStars={5} starDimension="24px" starSpacing="3px"/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="tech-tables-container">
                    <h3>Frameworks</h3>
                    <table className="tech-table">
                        <tbody>
                            <tr>
                                <td>Spring Boot 3</td>
                                <td className="star-wrapper">
                                    <StarRatings rating={3.8} starRatedColor="#fbc02d" numberOfStars={5} starDimension="24px" starSpacing="3px"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Angular 19</td>
                                <td className="star-wrapper">
                                    <StarRatings rating={2.5} starRatedColor="#fbc02d" numberOfStars={5} starDimension="24px" starSpacing="3px"/>
                                </td>
                            </tr>
                            <tr>
                                <td>React 19</td>
                                <td className="star-wrapper">
                                    <StarRatings rating={2} starRatedColor="#fbc02d" numberOfStars={5} starDimension="24px" starSpacing="3px"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Node.js</td>
                                <td className="star-wrapper">
                                    <StarRatings rating={1} starRatedColor="#fbc02d" numberOfStars={5} starDimension="24px" starSpacing="3px"/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="tech-tables-container">
                    <h3>Other</h3>
                    <table className="tech-table">
                        <tbody>
                            <tr>
                                <td>git</td>
                                <td className="star-wrapper">
                                    <StarRatings rating={3.5} starRatedColor="#fbc02d" numberOfStars={5} starDimension="24px" starSpacing="3px"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Docker</td>
                                <td className="star-wrapper">
                                    <StarRatings rating={2.5} starRatedColor="#fbc02d" numberOfStars={5} starDimension="24px" starSpacing="3px"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Kubernetes</td>
                                <td className="star-wrapper">
                                    <StarRatings rating={0.8} starRatedColor="#fbc02d" numberOfStars={5} starDimension="24px" starSpacing="3px"/>
                                </td>
                            </tr>
                            <tr>
                                <td><h3>Testing</h3></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>JUnit 5</td>
                                <td className="star-wrapper">
                                    <StarRatings rating={3.0} starRatedColor="#fbc02d" numberOfStars={5} starDimension="24px" starSpacing="3px"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Mockito</td>
                                <td className="star-wrapper">
                                    <StarRatings rating={2.5} starRatedColor="#fbc02d" numberOfStars={5} starDimension="24px" starSpacing="3px"/>
                                </td>
                            </tr>
                            <tr>
                                <td>ArchUnit</td>
                                <td className="star-wrapper">
                                    <StarRatings rating={2.5} starRatedColor="#fbc02d" numberOfStars={5} starDimension="24px" starSpacing="3px"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Selenium</td>
                                <td className="star-wrapper">
                                    <StarRatings rating={2.0} starRatedColor="#fbc02d" numberOfStars={5} starDimension="24px" starSpacing="3px"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Cucumber</td>
                                <td className="star-wrapper">
                                    <StarRatings rating={2.0} starRatedColor="#fbc02d" numberOfStars={5} starDimension="24px" starSpacing="3px"/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div id='cprog-stats'>
            <LeetCodeStats />
            <CodeforcesStats />
        </div>
        </>
    )
}

export default  TechInformation