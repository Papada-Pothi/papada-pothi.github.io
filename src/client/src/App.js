// import { useState, useEffect } from 'react';
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./assets/styles/App.css";
import "./assets/styles/fonts.css";
import "./assets/styles/input.css";
import "./assets/styles/output.css";


function App() {
  const { t, i18n: {changeLanguage, language} } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language);

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === "th" ? "en":"th";
    setCurrentLanguage(newLanguage);
    changeLanguage(newLanguage);
  };

  useEffect(() => {
    const carouselItems = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.indicator');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const closeBtn = document.getElementById('closeBtn');
    let currentIndex = 0;

    function showSlide(index) {
      carouselItems.forEach((item, idx) => {
          item.classList.remove('active');
          if (idx === index) {
              item.classList.add('active');
          }
      });

      indicators.forEach((indicator, idx) => {
          if (idx === index) {
              indicator.classList.add('bg-green-500');
              indicator.classList.remove('bg-[#C4C4C4]');
          } else {
              indicator.classList.remove('bg-green-500');
              indicator.classList.add('bg-[#C4C4C4]');
          }
      });
    }

    function openModal(imageSrc) {
      if (imageSrc) {
          modalImage.src = imageSrc;
          modal.setAttribute('aria-hidden', 'false');
          modal.style.display = 'flex';
      } else {
          modal.setAttribute('aria-hidden', 'true');
          modal.style.display = 'none';
      }
    }

    carouselItems.forEach((item, idx) => {
      item.addEventListener('click', () => {
          currentIndex = idx;
          showSlide(currentIndex);
          const imagePath = `../images/step-${idx + 1}.png`; // Adjust image path if necessary
          openModal(imagePath);
      });
    });

    document.querySelector('[data-carousel-prev]').addEventListener('click', () => {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselItems.length - 1;
      showSlide(currentIndex);
    });

    document.querySelector('[data-carousel-next]').addEventListener('click', () => {
      currentIndex = (currentIndex < carouselItems.length - 1) ? currentIndex + 1 : 0;
      showSlide(currentIndex);
    });

    indicators.forEach((indicator, idx) => {
      indicator.addEventListener('click', () => {
        currentIndex = idx;
        showSlide(currentIndex);
      });
    });

    modal.addEventListener('click', function(event) {
      const content = event.target.closest('.bg-white');
      if (!content) { 
          this.setAttribute('aria-hidden', 'true');
          this.style.display = 'none';
      }
    });
    closeBtn.addEventListener('click', function() {
        modal.setAttribute('aria-hidden', 'true');
        modal.style.display = 'none';
    });
    
  }, []);
  return (
    <div className="App">
      <div className="flex-col">
        <div className="flex flex-row justify-between">
          <div>
            <img className="w-24" src="../images/logo.png" alt="logo" />
          </div>
          <div className="flex items-center">
            <div className="flex space-x-4">
              <button onClick={() => handleChangeLanguage()} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">Change Language</button>
            </div>
          </div>
        </div>
        <hr className=" h-[1px] mx-auto bg-gray-20 border-0 rounded  dark:bg-gray-700" />
        <div className="relative w-full min-w-sm max-w-md mx-auto ">

          {/* Carousel wrapper */}
          <div
            id="carousel"
            className="overflow-hidden rounded-lg mb-8 text-top mt-8"
          >
            <div className="absolute w-full mx-auto justify-center text-center">
              <div className="mt-8 font-bold  ">{t('title')}</div>
            </div>
            <div
              className="carousel-item active duration-700 ease-in-out text-center "
              data-slide="0"
            >
              <img
                src="./images/step-1.png"
                className="block w-full h-full cursor-pointer"
                alt="Slide 1"
              />
              <div className="absolute bottom-12 w-full mx-auto justify-center text-center">
                <b>{t('steps')} 1/6</b> {t('step1')}"
              </div>
            </div>
            <div
              className="carousel-item duration-700 ease-in-out text-center"
              data-slide="1"
            >
              <img
                src="../images/step-2.png"
                className="block w-full  h-full cursor-pointer"
                alt="Slide 2"
              />
              <div className="absolute bottom-12 w-full mx-auto justify-center text-center whitespace-pre-line">
                <b>{t('steps')} 2/6</b> {t('step2')}
              </div>
            </div>
            <div
              className="carousel-item duration-700 ease-in-out text-center"
              data-slide="2"
            >
              <img
                src="../images/step-3.png"
                className="block w-full  h-full cursor-pointer"
                alt="Slide 3"
              />
              <div className="absolute bottom-12  w-full mx-auto justify-center text-center whitespace-pre-line">
                <b>{t('steps')} 3/6</b> {t('step3')}
              </div>
            </div>
            <div
              className="carousel-item duration-700 ease-in-out text-center"
              data-slide="3"
            >
              <img
                src="../images/step-4.png"
                className="block w-full  h-full cursor-pointer"
                alt="Slide 4"
              />
              <div className="absolute bottom-12  w-full mx-auto justify-center text-center whitespace-pre-line">
                <b>{t('steps')} 4/6</b> {t('step4')}
              </div>
            </div>
            <div
              className="carousel-item duration-700 ease-in-out text-center"
              data-slide="4"
            >
              <img
                src="../images/step-5.png"
                className="block w-full  h-full cursor-pointer"
                alt="Slide 5"
              />
              <div className="absolute bottom-12  w-full mx-auto justify-center text-center whitespace-pre-line">
                <b>{t('steps')} 5/6</b> {t('step5')}
              </div>
            </div>
            <div
              className="carousel-item duration-700 ease-in-out text-center"
              data-slide="5"
            >
              <img
                src="../images/step-6.png"
                className="block w-full  h-full cursor-pointer"
                alt="Slide 6"
              />
              <div className="absolute bottom-12  w-full mx-auto justify-center text-center whitespace-pre-line">
                <b>{t('steps')} 6/6</b> {t('step6')}
              </div>
            </div>
          </div>

          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
            <button
              className="indicator w-3 h-3 rounded-full bg-green-500"
              data-slide="0"
            ></button>
            <button
              className="indicator w-3 h-3 rounded-full bg-[#C4C4C4]"
              data-slide="1"
            ></button>
            <button
              className="indicator w-3 h-3 rounded-full bg-[#C4C4C4]"
              data-slide="2"
            ></button>
            <button
              className="indicator w-3 h-3 rounded-full bg-[#C4C4C4]"
              data-slide="3"
            ></button>
            <button
              className="indicator w-3 h-3 rounded-full bg-[#C4C4C4]"
              data-slide="4"
            ></button>
            <button
              className="indicator w-3 h-3 rounded-full bg-[#C4C4C4]"
              data-slide="5"
            ></button>
          </div>

          <button
            className="absolute top-0 left-0 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none "
            data-carousel-prev
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
              <svg
                className="w-6 h-6 text-[#C4C4C4]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
            </span>
          </button>
          <button
            className="absolute top-0 right-0 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
              <svg
                className="w-6 h-6 text-[#C4C4C4]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </span>
          </button>
        </div>
      </div>

      <div
        id="modal"
        aria-hidden="true"
        className="fixed top-0 left-0 z-80 w-screen h-screen bg-black/70 flex justify-center items-center hidden"
      >
        <div className="bg-white rounded-lg shadow p-4 min-w-sm max-w-lg relative">
          <button id="closeBtn" className="absolute top-2 right-2 w-8">
            <img src="../images/closebtn.jpg" alt="close btn" />
          </button>
          <img id="modal-image" className="block w-full h-full" alt="Modal Img" />
        </div>
      </div>
    </div>
  );
}

export default App;
