import React from 'react';

const ViewImagePage = async () => {
  const res = await fetch('http://127.0.0.1:5000/get_gambar');
  
  if (!res.ok) {
    return (
      <div>
        <h1>Uploaded Image</h1>
        <p>No image available</p>
      </div>
    );
  }

  const buffer = await res.arrayBuffer();
  const base64 = Buffer.from(buffer).toString('base64');
  const imageUrl = `data:image/jpeg;base64,${base64}`;

  return (
    <div>
      <h1>Uploaded Image</h1>
      <img src={imageUrl} alt="Uploaded Image" />
    </div>
  );
};

export default ViewImagePage;
