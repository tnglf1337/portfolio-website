import './App.css'
import Header from './components/Header.jsx'
import MenuButton from './components/MenuButton.jsx'
import { useState } from 'react'
import PersonalInformation from './components/PersonalInformation.jsx'
import TechInformation from './components/TechInformation.jsx'
import ProjektInformation from './components/ProjektInformation.jsx'
import LebenslaufInformation from './components/LebenslaufInformation.jsx'
import Documents from './components/Documents.jsx'

function App() {

  let [selectedInfo, setSelectedInfo] = useState("person")

  function renderDiv() {
    switch (selectedInfo) {
      case "person":
        return <PersonalInformation />
      case "tech":
        return <TechInformation />
      case "projekte":
        return <ProjektInformation />
      case "cv":
        return <LebenslaufInformation />
      case "d":
        return <Documents />
      default:
        return <div>Kein Inhalt ausgewählt</div>;
    }
  }

  function handleClick(selected) {
    setSelectedInfo(selected)
  }

  return (
    <>
    <div class="header-mobile">
      <Header />
      <menu class="info-pagination info-pagination-mobile">
        <MenuButton isSelected={selectedInfo === 'person'} onSelect={() => handleClick('person')}>Person</MenuButton>
        <MenuButton isSelected={selectedInfo === 'tech'} onSelect={() => handleClick('tech')}>Tech</MenuButton>
        <MenuButton isSelected={selectedInfo === 'projekte'} onSelect={() => handleClick('projekte')}>Projekte</MenuButton>
        <MenuButton isSelected={selectedInfo === 'cv'} onSelect={() => handleClick('cv')}>CV</MenuButton>
        <MenuButton isSelected={selectedInfo === 'd'} onSelect={() => handleClick('d')}>Dokumente</MenuButton>
      </menu>
    </div>

    <section id="info-section">
        {renderDiv()}
    </section>
    </>
  )
}

export default App
