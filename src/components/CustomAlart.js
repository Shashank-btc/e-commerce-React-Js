import React, { useState } from 'react';

export default function CustomAlart() {
  const [showModal, setShowModal] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      alert(`Selected file: ${file.name}`);
    }
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <div>
      <button onClick={openModal}>Select File</button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <input type="file" onChange={handleFileChange} />
          </div>
        </div>
      )}
    </div>
  );
}

// export default App;
