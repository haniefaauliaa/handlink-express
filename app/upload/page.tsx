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
              const response = await fetch('http://127.0.0.1:5000/prepare', { method: 'GET' });
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
        const response = await fetch('http://127.0.0.1:5000/post_gambar', {
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
    <main className="relative overflow-hidden bg-white">
        <div className="container mx-auto flex min-h-[calc(100vh-92px)] flex-col gap-6 p-6 md:gap-24 md:py-24 lg:gap-24">
            <div className="flex justify-center">
                <div className="flex max-w-screen-md flex-col items-center gap-6 bg-slate-600 rounded-md">
                    <h1 className='text-white sm:text-2xl md:text-3xl'>Upload Image</h1>
                    <div className="col-span-full">
                            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                <div className="text-center">
                                    <svg className="mx-auto h-12 w-12 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
                                    </svg>
                                        <div className="mt-4 flex text-sm leading-6 text-white">
                                            <form onSubmit={handleSubmit} className='text-white items-center'>
                                                <input type="file" onChange={handleFileChange} />
                                                    <button type="submit">
                                                        <span className="pl-1">Upload a file</span>
                                                    </button>   
                                            </form>
                                        </div>
                                    <p className="text-xs leading-5 text-white">PNG, JPG, GIF up to 10MB</p>
                                    {message && <p className='text-white pl-1'>{message}</p>}
                                </div>
                                </div>
                            </div>
                </div>
            </div>
        </div>
    </main>
    );

};

export default Page;
