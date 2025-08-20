export default function FileUpload(){
    const [file, setFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState("");

     const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setUploadStatus("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

try {
      setUploadStatus("Uploading...");
      // Example API endpoint (replace with your backend)
      const response = await fetch("https://your-backend.com/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setUploadStatus("File uploaded successfully ✅");
      } else {
        setUploadStatus("File upload failed ❌");
      }
    } catch (error) {
      setUploadStatus("Error uploading file ❌");
    }
  };

    return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h3>Upload File</h3>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} style={{ marginLeft: "10px" }}>
        Upload
      </button>
      <p>{uploadStatus}</p>
    </div>
  );
}