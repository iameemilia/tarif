import React, { useState } from "react";
import "./Tariff.css";

const Tariff = ({ data }) => {
    const { name, price, speed, volume } = data;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleButtonClick = () => {
        setIsModalOpen(true);
    };

    return (
        <div
            className={`tariff ${price === 550 ? 'big' : ''} ${price === 300 ? 'red' : price === 450 ? 'blue' : price === 550 ? 'green' : price === 1000 ? 'black' : ''}`}
            style={{ cursor: "pointer" }}
        >
            <h2 className="tariff-name">{name}</h2>
            <p className="tariff-price">{price} ₽/мес</p>
            <p className="tariff-speed">{speed}</p>
            <p className="tariff-volume">{volume}</p>
            <button className="tariff-button" onClick={handleButtonClick} style={{ cursor: "pointer" }} >ВЫБРАТЬ ТАРИФ</button>

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h2 className="modal-title">Оформить тариф</h2>
                        <form className="modal-form">
                            <input type="text" placeholder="Ваше имя" />
                            <input type="email" placeholder="Ваш email" />
                            <input type="tel" placeholder="Ваш телефон" />
                            <button type="submit">Оформить</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Tariff;
