"use client";

import React, { useState, useEffect } from 'react';

const ViewImagePage = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [prediction, setPrediction] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const res = await fetch('http://110.239.71.252:5003/get_gambar');
        if (!res.ok) {
          setImageUrl(null);
          throw new Error('Failed to fetch image');
        }
        const buffer = await res.arrayBuffer();
        const base64 = Buffer.from(buffer).toString('base64');
        setImageUrl(`data:image/jpeg;base64,${base64}`);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Unknown error');
      }
    };

    fetchImage();
  }, []);

  const handlePredict = async () => {
    try {
      const res = await fetch('http://110.239.71.252:5003/predict', { method: 'GET' });
      if (!res.ok) {
        throw new Error('Failed to predict');
      }
      const data = await res.json();
      setPrediction(data.predicted_text);
    //   console.log(data.predicted_text);
    } catch (error) {
      setPrediction('An error occurred: ' + (error instanceof Error ? error.message : 'Unknown error'));
    }
  };

  return (
    <div>
      <h1>Uploaded Image</h1>
      {error && <p>{error}</p>}
      {imageUrl ? <img src={imageUrl} alt="Uploaded Image" /> : <p>No image available</p>}
      <button onClick={handlePredict}>Predict</button>
      {prediction && <p>{prediction}</p>}
    </div>
  );
};

export default ViewImagePage;
