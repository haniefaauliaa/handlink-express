"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [message, setMessage] = useState<string>('');
    const router = useRouter();


    useEffect(() => {
        const prepareServer = async () => {
            try {
              const response = await fetch('http://110.239.71.252:5003/prepare', { method: 'GET' });
              if (!response.ok) {
                throw new Error('Failed to prepare server');
              }
            } catch (error) {
              setMessage('An error occurred while preparing the server: ' + (error instanceof Error ? error.message : 'Unknown error'));
            }
        };
     prepareServer();
     }, []);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
        setSelectedFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!selectedFile) {
        setMessage('Please select a file first.');
        return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
        const response = await fetch('http://110.239.71.252:5003/post_gambar', {
                method: 'POST',
                body: formData,
            });

                if (response.ok) {
                    setMessage('File uploaded successfully!');
                    router.push('/result');
                } else {
                    const errorData = await response.json();
                    setMessage('File upload failed.' + errorData.message || response.statusText);
                }
            }
        catch (error) {
            setMessage('An error occurred: ' + (error instanceof Error ? error.message : 'Unknown error'));
            }
    };

  return (
    <div>
        <h1>Upload Image</h1>
        <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleFileChange} />
            <button type="submit">Upload</button>
        </form>
        {message && <p>{message}</p>}
    </div>
    );

};

export default Page;
