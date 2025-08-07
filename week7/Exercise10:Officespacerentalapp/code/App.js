import logo from './logo.svg';
import React from 'react';
import './App.css';

const App = () => {
  // Office list
  const officeList = [
    {
      id: 1,
      name: "DBS",
      rent: 45000,
      address: "Guindy, Chennai",
      image: "https://www.chennaiproperties.in/propertyrent/9267/gallery/6280-Sqft-Commercial-Office-Space-in-OMR-9267-1.jpg"
    },
    {
      id: 2,
      name: "Bangalore WorkHub",
      rent: 75000,
      address: "Electronic City, Bangalore",
      image: "https://5.imimg.com/data5/EF/QC/TU/SELLER-80689678/individual-office-space-for-rent-in-chennai-500x500.JPG"
    },
    {
      id: 3,
      name: "Hyderabad Innovation Center",
      rent: 58000,
      address: "HiTech City, Hyderabad",
      image: "https://offices.co/officeimages/IN/52633_5.jpg"
    }
  ];

  return (
    <div className="App">
      <h1>Office Space Rental</h1>

      {officeList.map((office) => (
        <div key={office.id} className="office-card">
          <img src={office.image} alt={office.name} width="250" />
          <h2>{office.name}</h2>
          <p><strong>Address:</strong> {office.address}</p>
          <p style={{ color: office.rent < 60000 ? 'red' : 'green' }}>
            <strong>Rent:</strong> ₹{office.rent}
          </p>
        </div>
      ))}
    </div>
  );
};

export default App;

