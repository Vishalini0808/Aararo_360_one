import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [cart, setCart] = useState([]);
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const categories = [
    { id: 'all', name: 'All Products', icon: '🛍' },
    { id: 'pregnancy', name: 'Pregnancy Care', icon: '🤰' },
    { id: 'maternity', name: 'Maternity Wear', icon: '👚' },
    { id: 'newborn', name: 'Newborn (0-6M)', icon: '👶' },
    { id: 'infant', name: 'Infant (6-12M)', icon: '🧒' },
    { id: 'feeding', name: 'Feeding', icon: '🍼' },
    { id: 'diapering', name: 'Diapering', icon: '🧷' },
    { id: 'bathing', name: 'Bathing & Care', icon: '🛁' },
    { id: 'toys', name: 'Toys & Learning', icon: '🧸' },
    { id: 'safety', name: 'Safety', icon: '🛡' },
    { id: 'nursery', name: 'Nursery', icon: '🚼' }
  ];

  const products = [
    // Pregnancy & Maternity Products
    {
      id: 1,
      name: 'Premium Full Body Pregnancy Pillow',
      price: 3499,
      originalPrice: 4999,
      category: 'pregnancy',
      image: '/pregnancypillow.jpg',
      rating: 4.8,
      reviews: 1247,
      description: 'U-shaped full body support pillow for comfortable sleep during pregnancy',
      features: ['Hypoallergenic', 'Machine washable', '360° support'],
      brand: 'MamaCare',
      delivery: 'Free Delivery',
      stock: 45
    },
    {
      id: 2,
      name: 'Maternity Support Belt - Premium',
      price: 1299,
      originalPrice: 1999,
      category: 'pregnancy',
      image: '/supportbelt.jpg',
      rating: 4.5,
      reviews: 892,
      description: 'Adjustable support belt for back pain relief during pregnancy',
      features: ['Adjustable fit', 'Breathable material', 'Washable'],
      brand: 'ComfortMom',
      delivery: 'Free Delivery',
      stock: 78
    },
    {
      id: 3,
      name: 'Designer Maternity Dress Set',
      price: 2599,
      originalPrice: 3599,
      category: 'maternity',
      image: '/maternitywear.jpg',
      rating: 4.7,
      reviews: 567,
      description: '3-piece elegant maternity dress set for special occasions',
      features: ['Stretchable fabric', 'Premium quality', 'Comfort fit'],
      brand: 'MomStyle',
      delivery: 'Free Delivery',
      stock: 34
    },

    // Newborn & Infant Products
    {
      id: 4,
      name: 'Organic Cotton Baby Clothes Set',
      price: 1899,
      originalPrice: 2499,
      category: 'newborn',
      image: '/babyclothset.jpg',
      rating: 4.9,
      reviews: 1567,
      description: '7-piece organic cotton clothing set for newborns (0-3 months)',
      features: ['100% Organic Cotton', 'Chemical-free', 'Soft seams'],
      brand: 'PureBaby',
      delivery: 'Free Delivery',
      stock: 120
    },
    {
      id: 5,
      name: 'Premium Baby Carrier - Ergonomic',
      price: 2899,
      originalPrice: 3899,
      category: 'newborn',
      image: '/babycarrier.jpg',
      rating: 4.8,
      reviews: 834,
      description: 'Ergonomic baby carrier with multiple carrying positions',
      features: ['Hip-healthy design', 'Adjustable straps', 'Machine washable'],
      brand: 'CarryComfort',
      delivery: 'Free Delivery',
      stock: 56
    },
    {
      id: 6,
      name: 'Interactive Baby Play Gym',
      price: 2799,
      originalPrice: 3599,
      category: 'infant',
      image: '/babyplaygym.jpg',
      rating: 4.7,
      reviews: 445,
      description: 'Multi-sensory activity gym with lights, music & detachable toys',
      features: ['5 detachable toys', 'Music & lights', 'Machine washable mat'],
      brand: 'PlayLearn',
      delivery: 'Free Delivery',
      stock: 89
    },

    // Feeding Products
    {
      id: 7,
      name: 'Electric Breast Pump - Double',
      price: 5599,
      originalPrice: 7999,
      category: 'feeding',
      image: '/breastpump.jpg',
      rating: 4.6,
      reviews: 678,
      description: 'Hospital-grade double electric breast pump with multiple settings',
      features: ['Adjustable suction', 'Quiet operation', 'Portable design'],
      brand: 'MamaExpress',
      delivery: 'Free Delivery',
      stock: 23
    },
    {
      id: 8,
      name: 'Anti-Colic Baby Bottle Set',
      price: 1499,
      originalPrice: 1999,
      category: 'feeding',
      image: '/feedingbottle.jpg',
      rating: 4.8,
      reviews: 923,
      description: '5-piece anti-colic baby bottle set with natural latch nipple',
      features: ['Anti-colic system', 'BPA Free', 'Easy to clean'],
      brand: 'FeedSafe',
      delivery: 'Free Delivery',
      stock: 156
    },

    // Diapering Products
    {
      id: 9,
      name: 'Premium Diaper Bag - Multipurpose',
      price: 2199,
      originalPrice: 2999,
      category: 'diapering',
      image: '/diaperbag.jpg',
      rating: 4.7,
      reviews: 512,
      description: 'Spacious multipurpose diaper bag with insulated pockets',
      features: ['Water-resistant', 'Multiple pockets', 'Insulated bottle holder'],
      brand: 'DadGear',
      delivery: 'Free Delivery',
      stock: 67
    },
    {
      id: 10,
      name: 'Baby Wipes - 99% Water',
      price: 499,
      originalPrice: 699,
      category: 'diapering',
      image: '/babywipes.jpg',
      rating: 4.9,
      reviews: 2341,
      description: 'Hypoallergenic baby wipes with 99% water, gentle on skin',
      features: ['99% water', 'Hypoallergenic', 'Thick & soft'],
      brand: 'PureTouch',
      delivery: 'Free Delivery',
      stock: 289
    },

    // Bathing & Care
    {
      id: 11,
      name: 'Baby Bath Tub with Thermometer',
      price: 1599,
      originalPrice: 2199,
      category: 'bathing',
      image: '/bathtub.jpg',
      rating: 4.6,
      reviews: 423,
      description: 'Anti-slip baby bath tub with built-in temperature indicator',
      features: ['Non-slip surface', 'Temperature sensor', 'Drain plug'],
      brand: 'BathSafe',
      delivery: 'Free Delivery',
      stock: 78
    },
    {
      id: 12,
      name: 'Organic Baby Care Kit',
      price: 1299,
      originalPrice: 1699,
      category: 'bathing',
      image: '/babycarekit.jpg',
      rating: 4.8,
      reviews: 667,
      description: 'Complete organic baby care kit with shampoo, oil & lotion',
      features: ['100% natural', 'Dermatologist tested', 'Gentle formula'],
      brand: 'NatureBaby',
      delivery: 'Free Delivery',
      stock: 145
    },

    // Toys & Learning
    {
      id: 13,
      name: 'Educational Activity Cube',
      price: 1899,
      originalPrice: 2499,
      category: 'toys',
      image: '/babycube.jpg',
      rating: 4.7,
      reviews: 334,
      description: 'Multi-functional activity cube with 6 sides of learning fun',
      features: ['6 activity sides', 'Fine motor skills', 'Colorful design'],
      brand: 'LearnPlay',
      delivery: 'Free Delivery',
      stock: 56
    },
    {
      id: 14,
      name: 'Soft Building Blocks Set',
      price: 899,
      originalPrice: 1299,
      category: 'toys',
      image: '/buildingblockset.jpg',
      rating: 4.5,
      reviews: 278,
      description: '48-piece soft building blocks set for safe creative play',
      features: ['Soft material', 'Various shapes', 'Easy to clean'],
      brand: 'SoftPlay',
      delivery: 'Free Delivery',
      stock: 189
    },

    // Safety Products
    {
      id: 15,
      name: 'Smart Baby Monitor Camera',
      price: 4899,
      originalPrice: 6499,
      category: 'safety',
      image: '/babycamera2.jpg',
      rating: 4.7,
      reviews: 892,
      description: 'HD video baby monitor with night vision and two-way audio',
      features: ['Night vision', 'Two-way audio', 'Temperature sensor'],
      brand: 'SafeWatch',
      delivery: 'Free Delivery',
      stock: 34
    },
    {
      id: 16,
      name: 'Baby Proofing Safety Kit',
      price: 1799,
      originalPrice: 2399,
      category: 'safety',
      image: '/babyproofneeds.jpg',
      rating: 4.6,
      reviews: 445,
      description: 'Complete baby proofing kit with corner guards, outlet covers',
      features: ['12 safety items', 'Easy installation', 'Durable material'],
      brand: 'HomeSafe',
      delivery: 'Free Delivery',
      stock: 89
    },

    // Nursery Products
    {
      id: 17,
      name: 'Convertible Baby Crib',
      price: 12599,
      originalPrice: 15999,
      category: 'nursery',
      image: '/babycrib.jpg',
      rating: 4.8,
      reviews: 223,
      description: '3-in-1 convertible crib that grows with your baby',
      features: ['Convertible design', 'Solid wood', 'Adjustable height'],
      brand: 'SleepWell',
      delivery: 'Free Delivery',
      stock: 12
    },
    {
      id: 18,
      name: 'Nursery Glider Rocking Chair',
      price: 8999,
      originalPrice: 11999,
      category: 'nursery',
      image: '/nursingchair.jpg',
      rating: 4.7,
      reviews: 156,
      description: 'Comfortable glider rocking chair for nursing and bonding',
      features: ['Smooth gliding', 'Padded arms', 'Reclining feature'],
      brand: 'ComfortNurse',
      delivery: 'Free Delivery',
      stock: 8
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const searchedProducts = searchQuery 
    ? filteredProducts.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredProducts;

  const sortedProducts = [...searchedProducts].sort((a, b) => {
    switch(sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const getCategoryName = (categoryId) => {
    return categories.find(cat => cat.id === categoryId)?.name || '';
  };

  const getDiscountPercentage = (price, originalPrice) => {
    return Math.round((1 - price / originalPrice) * 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
     

      {/* Hero Section - Reduced Height */}
      <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 py-12">
         {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-gray-600 hover:text-[#FF6EA6] font-medium border border-pink-100 mb-2"
        >
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M10 19l-7-7m0 0l7-7m-7 7h18" 
            />
          </svg>
        </button>
      </div>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
         
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Baby & Mother Care Products
          </h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Everything you need for pregnancy, newborns, and growing babies - carefully curated by experts
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search products, brands, categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 shadow-lg"
            />
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Shop Header */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-gray-100">
          <div className="flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center">
            {/* Categories Filter */}
            <div className="flex-1">
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                      activeCategory === category.id
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <span className="text-lg">{category.icon}</span>
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Sort and Cart */}
            <div className="flex items-center gap-4">
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Customer Rating</option>
              </select>

              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-lg">
                <span>🛒</span>
                <span>{cart.length} items</span>
                <span>•</span>
                <span>₹{cart.reduce((total, item) => total + item.price, 0).toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Products Info */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {getCategoryName(activeCategory)}
          </h2>
          <p className="text-gray-600">
            Showing {sortedProducts.length} products
            {searchQuery && ` for "${searchQuery}"`}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {sortedProducts.map(product => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group"
            >
              {/* Product Image */}
              <div className="relative h-48 bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-gradient-to-r from-pink-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  {getDiscountPercentage(product.price, product.originalPrice)}% OFF
                </div>
                <div className="absolute top-3 left-3 bg-purple-600 text-white px-2 py-1 rounded-lg text-xs font-semibold">
                  {product.brand}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 h-12">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {product.features.slice(0, 2).map((feature, index) => (
                    <span
                      key={index}
                      className="bg-purple-50 text-purple-700 px-2 py-1 rounded-lg text-xs font-medium"
                    >
                      ✓ {feature}
                    </span>
                  ))}
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">⭐</span>
                    <span className="font-semibold text-gray-900">{product.rating}</span>
                  </div>
                  <span className="text-gray-500 text-sm">
                    ({product.reviews.toLocaleString()} reviews)
                  </span>
                </div>

                {/* Delivery & Stock */}
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-lg text-xs font-semibold">
                    {product.delivery}
                  </span>
                  <span className="text-green-600 text-sm font-semibold">
                    {product.stock} in stock
                  </span>
                </div>

                {/* Pricing */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-bold text-purple-600">
                    ₹{product.price.toLocaleString()}
                  </span>
                  <span className="text-gray-500 line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                  <span className="text-green-600 text-sm font-semibold">
                    Save ₹{(product.originalPrice - product.price).toLocaleString()}
                  </span>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-xl font-semibold transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <span>🛒</span>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-3xl">😔</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600 mb-6">
              {searchQuery 
                ? `No products found for "${searchQuery}"`
                : 'No products available in this category'
              }
            </p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 font-semibold"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Shop Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="text-center p-4 rounded-xl hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white transition-all duration-300 group">
            <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">🚚</div>
            <h4 className="font-bold mb-1">Free Shipping</h4>
            <p className="text-sm opacity-80">On orders above ₹999</p>
          </div>
          <div className="text-center p-4 rounded-xl hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white transition-all duration-300 group">
            <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">↩</div>
            <h4 className="font-bold mb-1">Easy Returns</h4>
            <p className="text-sm opacity-80">30-day return policy</p>
          </div>
          <div className="text-center p-4 rounded-xl hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white transition-all duration-300 group">
            <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">🛡</div>
            <h4 className="font-bold mb-1">Quality Assured</h4>
            <p className="text-sm opacity-80">All products tested & certified</p>
          </div>
          <div className="text-center p-4 rounded-xl hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white transition-all duration-300 group">
            <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">💝</div>
            <h4 className="font-bold mb-1">Expert Curated</h4>
            <p className="text-sm opacity-80">Selected by pediatricians</p>
          </div>
          <div className="text-center p-4 rounded-xl hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white transition-all duration-300 group">
            <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">🏥</div>
            <h4 className="font-bold mb-1">Doctor Approved</h4>
            <p className="text-sm opacity-80">Medically safe products</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;