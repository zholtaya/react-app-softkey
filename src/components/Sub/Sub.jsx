import email from "../../assets/images/email.png";

function Sub() {
    return (
        <section className="mail">
            <div className="container">
                <div className="content_mail">
                    <div className="mail_icon">
                        <img src={email} alt="" />
                    </div>
                    <h4>Подписка на рассылку</h4>
                    <h5>Узнайте больше о новых акциях и новиках</h5>

                    <form action="" className="mail_form">
                        <input
                            type="text"
                            placeholder="Введите почту"
                            name="name"
                            className="input_mail"
                        />
                        <button type="submit" className="button_mail">
                            Подписаться
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Sub;
