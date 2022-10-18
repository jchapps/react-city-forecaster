import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./forecast.css";

const HOURS = ["3", "6", "9", "12", "15", "18", "21", "24"];

const Forecast = ({ data }) => {
  return (
    <>
      <div className="forecast-title">Next 24 hours</div>
      <Accordion allowZeroExpanded>
        {data.list.slice(0, 8).map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="hourly-item">
                  <img
                    alt="weather"
                    className="icon-small"
                    src={`icons/${item.weather[0].icon}.png`}
                  />
                  <label key={index} className="hour">
                    {HOURS[index]} Hours later 🕑
                  </label>
                  <label key={index} className="description">
                    {item.weather[0].description}
                  </label>
                  <label key={index} className="temp">
                    {Math.round(item.main.temp)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="hourly-details-grid">
                <div className="hourly-details-grid-item">
                  <label>Pressure:</label>
                  <label>{item.main.pressure} hPa</label>
                </div>
                <div className="hourly-details-grid-item">
                  <label>Humidity:</label>
                  <label>{item.main.humidity} %</label>
                </div>
                <div className="hourly-details-grid-item">
                  <label>Clouds:</label>
                  <label>{item.clouds.all} %</label>
                </div>
                <div className="hourly-details-grid-item">
                  <label>Windspeed:</label>
                  <label>{item.wind.speed} m/s</label>
                </div>
                <div className="hourly-details-grid-item">
                  <label>Feels like:</label>
                  <label>{Math.round(item.main.feels_like)} °C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
