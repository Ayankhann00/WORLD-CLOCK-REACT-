import React, { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
import SetTime from "./Components/SetTime";
import Footer from "./Components/Footer";

function App() {
  const [pakistanTime, setPakistanTime] = useState("");
  const [southKoreaTime, setSouthKoreaTime] = useState("");
  const [ukTime, setUkTime] = useState("");
  const [spainTime, setSpainTime] = useState("");
  const [franceTime, setFranceTime] = useState("");
  const [usTime, setUsTime] = useState("");
  const [japanTime, setJapanTime] = useState("");
  const [australiaTime, setAustraliaTime] = useState("");
  const [germanyTime, setGermanyTime] = useState("");
  const [canadaTime, setCanadaTime] = useState("");
  const [brazilTime, setBrazilTime] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleStyle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const myStyle = {
    color: isDarkMode ? "white" : "black",
    backgroundColor: isDarkMode ? "black" : "white",
  };
  return (
    <>
       <Navbar title="My WORLDCLOCK" searchBar={false} />
       <Body
            pakistanTime={pakistanTime}
            southKoreaTime={southKoreaTime}
            ukTime={ukTime}
            spainTime={spainTime}
            franceTime={franceTime}
            usTime={usTime}
            japanTime={japanTime}
            australiaTime={australiaTime}
            germanyTime={germanyTime}
            canadaTime={canadaTime}
            brazilTime={brazilTime}
            myStyle={myStyle}
            toggleStyle={toggleStyle}
            isDarkMode={isDarkMode}
          />
          <SetTime
            setPakistanTime={setPakistanTime}
            setSouthKoreaTime={setSouthKoreaTime}
            setUkTime={setUkTime}
            setSpainTime={setSpainTime}
            setFranceTime={setFranceTime}
            setUsTime={setUsTime}
            setJapanTime={setJapanTime}
            setAustraliaTime={setAustraliaTime}
            setGermanyTime={setGermanyTime}
            setCanadaTime={setCanadaTime}
            setBrazilTime={setBrazilTime}
          />
      <Footer />
    </>
  );
}

export default App;
