import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    'Про нас': [
      'Наша компанія',
      'Наша кава',
      'Історії та новини',
      'Інвестори',
      'Кар\'єра'
    ],
    'Служба підтримки': [
      'Центр підтримки',
      'Зв\'яжіться з нами',
      'Магазини',
      'Подарункові картки',
      'Доставка'
    ],
    'Швидкі посилання': [
      'Конфіденційність',
      'Умови використання',
      'Карта сайту',
      'Доступність',
      'Файли cookie'
    ]
  };

  return (
    <footer className="bg-starbucks-dark-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img 
                src="/images/starbucks-logo-white.png" 
                alt="Starbucks" 
                className="h-12 w-12 mr-3"
              />
              <span className="text-xl font-bold">Starbucks</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Насолоджуйтесь улюбленою кавою Starbucks вдома з нашою колекцією преміальних продуктів.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-600 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <Mail className="h-5 w-5 text-gray-300 mr-3" />
              <span className="text-gray-300 text-sm">info@starbucks.ua</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-gray-300 mr-3" />
              <span className="text-gray-300 text-sm">0 800 123 456</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-gray-300 mr-3" />
              <span className="text-gray-300 text-sm">Київ, Україна</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Starbucks Corporation. Всі права захищені.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Політика конфіденційності
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Умови використання
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Файли cookie
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;