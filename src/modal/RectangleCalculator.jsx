import React, { useState } from 'react';

const RectangleCalculator = () => {
  const [uzunluk, setUzunluk] = useState('');
  const [genislik, setGenislik] = useState('');
  const [alan, setAlan] = useState('');
  const [cevre, setCevre] = useState('');

  // Uzunluk ve genişlik inputlarına sadece sayı girişine izin veren fonksiyon
  const handleNumberInput = (setter) => (e) => {
    const value = e.target.value.replace(/[^0-9]/g, ''); // Sadece rakamlara izin verir
    setter(value);
  };

  // Dikdörtgenin alanını hesaplama fonksiyonu
  const handleCalculateArea = () => {
    if (!isNaN(uzunluk) && !isNaN(genislik) && uzunluk !== '' && genislik !== '') {
      const alanSonuc = parseFloat(uzunluk) * parseFloat(genislik);
      setAlan(alanSonuc);
    } else {
      setAlan('Hata');
    }
  };

  // Dikdörtgenin çevresini hesaplama fonksiyonu
  const handleCalculatePerimeter = () => {
    if (!isNaN(uzunluk) && !isNaN(genislik) && uzunluk !== '' && genislik !== '') {
      const cevreSonuc = 2 * (parseFloat(uzunluk) + parseFloat(genislik));
      setCevre(cevreSonuc);
    } else {
      setCevre('Hata');
    }
  };

  // Temizleme fonksiyonu
  const handleClear = () => {
    setUzunluk('');
    setGenislik('');
    setAlan('');
    setCevre('');
  };

  // Butonların devre dışı olup olmayacağını kontrol eden değişken
  const isDisabled = uzunluk === '' || genislik === '';

  return (
    <div className="flex items-center justify-center bg-[#6c757d] ">
      <div className="bg-[#6c757d] rounded-lg p-6 w-full max-w-sm">
        <div className="mb-4">
          <div className="flex flex-col justify-between items-center gap-4">
            {/* Uzunluk */}
            <div className="flex flex-col items-center">
              <label className="text-white">Uzunluk:</label>
              <input
                type="text"
                value={uzunluk}
                onChange={handleNumberInput(setUzunluk)}
                className="p-2 text-black border rounded-md w-full md:w-40"
                placeholder="Sadece rakam girin"
              />
            </div>

            {/* Genişlik */}
            <div className="flex flex-col items-center">
              <label className="text-white">Genişlik:</label>
              <input
                type="text"
                value={genislik}
                onChange={handleNumberInput(setGenislik)}
                className="p-2 text-black border rounded-md w-full md:w-40"
                placeholder="Sadece rakam girin"
              />
            </div>
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

export default RectangleCalculator;
