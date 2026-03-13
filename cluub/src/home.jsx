import "./home.css";
import { useState } from "react";

export function Homepage() {
  const [navOpen, setNavOpen] = useState(false);

  function toggleNav(){
    setNavOpen((prev) => (!prev));
    }

  return (
    <>
      <div className="club-list">
        <div>Math Club</div>
        <div>SciOly</div>
        <div>FBLA</div>
      </div>
      <button className="test-button">open menu</button>
    </>
  );
}
