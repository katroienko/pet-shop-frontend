import styles from './Footer.module.css';
import Instagram from '../../../assets/Instagram';
import Wahtsapp from '../../../assets/Wahtsapp';
import Title from '../Title/Title';
import contacts from './contacts';

function Footer() {
  return (
    <footer>
      <div className={styles.container}>
        <Title>Contact</Title>

        <div className={styles.contactsWrap}>
          <div className={styles.contacts}>
            <div className={styles.blockBig}>
              <span>Phone</span>
              <p>{contacts.phone}</p>
            </div>
            <div className={styles.blockSmall}>
              <span>Social</span>
              <div className={styles.iconWrapper}>
                <a href={contacts.social.instagram} target="_blank" rel="noreferrer">
                  <Instagram />
                </a>
                <a href={contacts.social.whatsapp} target="_blank" rel="noreferrer">
                  <Wahtsapp />
                </a>
              </div>
            </div>
          </div>

          <div className={styles.contacts2}>
            <div className={styles.blockBig}>
              <span>Address</span>
              <p>{contacts.address}</p>
            </div>
            <div className={styles.blockSmall}>
              <span>Working Hours</span>
              <p>{contacts.workingHours}</p>
            </div>
          </div>
        </div>

        <div className={styles.MapWrapper}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.722333932115!2d13.355984176337872!3d52.50226563754287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84fb0e85329a1%3A0xa141f1e83418ee88!2sIT%20Career%20Hub!5e0!3m2!1sru!2sde!4v1747306226367!5m2!1sru!2sde"
            width="1360"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}

export default Footer;



// import styles from './Footer.module.css'
// import Instagram from '../../assets/Instagram'
// import Wahtsapp from '../../assets/Wahtsapp'
// import Title from '../Title/Title'

// function Footer() {
//     return (
//         <>
//             <footer >
//                 <div className={styles.container}>
//                     <Title >Contact</Title>
                   
//                     <div className={styles.contactsWrap}>
//                         <div className={styles.contacts} >
//                             <div className={styles.blockBig}>
//                                 <span>Phone</span>
//                                 <p>+49 30 915-88492</p>
//                             </div>                  
//                            <div className={styles.blockSmall}>
//                                 <span>Social</span>
//                                 <div className={styles.iconWrapper}>
//                                     <a href="https://www.instagram.com/" target="_blank">
//                                         <Instagram />
//                                     </a>
//                                     <a href="https://www.whatsapp.com/" target="_blank">
//                                         <Wahtsapp />
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className={styles.contacts2} >
//                             <div className={styles.blockBig}>
//                                 <span>Address</span>
//                                 <p>Wallstraẞe 9-13, 10179 Berlin, Deutschland</p>
//                             </div>
//                             <div className={styles.blockSmall}>
//                                 <span>Working Hours</span>
//                                 <p>24 hours a day</p>
//                             </div>
//                         </div>


//                     </div>

//                     <div className={styles.MapWrapper}>
//                         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.722333932115!2d13.355984176337872!3d52.50226563754287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84fb0e85329a1%3A0xa141f1e83418ee88!2sIT%20Career%20Hub!5e0!3m2!1sru!2sde!4v1747306226367!5m2!1sru!2sde" width="1360"
//                             height="350"
//                             style={{ border: 0 }}
//                             allowFullScreen
//                             loading="lazy"
//                             referrerPolicy="no-referrer-when-downgrade"></iframe>
//                     </div>
//                 </div>
//             </footer>
//         </>
//     )
// }

// export default Footer