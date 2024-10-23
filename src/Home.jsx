import React, { useState } from 'react';
import OperationsCard from './component/OperationsCard';
import Hesapmakinesi from './img/HesapMakinesi.png';
import NotHesapla from './img/NotHesapla.png';
import DikdörtgenAlanCevreHesaplama from './img/DikdörtgenAlanCevreHesaplama.png';
import KareAlanCevreHesaplama from './img/KareAlanCevreHesaplama.png';
import DaireAlanCevreHesaplama from './img/DaireAlanCevreHesaplama.png';
import EbobEkok from './img/EbobEkok.png';
import UcgenAlanCevreHesaplama from './img/ÜçgenAlanCevreHesaplama.png';
import BirimCevirici from './img/BirimCevirici.png';
import MathModal from './component/MathModal';
import BasicCalculator from './modal/BasicCalculator';
import GradeCalculator from './modal/GradeCalculator';
import RectangleCalculator from './modal/RectangleCalculator';
import SquareCalculator from './modal/SquareCalculator';
import CircleCalculator from './modal/CircleCalculator';
import TriangleCalculator from './modal/TriangleCalculator ';
import GCDAndLCMCalculator from './modal/GCDAndLCMCalculator';
import UnitConverter from './modal/UnitConverter';
import TipsCard from './component/TipsCard';
import TermCard from './component/TermsCard';

