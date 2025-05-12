import React, { useRef } from 'react';

export default function TShirtImage({ image, setFormData }) {
  const inputRef = useRef();

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col w-full md:w-1/3 items-center">
      <div className="border p-2 mb-4 w-full h-72 flex items-center justify-center overflow-hidden bg-gray-100" onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>
        {image ? <img src={image} className="h-full object-contain" /> : 'Drop an image here or upload'}
      </div>
      <input type="file" accept="image/*" ref={inputRef} onChange={handleFile} className="mb-4" />
      {image && <img src={image} alt="Small preview" className="h-20 object-contain" />}
    </div>
  );
}

