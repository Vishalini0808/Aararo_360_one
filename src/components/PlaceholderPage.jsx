export function PlaceholderPage({ title }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-white flex items-center justify-center">
      <div className="text-center bg-white rounded-2xl p-12 shadow-lg max-w-md border border-pink-100">
        <div className="w-20 h-20 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl">🚧</span>
        </div>
        <h1 className="text-gray-800 text-2xl font-semibold mb-4">{title}</h1>
        <p className="text-gray-600 mb-6">
          This feature is coming soon! We're working hard to bring you the best pregnancy care experience.
        </p>
        <a
          href="/"
          className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 font-semibold"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}