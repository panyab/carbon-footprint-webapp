import React from 'react'
import './Results.css'

export default function Results({ carResponse, taxiResponse, busResponse, subwayResponse, flightResponse }) {
    return (
        <div className='results-container'>
            <div className='header'>Calculate your carbon footprint</div>
            <div className='body'>
                Your carbon footprint is a measure of the amount of greenhouse gases, such as carbon dioxide, emitted due to our actions. 
                Why is this important? Our actions cause a significant increase of carbon into the atmosphere. Learn about how your transportation 
                choices impact carbon emissions below. 
            </div>
            <div className='form-container'>
                <div className='header2'>Your Transportation Carbon Footprints: </div>
                <div className='form'>
                    <div className='option-title'>Car</div>
                    <div className='results'> Your carbon footprint is: {""}
                        <span classname='special'> {carResponse.carbonEquivalent} </span> KGs </div>

                    <div className='option-title'>Public Transit</div>
                    <div className='results'> Your carbon footprint is: {""}
                        <span classname='special'> {taxiResponse.carbonEquivalent + busResponse.carbonEquivalent + subwayResponse.carbonEquivalent} </span> KGs </div>

                    <div className='option-title'>Flight</div>
                    <div className='results'> Your carbon footprint is: {""}
                        <span classname='special'> {flightResponse.carbonEquivalent} </span> KGs </div>

                </div>
            </div>
            
        </div>
    );
}