const Home = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', body: null });

  const openModal = (title, body) => {
    setModalContent({ title, body });
    setModalOpen(true);

  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <main>
        <div id='operations' className='my-4'>
          <div className="container mx-auto my-6 text-start text-[#6c757d]">
            <h2 className="text-4xl font-bold mb-6">İşlemler</h2>
          </div>

          <div className="overflow-x-auto scrollbar-hide mx-0">
            <div className="flex justify-center">
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
                <OperationsCard
                  imageSrc={Hesapmakinesi}
                  title={"Temel Hesap Makinesi"}
                  description={'Basit matematiksel işlemler için kullanabileceğiniz bu hesap makinesi ile toplama, çıkarma, çarpma ve bölme işlemlerini kolayca yapabilirsiniz.'}
                  onClick={() => openModal("Temel Hesap Makinesi", <BasicCalculator />
                  )}
                />
                <OperationsCard
                  imageSrc={NotHesapla}
                  title={"Not Hesaplama Aracı"}
                  description={'Aldığınız notları girerek ortalamanızı hızlıca hesaplamanıza yardımcı olur.'}
                  onClick={() => openModal("Not Hesaplama Aracı", <GradeCalculator />)}
                />
                <OperationsCard
                  imageSrc={DikdörtgenAlanCevreHesaplama}
                  title={"Dikdörtgen Alan ve Çevre Hesaplama"}
                  description={'Dikdörtgenin alanını ve çevresini hızlıca hesaplayarak pratik matematiksel işlemler yapmanızı sağlar.'}
                  onClick={() => openModal("Dikdörtgen Hesaplama", <RectangleCalculator />)}
                />
                <OperationsCard
                  imageSrc={KareAlanCevreHesaplama}
                  title={"Kare Alan ve Çevre Hesaplama"}
                  description={'Kare şeklinin alanını ve çevresini kolayca hesaplayarak hızlı çözümler sunar.'}
                  onClick={() => openModal("Kare Hesaplama", <SquareCalculator />)}
                />
                <OperationsCard
                  imageSrc={DaireAlanCevreHesaplama}
                  title={"Daire Alan ve Çevre Hesaplama"}
                  description={'Dairenin alanını ve çevresini hesaplayarak dairesel şekillerle ilgili işlemlerinizi kolaylaştırır.'}
                  onClick={() => openModal("Daire Hesaplama", <CircleCalculator />)}
                />
                <OperationsCard
                  imageSrc={UcgenAlanCevreHesaplama}
                  title={"Üçgen Alan ve Çevre Hesaplama"}
                  description={'Üçgenin taban ve yükseklik değerleri ile alanını hızlıca hesaplamanızı sağlar. Matematiksel işlemlerinizi kolaylaştırır.'}
                  onClick={() => openModal("Üçgen Hesaplama", <TriangleCalculator />)}
                />
                <OperationsCard
                  imageSrc={EbobEkok}
                  title={"Ebob Ekok Hesaplama"}
                  description={'Sayıların en büyük ortak böleni (EBOB) ve en küçük ortak katı (EKOK) hesaplamalarını kolayca yapabilirsiniz.'}
                  onClick={() => openModal("Ebob Ekok Hesaplama", <GCDAndLCMCalculator />)}
                />
                <OperationsCard
                  imageSrc={BirimCevirici}
                  title={"Birim Çevirici"}
                  description={'Farklı ölçü birimlerini hızlıca çevirerek pratik hesaplamalar yapmanıza olanak tanır. Ölçümler arası geçişleri kolaylaştırır.'}
                  onClick={() => openModal("Birim Çevirici", <UnitConverter />)}
                />
              </div>
            </div>
          </div>
        </div>
        <MathModal isOpen={isModalOpen} onClose={closeModal} content={modalContent} />
        <div id='Tips' className='my-4'>
          <div className="container mx-auto my-6 text-start text-[#6c757d]">
            <h2 className="text-4xl font-bold mb-6">İpuçları</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
            <TipsCard title={"Dik Üçgenin Özellikleri"} description={"Dik üçgenin en önemli özelliği, bir açısının 90 derece olmasıdır. Pisagor teoremi ile kenar uzunlukları arasında ilişki kurabilirsiniz: a^2 + b^2 = c^2."} />
            <TipsCard title={"Oran ve Orantı"} description={"Oran, iki sayının karşılaştırılmasıdır. Orantı ise iki oran arasındaki eşitliktir. Problemleri çözmek için oranları kullanarak, bilinmeyen değerleri bulabilirsiniz."} />
            <TipsCard title={"Çarpanlar ve Katlar"} description={"Bir sayının çarpanları, o sayıyı tam bölen sayılardır. Katlar ise bir sayının 1 ile çarpım sonuçlarıdır. Bu kavramlar, sayılar arasındaki ilişkileri anlamanıza yardımcı olur."} />
            <TipsCard title={"Bölme İşlemi"} description={"Bölme işlemi, bir sayıyı (pay) başka bir sayıya (payda) bölmektir. Kalan ile birlikte yazmak, tam sayı ve kesirli sayıların anlaşılmasını kolaylaştırır."} />
            <TipsCard title={"Kesirler"} description={"Kesirler, bir bütünün parçasını temsil eder. Pay ve payda arasındaki ilişki, kesirin değerini belirler. Kesirleri toplarken ve çıkarırken ortak payda bulmak önemlidir."} />
            <TipsCard title={"Pozitif ve Negatif Sayılar"} description={"Pozitif sayılar 0'dan büyüktür, negatif sayılar ise 0'dan küçüktür. Bu iki grup arasındaki işlemler, işaret kurallarına göre yapılır."} />
            <TipsCard title={"Çarpanlara Ayırma"} description={"Polinomları çarpanlarına ayırmak, denklemleri çözmede ve daha karmaşık matematiksel işlemleri basitleştirmede önemlidir."} />
            <TipsCard title={"EBOB ve EKOK"} description={"En büyük ortak bölen (EBOB) ve en küçük ortak kat (EKOK), iki sayının bölenleri ve katları arasındaki ilişkileri belirler. Bu kavramları kullanarak kesirleri sadeleştirebilirsiniz."} />
            <TipsCard title={"İşlem Önceliği"} description={"Matematiksel işlemlerde işlem önceliği, parantezler, çarpma ve bölme, toplama ve çıkarma şeklindedir. Bu sıraya dikkat etmek doğru sonuçlar elde etmenizi sağlar."} />
            <TipsCard title={"Üslü Sayılar"} description={"Üslü sayılar, bir sayının kendisiyle çarpılma sayısını ifade eder. Örneğin, 2^3 = 2 x 2 x 2 = 8. Üslü sayılarla işlem yaparken kurallara dikkat edin."} />
            <TipsCard title={"Fonksiyonlar"} description={"Fonksiyon, bir girdi (x) ile bir çıktı (y) arasında belirli bir ilişki tanımlar. Fonksiyonları anlamak, matematiksel düşünme becerisini geliştirir."} />
            <TipsCard title={"Grafikler"} description={"Matematikte grafikler, fonksiyonların ve verilerin görselleştirilmesine yardımcı olur. Grafikleri okuyabilmek, fonksiyonların davranışlarını anlamanızı sağlar."} />
            <TipsCard title={"Yüzde Hesaplama"} description={"Yüzde, bir sayının 100'e bölünmesiyle elde edilen bir orandır. Yüzde hesaplamalarında, orantılar ve kesirler önemli rol oynar."} />
            <TipsCard title={"Denklemler"} description={"Denklem, eşitlik içindeki bilinmeyenleri belirlemek için kullanılır. Basit denklemleri çözmek, daha karmaşık matematik problemlerini anlamanıza yardımcı olur."} />
            <TipsCard title={"Veri Analizi"} description={"Verilerin analizi, ortalama, medyan ve mod gibi istatistiksel kavramların anlaşılmasını sağlar. Bu, verilerin daha iyi yorumlanmasına yardımcı olur."} />
            <TipsCard title={"Geometrik Şekiller"} description={"Geometrik şekillerin özelliklerini bilmek, alan ve çevre hesaplamaları yapabilmenizi sağlar. Dikdörtgen, kare, daire gibi şekillerin formüllerini öğrenin."} />
            <TipsCard title={"Kümeler"} description={"Kümeler, belirli bir özelliğe sahip nesneler topluluğudur. Küme teorisi, matematiksel mantık ve problemlerin çözümünde önemlidir."} />
            <TipsCard title={"Mantıksal Düşünme"} description={"Mantıksal düşünme, problem çözme becerilerini geliştirir. Matematikte mantık, çıkarım yapma ve analiz etme konusunda yardımcı olur."} />
            <TipsCard title={"Sayı Dizileri"} description={"Sayı dizileri, belirli bir kurala göre sıralanmış sayılardır. Fibonacci dizisi gibi dizileri anlamak, matematiksel ilişkileri keşfetmenize yardımcı olur."} />
            <TipsCard title={"Zihin Haritaları"} description={"Matematik kavramlarını zihin haritaları ile görselleştirmek, öğrenmeyi ve bilgiyi organize etmeyi kolaylaştırır. Zihin haritaları, ilişkileri ve bağlantıları anlamanızı sağlar."} />
            </div>
        </div>
        <div id='Terms' className='my-4'>  
        <div className="container mx-auto my-6 text-start text-[#6c757d]">
            <h2 className="text-4xl font-bold mb-6">Terimler</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
          <TermCard term={"Dik Üçgen"} definition={"Dik üçgen, bir açısının 90 derece olduğu üçgendir. Pisagor teoremi ile tanınır."} />
        <TermCard term={"Fonksiyon"} definition={"Fonksiyon, bir girdi (x) ile bir çıktı (y) arasında belirli bir ilişki tanımlar."} />
        <TermCard term={"Kesir"} definition={"Kesir, bir bütünün parçasını temsil eder; pay ve payda ile tanımlanır."} />
        <TermCard term={"Oran"} definition={"Oran, iki sayının karşılaştırılmasıdır; orantı ise iki oran arasındaki eşitliktir."} />
        <TermCard term={"Çarpan"} definition={"Çarpan, bir sayıyı tam bölen sayıdır. Örneğin, 2 ve 3, 6'nın çarpanlarıdır."} />
        <TermCard term={"Bölme"} definition={"Bölme, bir sayıyı (pay) başka bir sayıya (payda) bölme işlemidir."} />
        <TermCard term={"EBOB"} definition={"En Büyük Ortak Bölgen, iki veya daha fazla sayının ortak bölenlerinin en büyüğüdür."} />
        <TermCard term={"EKOK"} definition={"En Küçük Ortak Kat, iki veya daha fazla sayının ortak katlarının en küçüğüdür."} />
        <TermCard term={"Üslü Sayılar"} definition={"Üslü sayılar, bir sayının kendisiyle çarpılma sayısını ifade eder. Örneğin, 2^3 = 2 x 2 x 2."} />
        <TermCard term={"Veri Analizi"} definition={"Veri analizi, istatistiksel kavramların anlaşılmasını sağlar; ortalama, medyan ve mod gibi."} />
        <TermCard term={"Geometrik Şekiller"} definition={"Geometrik şekiller, belirli kurallara göre tanımlanan düzlemsel veya uzaysal nesnelerdir."} />
        <TermCard term={"Denklem"} definition={"Denklem, bir eşitlik içindeki bilinmeyenleri belirlemek için kullanılır."} />
        <TermCard term={"Diziler"} definition={"Diziler, belirli bir kurala göre sıralanmış sayı veya terimler topluluğudur."} />
        <TermCard term={"Kümeler"} definition={"Kümeler, belirli bir özelliğe sahip nesnelerin topluluğudur; küme teorisi ile tanınır."} />
        <TermCard term={"Mantıksal Düşünme"} definition={"Mantıksal düşünme, problem çözme becerilerini geliştirir; çıkarım ve analiz yapma becerisidir."} />
        <TermCard term={"Köklü Sayılar"} definition={"Köklü sayılar, bir sayının karekökü veya küp kökü gibi, belirli bir değere kadar bölünmesidir."} />
        <TermCard term={"Matematiksel Modelleme"} definition={"Gerçek hayattaki durumları matematiksel ifadelerle temsil etme işlemidir."} />
        <TermCard term={"Sayılar Teorisi"} definition={"Sayılar teorisi, tam sayılar ve bunların özelliklerini inceleyen bir matematik dalıdır."} />
        <TermCard term={"İstatistik"} definition={"İstatistik, veri toplama, analiz etme ve yorumlama bilimi olarak tanımlanır."} />
        <TermCard term={"Permütasyon"} definition={"Bir kümedeki elemanların farklı sıralamalarını inceleyen matematiksel bir kavramdır."} />
        <TermCard term={"Kombinasyon"} definition={"Bir kümeden belirli sayıda elemanın seçilmesi durumunda oluşan gruplardır."} />
            </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
