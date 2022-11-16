import React from 'react';
import gitHubLogo from "../../assets/cover/GitHub-Mark-Light-120px-plus.png";
import linkedInLogo from "../../assets/cover/LI-In-Bug.png";
import twitterLogo from "../../assets/cover/Twittersocialicons-circle-white.png";

function Footer() {
  return (
    <div className="flex-row justify-center">
      <a href="https://www.github.com/JenniferByrnes" style={{width: '50px' }}><img src={gitHubLogo} alt="gitHub link" onClick="https://www.github.com/JenniferByrnes"/></a>
      <a href="https://www.linkedin.com/in/jenniferkbyrnes/" style={{width: '60px' }}><img src={linkedInLogo} alt="LinkedIn link" onClick="https://www.linkedin.com/in/jenniferkbyrnes/"/></a>
      <a href="https://twitter.com/jennkb" style={{width: '50px' }}><img src={twitterLogo} alt="Twitter link" onClick="https://twitter.com/jennkb"/></a>
    </div>
  )
}

export default Footer;