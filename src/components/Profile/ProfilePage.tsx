import React, { useEffect, useState,useMemo } from "react";
import AirImage from './assets/image.png'
import Input from "../Catalog/Input";
import Button from "../header/button";

interface IUserProfile {
  fio: string;
  phone: string;
  bookings?: IBooking[];
}

interface IBooking {
  title: string;
  price: number;
  date: string;
  flightTime: string;
  seat: string;
}

const ProfilePage: React.FC = () => {
  const [user, setUser] = useState<IUserProfile | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setEditedFio(parsedUser.fio);
        setEditedPhone(parsedUser.phone);
      } catch (error) {
        console.error("Ошибка загрузки пользователя:", error);
      }
    }
  }, []);

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedFio, setEditedFio] = useState<string>("");
  const [editedPhone, setEditedPhone] = useState<string>("");


   const [valueCard, SetValue] = useState<string>("");
          
   const temp = user?.bookings ? [...user.bookings] : [];
   
   //const filterCard = temp.filter(card => card.title.toLowerCase().includes(valueCard.toLowerCase()));

    const filterCard = useMemo(() => {
           return temp.filter(card =>
               card.title.toLowerCase().includes(valueCard.toLowerCase())
           );
       }, [valueCard,temp]);

   function changeInfo() {
        setIsEditing(!isEditing);
   }

   const handleSaveChanges = () => {
    if (!editedFio || !editedPhone) {
      alert("Заполните все поля!");
      return;
    }

    if ((editedFio.length<3) || !(/^[A-Za-zА-Яа-яЁё]+$/.test(editedFio))) {
      alert("Логин введен некорректно!");
      return;
    }

    if (!/^\+375 \(\d{2}\) \d{3} \d{2} \d{2}$/.test(editedPhone)) {
      alert("Телефон должен быть в формате +375 (XX) XXX XX XX!");
      return;
    }

    const updatedUser = { ...user, fio: editedFio, phone: editedPhone };
    localStorage.setItem("currentUser", JSON.stringify(updatedUser));
    setUser(updatedUser);
    setIsEditing(false);
  };

  const FunckCanselBron=(bookingIndex: number)=> {
    if(!user) {
      return;
    }
      const updatedBookings=user.bookings?.filter((_, index)=>index !== bookingIndex);
      const updateUser={...user,bookings:updatedBookings};
      localStorage.setItem("currentUser",JSON.stringify(updateUser));
      setUser(updateUser);
  }
  const handleLogout=()=> {
     localStorage.removeItem("currentUser");  
  setUser(null);
  }


  return (
    <section className="profile-page dark:text-white font-inter">
      <h1 className="text-start title  text-2xl md:text-4xl mb-8 font-semibold dark:text-white font-montserrat">Личный кабинет</h1>
      {user ? (
        <div>
          <div className="flex gap-y-3 flex-col md:flex-row justify-between px-[40px] py-8 shadow-custom rounded-[35px] mb-10 dark:bg-darkSubstrate items-center">
            <div className="flex gap-x-6 items-center justify-center">
              <img src={AirImage} className="block" alt="иконка" />
              <div>

              {isEditing ? (
                  <>
                    <Input type="text" title={editedFio} callback={(e) => setEditedFio(e.target.value)} />
                    <Input type="tel" title={editedPhone} callback={(e) => setEditedPhone(e.target.value)} />
                  </>
                ) : (
                  <>
                    <h3 className="text-start text-3xl font-semibold">{user.fio}</h3>
                    <p className="text-start text-lg">{user.phone}</p>
                  </>
                )}

              </div>
            </div>
            {isEditing ?
            ( <Button title="Сохранить" cls="block w-auto py-2 px-2 text-white button 
               bg-Action_W text-center rounded-[30px] sm:w-40 sm:py-4 sm:px-7 dark:bg-darkAction" callback={handleSaveChanges}/>)
            : (
              (
              <div className="flex gap-x-4">
                 <Button title="Изменить" cls="block w-auto py-2 px-2 text-white button  bg-Action_W text-center rounded-[30px] 
                sm:w-40 sm:py-4 sm:px-7 dark:bg-darkAction" callback={changeInfo}/>
        
                <Button title="Выйти" callback={handleLogout} cls="block w-auto py-2 px-2 text-white button  bg-red-500 text-center rounded-[30px] 
                sm:w-40 sm:py-4 sm:px-7 dark:bg-red-600"/>
              </div>
              ) 
            )
          }
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="block text-start title  text-2xl md:text-4xl font-semibold dark:text-white font-montserrat mb-3 md:mb-0">Ваши бронирования:</h2>
          <Input title={valueCard} callback={(event)=>(SetValue(event.target.value))}/>
          </div>
          {user.bookings && user.bookings.length > 0 ? (
            <div className="flex flex-col gap-5 ">
              {filterCard.map((booking, index) => (
                <div key={index} className="flex flex-col md:flex-row justify-between px-[50px] py-10 shadow-custom rounded-[35px] mb-10 items-center dark:bg-darkSubstrate">
                  <div className="flex flex-col justify-start items-start">
                    <span className="block">{booking.date}</span>
                  <p className="text-start text-2xl font-semibold">{booking.title}</p>
                    </div>

                    <p className=" block text-lg">Время: {booking.flightTime}</p>
                    <p className="text-lg">Цена билета {booking.price} руб</p>
                  <div className="flex flex-row items-center gap-x-4">
                  <p className="text-lg">Ваше место: {booking.seat}</p>

                  <Button title="Отменить" callback={()=>FunckCanselBron(index)} cls="block w-auto py-2 px-2 text-white button  bg-red-500 text-center rounded-[30px] 
                sm:w-40 sm:py-4 sm:px-7 dark:bg-red-600"/>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>Бронирований пока нет.</p>
          )}
        </div>
      ) : (
        <p>Пользователь не авторизован.</p>
      )}
    </section>
  );
};

export default ProfilePage;


