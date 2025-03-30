import './Contacts.css';

function Contacts() {
  return (
    <div className="contacts-container">
      <h1 className="contacts-title">Контакты</h1>
      
      <div className="contacts-content">
        <div className="contact-card">
          <div className="contact-icon">📱</div>
          <div className="contact-info">
            <h3>Телефон</h3>
            <a href="tel:89150884359" className="contact-link">8 (915) 088-43-59</a>
          </div>
        </div>

        <div className="contact-card">
          <div className="contact-icon">✉️</div>
          <div className="contact-info">
            <h3>Email</h3>
            <a href="mailto:vkvavt96@mail.ru" className="contact-link">vkvavt96@mail.ru</a>
          </div>
        </div>

        <div className="contact-card">
          <div className="contact-icon">📷</div>
          <div className="contact-info">
            <h3>Instagram</h3>
            <a 
              href="https://instagram.com/weezyvasya" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-link"
            >
              @weezyvasya
            </a>
          </div>
        </div>

        <div className="contact-card">
          <div className="contact-icon">💻</div>
          <div className="contact-info">
            <h3>GitHub</h3>
            <a 
              href="https://github.com/weezyvasya" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-link"
            >
              github.com/weezyvasya
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;