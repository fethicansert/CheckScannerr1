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

  const navLinks = ['checkscan','add-user','data-management', 'user-list', 'logs']
  //SideBardaki navagation itemlerinin iconlari
  const navIcons = [
    <FaMoneyCheck color='white' size={20}/>, 
    <HiUserAdd color='white' size={20}/>, 
    <FaDatabase color='white' size={20}/>, 
    <FaListAlt color='white' size={20}/>, 
    <PiSealWarningFill color='white' size={20}/>
  ]

  const navItems = navNames.map((name, index) => <NavItem name={name} icon={navIcons[index]}  link={navLinks[index]} />);

  return (
    <div className='side-bar'>
      {navItems}
    </div>
  )
}

export default Sidebar
