"use client";

import React, { useState, useEffect } from 'react';

const ViewImagePage = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [prediction, setPrediction] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
      const fetchImage = async () => {
          try {
            const res = await fetch('http://127.0.0.1:5000/get_gambar');
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
        const res = await fetch('http://127.0.0.1:5000/predict', { method: 'GET' });
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
      <main className="relative overflow-hidden bg-white">
        <div className="container mx-auto flex min-h-[calc(100vh-92px)] flex-col gap-6 p-6 md:gap-24 md:py-24 lg:gap-24">
            <div className="flex justify-center">
                <div>
                  <h1 className="rounded-2xl bg-blue-600 px-6 py-2 text-center text-xl font-bold text-white sm:text-2xl md:text-3xl">
                    Uploaded Image
                  </h1>
                  {error && <p>{error}</p>}
                  <div className="mt-4 flex text-sm leading-relaxed">
                    {imageUrl ? <img src={imageUrl} alt="Uploaded Image" /> : <p>No image available</p>}
                  </div>
                  <div className="mt-4 flex justify-center">
                    <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none 
                    active:opacity-[0.85] active:shadow-none" onClick={handlePredict}>Predict</button>
                  </div>
                  <div className="mt-2">
                    {prediction && <textarea className='border-0 shadow-sm ring-1'>{prediction}</textarea>}
                  </div>
                </div>
              </div>
            </div>
      </main>
    );
};

export default ViewImagePage;
