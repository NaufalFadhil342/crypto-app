import React from 'react';
import '../../App.css';

function Header(props) {
  return (
    <div className="header">
      <input type="text" placeholder="Bitcoin..." onChange={props.onChange} />
    </div>
  );
}

export default Header;
