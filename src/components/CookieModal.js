import React from 'react';
import { X } from 'lucide-react';

const CookieModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
        
        <div className="p-6">
          <div className="flex items-center justify-center mb-4">
            <img 
              src="/images/starbucks-logo.png" 
              alt="Starbucks" 
              className="h-12 w-12"
            />
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">
            Налаштування файлів cookie
          </h3>
          
          <p className="text-sm text-gray-600 mb-6 leading-relaxed">
            Ми використовуємо файли cookie та аналогічні технології для покращення вашого досвіду перегляду, 
            персоналізації контенту та реклами, надання функцій соціальних мереж та аналізу нашого трафіку. 
            Ми також ділимося інформацією про використання вами нашого сайту з нашими партнерами із соціальних мереж, 
            реклами та аналітики, які можуть поєднувати її з іншою інформацією, яку ви їм надали або яку вони зібрали 
            в результаті використання вами їхніх послуг.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={onClose}
              className="starbucks-button flex-1 bg-starbucks-green text-white px-6 py-3 rounded-full font-medium hover:bg-starbucks-light-green transition-all duration-300 text-sm"
            >
              Прийняти все
            </button>
            <button
              onClick={onClose}
              className="flex-1 bg-white text-starbucks-green border-2 border-starbucks-green px-6 py-3 rounded-full font-medium hover:bg-starbucks-green hover:text-white transition-all duration-300 text-sm"
            >
              Налаштувати файли cookie
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieModal;