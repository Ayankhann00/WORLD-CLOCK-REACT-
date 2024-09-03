import React, { useState, useEffect } from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";
import ReactSwitch from "react-switch";

const Body = ({
  pakistanTime,
  southKoreaTime,
  ukTime,
  franceTime,
  spainTime,
  usTime,
  japanTime,
  australiaTime,
  germanyTime,
  canadaTime,
  brazilTime,
  myStyle,
  toggleStyle,
  isDarkMode,
}) => {
  const [pakistanCurrentTime, setPakistanCurrentTime] = useState(new Date());
  const [southKoreaCurrentTime, setSouthKoreaCurrentTime] = useState(new Date());
  const [ukCurrentTime, setUkCurrentTime] = useState(new Date());
  const [spainCurrentTime, setSpainCurrentTime] = useState(new Date());
  const [franceCurrentTime, setFranceCurrentTime] = useState(new Date());
  const [usCurrentTime, setUsCurrentTime] = useState(new Date());
  const [japanCurrentTime, setJapanCurrentTime] = useState(new Date());
  const [australiaCurrentTime, setAustraliaCurrentTime] = useState(new Date());
  const [germanyCurrentTime, setGermanyCurrentTime] = useState(new Date());
  const [canadaCurrentTime, setCanadaCurrentTime] = useState(new Date());
  const [brazilCurrentTime, setBrazilCurrentTime] = useState(new Date());

  useEffect(() => {
    const updateTime = () => {
      setPakistanCurrentTime(
        new Date(
          new Date().toLocaleString("en-US", { timeZone: "Asia/Karachi" })
        )
      );
      setSouthKoreaCurrentTime(
        new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Seoul" }))
      );
      setUkCurrentTime(
        new Date(
          new Date().toLocaleString("en-US", { timeZone: "Europe/London" })
        )
      );
      setSpainCurrentTime(
        new Date(
          new Date().toLocaleString("en-US", { timeZone: "Europe/Madrid" })
        )
      );
      setFranceCurrentTime(
        new Date(
          new Date().toLocaleString("en-US", { timeZone: "Europe/Paris" })
        )
      );
      setUsCurrentTime(
        new Date(
          new Date().toLocaleString("en-US", { timeZone: "America/New_York" })
        )
      );
      setJapanCurrentTime(
        new Date(
          new Date().toLocaleString("en-US", { timeZone: "Asia/Tokyo" })
        )
      );
      setAustraliaCurrentTime(
        new Date(
          new Date().toLocaleString("en-US", { timeZone: "Australia/Sydney" })
        )
      );
      setGermanyCurrentTime(
        new Date(
          new Date().toLocaleString("en-US", { timeZone: "Europe/Berlin" })
        )
      );
      setCanadaCurrentTime(
        new Date(
          new Date().toLocaleString("en-US", { timeZone: "America/Toronto" })
        )
      );
      setBrazilCurrentTime(
        new Date(
          new Date().toLocaleString("en-US", { timeZone: "America/Sao_Paulo" })
        )
      );
    };

    updateTime(); 
    const intervalId = setInterval(updateTime, 1000); 
    return () => clearInterval(intervalId); 
  }, []); 

  const clockStyle = {
    backgroundColor: isDarkMode ? "#333" : "#fff",
    borderColor: isDarkMode ? "#555" : "#ccc",
    color: isDarkMode ? "#fff" : "#000",
  };

  return (
    <>
      <div className="body">
        <h1 className="header">TIMEZONES</h1>
        <div className="container">
          <div className="jumbotron" id="box-1" style={myStyle}>
            <h3 className="display-4 my-3" id="SK" style={{ fontSize: "16px" }}>
              SOUTH KOREA
            </h3>
            <Clock
              value={southKoreaCurrentTime}
              renderNumbers={true}
              hourMarksWidth={4}
              style={clockStyle}
            />
            <p className="lead">
              <h2>{southKoreaTime}</h2>
            </p>
            <hr className="my-4" />
          </div>
          <div className="jumbotron" id="box-2" style={myStyle}>
            <h4 className="display-4 my-3" id="PK" style={{ fontSize: "16px" }}>
              PAKISTAN
            </h4>
            <Clock
              value={pakistanCurrentTime}
              renderNumbers={true}
              hourMarksWidth={4}
              style={clockStyle}
            />
            <p className="lead">
              <h2>{pakistanTime}</h2>
            </p>
            <hr className="my-4" />
          </div>
          <div className="jumbotron" id="box-3" style={myStyle}>
            <h4 className="display-4 my-3" id="UK" style={{ fontSize: "16px" }}>
              UNITED KINGDOM
            </h4>
            <Clock
              value={ukCurrentTime}
              renderNumbers={true}
              hourMarksWidth={4}
              style={clockStyle}
            />
            <p className="lead">
              <h2>{ukTime}</h2>
            </p>
            <hr className="my-4" />
          </div>
          <div className="jumbotron" id="box-4" style={myStyle}>
            <h4 className="display-4 my-3" id="SP" style={{ fontSize: "16px" }}>
              SPAIN
            </h4>
            <Clock
              value={spainCurrentTime}
              renderNumbers={true}
              hourMarksWidth={4}
              style={clockStyle}
            />
            <p className="lead">
              <h2>{spainTime}</h2>
            </p>
            <hr className="my-4" />
          </div>
          <div className="jumbotron" id="box-5" style={myStyle}>
            <h4 className="display-4 my-3" id="FR" style={{ fontSize: "16px" }}>
              FRANCE
            </h4>
            <Clock
              value={franceCurrentTime}
              renderNumbers={true}
              hourMarksWidth={4}
              style={clockStyle}
            />
            <p className="lead">
              <h2>{franceTime}</h2>
            </p>
            <hr className="my-4" />
          </div>
          <div className="jumbotron" id="box-6" style={myStyle}>
            <h4 className="display-4 my-3" id="US" style={{ fontSize: "16px" }}>
              UNITED STATES OF AMERICA
            </h4>
            <Clock
              value={usCurrentTime}
              renderNumbers={true}
              hourMarksWidth={4}
              style={clockStyle}
            />
            <p className="lead">
              <h2>{usTime}</h2>
            </p>
            <hr className="my-4" />
          </div>
          <div className="jumbotron" id="box-7" style={myStyle}>
            <h4 className="display-4 my-3" id="JP" style={{ fontSize: "16px" }}>
              JAPAN
            </h4>
            <Clock
              value={japanCurrentTime}
              renderNumbers={true}
              hourMarksWidth={4}
              style={clockStyle}
            />
            <p className="lead">
              <h2>{japanTime}</h2>
            </p>
            <hr className="my-4" />
          </div>

          <div className="jumbotron" id="box-8" style={myStyle}>
            <h4 className="display-4 my-3" id="AU" style={{ fontSize: "16px" }}>
              AUSTRALIA
            </h4>
            <Clock
            value={australiaCurrentTime}
            renderNumbers={true}
            hourMarksWidth={4}
            style={clockStyle}
            />
            <p className="lead">
              <h2>{australiaTime}</h2>
            </p>
            <hr className="my-4" />
          </div>

          <div className="jumbotron" id="box-9" style={myStyle}>
            <h4 className="display-4 my-3" id="DE" style={{ fontSize: "16px" }}>
              GERMANY
            </h4>
            <Clock
              value={germanyCurrentTime}
              renderNumbers={true}
              hourMarksWidth={4}
              style={clockStyle}
              
            />
            <p className="lead">
              <h2>{germanyTime}</h2>
            </p>
            <hr className="my-4" />
          </div>

          <div className="jumbotron" id="box-10" style={myStyle}>
            <h4 className="display-4 my-3" id="CA" style={{ fontSize: "16px" }}>
              CANADA
            </h4>
            <Clock
              value={canadaCurrentTime}
              renderNumbers={true}
              hourMarksWidth={4}
              style={clockStyle}
            />
            <p className="lead">
              <h2>{canadaTime}</h2>
            </p>
            <hr className="my-4" />
          </div>

          <div className="jumbotron" id="box-11" style={myStyle}>
            <h4 className="display-4 my-3" id="BR" style={{ fontSize: "16px" }}>
              BRAZIL
            </h4>
            <Clock
             value={brazilCurrentTime}
             renderNumbers={true}
             hourMarksWidth={4}
             style={clockStyle}
            />
            <p className="lead">
              <h2>{brazilTime}</h2>
            </p>
            <hr className="my-4" />
          </div>
        </div>

        <div className="switch">
          <label>{isDarkMode ? "Dark Mode" : "Light Mode"}</label>
          <ReactSwitch onChange={toggleStyle} checked={isDarkMode} />
        </div>
      </div>
    </>
  );
};
export default Body;

