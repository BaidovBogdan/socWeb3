import { Button, Input } from 'antd';
import { useState } from 'react';
import ModalForm from '../../../features/modalFrom/ui/modalForm';
import Logo from '../../../../public/images/logo/3097041.png';
import Friends from '../../../../public/images/friends/friends-8.png';

export default function Header() {
  const [modalVisible, setModalVisible] = useState(false);
  const [userName, setUserName] = useState('');
  const [passwordOne, setPasswordOne] = useState('');
  const [passwordTwo, setPasswordTwo] = useState('');
  const [email, setEmail] = useState('');

  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  const btnOk = () => {
    if (
      email.length <= 3 &&
      userName.length <= 3 &&
      passwordOne.length <= 3 &&
      passwordTwo.length <= 3 &&
      email.length <= 3
    ) {
      alert('Логин или пароль введены некорректно');
    } else {
      setModalVisible(false);
      setEmail('');
      setUserName('');
      setPasswordOne('');
      setPasswordTwo('');
    }
  };

  return (
    <>
      <nav className="flex rounded-md h-16 fixed w-full justify-between flex-row pt-4 bg-teal-300 bg-opacity-30">
        <div className="ml-5">
          <div>
            <img src={Logo} className="size-8" alt="" />
          </div>
        </div>
        <div className="flex">
          <Input className="h-7" type="text" />
          <Button className=" h-7 ml-5 bg-teal-500 bg-opacity-20">Найти</Button>
        </div>
        <div className="flex mr-5">
          <div className="mr-5">
            <img src={Friends} className="size-9" alt="" />
          </div>
          <div>lang</div>
          <div className="ml-16">
            <Button
              onClick={() => openModal()}
              className="bg-teal-500 bg-opacity-20"
            >
              Вход
            </Button>
            {modalVisible && (
              <ModalForm
                modalVisible={modalVisible}
                closeModal={closeModal}
                btnOk={btnOk}
                setUserName={setUserName}
                setPasswordOne={setPasswordOne}
                setPasswordTwo={setPasswordTwo}
                setEmail={setEmail}
              />
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
