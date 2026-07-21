import React from "react";
import './App.css';
import office from './office.jpg';

function App() {

    const element = "Office Space";

    const jsxatt = (
        <img
            src={office}
            width="25%"
            height="25%"
            alt="Office Space"
        />
    );

    const officeList = [
        {
            Name: "DBS",
            Rent: 50000,
            Address: "Chennai"
        },
        {
            Name: "Regus",
            Rent: 75000,
            Address: "Bangalore"
        },
        {
            Name: "WeWork",
            Rent: 55000,
            Address: "Hyderabad"
        },
        {
            Name: "SmartWorks",
            Rent: 90000,
            Address: "Mumbai"
        }
    ];

    return (
        <div className="App">

            <h1>{element}, at Affordable Range</h1>

            {
                officeList.map((item, index) => {

                    let colors = [];

                    if (item.Rent <= 60000) {
                        colors.push("textRed");
                    }
                    else {
                        colors.push("textGreen");
                    }

                    return (
                        <div key={index}>

                            {jsxatt}

                            <h2>Name: {item.Name}</h2>

                            <h3 className={colors.join(" ")}>
                                Rent: Rs. {item.Rent}
                            </h3>

                            <h3>
                                Address: {item.Address}
                            </h3>

                            <hr />

                        </div>
                    );
                })
            }

        </div>
    );
}

export default App;