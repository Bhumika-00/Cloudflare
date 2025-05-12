import React from 'react';
import { useForm } from 'react-hook-form';

export default function FormPanel({ formData, setFormData }) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      height: formData.height,
      weight: formData.weight,
      build: formData.build,
    },
  });

  const onSubmit = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  return (
    <form onBlur={handleSubmit(onSubmit)} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md w-full">
      <label className="block mb-2 text-sm font-bold">Height (cm)</label>
      <input type="number" {...register('height')} className="w-full p-2 mb-4 border rounded" />

      <label className="block mb-2 text-sm font-bold">Weight (kg)</label>
      <input type="number" {...register('weight')} className="w-full p-2 mb-4 border rounded" />

      <label className="block mb-2 text-sm font-bold">Build</label>
      <select {...register('build')} className="w-full p-2 mb-4 border rounded">
        <option value="lean">Lean</option>
        <option value="reg">Regular</option>
        <option value="athletic">Athletic</option>
        <option value="big">Big</option>
      </select>
    </form>
  );
}
