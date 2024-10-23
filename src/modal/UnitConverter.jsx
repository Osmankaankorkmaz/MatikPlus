import React, { useState } from 'react';

const UnitConverter = () => {
  const [value, setValue] = useState('');
  const [fromUnit, setFromUnit] = useState('metre');
  const [toUnit, setToUnit] = useState('kilometre');
  const [result, setResult] = useState('');

  const units = {
    metre: 1,
    kilometre: 1000,
    santimetre: 0.01,
    inch: 0.0254,
  };

  // Birim çevirme fonksiyonu
  const handleConvert = () => {
    const fromValue = units[fromUnit];
    const toValue = units[toUnit];

    if (!isNaN(value) && value !== '') {
      const convertedValue = (parseFloat(value) * fromValue) / toValue;
      setResult(convertedValue);
    } else {
      setResult('Hata');
    }
  };

  // Temizleme fonksiyonu
  const handleClear = () => {
    setValue('');
    setFromUnit('metre');
    setToUnit('kilometre');
    setResult('');
  };

  return (
    <div className="flex items-center justify-center bg-[#6c757d]">
      <div className="bg-[#6c757d] rounded-lg p-6 w-full max-w-md">
        <div className="mb-4">
          <label className="text-white">Değer:</label>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value.replace(/[^0-9.]/g, ''))}
            className="p-2 text-black border rounded-md w-full"
            placeholder="Bir değer girin"
          />
        </div>

        <div className="mb-4">
          <label className="text-white">Hangi birimden:</label>
          <select
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
            className="p-2 text-black border rounded-md w-full"
          >
            {Object.keys(units).map((unit) => (
              <option key={unit} value={unit}>
                {unit.charAt(0).toUpperCase() + unit.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="text-white">Hangi birime:</label>
          <select
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
            className="p-2 text-black border rounded-md w-full"
          >
            {Object.keys(units).map((unit) => (
              <option key={unit} value={unit}>
                {unit.charAt(0).toUpperCase() + unit.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4 flex justify-between">
          <button
            onClick={handleConvert}
            className="bg-white text-[#6c757d] rounded-lg p-2 hover:bg-black hover:text-white w-full mr-2"
          >
            Çevir
          </button>
          <div className="text-white font-semibold">Sonuç: {result}</div>
        </div>

        <button
          className="bg-black text-white rounded-lg p-2 hover:bg-white hover:text-black w-full mt-4"
          onClick={handleClear}
        >
          Temizle
        </button>
      </div>
    </div>
  );
};

export default UnitConverter;
