import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

const DEMO_SCHEMES = [
  {
    id: 'pm-mvy',
    title: 'Pradhan Mantri Matru Vandana Yojana (PMMVY)',
    description: 'Financial assistance to pregnant and lactating women for nutrition and rest.',
    eligibility: 'Expecting mothers and new moms meeting scheme criteria; first living child focus.',
    link: 'https://wcd.nic.in/schemes/pradhan-mantri-matru-vandana-yojana',
    icon: '🍼',
    category: 'Financial Support',
    status: 'Active'
  },
  {
    id: 'jsy',
    title: 'Janani Suraksha Yojana (JSY)',
    description: 'Incentivizes institutional delivery to reduce maternal and neonatal mortality.',
    eligibility: 'Pregnant women, especially from low-income households; terms vary by state.',
    link: 'https://nhm.gov.in/index4.php?lang=1&level=0&linkid=362&lid=115',
    icon: '💗',
    category: 'Healthcare',
    status: 'Active'
  },
  {
    id: 'poshan',
    title: 'POSHAN Abhiyaan',
    description: 'National Nutrition Mission focusing on maternal and child nutrition outcomes.',
    eligibility: 'Mothers and infants; implemented via Anganwadi services and allied programs.',
    link: 'https://www.poshanabhiyaan.gov.in/',
    icon: '🍎',
    category: 'Nutrition',
    status: 'Active'
  },
  {
    id: 'immunization',
    title: 'Universal Immunization Programme (UIP)',
    description: 'Free vaccination for children and pregnant women against vaccine-preventable diseases.',
    eligibility: 'All infants, children, and pregnant women as per national schedule.',
    link: 'https://nhm.gov.in/index1.php?lang=1&level=2&sublinkid=824&lid=220',
    icon: '💉',
    category: 'Healthcare',
    status: 'Active'
  },
  {
    id: 'jssk',
    title: 'Janani Shishu Suraksha Karyakram (JSSK)',
    description: 'Ensures free delivery, including cesarean section, drugs, diagnostics, blood, diet, and transport for mothers and newborns.',
    eligibility: 'All pregnant women and sick newborns accessing government health institutions.',
    link: 'https://nhm.gov.in/index1.php?lang=1&level=3&lid=308&sublinkid=842',
    icon: '🏥',
    category: 'Healthcare',
    status: 'Active'
  },
  {
    id: 'pmsma',
    title: 'Pradhan Mantri Surakshit Matritva Abhiyan (PMSMA)',
    description: 'Provides assured, comprehensive, and quality antenatal care on the 9th of every month for all pregnant women.',
    eligibility: 'All pregnant women visiting designated public or private facilities on the 9th day of every month.',
    link: 'https://pmsma.mohfw.gov.in/',
    icon: '🩺',
    category: 'Healthcare',
    status: 'Active'
  },
  {
    id: 'suman',
    title: 'Surakshit Matritva Aashwasan (SUMAN)',
    description: 'Guarantees free, dignified, respectful maternal and newborn healthcare services at public facilities.',
    eligibility: 'All women and newborns accessing public health institutions.',
    link: 'https://www.myscheme.gov.in/schemes/suman',
    icon: '🤱',
    category: 'Healthcare',
    status: 'Active'
  },
  {
    id: 'igmsy',
    title: 'Indira Gandhi Matritva Sahyog Yojana (IGMSY)',
    description: 'Offers partial wage compensation to pregnant and lactating mothers to encourage health and breastfeeding practices.',
    eligibility: 'Women aged 19 years and above, for first two live births (conditions apply).',
    link: 'https://chhindwara.nic.in/en/scheme/indira-gandhi-maternity-support-scheme-i-g-m-s-y/',
    icon: '🧾',
    category: 'Financial Support',
    status: 'Active'
  },
  {
    id: 'icds',
    title: 'Integrated Child Development Services (ICDS)',
    description: 'Provides supplementary nutrition, health check-ups, immunization, and preschool education for children under 6 years and mothers.',
    eligibility: 'Children under 6 years, pregnant women, and lactating mothers across India.',
    link: 'https://icds-wcd.nic.in/',
    icon: '🧸',
    category: 'Nutrition & Development',
    status: 'Active'
  },
  {
    id: 'rksk',
    title: 'Rashtriya Kishor Swasthya Karyakram (RKSK)',
    description: 'Focuses on adolescent health through nutrition, mental health, substance abuse prevention, and reproductive health education.',
    eligibility: 'Adolescents aged 10–19 years, both girls and boys.',
    link: 'https://nhm.gov.in/index1.php?lang=1&level=2&sublinkid=818&lid=221',
    icon: '🌱',
    category: 'Adolescent Health',
    status: 'Active'
  },
];

