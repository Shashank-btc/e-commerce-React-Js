import React, { useState } from 'react';

function ExpandedInputField({value, onChange}) {
  // const [value, setValue] = useState('');

  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };

  return (
    <div >
      <textarea style={{margin : '5px', borderRadius : '5px',}}
        value={value}
        onChange={onChange}
        rows={4} // Set the number of rows to display
        cols={50} // Set the number of columns to display
        placeholder="Enter adrress here..."
      />
    </div>
  );
}

export default ExpandedInputField;
 