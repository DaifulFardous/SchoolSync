import React, { useCallback, useState } from "react";
import { FaFileInvoice } from "react-icons/fa";
import { FaFolder } from "react-icons/fa";
import { HiOutlineUpload } from "react-icons/hi";
import {
  FaFileImage,
  FaFilePdf,
  FaFileWord,
  FaFileExcel,
  FaFileAlt,
} from "react-icons/fa";
import Dropzone from "react-dropzone";

const getFileIcon = (fileType) => {
  switch (fileType) {
    case "application/pdf":
      return <FaFilePdf className="text-red-500" />;
    case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
    case "application/msword":
      return <FaFileWord className="text-blue-500" />;
    case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
    case "application/vnd.ms-excel":
      return <FaFileExcel className="text-green-500" />;
    case "image/jpeg":
    case "image/png":
    case "image/gif":
      return <FaFileImage className="text-yellow-500" />;
    default:
      return <FaFileAlt className="text-gray-500" />;
  }
};

const Upload = () => {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    console.log("Accepted Files:", acceptedFiles);
    console.log("Rejected Files:", rejectedFiles);

    const newFiles = acceptedFiles.map((file) => {
      return Object.assign(file, {
        preview: URL.createObjectURL(file),
      });
    });
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  }, []);

  return (
    <div className="flex flex-col items-center gap-10 w-full">
      <h3 className="font-bold">File Submission</h3>
      <div className="flex-1 w-full flex flex-col gap-10 items-center border bg-white px-2 py-10 rounded">
        <p className="text-gray-400 text-sm font-[400]">
          Maximum file size: 1MB, Maximum number of files: 10
        </p>
        <div className="text-[50px] text-blue-400 flex gap-5">
          <FaFileInvoice className="border p-2 rounded border-gray-300" />
          <FaFolder className="border p-2 rounded border-gray-300" />
        </div>
        <Dropzone
          onDrop={onDrop}
          multiple={true}
          maxFiles={10}
          accept=".pdf, .doc, .docx, .xls, .xlsx, .jpg, .jpeg, .png, .gif"
        >
          {({ getRootProps, getInputProps }) => (
            <div
              {...getRootProps()}
              className="text-[70px] text-gray-600 flex flex-col gap-5 items-center border rounded-lg w-[70%] p-5 bg-[#F9F5F5] cursor-pointer"
            >
              <input {...getInputProps()} />
              <HiOutlineUpload />
              <p className="text-gray-400 text-sm font-[400]">
                You can drag and drop files here to add them.
              </p>
              <p className="text-gray-400 text-sm font-[400]">
                Or click to select files
              </p>
            </div>
          )}
        </Dropzone>
        {files.length > 0 && (
          <div className="w-full flex gap-10 h-[100px]">
            {files.map((file, index) => (
              <div
                key={index}
                className="text-gray-600 flex flex-col items-center gap-2 w-[100px] border p-3 rounded overflow-clip"
              >
                <div>{getFileIcon(file.type)}</div>
                <div className="">{file.name}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Upload;
