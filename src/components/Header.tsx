import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const close = () => setMenuOpen(false)

  return (
    <header className="l-header">
      <div className="l-header__inner">
        <Link to="/" className="l-header__logo" onClick={close}>marui</Link>

        <div className="c-gnav">
          <nav className={`c-gnav__nav${menuOpen ? ' is-open' : ''}`}>
            <ul className="c-gnav__list">
              <li><Link to="/works"   className="c-gnav__link" onClick={close}>WORKS</Link></li>
              <li><Link to="/about"   className="c-gnav__link" onClick={close}>ABOUT</Link></li>
              <li><Link to="/contact" className="c-gnav__link c-gnav__link--contact" onClick={close}>CONTACT</Link></li>
            </ul>
          </nav>

          <button
            className={`c-gnav__hamburger${menuOpen ? ' is-open' : ''}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'メニューを閉じる' : 'メニューを開く'}
            aria-expanded={menuOpen}
          >
            <span className="c-gnav__bar" />
            <span className="c-gnav__bar" />
            <span className="c-gnav__bar" />
          </button>
        </div>
      </div>
    </header>
  )
}
