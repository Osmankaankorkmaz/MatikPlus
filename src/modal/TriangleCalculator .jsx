import React, { useState } from 'react';

const TriangleCalculator = () => {
  const [taban, setTaban] = useState(''); // Üçgenin tabanı
  const [yukseklik, setYukseklik] = useState(''); // Üçgenin yüksekliği
  const [kenarA, setKenarA] = useState(''); // Üçgenin birinci kenarı
  const [kenarB, setKenarB] = useState(''); // Üçgenin ikinci kenarı
  const [kenarC, setKenarC] = useState(''); // Üçgenin üçüncü kenarı
  const [alan, setAlan] = useState(''); // Üçgenin alanı
  const [cevre, setCevre] = useState(''); // Üçgenin çevresi

  // Input alanlarına sadece sayı girişine izin veren fonksiyon
  const handleNumberInput = (setter) => (e) => {
    const value = e.target.value.replace(/[^0-9]/g, ''); // Sadece rakamlara izin verir
    setter(value);
  };

  // Üçgenin alanını hesaplama fonksiyonu
  const handleCalculateArea = () => {
    if (!isNaN(taban) && !isNaN(yukseklik) && taban !== '' && yukseklik !== '') {
      const alanSonuc = (parseFloat(taban) * parseFloat(yukseklik)) / 2; // Alan: 1/2 * taban * yükseklik
      setAlan(alanSonuc.toFixed(2)); // Sonucu iki ondalık basamakla göster
    } else {
      setAlan('Hata');
    }
  };

  // Üçgenin çevresini hesaplama fonksiyonu
  const handleCalculatePerimeter = () => {
    if (!isNaN(kenarA) && !isNaN(kenarB) && !isNaN(kenarC) && 
        kenarA !== '' && kenarB !== '' && kenarC !== '') {
      const cevreSonuc = parseFloat(kenarA) + parseFloat(kenarB) + parseFloat(kenarC); // Çevre: a + b + c
      setCevre(cevreSonuc.toFixed(2)); // Sonucu iki ondalık basamakla göster
    } else {
      setCevre('Hata');
    }
  };

  // Temizleme fonksiyonu
  const handleClear = () => {
    setTaban('');
    setYukseklik('');
    setKenarA('');
    setKenarB('');
    setKenarC('');
    setAlan('');
    setCevre('');
  };

  // Butonların devre dışı olup olmayacağını kontrol eden değişkenler
  const isAreaDisabled = taban === '' || yukseklik === '';
  const isPerimeterDisabled = kenarA === '' || kenarB === '' || kenarC === '';

  return (
    <div className="flex items-center justify-center bg-[#6c757d]">
      <div className="bg-[#6c757d] rounded-lg p-6 w-full max-w-sm">
        <div className="mb-4">
          {/* Taban ve Yükseklik */}
          <div className="flex flex-col items-center">
            <label className="text-white">Üçgenin Tabanı:</label>
            <input
              type="text"
              value={taban}
              onChange={handleNumberInput(setTaban)}
              className="p-2 text-black border rounded-md w-full md:w-40"
              placeholder="Sadece rakam girin"
            />
            <label className="text-white mt-4">Üçgenin Yüksekliği:</label>
            <input
              type="text"
              value={yukseklik}
              onChange={handleNumberInput(setYukseklik)}
              className="p-2 text-black border rounded-md w-full md:w-40"
              placeholder="Sadece rakam girin"
            />
          </div>
        </div>

        {/* Alan Hesaplama */}
        <div className="mb-4">
          <div className="flex justify-between">
            <button
              onClick={handleCalculateArea}
              className="bg-white text-[#6c757d] rounded-lg p-2 hover:bg-[#6c757d] hover:text-white"
              disabled={isAreaDisabled} // Değer girilmediyse buton devre dışı
            >
              Alanı Hesapla
            </button>
            <div className="text-white font-semibold">Alan: {alan}</div>
          </div>

          <hr className="my-4 border-white" />
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

export default TriangleCalculator;
