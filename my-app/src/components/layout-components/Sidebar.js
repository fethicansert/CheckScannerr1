import React from 'react'
import NavItem from './NavItem';
import { HiUserAdd } from "react-icons/hi";
import { FaMoneyCheck } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaListAlt } from "react-icons/fa";
import { PiSealWarningFill } from "react-icons/pi";


const Sidebar = () => {

  //SideBardaki navagation itemlerinin isimleri
  const navNames = ['Çek Okuma', 'Kullanici Ekle', 'Veri Yonetimi', 'Personel Listesi', 'Log Kontrol'];

  //NavItem router yollari(path) => App.js deki route complarininda verilen yollarla ayni olmai!
  const navLinks = ['checkscan','add-user','data-management', 'user-list', 'logs']

  //SideBardaki navagation itemlerinin iconlari
  const navIcons = [
    <FaMoneyCheck className='sidebar-icon' color='white' />, 
    <HiUserAdd className='sidebar-icon' color='white' />, 
    <FaDatabase className='sidebar-icon' color='white' />, 
    <FaListAlt className='sidebar-icon' color='white' />, 
    <PiSealWarningFill className='sidebar-icon' color='white' />
  ]

  //Dongu ile NavItem Componentlerinin olusturulmasi
  const navItems = navNames.map((name, index) => 
    <NavItem 
      key={index} 
      name={name} 
      icon={navIcons[index]}  
      link={navLinks[index]} 
    />);

  return (
    <div className='side-bar'>
      {navItems}
    </div>
  )
}

export default Sidebar
