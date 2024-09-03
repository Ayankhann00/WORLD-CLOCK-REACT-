import React, { useEffect } from "react";

const SetTime = ({ setPakistanTime, setSouthKoreaTime, setUkTime,setSpainTime,setFranceTime,setUsTime,setJapanTime,
  setAustraliaTime,
  setGermanyTime,
  setCanadaTime,
  setBrazilTime }) => {
  useEffect(() => {
    const updateTime = () => {
      const optionsPK = { timeZone: "Asia/Karachi", hour: "numeric", minute: "numeric", second: "numeric" };
      const optionsSK = { timeZone: "Asia/Seoul", hour: "numeric", minute: "numeric", second: "numeric" };
      const optionsUK = { timeZone: "Europe/London", hour: "numeric", minute: "numeric", second: "numeric" };
      const optionsSP = { timeZone: "Europe/Madrid", hour: "numeric", minute: "numeric", second: "numeric" };
      const optionsFR = { timeZone: "Europe/Paris", hour: "numeric", minute: "numeric", second: "numeric" };
      const optionsUS = { timeZone: "America/New_York", hour: "numeric", minute: "numeric", second: "numeric" };
      const optionsJP = { timeZone: "Asia/Tokyo", hour: "numeric", minute : "numeric", second: "numeric" };
      const optionsAU = { timeZone: "Australia/Sydney", hour: "numeric", minute : "numeric", second: "numeric" };
      const optionsDE = { timeZone: "Europe/Berlin", hour: "numeric", minute: "numeric", second: "numeric" };
      const optionsCA = { timeZone: "America/Toronto", hour: "numeric", minute: "numeric", second: "numeric" };
      const optionsBR = { timeZone: "America/Sao_Paulo", hour: "numeric",minute:"numeric", second: "numeric" };
      
      const timePK = new Date().toLocaleTimeString("en-US", optionsPK);
      const timeSK = new Date().toLocaleTimeString("en-US", optionsSK);
      const timeUK = new Date().toLocaleTimeString("en-US", optionsUK);
      const timeSP = new Date().toLocaleTimeString("en-US", optionsSP);
      const timeFR = new Date().toLocaleTimeString("en-US", optionsFR);
      const timeUS = new Date().toLocaleTimeString("en-US", optionsUS);
      const timeJP = new Date().toLocaleTimeString("en-US", optionsJP);
      const timeAU = new Date().toLocaleTimeString("en-US", optionsAU);
      const timeDE = new Date().toLocaleTimeString("en-US", optionsDE);
      const timeCA = new Date().toLocaleTimeString("en-US", optionsCA);
      const timeBR = new Date().toLocaleTimeString("en-US", optionsBR);

     
      setPakistanTime(timePK);
      setSouthKoreaTime(timeSK);
      setUkTime(timeUK);
      setSpainTime(timeSP);
      setFranceTime(timeFR);
      setUsTime(timeUS);
      setJapanTime(timeJP);
      setAustraliaTime(timeAU);
      setGermanyTime(timeDE);
      setCanadaTime(timeCA);
      setBrazilTime(timeBR);
    };

    updateTime(); 
    const intervalId = setInterval(updateTime, 1000); 

    return () => clearInterval(intervalId); 
  }, [setPakistanTime, setSouthKoreaTime, setUkTime,setSpainTime,setFranceTime,setUsTime,setJapanTime, setAustraliaTime, setGermanyTime, setCanadaTime, setBrazilTime]);

  return null; 
};

export default SetTime;
