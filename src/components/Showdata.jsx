import React from "react";
import axios from "axios";
import Showphoto from "./Showphoto";
const [users, setUsers] = useState([]);

    async function fetchphoto() {
        try {
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/users"
            );

            setUsers(response.data);
            console.log(response.data);

        } catch (error) {
            console.log("Error", error);
        }
    }

    useEffect(() => {
        fetchphoto();
    }, []);
function Showdata({ users = [] }) {
    return (
    <>
        <div className="min-h-screen bg-gray-100 p-6">

            {/* Heading */}
            <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">
                User Login
            </h1>

            {/* No Data Message */}
            {users.length === 0 ? (
                <p className="text-center text-gray-500">
                    No users found
                </p>
            ) : (
                /* Grid Layout */
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                    {users.map((user) => (
                        <div
                            key={user.id}
                            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300"
                        >
                            {/* User Details */}
                            <h2 className="text-lg font-semibold text-gray-800">
                                👤 {user.name}
                            </h2>

                            <p className="text-gray-600 mt-2">
                                📧 {user.email}
                            </p>

                            <p className="text-gray-700 mt-2">
                                🏢 {user.company?.name}
                            </p>

                            <p className="text-gray-500 italic">
                                {user.company?.bs}
                            </p>
                        </div>
                    ))}

                </div>
            )}
        </div>

        <Showphoto photos={photos}/>
        </>
    );     
    
}


export default Showdata;