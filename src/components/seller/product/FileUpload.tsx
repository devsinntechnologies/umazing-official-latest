"use client";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";

const FileUpload = () => {
  const [files, setFiles] = useState<File[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    maxSize: 50 * 1024 * 1024, // 50MB
  });

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed p-6 rounded-lg text-center cursor-pointer transition-all ${
        isDragActive ? "border-orange-500 bg-orange-50" : "border-gray-300"
      }`}
    >
      <input {...getInputProps()} />
      <div className="flex flex-col items-center">
        <Image
          src="/icons/upload.svg" // Replace with an appropriate icon
          alt="Upload Icon"
          width={80}
          height={80}
        />
        <p className="text-gray-600">
          Drop your files here or{" "}
          <span className="text-orange-500 font-semibold">browse</span>
        </p>
        <p className="text-sm text-gray-400">Maximum size: 50MB</p>
      </div>

      {/* Display uploaded files */}
      {files.length > 0 && (
        <div className="mt-4">
          <h4 className="font-semibold">Uploaded Files:</h4>
          <ul className="text-sm text-gray-700">
            {files.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
