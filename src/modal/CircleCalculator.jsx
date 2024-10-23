import React, { useState } from 'react';

const CircleCalculator = () => {
  const [cap, setCap] = useState(''); // Dairenin çapı
  const [alan, setAlan] = useState(''); // Dairenin alanı
  const [cevre, setCevre] = useState(''); // Dairenin çevresi

  // Çap inputuna sadece sayı girişine izin veren fonksiyon
  const handleNumberInput = (setter) => (e) => {
    const value = e.target.value.replace(/[^0-9]/g, ''); // Sadece rakamlara izin verir
    setter(value);
  };

  // Dairenin alanını hesaplama fonksiyonu
  const handleCalculateArea = () => {
    if (!isNaN(cap) && cap !== '') {
      const radius = parseFloat(cap) / 2; // Çaptan yarıçapı bul
      const alanSonuc = Math.PI * Math.pow(radius, 2); // Alan: πr²
      setAlan(alanSonuc.toFixed(2)); // Sonucu iki ondalık basamakla göster
    } else {
      setAlan('Hata');
    }
  };

  // Dairenin çevresini hesaplama fonksiyonu
  const handleCalculatePerimeter = () => {
    if (!isNaN(cap) && cap !== '') {
      const cevreSonuc = Math.PI * parseFloat(cap); // Çevre: πd
      setCevre(cevreSonuc.toFixed(2)); // Sonucu iki ondalık basamakla göster
    } else {
      setCevre('Hata');
    }
  };

  // Temizleme fonksiyonu
  const handleClear = () => {
    setCap('');
    setAlan('');
    setCevre('');
  };

  // Butonların devre dışı olup olmayacağını kontrol eden değişken
  const isDisabled = cap === '';

  return (
    <div className="flex items-center justify-center bg-[#6c757d]">
      <div className="bg-[#6c757d] rounded-lg p-6 w-full max-w-sm">
        <div className="mb-4">
          <div className="flex flex-col items-center">
            {/* Çap */}
            <label className="text-white">Dairenin Çapı:</label>
            <input
              type="text"
              value={cap}
              onChange={handleNumberInput(setCap)}
              className="p-2 text-black border rounded-md w-full md:w-40"
              placeholder="Sadece rakam girin"
            />
          </div>
        </div>

        {/* Alan ve Çevre Hesaplama */}
        <div className="mb-4">
          <div className="flex justify-between">
            <button
              onClick={handleCalculateArea}
              className="bg-white text-[#6c757d] rounded-lg p-2 hover:bg-[#6c757d] hover:text-white"
              disabled={isDisabled} // Değer girilmediyse buton devre dışı
            >
              Alanı Hesapla
            </button>
            <div className="text-white font-semibold">Alan: {alan}</div>
          </div>

          <hr className="my-4 border-white" />

          <div className="flex justify-between">
            <button
              onClick={handleCalculatePerimeter}
              className="bg-white text-[#6c757d] rounded-lg p-2 hover:bg-[#6c757d] hover:text-white"
              disabled={isDisabled} // Değer girilmediyse buton devre dışı
            >
              Çevreyi Hesapla
            </button>
            <div className="text-white font-semibold">Çevre: {cevre}</div>
          </div>
        </div>

        {/* Temizle Butonu */}
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

export default CircleCalculator;
