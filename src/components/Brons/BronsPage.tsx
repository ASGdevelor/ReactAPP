import React, { useState,useMemo } from "react";
import Option from "../Catalog/Option";
import Input from "../Brons/Input";
import Button from "../header/button";
import { useNavigate, useLocation } from "react-router-dom";
import airImage from '../../../src/components/Brons/assets/image.png';

const BronsPage: React.FC = () => {
  const location = useLocation();
  const { title, price, srcImg } = location.state || {};

  const [selectedSeat, setSelectedSeat] = useState<string | null>(null);
  const [flightTime, setFlightTime] = useState<string>("");
  const [date, setDate] = useState<string>(""); 

  const seats = useMemo(() => ({
    SectorA: ["A1", "A2", "A3", "A4", "A5"],
    SectorB: ["B1", "B2", "B3", "B4"],
    SectorC: ["C1", "C2", "C3"],
  }), []);

  const [availableSeats, setAvailableSeats] = useState(seats.SectorA);
  const navigate = useNavigate();
  

  
  const handleSectorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedClass = event.target.value;
    setAvailableSeats(seats[selectedClass as keyof typeof seats]);
    setSelectedSeat(null);
  };

  const handleSeatSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSeat(event.target.value);
  };

  const handleFlightTimeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFlightTime(event.target.value);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = new Date(event.target.value); 
    const today = new Date(); 
    const maxDate = new Date();
    maxDate.setFullYear(today.getFullYear() + 5); 
  
    if (selectedDate < today) {
      alert("Нельзя выбрать дату раньше сегодняшней!");
      return;
    }
  
    if (selectedDate > maxDate) {
      alert("Дата не должна превышать 5 лет от текущего года!");
      return;
    }
  
    setDate(event.target.value); 
  };
  

  const handleBooking = () => {
    const storedUser = localStorage.getItem("currentUser");
    if (!storedUser) {
      alert("Пожалуйста, войдите или зарегистрируйтесь для бронирования.");
      navigate("/authorization");
      return;
    }

    if (!selectedSeat || !date || !flightTime) {
      alert("Заполните все поля бронирования!");
      return;
    }

    const newBooking = {
      title,
      price,
      date,
      flightTime,
      seat: selectedSeat,
    };

    let user = JSON.parse(storedUser);
    user.bookings = [...user.bookings, newBooking];
    localStorage.setItem("currentUser", JSON.stringify(user));

    let users = JSON.parse(localStorage.getItem("users") || "[]");
    users = users.map((u: any) => (u.phone === user.phone ? user : u));
    localStorage.setItem("users", JSON.stringify(users));

    alert("Бронирование успешно оформлено!");
  };

  return (
    <section className="dark:text-white font-inter">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-x-12 font-inter">
        <div className="block-left">
          <div className="flex flex-col gap-8 mb-8">
            <h1 className="title text-left text-2xl md:text-4xl mb-2 font-semibold font-montserrat">Заявка на бронирование</h1>

            <Input type="date" title={date} cls="py-3 px-5 bg-lightGray mr-2 rounded-[35px] dark:bg-darkSubstrate" callback={handleDateChange} />

            <div className="flex flex-col sm:flex-row gap-5">
            
              <select onChange={handleFlightTimeChange} className="px-3 py-3 bg-substrateWhite w-100 text-center rounded-[35px] dark:bg-darkSubstrate">
                <Option value="" title="Выберите время полёта" />
                <Option value="8:00" title="8:00" />
                <Option value="9:00" title="9:00" />
                <Option value="10:00" title="10:00" />
                <Option value="12:00" title="12:00" />
                <Option value="13:00" title="13:00" />
                <Option value="15:00" title="15:00" />
                <Option value="16:00" title="16:00" />
                <Option value="18:00" title="18:00" />
                <Option value="19:00" title="19:00" />
                <Option value="21:00" title="21:00" />
                <Option value="22:00" title="22:00" />
              </select>

              <select onChange={handleSectorChange} className="px-3 py-3 bg-substrateWhite w-100 text-center rounded-[35px] dark:bg-darkSubstrate">
                <Option value="" title="Выберите сектор места" />
                <Option value="SectorA" title="Сектор A" />
                <Option value="SectorB" title="Сектор B" />
                <Option value="SectorC" title="Сектор C" />
              </select>

              <select onChange={handleSeatSelect} className="px-3 py-3 bg-substrateWhite w-100 text-center rounded-[35px] dark:bg-darkSubstrate">
                <Option value="" title="Выберите место" />
                {availableSeats.map((seat, index) => (
                  <Option key={index} value={seat} title={seat} />
                ))}
              </select>
            </div>
          </div>

          <Button title="Забронировать рейс" cls="block text-white px-5 py-3 bg-Action_W w-100 text-center rounded-[50px] dark:bg-darkAction" callback={handleBooking} />
        </div>

        <div className="block-image block rounded-[35px]">
          {srcImg && <img src={srcImg} alt={title} className="object-fill w-full h-full  rounded-[35px]" />}
        </div>
      </div>
    </section>
  );
};

export default BronsPage;
