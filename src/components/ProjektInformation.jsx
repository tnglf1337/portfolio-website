function ProjektInformation() {
    return (
        <>
        <div class="project-container">
            <section class="this-project-container project-shadow pd-10">
                <h3>Studyhuppy &#10024; (2025)</h3>
                <div class="screen-description-container">
                    <div class="screen pd-10" >
                        <img class="img" src="../../public/studyhuppy1.png" alt="Screenshot des Studyhuppy-Projekts"></img>
                    </div>
                    <div class="project-description-container pd-10">
                        <h4><strong>Beschreibung</strong></h4>
                        <p>Ich habe dieses Projekt hauptsächlich gestartet, um die Zeit, die ich mit Lernen verbringe, nachzuverfolgen, da es nervig ist, das manuell zu tun.</p>
                        <p>Dann wollte ich Angular lernen und dachte, es wäre eine gute Übung, das ursprüngliche Frontend in ein Angular-Frontend zu übersetzen. Währenddessen folgten auch immer mehr Ideen (Karteikarten, Mindmaps).</p>
                        <p>Es besteht aus mehreren SCS (Self-Contained Systems), die über HTTP und REST miteinander kommunizieren.</p>
                    </div>
                </div>
                <p><strong>Funktionalität</strong></p>
                <p>Nutzer können sich registrieren und die Dienste der App nutzen, die aus folgenden Komponenten bestehen:</p>
                <ul>
                    <li>
                        Modul-Service: Nutzer können individuelle Module ihres Studiums anlegen und die dafür aufgewendete Lernzeit erfassen. Es gibt Statistiken zum Lernverhalten.
                    </li>
                    <li>
                        Kartei-Service: Nutzer können Karteikartensätze erstellen und mithilfe eines Spaced-Repetition-Algorithmus lernen. Die geschätzte benötigte Lernzeit wird auf Basis vergangener Leistungen berechnet.
                    </li>
                    <li>
                        Mindmap-Service: Nutzer können einfache Mindmaps erstellen, die als gerichteter Baum aufgebaut sind.
                    </li>
                    <li>
                        Mail-Service: Nutzer bekommen grundlegende Mail-Benachrichtigungen und zusätzliche Benachrichtigungen erhalten, wenn sie diese abonniert haben.
                    </li>
                    <li>
                        Authentifizierungs-Service: Nutzer-Authentifizierung mit JWT. Alle Dienste erfordern eine Authentifizierung.
                    </li>
                    <li>
                        Actuator-Service: Metriken über die Dienste für Administratoren des Systems.
                    </li>
                </ul>
                <div>
                    <a class="github-link" href="https://github.com/tnglf1337/studyhuppy" target="_blank">
                        Check out on GitHub
                    </a>
                </div>
            </section>

            <section class="this-project-container project-shadow pd-10">
                <h3>ExamByte (2024)</h3>
                <div class="screen-description-container">
                    <div class="screen pd-10" >
                        <img class="img" src="../../public/exambyte1.png" alt="Screenshot des ExamByte-Projekts"></img>
                    </div>
                    <div class="project-description-container pd-10">
                        <h4><strong>Beschreibung</strong></h4>
                        <p>Das war ein Projekt, welches ich im Rahmen meines Studiums im Modul „Professionelle Softwareentwicklung II“ erstellen musste.</p>
                    </div>
                </div>
                <p><strong>Funktionalität</strong></p>
                <p>Die Anwendung automatisiert den Zulassungsprozess für Studierende zu Prüfungen in einem bestimmten Studienmodul durch die Auswertung erforderlicher Tests.</p>
                <p>Tests werden von Modulverantwortlichen erstellt und bestehen aus sowohl automatisch bewerteten Fragen als auch Fragen, die für jede Abgabe manuell von Prüfern bewertet werden müssen.</p>
            </section>

            <section class="this-project-container project-shadow pd-10">
                <h3>WoWDungeonTracker (2024)</h3>
                <div class="screen-description-container">
                    <div class="screen pd-10" >
                        <img class="img" src="../../public/wowdt1.png" alt="WoWDungeonTracker project screenshot"></img>
                    </div>
                    <div class="project-description-container pd-10">
                        <h4><strong>Beschreibung</strong></h4>
                        <p>Das ist im Grunde eine Spring-Boot-Version meines MythicPlusDBMS-Projekts.</p>
                    </div>
                </div>
                <p><strong>Funktionalität</strong></p>
                <p>Es handelt sich um eine einfache Web-Ui, mit der man einen Eintrag in einer Datenbank speichern kann – inklusive einfacher Statistiken wie „durchschnittliche Item-Drop-Rate“ usw.</p>
            </section>

            <section class="this-project-container project-shadow pd-10">
                <h3>MythicPlusDBMS (2023)</h3>
                <div class="screen-description-container">
                    <div class="screen pd-10">
                        <img class="no-img" alt="<Kein Screenshot verfügbar>"></img>
                    </div>
                    <div class="project-description-container pd-10">
                        <h4><strong>Beschreibung</strong></h4>
                        <p>Damals spielte ich World of Warcraft gespielt und ich habe mich immer gefragt, wie meine Dungeon-Statistiken aussehen (man kann "Dungeons" spielen, bei denen man bestimmte Items zufällig erhält).</p>
                        <p>Also habe ich diese App erstellt, um schnell ein Ereignis zu speichern, wenn ich einen Dungeon abgeschlossen hatte.</p>
                    </div>
                </div>
                <p><strong>Funktionalität</strong></p>
                <p>Es handelt sich um eine Java-Swing-Anwendung, in der man einen Eintrag in der Datenbank speichern kann, einschließlich einfacher Statistiken wie „durchschnittliche Item-Drop-Rate“ usw. Und ja, ich habe SQL-Injection verwendet lol.</p>
            </section>

            <section class="this-project-container project-shadow pd-10">
                <h3>Mathtrainer (2023)</h3>
                <div class="screen-description-container">
                    <div class="screen pd-10" >
                        <img class="img" src="../../public/mathtrainer1.png" alt="Screenshot des Mathtrainer-Projekts"></img>
                    </div>
                    <div class="project-description-container pd-10">
                        <h4><strong>Beschreibung</strong></h4>
                        <p>Dies war die erste Anwendung, an der ich nach dem Modul „Programmierung“ gearbeitet habe.</p>
                        <p>Es ist eine Desktop-Anwendung, die mit Java Swing entwickelt wurde, bei der der Nutzer Kopfrechnen trainieren kann.</p>
                    </div>
                </div>
                <p><strong>Funktionalität</strong></p>
                <p>Nutzer können einen Spielmodus wie „Addition“ oder „Subtraktion“ sowie einen Schwierigkeitsgrad auswählen, wobei die Aufgaben anspruchsvoller werden.</p>
                <p>Beim Start eines Spiels läuft ein Timer rückwärts, und jede richtige Lösung erhöht die aktuelle Punktzahl. Nach dem Spiel wird der Score angezeigt.</p>
            </section>
        </div>
        </>
    )
}

export default ProjektInformation