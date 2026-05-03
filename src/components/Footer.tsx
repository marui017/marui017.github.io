import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="l-footer">
      <div className="l-footer__inner">
        <div className="l-footer__left">
          <Link to="/" className="l-footer__logo">marui</Link>
          <nav>
            <ul className="l-footer__nav-list">
              <li><Link to="/works"   className="l-footer__nav-link">WORKS</Link></li>
              <li><Link to="/about"   className="l-footer__nav-link">ABOUT</Link></li>
              <li><Link to="/contact" className="l-footer__nav-link l-footer__nav-link--contact">CONTACT</Link></li>
            </ul>
          </nav>
        </div>
        <p className="l-footer__copy">&copy; 2026 Marui</p>
      </div>
    </footer>
  )
}
