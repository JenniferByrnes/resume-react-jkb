import React from 'react';
import { SocialIcon } from 'react-social-icons';

function Footer() {
  return (
    <div className="flex-row justify-center">
      <SocialIcon  url="https://www.linkedin.com/in/jenniferkbyrnes/" />
      <SocialIcon className="mx-2" url="https://github.com/JenniferByrnes" />
      <SocialIcon  url="https://twitter.com/jennkb" />
    </div>
  )
}

export default Footer;