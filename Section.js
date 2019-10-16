import React from 'react';

function Section() {
  return (
    <div className="Section">
      <button></button>
      <form>
        <input type="text" defaultValue="Name"/>
      <input type="text" defaultValue="0000000000"/>
      </form>
      <span>Name: </span></br>
      <span>PhoneNumber:</span></br>
    </div>
  );
}

export default Section;