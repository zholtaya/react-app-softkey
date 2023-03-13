import avatar from '../assets/images/avatar.png';
const UserPage = () => {
    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="profile__body">
                        <div className="user_image">
                            <img src={avatar} alt="" />
                        </div>

                        <div className="user__information">
                            <div className="user_info">
                                <h2 className="user_name">UserUser</h2>
                                <a href="#" className="exit_button">
                                    Выйти
                                </a>
                            </div>
                            <div className="user_info">
                                <p className="user_data">Почта:</p>
                                <p className="user_data">useruser@mail.ru</p>
                            </div>
                            <div className="user_info">
                                <p className="user_data">Телефон:</p>
                                <p className="user_data">89274668550</p>
                            </div>
                            <div className="user_info">
                                <p className="user_data">Адрес:</p>
                                <p className="user_data">
                                    г. Казань, р-н Советский, ул. Галеева, дом
                                    14
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UserPage;