
import logo from '../../assets/icons/header/Logo.svg'
import style from './index.module.scss'
const Footer = () => {
  return (
    <footer>
        {/*//? Header */}
        <div className={style.allFooter}>
            <div className={style.catchLeftFooter}>
                <div className={style.iconOfHead}>
                    <img src={logo}/>
                </div>
                <p>The biggest marketplace managed by Ideologist corp, which provides various kinds of daily needs and hobbies.</p>
            </div>
            <div className={style.catchFooterRight}>
                <div className={style.informationOfFooter}>
                    <h1 className={style.li_tittle}>About Lenny</h1>
                    <ul>
                        <li>Information</li>
                        <li>Store Lactor</li>
                        <li>Bulk Purchase</li>
                        <li>Alteration Services</li>
                        <li>Gift Delivery Service</li>
                        <li>Live Station</li>
                    </ul>
                </div>
                <div className={style.informationOfFooter}>
                    <h1 className={style.li_tittle}>About Lenny</h1>
                    <ul>
                        <li>FAQ</li>
                        <li>Return Policy</li>
                        <li>Privacy Policy</li>
                        <li>Accessibillity</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className={style.informationOfFooter}>
                    <h1 className={style.catchOfInfos}>Account</h1>
                    <ul>
                        <li>Membership</li>
                        <li>Address</li>
                        <li>Cupons</li>
                    </ul>
                </div>
                <div className={style.informationOfFooter}>
                    <h1 className={style.catchOfInfos}>Contact Us</h1>
                    <ul>
                        <li>For  Lenny Consumer Complaint Services</li>
                        <li>(684) 555-0102 and curtis.weaver@example.com</li>
                        <div className={style.lineBreak}></div>
                        <li>Customers Complaint Service</li>
                        <li>Directorate Generate of the Republic of Indonesia</li>
                        <li>(480) 555-0103</li>
                    </ul>
                </div>
            </div>
        </div>
        {/*//? Footer */}
        <div className={style.catchFooterBottom}> 
            <div className={style.catchLeftSide}>
                <p>COPYRIGHT © LENNY CO., LTD. ALL RIGHTS RESERVED.</p>
            </div>
            <div className={style.footer_right_bottom}> 
                <p>Cavid Eliyev</p>
                <p>Elvin Qurbanov</p>
            </div>
        </div>
    </footer>

   
  )
}
export default Footer