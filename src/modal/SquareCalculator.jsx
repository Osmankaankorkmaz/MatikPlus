import React, { useState } from 'react';

const SquareCalculator = () => {
  const [kenarUzunlugu, setKenarUzunlugu] = useState('');
  const [alan, setAlan] = useState('');
  const [cevre, setCevre] = useState('');

  // Kenar uzunluğu inputuna sadece sayı girişine izin veren fonksiyon
  const handleNumberInput = (setter) => (e) => {
    const value = e.target.value.replace(/[^0-9]/g, ''); // Sadece rakamlara izin verir
    setter(value);
  };

  // Karenin alanını hesaplama fonksiyonu
  const handleCalculateArea = () => {
    if (!isNaN(kenarUzunlugu) && kenarUzunlugu !== '') {
      const alanSonuc = parseFloat(kenarUzunlugu) ** 2; // Kenarın karesi
      setAlan(alanSonuc);
    } else {
      setAlan('Hata');
    }
  };

  // Karenin çevresini hesaplama fonksiyonu
  const handleCalculatePerimeter = () => {
    if (!isNaN(kenarUzunlugu) && kenarUzunlugu !== '') {
      const cevreSonuc = 4 * parseFloat(kenarUzunlugu); // 4 * kenar uzunluğu
      setCevre(cevreSonuc);
    } else {
      setCevre('Hata');
    }
  };

  // Temizleme fonksiyonu
  const handleClear = () => {
    setKenarUzunlugu('');
    setAlan('');
    setCevre('');
  };

  // Butonların devre dışı olup olmayacağını kontrol eden değişken
  const isDisabled = kenarUzunlugu === '';

  return (
    <div className="flex items-center justify-center bg-[#6c757d]">
      <div className="bg-[#6c757d] rounded-lg p-6 w-full max-w-sm">
        <div className="mb-4">
          <div className="flex flex-col items-center">
            {/* Kenar Uzunluğu */}
            <label className="text-white">Kenar Uzunluğu:</label>
            <input
              type="text"
              value={kenarUzunlugu}
              onChange={handleNumberInput(setKenarUzunlugu)}
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

export default SquareCalculator;
