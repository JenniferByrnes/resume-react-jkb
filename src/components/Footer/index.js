import React from 'react';
import gitHubLogo from "../../assets/cover/GitHub-Mark-Light-120px-plus.png";
import linkedInLogo from "../../assets/cover/LI-In-Bug.png";
import twitterLogo from "../../assets/cover/Twittersocialicons-circle-white.png";


function Footer() {
  return (
    <div id="footer" className="my-5 background-footer flex-row justify-center">
      <img src={gitHubLogo} className="my-2" style={{width: "10%" }} alt="gitHub link" />
      <img src={linkedInLogo} className="my-2 mx-2" style={{width: "10%"}} alt="LinkedIn link" />
      <img src={twitterLogo} className="my-2 mx-2" style={{width: "10%"}} alt="Twitter link" />
    </div>
  )
}

export default Footer;