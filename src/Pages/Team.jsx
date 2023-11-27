import { IconPhone } from '@tabler/icons-react';
import Footer from '../components/Footer';
import HeroPages from '../components/HeroPages';
import Person1 from '../images/team/1.jpg';
import Person2 from '../images/team/2.jpg';
import Person3 from '../images/team/3.jpg';
import Person4 from '../images/team/4.jpg';
import Person5 from '../images/team/5.jpg';
import Person6 from '../images/team/6.jpg';

function Team() {
  const teamPpl = [
    { img: Person1, name: 'Сергій Собран', role: 'Головний пастор' },
    { img: Person2, name: 'Степан Немеш', role: 'Пастор' },
    { img: Person3, name: 'Максим Островерх', role: 'Диякон' },
    { img: Person4, name: 'Костянтин Малильо', role: 'Лідер молоді' },
    { img: Person5, name: 'Ярослав Іщенко', role: 'Тренер в фітнес залі' },
    { img: Person6, name: 'Євгеній Короленко', role: 'Водій білої тачки' },
  ];
  return (
    <>
      <section className="team-page">
        <HeroPages name="Наша команда" />
        <div className="cotnainer">
          <div className="team-container">
            {teamPpl.map((ppl, id) => (
              <div key={id} className="team-container__box">
                <div className="team-container__box__img-div">
                  <img src={ppl.img} alt="team_img" />
                </div>
                <div className="team-container__box__descr">
                  <h3>{ppl.name}</h3>
                  <p>{ppl.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Будь з нами на звʼязку!</h2>
              <span>
                <IconPhone width={40} height={40} />
                <h3>(123) 456-7869</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Team;