const CATEGORIES = ['All', 'Financial Support', 'Healthcare', 'Nutrition', 'Nutrition & Development', 'Adolescent Health'];

function GovernmentSchemes() {
  const [schemes, setSchemes] = useState([]);
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      setError('');
      try {
        await new Promise((r) => setTimeout(r, 800));
        if (!cancelled) setSchemes(DEMO_SCHEMES);
      } catch (e) {
        if (!cancelled) {
          setError('Could not fetch live schemes. Showing demo list.');
          setSchemes(DEMO_SCHEMES);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => { cancelled = true; };
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let filteredSchemes = schemes;

    if (selectedCategory !== 'All') {
      filteredSchemes = filteredSchemes.filter(s => s.category === selectedCategory);
    }

    if (!q) return filteredSchemes;

    return filteredSchemes.filter((s) => (
      s.title.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q) ||
      s.eligibility.toLowerCase().includes(q) ||
      s.category.toLowerCase().includes(q)
    ));
  }, [schemes, query, selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 py-8">
      {/* Header Section */}
      <div className="relative">
  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-blue-600 transform -skew-y-0 origin-top-left"></div>
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link 
              to="/" 
              className="  text-white rounded-xl text-center font-semibold text-3xl "
            >
              ← 
            </Link>
    <div className="text-center">
      
    
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
        Government Schemes for Pregnant Women & New Moms
      </h1>
      <p className="text-lg text-white/90 max-w-3xl mx-auto">
        Explore trusted programs supporting pregnancy care, wellness, and early childhood development
      </p>
    </div>
  </div>
</div>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative">
        {/* Search and Filter Section */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-gray-100">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search schemes (e.g., nutrition, vaccination, financial support)"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              />
            </div>
            
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {error && (
            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-xl text-yellow-700">
              {error}
            </div>
          )}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-600"></div>
          </div>
        )}

        {/* Schemes Grid */}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filtered.map((scheme) => (
              <div
                key={scheme.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                {/* Card Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-xl shadow-lg">
                      {scheme.icon}
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                      {scheme.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {scheme.title}
                  </h3>
                  <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
                    {scheme.category}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    {scheme.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Eligibility:</h4>
                    <p className="text-sm text-gray-600">
                      {scheme.eligibility}
                    </p>
                  </div>

                  <a
                    href={scheme.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl font-semibold group"
                  >
                    Official Information
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && filtered.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No schemes found</h3>
            <p className="text-gray-600 mb-6">
              No schemes matched "{query}" in {selectedCategory !== 'All' ? selectedCategory : 'all categories'}. Try different keywords.
            </p>
            <button
              onClick={() => { setQuery(''); setSelectedCategory('All'); }}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-200 font-semibold"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Stats Footer */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">{schemes.length}</div>
              <div className="text-gray-600 font-medium">Total Schemes</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {schemes.filter(s => s.category === 'Healthcare').length}
              </div>
              <div className="text-gray-600 font-medium">Healthcare Programs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">
                {schemes.filter(s => s.category === 'Financial Support').length}
              </div>
              <div className="text-gray-600 font-medium">Financial Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GovernmentSchemes;