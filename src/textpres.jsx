import React, { useState } from "react";

function TextPres({ title, text, aos, className }) {
  const [showText, setShowText] = useState(false);

  return (
    <article
      data-aos={aos}
      className={className}
      onMouseEnter={() => setShowText(true)}
      onMouseLeave={() => setShowText(false)}
    >
      {!showText ? (
        <div className="title">{title}</div>
      ) : (
        <div className="text">{text}</div>
      )}
    </article>
  );
}

export default TextPres;