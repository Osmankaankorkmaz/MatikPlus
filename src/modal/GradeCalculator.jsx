import React, { useState } from 'react';

const GradeCalculator = () => {
  const [midterm, setMidterm] = useState(''); // Vize notu
  const [final, setFinal] = useState(''); // Final notu
  const [resit, setResit] = useState(''); // Büt notu
  const [result, setResult] = useState(''); // Sonuç
  const [error, setError] = useState(''); // Hata mesajı

  const handleCalculate = () => {
    const midtermScore = parseFloat(midterm);
    const finalScore = parseFloat(final);
    const resitScore = parseFloat(resit);

    // Geçerlilik kontrolleri
    if (isNaN(midtermScore) || isNaN(finalScore) || isNaN(resitScore)) {
      setError('Lütfen tüm alanları doldurun.');
      return;
    }

    // Not aralığı kontrolü
    if (
      midtermScore < 0 || midtermScore > 100 ||
      finalScore < 0 || finalScore > 100 ||
      (resitScore < 0 || resitScore > 100)
    ) {
      setError('Notlar 0 ile 100 arasında olmalıdır.');
      return;
    } else {
      setError(''); // Hata mesajını sıfırla
    }

    // Büt notu 0 ise dikkate alınmaz
    if (resitScore === 0) {
      // Eğer Büt notu 0 ise Vize ve Final ile hesapla
      if (finalScore < 45) {
        setResult('Başarısız: Final notu 45\'ten düşük olamaz.');
      } else if (midtermScore >= 50) {
        // Vize ve Final ile toplam puanı hesapla
        const average = (midtermScore * 0.4) + (finalScore * 0.6);
        setResult(`Başarılı: Geçtiniz! Toplam Puan: ${average.toFixed(2)}`);
      } else {
        setResult('Başarısız: Vize notunuz 50\'den düşük.');
      }
    } else {
      // Eğer Büt notu 0 değilse Vize ve Büt ile hesapla
      let average;
      if (midtermScore < 50) {
        if (resitScore >= 50) {
          // Vize notu ile Büt notunu kullanarak hesapla
          average = (midtermScore * 0.4) + (resitScore * 0.6);
          setResult(`Başarılı: Büt notunuzla geçtiniz! Toplam Puan: ${average.toFixed(2)}`);
        } else {
          setResult('Başarısız: Büt notu 50\'den düşük.');
        }
      } else {
        // Vize notu yeterli ise Final veya Büt ile hesapla
        average = (midtermScore * 0.4) + (resitScore * 0.6);
        setResult(`Başarılı: Geçtiniz! Toplam Puan: ${average.toFixed(2)}`);
      }
    }
  };

  const validateInput = (value) => {
    // Değeri kontrol et
    const numValue = parseFloat(value);
    if (numValue < 0 || numValue > 100) {
      setError('Not 0 ile 100 arasında olmalıdır.');
      return '';
    } else {
      setError('');
      return value;
    }
  };

  return (
    <div className="flex items-center justify-center bg-[#6c757d]">
      <div className="bg-[#6c757d] rounded-lg p-6 w-full max-w-sm">
        <h1 className="text-2xl text-white font-semibold mb-4">Not Hesaplama</h1>
        <div className="mb-4">
          <input
            type="number"
            value={midterm}
            onChange={(e) => setMidterm(validateInput(e.target.value))}
            className="border border-gray-300 rounded-lg p-2 w-full"
            placeholder="Vize Notu (0-100)"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="number"
            value={final}
            onChange={(e) => setFinal(validateInput(e.target.value))}
            className="border border-gray-300 rounded-lg p-2 w-full"
            placeholder="Final Notu (0-100)"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="number"
            value={resit}
            onChange={(e) => setResit(validateInput(e.target.value))}
            className="border border-gray-300 rounded-lg p-2 w-full"
            placeholder="Büt Notu (0-100, 0 ise sayılmaz)"
          />
        </div>
        {error && (
          <div className="text-red-500 mb-4">{error}</div>
        )}
        <button
          onClick={handleCalculate}
          className="bg-black text-white rounded-lg h-12 w-full hover:bg-white hover:text-black transition duration-200 mb-4"
        >
          Hesapla
        </button>
        {result && (
          <div className="text-white text-lg font-semibold mt-4">
            {result}
          </div>
        )}
      </div>
    </div>
  );
};

export default GradeCalculator;
