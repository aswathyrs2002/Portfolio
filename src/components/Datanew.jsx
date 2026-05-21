import React, { useEffect, useState } from "react";

function Data() {
    const [users, setUsers] = useState([]);
    const [showDetails, setShowDetails] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
                User List
            </h1>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {users.map((user) => (
                    <div
                        key={user.id}
                        className="bg-white p-5 rounded-2xl shadow-lg"
                    >
                        <h2 className="text-2xl font-semibold text-gray-800">
                            {user.name}
                        </h2>

                        <p className="text-gray-600 mt-2">
                            {user.email}
                        </p>

                        <p className="text-sm text-gray-500 mt-1">
                            {user.company?.name}
                        </p>

                        <button
                            onClick={() =>
                                setShowDetails(
                                    showDetails === user.id ? null : user.id
                                )
                            }
                            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                        >
                            View Profile 
                        </button>

                        {/* Show Full Details */}
                        {showDetails === user.id && (
                            <div className="mt-4 border-t pt-4 text-sm text-gray-700">
                                <p>
                                    <strong>Username:</strong>{" "}
                                    {user.username}
                                </p>

                                <p>
                                    <strong>Phone:</strong> {user.phone}
                                </p>

                                <p>
                                    <strong>Website:</strong>{" "}
                                    {user.website}
                                </p>

                                <p>
                                    <strong>Company:</strong>{" "}
                                    {user.company.name}
                                </p>

                                <p>
                                    <strong>Address:</strong>{" "}
                                    {user.address?.street},{" "}
                                    {user.address?.city}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Data;