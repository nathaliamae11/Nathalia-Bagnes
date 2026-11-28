export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      {/* Profile Card */}
      <div className="w-full max-w-sm bg-white p-6 rounded-xl shadow-lg border text-center">
        {/* Avatar Image */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu0nwIv3qBzAGCZKmaxIWjeEqH7eJtxBM2htGQrakAzw&s"
          alt="Profile Avatar"
          className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
        />

        {/* Name and Title */}
        <h1 className="text-xl font-bold text-gray-800">Nathalia Bagnes</h1>

        <p className="text-gray-500 mb-4">BS Information Technology Student</p>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-6">Halu! hawa u?</p>

        {/* Action Button */}
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
          View Profile
        </button>
      </div>
    </div>
  );  
}
