import React from "react";

function Showdata({ users }) {
    return (
        <div>

            <h1>User Photos</h1>

            <div>
                {users.map((user) => (
                    <div key={user.id}>

                        <h2>{user.title}</h2>

                        <img src={user.url} alt="user" />

                        <img
                            src={user.thumbnailUrl}
                            alt="thumbnail"
                        />

                    </div>
                ))}
            </div>

        </div>
    );
}

export default Showdata;