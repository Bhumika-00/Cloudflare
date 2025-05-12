import React from 'react';

export default function TextArea({ formData, setFormData }) {
  const handleTextChange = (e) => {
    const lines = e.target.value.split('\n');
    if (lines.length <= 3) {
      setFormData((prev) => ({ ...prev, text: e.target.value }));
    }
  };

  return (
    <textarea
      rows="4"
      value={formData.text}
      onChange={handleTextChange}
      placeholder="Enter text to print on t-shirt (max 3 lines)"
      className="w-full max-w-6xl mt-6 p-4 border rounded shadow"
    ></textarea>
  );
}
