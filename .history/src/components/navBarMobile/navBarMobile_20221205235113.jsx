import React from 'react';
import { Link } from 'react-scroll';
import './navBarMobile.css';

const navBarMobile = ({ activeBurger, setActiveBurger }) => {
  const onClickNavFactions = (e, faction) => {
    e.stopPropagation();
    if (window.innerWidth <= 768) {
      switch (faction) {
        case 'home':
          {
            window.scrollTo(0, 0);
            setActiveBurger(false);
          }
          break;
        case 'factions':
          {
            window.scrollTo(0, window.innerHeight);
            setActiveBurger(false);
          }
          break;
        case 'roadmap':
          {
            window.scrollTo(0, 2000);
            setActiveBurger(false);
          }
          break;
        case 'collaborations':
          {
            window.scrollTo(0, 3802);
            setActiveBurger(false);
          }
          break;
        case 'faq':
          {
            window.scrollTo(0, 4850);
            setActiveBurger(false);
          }
          break;
        case 'team':
          {
            window.scrollTo(0, 6508);
            setActiveBurger(false);
          }
          break;
      }
    }
  };

  return (
    <section className="burger-menu">
      <ul className="burger-menu-list">
        {/* <li onClick={(e) => onClickNavFactions(e, 'home')}>Home</li>
        <li onClick={(e) => onClickNavFactions(e, 'factions')}>Factions</li>
        <li onClick={(e) => onClickNavFactions(e, 'roadmap')}>Roadmap</li>
        <li onClick={(e) => onClickNavFactions(e, 'collaborations')}>Collaborations</li>
        <li onClick={(e) => onClickNavFactions(e, 'faq')}>FAQ</li>
        <li onClick={(e) => onClickNavFactions(e, 'team')}>Team</li> */}
        <li>
          <Link
            to="main"
            spy={true}
            smooth={true}
            offset={-50}
            duration={0}
            onClick={() => setActiveBurger(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="factions"
            spy={true}
            smooth={true}
            offset={50}
            duration={0}
            onClick={() => setActiveBurger(false)}>
            Factions
          </Link>
        </li>
        <li>
          <Link
            to="roadmap"
            spy={true}
            smooth={true}
            offset={50}
            duration={0}
            onClick={() => setActiveBurger(false)}>
            Roadmap
          </Link>
        </li>
        <li>
          <Link
            to="collaborations"
            spy={true}
            smooth={true}
            offset={-180}
            duration={0}
            onClick={() => setActiveBurger(false)}>
            Collaborations
          </Link>
        </li>
        <li>
          <Link
            to="faq"
            spy={true}
            smooth={true}
            offset={-180}
            duration={0}
            onClick={() => setActiveBurger(false)}>
            FAQ
          </Link>
        </li>
        <li>Team</li>
      </ul>
      <ul className="burger-menu-socials">
        <li>
          <a>
            <svg
              width="22"
              height="17"
              viewBox="0 0 22 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17.9892 1.53549C16.5965 0.883856 15.1231 0.420844 13.608 0.158691C13.4193 0.499883 13.1988 0.958787 13.0467 1.32387C11.4132 1.07824 9.79467 1.07824 8.19116 1.32387C8.03919 0.95887 7.81372 0.499883 7.62326 0.158691C6.10668 0.420965 4.63206 0.885156 3.2387 1.53889C0.466032 5.72883 -0.285618 9.81459 0.0901657 13.8425C1.92918 15.2158 3.71138 16.0501 5.46354 16.596C5.899 15.9972 6.28393 15.3632 6.61437 14.7006C5.98526 14.4611 5.37878 14.1659 4.80214 13.8186C4.95389 13.7062 5.10207 13.5889 5.24645 13.4672C8.74066 15.1015 12.5373 15.1015 15.9899 13.4672C16.1349 13.5881 16.283 13.7053 16.4341 13.8186C15.8565 14.1669 15.2489 14.4626 14.6186 14.7023C14.9509 15.3676 15.3351 16.0022 15.7694 16.5977C17.5232 16.0519 19.3071 15.2176 21.1461 13.8425C21.5871 9.17319 20.3929 5.12484 17.9892 1.5354V1.53549ZM7.09044 11.3654C6.04148 11.3654 5.18125 10.3861 5.18125 9.19368C5.18125 8.00121 6.02315 7.02027 7.09044 7.02027C8.15782 7.02027 9.01797 7.99946 8.99964 9.19368C9.0013 10.3861 8.15782 11.3654 7.09044 11.3654ZM14.1458 11.3654C13.0968 11.3654 12.2367 10.3861 12.2367 9.19368C12.2367 8.00121 13.0785 7.02027 14.1458 7.02027C15.2132 7.02027 16.0733 7.99946 16.055 9.19368C16.055 10.3861 15.2132 11.3654 14.1458 11.3654Z"
                fill="white"
              />
            </svg>
          </a>
        </li>
        <li>
          <a>
            <svg
              width="23"
              height="18"
              viewBox="0 0 23 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22.2842 2.19138C21.4586 2.55713 20.5828 2.79721 19.6861 2.90363C20.6202 2.34382 21.3373 1.45735 21.675 0.401116C20.7871 0.928013 19.8157 1.29924 18.8027 1.49877C17.9775 0.6197 16.802 0.0703125 15.5009 0.0703125C13.0028 0.0703125 10.9774 2.09561 10.9774 4.59357C10.9774 4.94814 11.0175 5.29333 11.0945 5.62447C7.33522 5.43578 4.0022 3.635 1.77115 0.898313C1.38187 1.56638 1.15881 2.34348 1.15881 3.17234C1.15881 4.7417 1.95744 6.12615 3.1711 6.93736C2.45278 6.91486 1.75026 6.72085 1.1222 6.37152C1.12195 6.39047 1.12195 6.40941 1.12195 6.42845C1.12195 8.62005 2.68114 10.4483 4.75037 10.8639C4.08427 11.045 3.38558 11.0715 2.70767 10.9414C3.28324 12.7384 4.95379 14.0461 6.9331 14.0828C5.38502 15.2959 3.43456 16.0191 1.31538 16.0191C0.950213 16.0191 0.590213 15.9976 0.236328 15.9559C2.23812 17.2393 4.61575 17.9881 7.1702 17.9881C15.4904 17.9881 20.0401 11.0955 20.0401 5.11815C20.0401 4.92196 20.0358 4.72689 20.027 4.53293C20.9126 3.89276 21.6769 3.09984 22.2842 2.19138Z"
                fill="white"
              />
            </svg>
          </a>
        </li>
        <li>
          <a>
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.5479 0.5625C5.50781 0.5625 0.610352 5.45996 0.610352 11.5C0.610352 17.54 5.50781 22.4375 11.5479 22.4375C17.5879 22.4375 22.4854 17.54 22.4854 11.5C22.4854 5.45996 17.5879 0.5625 11.5479 0.5625ZM17.7979 6.75635L16.8018 7.71094C16.7139 7.77685 16.6724 7.88428 16.6895 7.98926V15.0132C16.6724 15.1206 16.7139 15.228 16.8018 15.2915L17.7783 16.2461V16.4585H12.876V16.2559L13.8843 15.2769C13.9844 15.1768 13.9844 15.1475 13.9844 14.9985V9.31494L11.1768 16.4341H10.7983L7.53174 9.31494V14.0879C7.50244 14.2881 7.57324 14.4907 7.71484 14.6348L9.02832 16.2241V16.4365H5.29785V16.2241L6.61133 14.6348C6.68053 14.5633 6.73203 14.4766 6.76171 14.3816C6.79139 14.2867 6.79841 14.1861 6.78223 14.0879V8.57031C6.79932 8.4165 6.74072 8.26758 6.62353 8.1626L5.45654 6.75635V6.54395H9.08203L11.8799 12.6841L14.3433 6.54883H17.7979V6.75635Z"
                fill="white"
              />
            </svg>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default navBarMobile;
