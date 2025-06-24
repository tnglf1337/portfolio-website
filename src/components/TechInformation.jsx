import StarRatings from 'react-star-ratings';

function TechInformation() {
    return (
        <>

        <div id="tech-information-container">
            <div>
                <p>Mit diesen Sprachen und Frameworks habe ich bisher gearbeitet:</p>
            </div>
            <div id="tech-tables">
                <div class="tech-tables-container">
                    <h3>Languages</h3>
                    <table class="tech-table">
                        <tbody>
                            <tr>
                                <td>Java</td>
                                <td>
                                    <div class="star-wrapper">
                                        <StarRatings rating={4} starRatedColor="#fbc02d" numberOfStars={5} starDimension="24px" starSpacing="3px"/>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Python</td>
                                <td>
                                    <div class="star-wrapper">
                                        <StarRatings rating={2.5} starRatedColor="#fbc02d" numberOfStars={5} starDimension="24px" starSpacing="3px"/>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>SQL</td>
                                <td>
                                    <div class="star-wrapper">
                                        <StarRatings rating={2.5} starRatedColor="#fbc02d" numberOfStars={5} starDimension="24px" starSpacing="3px"/>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>C</td>
                                <td>
                                    <div class="star-wrapper">
                                        <StarRatings rating={2} starRatedColor="#fbc02d" numberOfStars={5} starDimension="24px" starSpacing="3px"/>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Javascript</td>
                                <td>
                                    <div class="star-wrapper">
                                        <StarRatings rating={2} starRatedColor="#fbc02d" numberOfStars={5} starDimension="24px" starSpacing="3px"/>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Typescript</td>
                                <td>
                                    <div class="star-wrapper">
                                        <StarRatings rating={1.5} starRatedColor="#fbc02d" numberOfStars={5} starDimension="24px" starSpacing="3px"/>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="tech-tables-container">
                    <h3>Frameworks</h3>
                    <table class="tech-table">
                        <tbody>
                            <tr>
                                <td>Spring Boot 3</td>
                                <td>
                                    <div class="star-wrapper">
                                        <StarRatings rating={3.8} starRatedColor="#fbc02d" numberOfStars={5} starDimension="24px" starSpacing="3px"/>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Angular 19</td>
                                <td>
                                    <div class="star-wrapper">
                                        <StarRatings rating={2.5} starRatedColor="#fbc02d" numberOfStars={5} starDimension="24px" starSpacing="3px"/>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>React 19</td>
                                <td>
                                    <div class="star-wrapper">
                                        <StarRatings rating={2} starRatedColor="#fbc02d" numberOfStars={5} starDimension="24px" starSpacing="3px"/>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Node.js</td>
                                <td>
                                    <div class="star-wrapper">
                                        <StarRatings rating={1} starRatedColor="#fbc02d" numberOfStars={5} starDimension="24px" starSpacing="3px"/>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="tech-tables-container">
                    <h3>Other</h3>
                    <table class="tech-table">
                        <tbody>
                            <tr>
                                <td>git</td>
                                <td class="star-wrapper">
                                    <div>
                                        <StarRatings rating={2.5} starRatedColor="#fbc02d" numberOfStars={5} starDimension="24px" starSpacing="3px"/>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Docker</td>
                                <td class="star-wrapper">
                                    <div>
                                        <StarRatings rating={2.5} starRatedColor="#fbc02d" numberOfStars={5} starDimension="24px" starSpacing="3px"/>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Kubernetes</td>
                                <td class="star-wrapper">
                                    <div>
                                        <StarRatings rating={0.8} starRatedColor="#fbc02d" numberOfStars={5} starDimension="24px" starSpacing="3px"/>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default  TechInformation