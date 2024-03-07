import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'



const TemperatureController = () => {
    const [temperature, setTemperature] = useState(0);
    const increaseTemperature = () => {
        setTemperature(temperature + 1);
    }
    const decreaseTemperature = () => {
        setTemperature(temperature - 1);
    }

    
    
    return (
        <div className='container col-4'>
            <h3 className='text-center'>Temperature Controller App</h3>
            <div className={`card mx-auto p-4 ${temperature > 30 ? "bg-danger" : temperature > 20 ? "bg-primary" : temperature > 10 ? "bg-info" : "bg-dark"}`} style={{width: 400}}>
                <h1 className={`card d-flex align-items-center justify-content-center ${temperature > 35 ? "bg-danger text-warning" : temperature > 30 ? "bg-warning text-info" : temperature > 20 ? "bg-info text-success" : temperature < 0 ? "bg-dark text-white"  : "bg-success"}`}
                style={{ height: 350, width:350, border: "5px solid #666", borderRadius:'50%'}}
                >{temperature}
                </h1>
                <div className="d-flex align-item-center justify-content-between">
                    <button onClick={increaseTemperature}>Increase</button>
                    <button onClick={decreaseTemperature}>Decrease</button>
                </div>
            </div>
        </div>
    )
}

export default TemperatureController
