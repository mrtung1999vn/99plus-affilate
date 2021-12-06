import React from 'react'

function Header() {
    return (
      <header className='header clearfix'>
        {/*CENTERED MENU*/}
        <div className='centered-menu-wrap'>
          <div className='logo-block mobile'>
            <a className='logo' href='./images/99plus_studio.png'>
              {/* <img
                className='f-logo'
                src='./images/99plus_studio.png'
                alt='Miami'
              /> */}
            </a>
          </div>
          <nav className='main-nav'>
            {/* Site menu */}
            <ul id='menu-top-left-menu' className='anchor-navigation'>
              <li
                id='menu-item-485'
                className='menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children page-dropdown nav-item menu-item-485'>
                <a href='./'>Trang chủ</a>
                <i className='fa fa-angle-down' />
                {/* <ul className='dropdown-menu'>
                  <li
                    id='menu-item-486'
                    className='menu-item menu-item-type-post_type menu-item-object-page menu-item-home nav-item menu-item-486'>
                    <a href='https://miami.foxthemes.me/'>Home page 1</a>
                  </li>
                  <li
                    id='menu-item-815'
                    className='menu-item menu-item-type-custom menu-item-object-custom nav-item menu-item-815'>
                    <a href='index128d.html?demo=2&about=791&event=797&reservation=808&news=803'>
                      Home page 2
                    </a>
                  </li>
                  <li
                    id='menu-item-816'
                    className='menu-item menu-item-type-custom menu-item-object-custom nav-item menu-item-816'>
                    <a href='https://miami.foxthemes.me/home-3/?demo=3&about=788&event=794&reservation=805&news=800'>
                      Home page 3
                    </a>
                  </li>
                </ul> */}
              </li>
              <li
                id='menu-item-844'
                className='menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-844'>
                <a
                  href='https://miami.foxthemes.me/#about'
                  className='anchor-scroll'>
                  About
                </a>
              </li>
              <li
                id='menu-item-854'
                className='menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-854'>
                <a
                  href='https://miami.foxthemes.me/#team'
                  className='anchor-scroll'>
                  Team
                </a>
              </li>
              <li
                id='menu-item-855'
                className='menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-855'>
                <a
                  href='https://miami.foxthemes.me/#services'
                  className='anchor-scroll'>
                  Services
                </a>
              </li>
              <li
                id='menu-item-856'
                className='menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-856'>
                <a
                  href='https://miami.foxthemes.me/#events'
                  className='anchor-scroll'>
                  Events
                </a>
              </li>
              <li
                id='menu-item-857'
                className='menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-857'>
                <a
                  href='https://miami.foxthemes.me/#gallery'
                  className='anchor-scroll'>
                  Gallery
                </a>
              </li>
            </ul>
            <div className='logo-block'>
              <a className='logo' href='https://miami.foxthemes.me/'>
                <img
                  className='f-logo'
                  src='./images/99plus_studio.png'
                  alt='Miami'
                />
              </a>
            </div>
            <ul id='menu-top-right-menu' className='anchor-navigation'>
              <li
                id='menu-item-846'
                className='menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-846'>
                <a
                  href='https://miami.foxthemes.me/#reservation'
                  className='anchor-scroll'>
                  Reservation
                </a>
              </li>
              <li
                id='menu-item-847'
                className='menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-847'>
                <a
                  href='https://miami.foxthemes.me/#testimonials'
                  className='anchor-scroll'>
                  Testimonials
                </a>
              </li>
              <li
                id='menu-item-848'
                className='menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-848'>
                <a
                  href='https://miami.foxthemes.me/#news'
                  className='anchor-scroll'>
                  News
                </a>
              </li>
              <li
                id='menu-item-849'
                className='menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-849'>
                <a
                  href='https://miami.foxthemes.me/#contact'
                  className='anchor-scroll'>
                  Contact
                </a>
              </li>
              <li
                id='menu-item-498'
                className='menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-498'>
                <a href='https://miami.foxthemes.me/blog/'>Our blog</a>
              </li>
            </ul>
          </nav>
        </div>
        <button className='cmn-toggle-switch'>
          <span />
        </button>
      </header>
    );
}

export default Header
