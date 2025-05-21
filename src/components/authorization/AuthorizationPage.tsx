import AirlineImage from '../../../src/components/authorization/assets/image.png';
import React, { useState } from "react";
import Input from './Input';
import Button from '../header/button';
import { useNavigate } from 'react-router-dom';

const AuthorizationPage: React.FC = () => {

  const [fio, setFio] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");

   const navigate=useNavigate();

  const ValidationFIO = (event: React.ChangeEvent<HTMLInputElement>) => {
    const validvalue = event.target.value;
    setFio(validvalue);
  };

  const ValidationTel = (event: React.ChangeEvent<HTMLInputElement>) => {
    let input = event.target.value;
    setPhone(input);
};

  const handleRegister = () => {
    if (!fio || !phone || !password) {
      alert("Заполните все поля для регистрации!");
      return;
    }

    if (phone.length>20) {
      alert("Номер телефона не может быть таким длинным");
      return;
    }
    if ((fio.length<4) || !(/^[A-Za-zА-Яа-яЁё]+$/.test(fio))) {
      alert("Некорректный формат. Логин должен содержать только буквы и минимум 4 буквы).")
      return;
    }
    if (!(/^\+375 \(\d{2}\) \d{3} \d{2} \d{2}$/.test(phone))) {
      alert("Некорректный формат.(+375 (00) 0000000)")
      return;
    }
  

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const existingUser = users.find((user: any) => user.phone === phone);
    if (existingUser) {
      alert("Пользователь с таким номером уже зарегистрирован!");
      return;
    }

    const newUser = {
      fio,
      phone,
      password,
      bookings: [] 
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Регистрация прошла успешно!");
    localStorage.setItem("currentUser", JSON.stringify(newUser)); 
  };

  const handleLogin = () => {
    if (!fio || !phone || !password) {
      alert("Заполните все поля для входа!");
      return;
    }
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const user = users.find((u: any) => u.phone === phone && u.password === password);
    
    if (user) {
      alert("Вход выполнен успешно!");
      localStorage.setItem("currentUser", JSON.stringify(user)); 
      navigate("/profile");
    } else {
      alert("Неверные данные для входа");
    }
  };
  

  return (
    <section className='font-inter dark:text-white'>
      <div className='flex flex-col gap-x-[150px] justify-center lg:flex-row'>
        <div className='flex flex-col gap-6 justify-center items-center lg:items-start'>
          <h1 className='title text-left text-2xl md:text-4xl mb-3 font-semibold font-montserrat'>Авторизация / Регистрация</h1>
          <Input 
            type='text'
            cls='bg-substrateWhite py-5 pl-8 rounded-primary w-full sm:w-[400px] dark:bg-darkSubstrate'
            placeholder='Введите логин...'
            value={fio}
            callback={ValidationFIO}
          />
          <Input 
            type='tel'
            cls='bg-substrateWhite py-5 pl-8 rounded-primary w-full sm:w-[400px] dark:bg-darkSubstrate'
            placeholder='Номер телефона...'
            value={phone}
            callback={ValidationTel}
          />
          <Input 
            type='password'
            cls='bg-substrateWhite py-5 pl-8 rounded-primary w-full sm:w-[400px] dark:bg-darkSubstrate'
            placeholder='Введите пароль...'
            value={password}
            callback={(e) => setPassword(e.target.value)}
          />

          <div className='flex flex-col justify-center gap-x-4 gap-y-4 sm:flex-row'>
            <Button 
              callback={handleRegister} 
              title='Зарегистрироваться'
              cls=" dark:text-white text-black border-Action_W border-2 button py-4 px-6 text-center rounded-[30px] hover:bg-Action_W hover:text-white dark:hover:bg-darkAction" 
            />
            <Button 
              callback={handleLogin} 
              title='Войти'
              cls="dark:text-white text-black py-4 px-[60px] border-Action_W border-2 text-center rounded-[30px] hover:bg-Action_W hover:text-white dark:hover:bg-darkAction" 
            />
          </div>
        </div>
        <div>
          <img 
            src={AirlineImage} 
            className='rounded-primary object-cover w-full h-full hidden lg:block' 
            alt="АвиаПерелёты" 
          />
        </div>
      </div>
    </section>
  );
};

export default AuthorizationPage;
