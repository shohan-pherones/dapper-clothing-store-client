import PaymentImage from "../../assets/images/payment.png";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Men</span>
          <span>Women</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
            ipsa tempore, asperiores voluptate quia aliquam unde voluptas culpa
            suscipit sed placeat iusto ab architecto recusandae labore quod sit
            aspernatur? Voluptate?
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
            ipsa tempore, asperiores voluptate quia aliquam unde voluptas culpa
            suscipit sed placeat iusto ab architecto recusandae labore quod sit
            aspernatur? Voluptate?
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Dapper</span>
          <span className="copyright">
            &copy; Copyright {new Date().getFullYear()} Dapper. All rights
            reserved.
          </span>
        </div>
        <div className="right">
          <img src={PaymentImage} alt="payment" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
