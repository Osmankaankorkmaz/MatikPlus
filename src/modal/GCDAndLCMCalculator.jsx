import React, { useState } from 'react';

const GCDAndLCMCalculator = () => {
  const [sayi1, setSayi1] = useState('');
  const [sayi2, setSayi2] = useState('');
  const [ebob, setEbob] = useState('');
  const [ekok, setEkok] = useState('');

  // Input alanlarına sadece sayı girişine izin veren fonksiyon
  const handleNumberInput = (setter) => (e) => {
    const value = e.target.value.replace(/[^0-9]/g, ''); // Sadece rakamlara izin verir
    setter(value);
  };

  // EBOB hesaplama fonksiyonu
  const handleCalculateGCD = () => {
    if (!isNaN(sayi1) && !isNaN(sayi2) && sayi1 !== '' && sayi2 !== '') {
      const a = parseInt(sayi1);
      const b = parseInt(sayi2);
      let gcd = 1;

      for (let i = 1; i <= Math.min(a, b); i++) {
        if (a % i === 0 && b % i === 0) {
          gcd = i;
        }
      }

      setEbob(gcd);
    } else {
      setEbob('Hata');
    }
  };

  // EKOK hesaplama fonksiyonu
  const handleCalculateLCM = () => {
    if (!isNaN(sayi1) && !isNaN(sayi2) && sayi1 !== '' && sayi2 !== '') {
      const a = parseInt(sayi1);
      const b = parseInt(sayi2);
      const lcm = (a * b) / (gcd(a, b));
      setEkok(lcm);
    } else {
      setEkok('Hata');
    }
  };

  // EBOB hesaplamak için yardımcı fonksiyon
  const gcd = (a, b) => {
    return b === 0 ? a : gcd(b, a % b);
  };

  // Temizleme fonksiyonu
  const handleClear = () => {
    setSayi1('');
    setSayi2('');
    setEbob('');
    setEkok('');
  };

  // Butonların devre dışı olup olmayacağını kontrol eden değişken
  const isDisabled = sayi1 === '' || sayi2 === '';

  return (
    <div className="flex items-center justify-center bg-[#6c757d]">
      <div className="bg-[#6c757d] rounded-lg p-6 w-full max-w-sm">
        <div className="mb-4">
          <div className="flex flex-col items-center">
            <label className="text-white">Birinci Sayı:</label>
            <input
              type="text"
              value={sayi1}
              onChange={handleNumberInput(setSayi1)}
              className="p-2 text-black border rounded-md w-full md:w-40"
              placeholder="Sadece rakam girin"
            />
            <label className="text-white mt-4">İkinci Sayı:</label>
            <input
              type="text"
              value={sayi2}
              onChange={handleNumberInput(setSayi2)}
              className="p-2 text-black border rounded-md w-full md:w-40"
              placeholder="Sadece rakam girin"
            />
          </div>
        </div>

        {/* EBOB Hesaplama */}
        <div className="mb-4">
          <div className="flex justify-between">
            <button
              onClick={handleCalculateGCD}
              className="bg-white text-[#6c757d] rounded-lg p-2 hover:bg-[#6c757d] hover:text-white"
              disabled={isDisabled} // Değer girilmediyse buton devre dışı
            >
              EBOB'u Hesapla
            </button>
            <div className="text-white font-semibold">EBOB: {ebob}</div>
          </div>

          <hr className="my-4 border-white" />
        </div>

        {/* EKOK Hesaplama */}
        <div className="mb-4">
          <div className="flex justify-between">
            <button
              onClick={handleCalculateLCM}
              className="bg-white text-[#6c757d] rounded-lg p-2 hover:bg-[#6c757d] hover:text-white"
              disabled={isDisabled} // Değer girilmediyse buton devre dışı
            >
              EKOK'u Hesapla
            </button>
            <div className="text-white font-semibold">EKOK: {ekok}</div>
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

export default GCDAndLCMCalculator;
