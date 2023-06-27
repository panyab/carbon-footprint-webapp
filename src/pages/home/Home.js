import './Home.css'
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Results from '../results/Results';

export default function Home () {
    const [car, setCar] = useState("SmallDieselCar");
    const [cardist, setCarDist] = useState(null);
    const [taxidist, setTaxiDist] = useState(null);
    const [subwaydist, setSubwayDist] = useState(null);
    const [busdist, setBusDist] = useState(null);
    const [flightdist, setFlightDist] = useState(null);
    const [carResponse, setCarResponse] = useState(null);
    const [taxiResponse, setTaxiResponse] = useState(null);
    const [busResponse, setBusResponse] = useState(null);
    const [subwayResponse, setSubwayResponse] = useState(null);
    const [publicResponse, setPublicResponse] = useState(null);
    const [flightResponse, setFlightResponse] = useState(null);
    const [screen, setScreen] = useState('form');

    const calcCarFootprint = async () => {
        const options = {
            method: "GET",
            url: "https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel",
            params: { distance: cardist, vehicle: car },
            headers: {
              "x-rapidapi-host": "carbonfootprint1.p.rapidapi.com",
              "x-rapidapi-key": "26ef3dafabmsh412b29197d34de2p19385fjsn26ea48a5f3d1",
            },
        };

        try {
            const res = await axios.request(options);
            setCarResponse(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    const calcTaxiFootprint = async () => {
        const options = {
            method: 'GET',
            url: 'https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromPublicTransit',
            params: {
              distance: taxidist,
              type: 'Taxi'
            },
            headers: {
              'X-RapidAPI-Key': '26ef3dafabmsh412b29197d34de2p19385fjsn26ea48a5f3d1',
              'X-RapidAPI-Host': 'carbonfootprint1.p.rapidapi.com'
            }
        };

        try {
            const res = await axios.request(options);
            const { data } = res;
            setTaxiResponse(data);
        } catch (error) {
            console.log(error);
        }
    }

    const calcBusFootprint = async () => {
        const options = {
            method: 'GET',
            url: 'https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromPublicTransit',
            params: {
              distance: busdist,
              type: 'Bus'
            },
            headers: {
              'X-RapidAPI-Key': '26ef3dafabmsh412b29197d34de2p19385fjsn26ea48a5f3d1',
              'X-RapidAPI-Host': 'carbonfootprint1.p.rapidapi.com'
            }
        };

        try {
            const res = await axios.request(options);
            const { data } = res;
            setBusResponse(data);
        } catch (error) {
            console.log(error);
        }
    }

    const calcSubwayFootprint = async () => {
        const options = {
            method: 'GET',
            url: 'https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromPublicTransit',
            params: {
              distance: subwaydist,
              type: 'Subway'
            },
            headers: {
              'X-RapidAPI-Key': '26ef3dafabmsh412b29197d34de2p19385fjsn26ea48a5f3d1',
              'X-RapidAPI-Host': 'carbonfootprint1.p.rapidapi.com'
            }
        };

        try {
            const res =  await axios.request(options);
            const { data } = res;
            setSubwayResponse(data);
        } catch (error) {
            console.log(error);
        }
    }

    const calcFlightFootprint = async () => {
        const options = {
            method: 'GET',
            url: 'https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromFlight',
            params: {
              distance: flightdist,
              type: 'DomesticFlight'
            },
            headers: {
              'X-RapidAPI-Key': '26ef3dafabmsh412b29197d34de2p19385fjsn26ea48a5f3d1',
              'X-RapidAPI-Host': 'carbonfootprint1.p.rapidapi.com'
            }
        };

        try {
            const res = await axios.request(options);
            const { data } = res;
            setFlightResponse(data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleSave = () => {
        calcCarFootprint();
        calcTaxiFootprint();
        calcBusFootprint();
        calcSubwayFootprint();
        calcFlightFootprint();
        setPublicResponse(taxiResponse + busResponse + subwayResponse);
        
    }

    const handleSubmit = (e) => {
        setScreen('results');
    }

    return (
        <div className='home-container'>
        {screen === 'form' ? (
        <> 
            <div className='header'>Calculate your carbon footprint</div>
            <div className='body'>
                Your carbon footprint is a measure of the amount of greenhouse gases, such as carbon dioxide, emitted due to our actions. 
                Why is this important? Our actions cause a significant increase of carbon into the atmosphere. Learn about how your transportation 
                choices impact carbon emissions below. 
            </div>
            <div className='form-container'>
                <div className='header2'>What is your average weekly travel via:</div>
                <div className='form'>
                    <div className='option-title'>Car</div>
                        <div className='select-container'>
                            <div className='select-title'>Type of Car:</div>
                            <select className='select' onChange={(e) => setCar(e.target.value)}>
                                <option className='option' value="SmallDieselCar">Small Diesel Car</option>
                                <option className='option' value="MediumDieselCar">Medium Diesel Car</option>
                                <option className='option' value="LargeDieselCar">Large Diesel Car</option>
                                <option className='option' value="MediumHybridCar">Medium Hybrid Car</option>
                                <option className='option' value="LargeHybridCar">Large Hybrid Car</option>
                                <option className='option' value="SmallPetrolCar">Small Petrol Car</option>
                                <option className='option' value="MediumPetrolCar">Medium Petrol Car</option>
                                <option className='option' value="LargePetrolCar">Large Petrol Car</option>
                            </select>
                        </div>
                        <div className='input-container'>
                            <div className='input-title'>Distance(km): </div>
                            <input type="number" autoFocus={true} className='input' onChange={(e) => setCarDist(e.target.value)}></input>
                        </div>
                    
                    <div className='option-title'>Public Transit</div>
                        <div className='input-container'>
                            <div className='input-title'>Distance(km) in Taxi: </div>
                            <input type="number" autoFocus={true} className='input' onChange={(e) => setTaxiDist(e.target.value)}></input>
                        </div>
                        <div className='input-container'>
                            <div className='input-title'>Distance(km) in Subway: </div>
                            <input type="number" autoFocus={true} className='input' onChange={(e) => setSubwayDist(e.target.value)}></input>
                        </div>
                        <div className='input-container'>
                            <div className='input-title'>Distance(km) in Bus: </div>
                            <input type="number" autoFocus={true} className='input' onChange={(e) => setBusDist(e.target.value)}></input>
                        </div>

                    <div className='option-title'>Flight</div>
                        <div className='input-container'>
                            <div className='input-title'>Distance(km) travelled anually: </div>
                            <input type="number" autoFocus={true} className='input' onChange={(e) => setFlightDist(e.target.value)}></input>
                        </div>
                </div>
                <div className='buttons-container'>
                    <div className='save-button' onClick={handleSave}>Save</div>
                    <div className='submit-button' onClick={handleSubmit}>Submit</div>
                </div>
                
            </div>
            
        </> ) : (
            <Results carResponse={carResponse} taxiResponse={taxiResponse} busResponse={busResponse} subwayResponse={subwayResponse} flightResponse={flightResponse} />

        )}
        
        </div>
    );
}