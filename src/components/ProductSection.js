import React from 'react';
import { Star, Award } from 'lucide-react';

const ProductSection = () => {
  const products = [
    {
      id: 1,
      name: 'Pike Place Roast',
      description: 'Наша фірмова суміш з багатим смаком та ароматом',
      image: '/images/pike-place.jpg',
      rating: 4.8,
      category: 'Кава мелена'
    },
    {
      id: 2,
      name: 'Veranda Blend',
      description: 'М\'яка та збалансована кава світлого обсмаження',
      image: '/images/veranda-blend.jpg',
      rating: 4.7,
      category: 'Кава мелена'
    },
    {
      id: 3,
      name: 'Breakfast Blend',
      description: 'Ідеальний початок дня з яскравим смаком',
      image: '/images/breakfast-blend.jpg',
      rating: 4.9,
      category: 'Кава мелена'
    },
    {
      id: 4,
      name: 'French Roast',
      description: 'Інтенсивний смак темного обсмаження',
      image: '/images/french-roast.jpg',
      rating: 4.6,
      category: 'Кава мелена'
    }
  ];

  const categories = ['Кава', 'Рецепти'];
  const [activeCategory, setActiveCategory] = React.useState('Кава');

  return (
    <section className="py-16 bg-starbucks-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Наші продукти
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Відкрийте для себе широкий асортимент кави Starbucks для приготування вдома
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-1 shadow-sm">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-starbucks-green text-white shadow-md'
                    : 'text-gray-600 hover:text-starbucks-green'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="product-card bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="aspect-w-1 aspect-h-1 bg-gray-200">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-starbucks-green bg-green-50 px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{product.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {product.description}
                </p>
                
                <button className="w-full starbucks-button bg-starbucks-green text-white py-3 rounded-full font-medium hover:bg-starbucks-light-green transition-all duration-300">
                  Дізнатися більше
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <div className="flex justify-center mb-4">
              <Award className="h-12 w-12 text-starbucks-green" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Преміальна якість у кожній чашці
            </h3>
            <p className="text-gray-600 mb-6">
              Відчуйте справжній смак Starbucks вдома з нашими ретельно відібраними сумішами кави
            </p>
            <button className="starbucks-button bg-starbucks-green text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-starbucks-light-green transition-all duration-300">
              Переглянути всі продукти
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;