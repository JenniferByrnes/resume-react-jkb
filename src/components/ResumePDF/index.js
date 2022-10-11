import React from 'react';
import byrnesResume from "../../assets/cover/Byrnesresume.pdf";

export default function Resume() {
    return (
      <div>
        <h1>Resume</h1>
        <object width="100%" height="800" data={byrnesResume} type="application/pdf" />
                  
      </div>
  
    );
  }