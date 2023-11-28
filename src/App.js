import React, { useEffect, useState } from "react";
import "./App.css"; // Assuming you have a separate CSS file for styling

const App = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(
          "https://randomuser.me/api/?page=1&results=1&seed=abc"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        setUserData(data.results[0]);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchDetails();
  }, []);

  return (
    <div className="user-profile-card">
      {userData ? (
        <div className="user-profile-content">
          <img
            src={userData.picture.large}
            alt="User"
            className="user-profile-image"
          />
          <div className="user-profile-details">
            <h2>
              {userData.name.first} {userData.name.last}
            </h2>
            <p>Gender : {userData.gender}</p>
            <p>Phone Number : {userData.cell}</p>
          </div>
        </div>
      ) : (
        <p>Loading....</p>
      )}
    </div>
  );
};

export default App;
