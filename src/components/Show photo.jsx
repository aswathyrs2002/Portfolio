import React from "react";

function Showphoto({ photos = [] }) {
    return (
        <div className="min-h-screen bg-gray-100 p-6">

            {/* Heading */}
            <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">
                User Photo
            </h1>

            {/* No Data Message */}
            {photos.length === 0 ? (
                <p className="text-center text-gray-500">
                    No users found
                </p>
            ) : (
                /* Grid Layout */
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                    {photos.map((photo) => (
                        <div
                            key={photo.id}
                            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300"
                        >
                            {/* User Details */}
                            <h2 className="text-lg font-semibold text-gray-800">
                                👤 {photo.title}
                            </h2>
                            <img src="{photo.url" alt="url"></img>
                            <img src="{photo.thumbnailUrl" alt="thumbnailUrl"></img>
                          
                        </div>
                    ))}

                </div>
            )}
        </div>
    );
}
export default Showphoto;