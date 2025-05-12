import React, { useState, useEffect } from "react";
import './index.css'; // Common Styles
import './ui-version-1.css'; // Purple-Black Theme
import './ui-version-2.css'; // Pink-White Theme
import './ui-version-3.css'; // Orange-Yellow Theme

export default function App() {
  const [height, setHeight] = useState("180cm");
  const [weight, setWeight] = useState("80kg");
  const [build, setBuild] = useState("athletic");
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [uiVersion, setUiVersion] = useState(1); 

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  useEffect(() => {
 
    const handleKeydown = (event) => {
      if (event.altKey && event.key === "q") {
        setUiVersion((prev) => (prev % 3) + 1); 
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <div className={`container ui-version-${uiVersion}`}>
      <div className="left-column">
        <img
          src={image || "/imgtshirt.jpg"}  
          alt="T-Shirt Preview"
          className="print-preview"
        />
        <div className="upload-box">
          <label htmlFor="image-upload">Drop an image here or click to upload</label>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: "none" }}
          />
        </div>
      </div>

      <div className="right-column">
        <div className="form-group">
          <label>Height</label>
          <input value={height} onChange={(e) => setHeight(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Weight</label>
          <input value={weight} onChange={(e) => setWeight(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Build</label>
          <select value={build} onChange={(e) => setBuild(e.target.value)}>
            <option value="lean">Lean</option>
            <option value="reg">Regular</option>
            <option value="athletic">Athletic</option>
            <option value="big">Big</option>
          </select>
        </div>
        <div className="form-group">
          <label>Text to Print (Max 3 Lines)</label>
          <textarea
            maxLength={180}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter up to 3 lines..."
          />
        </div>
        <button onClick={() => alert("Submitted!")}>Submit</button>
      </div>
    </div>
  );
}
