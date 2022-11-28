import { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import Search from '../Search/Search';
import weatherboxModule from './WeatherBox.module.css';


export default function WeatherBox({ data, isLoading, setIsLoading }) {
  const [unit, setUnit] = useState('C');

  useEffect(() => {
    setIsLoading(false);
  }, [data]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className={weatherboxModule.wbBox}>
          <div className={weatherboxModule.box}>
            {data.cod === 200 ? (
              <>
                
                {/* ----- LOCATION : CITY & COUNTRY ----- */}
                <h2 className={weatherboxModule.location}>
                  {data.name},{' '}
                  <span className={weatherboxModule.country}>{data.sys.country}</span>
                </h2>
              
                
                {/* -------- WEATHER DATA -------- */}

                {/* TEMPERATURE */}
                <div className={weatherboxModule.degree}>
                  <p className={weatherboxModule.temp}>
                    {Math.round(
                      (unit === 'C'
                        ? data.main.temp
                        : (data.main.temp * 9) / 5 + 32) * 100
                    ) / 100}
                  </p>
                  <button
                    onClick={() => setUnit('C')}
                    className={`${weatherboxModule.cBtn} ${unit === 'C' && weatherboxModule.active}`}
                  >
                    C
                  </button>
                  <button
                    onClick={() => setUnit('F')}
                    className={`${weatherboxModule.fBtn} ${unit === 'F' && weatherboxModule.active}`}
                  >
                    F
                  </button>
                </div>

                {/* WEATHER - HUMIDITY - WIND */}
                <p className={weatherboxModule.weather}>{data.weather[0].main}</p>
                <p className={weatherboxModule.humidity}>Humidity {data.main.humidity}% </p>
                <p className={weatherboxModule.wind}>Wind {data.wind.speed} m/s</p>
              </>
            ) : (
              <div className={weatherboxModule.error}>Unable to find location</div>
            )}
          </div>
          
          <div className={weatherboxModule.search}>
          <Search isLoading={isLoading} setIsLoading={setIsLoading} />
          </div>
          </div>
        </>
      )}
    </>
  );
}
