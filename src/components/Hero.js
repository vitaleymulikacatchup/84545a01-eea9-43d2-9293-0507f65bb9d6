import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-background.jpg" 
          alt="Starbucks Coffee Products" 
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Starbucks<span className="text-green-300">®</span> at Home
        </h1>
        
        <p className="hero-subtitle text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Насолоджуйтесь улюбленою кавою Starbucks вдома з нашою колекцією преміальних продуктів
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="starbucks-button bg-starbucks-green text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-starbucks-light-green transition-all duration-300 min-w-[200px]">
            Дізнатися більше
          </button>
          
          <button className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 min-w-[200px]">
            Переглянути продукти
          </button>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;