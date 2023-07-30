import React, { useState } from "react";
import axios from "axios";

const CircleResource = () => {
  const [resourceType, setResourceType] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [resourceName, setResourceName] = useState("");
  const [description, setDescription] = useState("");

  const handleResourceTypeChange = (event) => {
    setResourceType(event.target.value);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleResourceNameChange = (event) => {
    setResourceName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleFileDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent form submission

    if (resourceType && selectedFile && resourceName && description) {
      try {
        // Prepare form data to send to the server
        const formData = new FormData();
        formData.append("resource_type", resourceType);
        formData.append("file", selectedFile);
        formData.append("resource_name", resourceName);
        formData.append("description", description);

        const response = await axios.post(
          "http://localhost:8800/circle_resources",
          formData,
          {
            withCredentials: true,
            headers: {
              "Content-Type": "multipart/form-data", // Important for sending files in the form data
            },
          }
        );

        // Handle the response from the server, e.g., show success message
        console.log("Server Response:", response.data);

        // Clear the form fields after successful submission
        setResourceType("");
        setSelectedFile(null);
        setResourceName("");
        setDescription("");
      } catch (error) {
        // Handle any errors that occurred during the request
        console.error("Error:", error);
      }
    } else {
      alert("Please fill in all the required fields to submit.");
    }
  };

  return (
    <form className="main" onSubmit={handleSubmit}>
      <div
        className="drag-drop-area"
        onDrop={handleFileDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        {selectedFile ? (
          <p>{selectedFile.name}</p>
        ) : (
          <div className="flex flex-col justify-center items-center">
            {/* <img src="../../assets/upload.png" alt="upload icon" className="w-9" /> */}
            <label className="text-gray-500">Drag and drop file</label>
          </div>
        )}
      </div>
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        className="hidden"
        onChange={handleFileChange}
        name="file"
        required
      />
      <input
        type="text"
        placeholder="Resource Name"
        value={resourceName}
        onChange={handleResourceNameChange}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={handleDescriptionChange}
        required
      />
      <select value={resourceType} onChange={handleResourceTypeChange} required>
        <option value="">Select Resource Type</option>
        <option value="react">React</option>
        <option value="javascript">JavaScript</option>
        <option value="php">PHP</option>
        <option value="blockchain">Blockchain</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CircleResource;
