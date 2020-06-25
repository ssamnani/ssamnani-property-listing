import React from "react"
import './Header.module.css'

function Header() {
    const leftStyle = {'left': '-9999px'};
    const leftStyle2 = {'left': '-9999px', 'top': '51px'};
    const heightStyle = {'height': '89px'};
    const heightStyle2 = {'height': '70px'};
    const displayStyle = {'display': 'none'};
    const svgStyle = {'enableBackground': 'new 0 0 356 35'};

    return (
        <header id='header-wrapper' className="page-header">
            <div id="header-service">
                <div className="global-header hfs ipropertymy sale new-user responsive" id="header"
                     data-arguments="{&quot;enableGTMTrack&quot;:&quot;true&quot;,&quot;accountHost&quot;:&quot;https://accounts.iproperty.com.my&quot;,&quot;avatarUrl&quot;:&quot;&quot;,&quot;channel&quot;:&quot;sale&quot;,&quot;currentPage&quot;:&quot;SRP&quot;,&quot;disableInlineIcon&quot;:&quot;true&quot;,&quot;enableAsyncLogout&quot;:&quot;false&quot;,&quot;enableLanguageSwitcher&quot;:true,&quot;headerLogoUrl&quot;:&quot;https://www.iproperty.com.my/&quot;,&quot;hideLogo&quot;:&quot;false&quot;,&quot;hostname&quot;:&quot;https://www.iproperty.com.my&quot;,&quot;lang&quot;:&quot;en-GB&quot;,&quot;legacyHost&quot;:&quot;https://www.iproperty.com.my&quot;,&quot;market&quot;:&quot;ipropertymy&quot;,&quot;primaryHost&quot;:&quot;&quot;,&quot;redirectHost&quot;:&quot;https://www.iproperty.com.my&quot;,&quot;userFirstName&quot;:&quot;Account&quot;,&quot;redirectionPopup&quot;:null}">
                    <div className="sitenote-wrapper">
                        <div className="sitenote-container">
                            <div className="icon">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="lock"
                                     className="svg-inline--fa fa-lock fa-w-14" role="img"
                                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path fill="currentColor"
                                          d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z">
                                    </path>
                                </svg>
                            </div>
                            <div className="sitenote-placeholder"><span className="sitenote-ok-button">OK</span>
                            </div>
                            <div className="sitenote-close-button">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times"
                                     className="svg-inline--fa fa-times fa-w-11" role="img"
                                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
                                    <path fill="currentColor"
                                          d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="header-main">
                        <nav className="desktop-nav-bar ipropertymy">
                            <ul>
                                <li><a className=" active" title="Buy" href="https://www.iproperty.com.my/"
                                       target="_self">Buy</a>
                                    <div className="dropdown-container hiding-state" style={leftStyle}>
                                        <div className="sub-menu">
                                            <ul className="group-menu-wrapper core-menu-wrapper">
                                                <li className="menu-item-wrapper" style={heightStyle}><a
                                                    href="https://www.iproperty.com.my/sale/all-residential/"
                                                    title="Residential Property" target="_self">Residential
                                                    Property</a></li>
                                                <li className="menu-item-wrapper" style={heightStyle}><a
                                                    href="https://www.iproperty.com.my/new-property/"
                                                    title="New Launch Property" target="_self">New Launch
                                                    Property</a></li>
                                                <li className="menu-item-wrapper" style={heightStyle}><a
                                                    href="https://www.iproperty.com.my/sale/all-residential/?subChannel=auction"
                                                    title="Auction Property" target="_self">Auction Property</a>
                                                </li>
                                                <li className="menu-item-wrapper" style={heightStyle}><a
                                                    href="https://www.iproperty.com.my/sale/all-commercial/"
                                                    title="Commercial Property" target="_self">Commercial
                                                    Property</a></li>
                                                <li className="menu-item-wrapper" style={heightStyle}><a
                                                    href="https://www.iproperty.com.my/useracc/propertywanted.aspx"
                                                    title="Submit a Property Wanted" target="_self">Submit a
                                                    Property Wanted</a></li>
                                            </ul>
                                            <span className="secondary-menu-wrapper-span">
                                                <ul className="group-menu-wrapper secondary-menu-wrapper">
                                                    <li
                                                        className="menu-item-wrapper" title="Property Tools"
                                                        style={heightStyle}>Property Tools</li>
                                                    <li
                                                        className="menu-item-wrapper" style={heightStyle}><a
                                                        href="https://www.iproperty.com.my/home-loan-eligibility/"
                                                        title="Home Loan Eligibility Indicator (LoanCare)" target="_self">Home Loan Eligibility Indicator (LoanCare)</a></li>
                                                    <li
                                                        className="menu-item-wrapper" style={heightStyle}><a
                                                        href="https://www.iproperty.com.my/financing/mortgage-calculator/"
                                                        title="Mortgage Calculator"
                                                        target="_self">Mortgage Calculator</a></li>
                                                    <li
                                                        className="menu-item-wrapper" style={heightStyle}><a
                                                        href="https://www.iproperty.com.my/condominiums/"
                                                        title="Condo Directory" target="_self">Condo Directory</a></li>
                                                    <li
                                                        className="menu-item-wrapper" style={heightStyle}><a
                                                        href="https://brickz.my/" title="Find Transacted Prices"
                                                        target="_blank">Find Transacted Prices</a></li>
                                                </ul>
                                                <ul className="group-menu-wrapper secondary-menu-wrapper">
                                                    <li
                                                        className="menu-item-wrapper" title="" style={heightStyle} />
                                                    <li
                                                        className="menu-item-wrapper" style={heightStyle}><a
                                                        href="https://www.iproperty.com.my/financing/" title="Financing"
                                                        target="_self">Financing</a></li>
                                                    <li className="menu-item-wrapper" style={heightStyle}>
                                                        <a href="https://www.iproperty.com.my/guides/how-to-buy-a-house-in-malaysia-in-12-steps/"
                                                        title="Buying Guide" target="_self">Buying Guide</a>
                                                    </li>
                                                    <li
                                                        className="menu-item-wrapper" style={heightStyle}><a
                                                        href="https://www.iproperty.com.my/guides/buying"
                                                        title="Buying Articles" target="_self">Buying Articles</a></li>
                                                </ul>
                                            </span>
                                        </div>
                                    </div>
                                </li>
                                <li><a className=" " title="Rent" href="https://www.iproperty.com.my/rent/"
                                       target="_self">Rent</a>
                                    <div className="dropdown-container hiding-state" style={leftStyle}>
                                        <div className="sub-menu">
                                            <ul className="group-menu-wrapper core-menu-wrapper">
                                                <li className="menu-item-wrapper" style={heightStyle2}>
                                                    <a href="https://www.iproperty.com.my/rent/all-residential/"
                                                        title="Residential Property" target="_self">Residential Property</a>
                                                </li>
                                                <li className="menu-item-wrapper" style={heightStyle2}>
                                                    <a href="https://www.iproperty.com.my/rent/all-commercial/"
                                                        title="Commercial Property" target="_self">Commercial Property</a>
                                                </li>
                                                <li className="menu-item-wrapper" style={heightStyle2}>
                                                    <a href="https://www.iproperty.com.my/useracc/propertywanted.aspx"
                                                        title="Submit a Property Wanted" target="_self">Submit a Property Wanted</a>
                                                </li>
                                            </ul>
                                            <span className="secondary-menu-wrapper-span">
                                                <ul className="group-menu-wrapper secondary-menu-wrapper">
                                                    <li className="menu-item-wrapper" title="Property Tools"
                                                        style={heightStyle2}>Property Tools</li>
                                                    <li className="menu-item-wrapper" style={heightStyle2}>
                                                        <a href="https://www.iproperty.com.my/condominiums/"
                                                            title="Condo Directory" target="_self">Condo Directory</a>
                                                    </li>
                                                    <li className="menu-item-wrapper" style={heightStyle2}>
                                                        <a href="https://www.iproperty.com.my/guides/renting"
                                                            title="Renting Articles"
                                                           target="_self">Renting Articles</a>
                                                    </li>
                                                </ul>
                                            </span>
                                        </div>
                                    </div>
                                </li>
                                <li><a className=" " title="New Launches"
                                       href="https://www.iproperty.com.my/new-property/" target="_self">New
                                    Launches</a>
                                    <div className="dropdown-container hiding-state" style={leftStyle}>
                                        <div className="sub-menu">
                                            <ul className="group-menu-wrapper core-menu-wrapper">
                                                <li className="menu-item-wrapper" style={heightStyle}><a
                                                    href="https://www.iproperty.com.my/new-property/list/"
                                                    title="New Launch Property" target="_self">New Launch
                                                    Property</a></li>
                                                <li className="menu-item-wrapper" style={heightStyle}><a
                                                    href="https://www.iproperty.com.my/new-property/all-commercial/"
                                                    title="New Commercial Property" target="_self">New Commercial
                                                    Property</a></li>
                                                <li className="menu-item-wrapper" style={heightStyle}><a
                                                    href="https://www.iproperty.com.my/events/"
                                                    title="Visit a Property Event" target="_blank">Visit a Property
                                                    Event</a></li>
                                            </ul>
                                            <span className="secondary-menu-wrapper-span">
                                                    <ul
                                                        className="group-menu-wrapper secondary-menu-wrapper">
                                                        <li
                                                            className="menu-item-wrapper" title="Property Tools"
                                                            style={heightStyle}>Property Tools</li>
                                                        <li
                                                            className="menu-item-wrapper" style={heightStyle}><a
                                                            href="https://www.iproperty.com.my/home-loan-eligibility/"
                                                            title="Home Loan Eligibility Indicator (LoanCare)" target="_self">Home Loan Eligibility Indicator (LoanCare)</a></li>
                                                        <li
                                                            className="menu-item-wrapper" style={heightStyle}><a
                                                            href="https://www.iproperty.com.my/financing/mortgage-calculator/"
                                                            title="Mortgage Calculator"
                                                            target="_self">Mortgage Calculator</a></li>
                                                    </ul><ul
                                                className="group-menu-wrapper secondary-menu-wrapper">
                                                    <li
                                                        className="menu-item-wrapper" title="" style={heightStyle} />
                                                    <li
                                                        className="menu-item-wrapper" style={heightStyle}><a
                                                        href="https://brickz.my/" title="Find Transacted Prices"
                                                        target="_blank">Find Transacted Prices</a></li>
                                                    <li
                                                        className="menu-item-wrapper" style={heightStyle}><a
                                                        href="https://www.iproperty.com.my/financing/" title="Financing"
                                                        target="_self">Financing</a></li>
                                                </ul><ul
                                                className="group-menu-wrapper secondary-menu-wrapper">
                                                    <li
                                                        className="menu-item-wrapper" title="" style={heightStyle} />
                                                    <li
                                                        className="menu-item-wrapper" style={heightStyle}><a
                                                        href="https://www.iproperty.com.my/guides/buying"
                                                        title="Buying Articles" target="_self">Buying Articles</a></li>
                                                </ul>
                                                </span>
                                        </div>
                                    </div>
                                </li>
                                <li><a className=" " title="Advertise"
                                       href="https://www.iproperty.com.my/customer-solutions/"
                                       target="_self">Advertise</a>
                                    <div className="dropdown-container hiding-state" style={leftStyle}>
                                        <div className="sub-menu">
                                            <ul className="group-menu-wrapper core-menu-wrapper">
                                                <li className="menu-item-wrapper" style={heightStyle2}><a
                                                    href="https://www.iproperty.com.my/customer-solutions/developer/"
                                                    title="Advertise as Developer" target="_self">Advertise as
                                                    Developer</a></li>
                                                <li className="menu-item-wrapper" style={heightStyle2}><a
                                                    href="https://www.iproperty.com.my/customer-solutions/agent/"
                                                    title="Advertise as Agent" target="_self">Advertise as Agent</a>
                                                </li>
                                                <li className="menu-item-wrapper" style={heightStyle2}><a
                                                    href="https://www.iproperty.com.my/customer-solutions/partnership/"
                                                    title="Advertise as Media Partner" target="_self">Advertise as
                                                    Media Partner</a></li>
                                                <li className="menu-item-wrapper" style={heightStyle2}><a
                                                    href="https://www.iproperty.com.my/customer-solutions/home-owner/"
                                                    title="Advertise as Owner" target="_self">Advertise as Owner</a>
                                                </li>
                                            </ul>
                                            <span className="secondary-menu-wrapper-span">
                                                <ul className="group-menu-wrapper secondary-menu-wrapper">
                                                    <li className="menu-item-wrapper" title="Property Tools"
                                                        style={heightStyle2}>Property Tools</li>
                                                    <li className="menu-item-wrapper" style={heightStyle2}>
                                                        <a href="https://brickz.my/" title="Find Transacted Prices" target="_blank">Find Transacted Prices</a>
                                                    </li>
                                                    <li className="menu-item-wrapper" style={heightStyle2}>
                                                        <a href="https://www.iproperty.com.my/guides/how-to-successfully-sell-off-my-property/"
                                                            title="Selling Guide" target="_self">Selling Guide</a>
                                                    </li>
                                                    <li className="menu-item-wrapper" style={heightStyle2}>
                                                        <a href="https://www.iproperty.com.my/guides/renting/"
                                                            title="Renting Out Guide" target="_self">Renting Out Guide</a>
                                                    </li>
                                                </ul>
                                                <ul className="group-menu-wrapper secondary-menu-wrapper">
                                                    <li className="menu-item-wrapper" title="" style={heightStyle2} />
                                                    <li className="menu-item-wrapper" style={heightStyle2}>
                                                        <a href="https://www.iproperty.com.my/guides/selling"
                                                            title="Selling Articles"
                                                            target="_self">Selling Articles</a>
                                                    </li>
                                                </ul>
                                            </span>
                                        </div>
                                    </div>
                                </li>
                                <li><a className=" " title="News &amp; Lifestyle"
                                       href="https://www.iproperty.com.my/news/"
                                       target="_self">News &amp; Lifestyle</a>
                                    <div className="dropdown-container hiding-state" style={leftStyle}>
                                        <div className="sub-menu">
                                            <ul className="group-menu-wrapper core-menu-wrapper">
                                                <li className="menu-item-wrapper" style={heightStyle2}><a
                                                    href="https://www.iproperty.com.my/news/" title="News"
                                                    target="_self">News</a></li>
                                                <li className="menu-item-wrapper" style={heightStyle2}><a
                                                    href="https://www.iproperty.com.my/lifestyle/" title="Lifestyle"
                                                    target="_self">Lifestyle</a></li>
                                                <li className="menu-item-wrapper" style={heightStyle2}><a
                                                    href="https://www.iproperty.com.my/guides/" title="Guides"
                                                    target="_self">Guides</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li><a className=" " title="Events" href="https://www.iproperty.com.my/events/"
                                       target="_blank">Events</a>
                                    <div className="dropdown-container hiding-state"
                                         style={leftStyle2}>
                                        <div className="sub-menu">
                                            <ul className="group-menu-wrapper core-menu-wrapper">
                                                <li className="menu-item-wrapper" style={heightStyle}><a
                                                    href="https://www.iproperty.com.my/events/"
                                                    title="iProperty Events" target="_blank">iProperty Events</a>
                                                </li>
                                                <li className="menu-item-wrapper" style={heightStyle}><a
                                                    href="https://www.iproperty.com.my/idea/"
                                                    title="iProperty Development Excellence Awards" target="_blank">iProperty
                                                    Development Excellence Awards</a></li>
                                                <li className="menu-item-wrapper" style={heightStyle}><a
                                                    href="https://www.iproperty.com.my/mrea/"
                                                    title="Malaysia RealEstate Excellence Awards (MREA)"
                                                    target="_blank">Malaysia RealEstate Excellence Awards (MREA)</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li><a className=" " title="International"
                                       href="https://www.iproperty.com.my/international/"
                                       target="_self">International</a></li>
                            </ul>
                        </nav>
                        <div className="mobile-nav-bar" id="mobileNavbar">
                                <span className="burger">
                                    <svg width="24px" height="18px" viewBox="0 0 24 18" version="1.1"
                                         xmlns="http://www.w3.org/2000/svg">
                                    <title>Burger</title>
                                    <defs>
                                    </defs>
                                    <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                        <g id="Burger" fill="#FFFFFF">
                                            <rect id="Rectangle-14" x="0" y="0" width="24" height="2" />
                                            <rect id="Rectangle-14-Copy" x="0" y="8" width="24" height="2" />
                                            <rect id="Rectangle-14-Copy-2" x="0" y="16" width="24" height="2" />
                                        </g>
                                    </g>
                                </svg>
                            </span>
                            <div className="over-layer-mask hiding-state" />
                            <div className="content-wrapper hiding-state">
                                <ul className="nav-items">
                                    <div className="close-btn">×</div>
                                    <li className="title-item" />
                                    <div className="nav-item"><a className="active"
                                                                 href="https://www.iproperty.com.my/"
                                                                 target="_self">Buy<i className="go-next-icon"
                                                                                      aria-hidden="true">
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="11" height="32"
                                             viewBox="0 0 11 32">
                                            <path d="M10.625 17.143q0 0.232-0.179 0.411l-8.321 8.321q-0.179 0.179-0.411 0.179t-0.411-0.179l-0.893-0.893q-0.179-0.179-0.179-0.411t0.179-0.411l7.018-7.018-7.018-7.018q-0.179-0.179-0.179-0.411t0.179-0.411l0.893-0.893q0.179-0.179 0.411-0.179t0.411 0.179l8.321 8.321q0.179 0.179 0.179 0.411z">
                                            </path>
                                        </svg>
                                    </i></a>
                                        <div className="content-wrapper hiding-state">
                                            <ul className="nav-items">
                                                <div className="close-btn">×</div>
                                                <li className="title-item">Buy</li>
                                                <li className="nav-item go-back"><a><i
                                                    className="go-back-icon">
                                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="11"
                                                         height="32" viewBox="0 0 11 32">
                                                        <path d="M11.196 9.714q0 0.232-0.179 0.411l-7.018 7.018 7.018 7.018q0.179 0.179 0.179 0.411t-0.179 0.411l-0.893 0.893q-0.179 0.179-0.411 0.179t-0.411-0.179l-8.321-8.321q-0.179-0.179-0.179-0.411t0.179-0.411l8.321-8.321q0.179-0.179 0.411-0.179t0.411 0.179l0.893 0.893q0.179 0.179 0.179 0.411z">
                                                        </path>
                                                    </svg>
                                                </i>Back</a></li>
                                                <div className="nav-item"><a
                                                    href="https://www.iproperty.com.my/sale/all-residential/"
                                                    target="_self">Residential Property</a></div>
                                                <div className="nav-item"><a
                                                    href="https://www.iproperty.com.my/new-property/"
                                                    target="_self">New Launch Property</a></div>
                                                <div className="nav-item"><a
                                                    href="https://www.iproperty.com.my/sale/all-residential/?subChannel=auction"
                                                    target="_self">Auction Property</a></div>
                                                <div className="nav-item"><a
                                                    href="https://www.iproperty.com.my/sale/all-commercial/"
                                                    target="_self">Commercial Property</a></div>
                                                <div className="nav-item"><a
                                                    href="https://www.iproperty.com.my/useracc/propertywanted.aspx"
                                                    target="_self">Submit a Property Wanted</a></div>
                                                <div className="nav-item"><a
                                                    href="https://www.iproperty.com.my/home-loan-eligibility/"
                                                    target="_self">Home Loan Eligibility Indicator (LoanCare)</a>
                                                </div>
                                                <div className="nav-item"><a
                                                    href="https://www.iproperty.com.my/financing/mortgage-calculator/"
                                                    target="_self">Mortgage Calculator</a></div>
                                                <div className="nav-item"><a
                                                    href="https://www.iproperty.com.my/condominiums/"
                                                    target="_self">Condo Directory</a></div>
                                                <div className="nav-item"><a href="https://brickz.my/"
                                                                             target="_blank">Find Transacted
                                                    Prices</a></div>
                                                <div className="nav-item"><a
                                                    href="https://www.iproperty.com.my/guides/how-to-buy-a-house-in-malaysia-in-12-steps/"
                                                    target="_self">Buying Guide</a></div>
                                                <div className="nav-item"><a
                                                    href="https://www.iproperty.com.my/guides/buying"
                                                    target="_self">Buying Articles</a></div>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="nav-item"><a href="https://www.iproperty.com.my/rent/"
                                                                 target="_self">Rent<i className="go-next-icon"
                                                                                       aria-hidden="true">
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="11" height="32"
                                             viewBox="0 0 11 32">
                                            <path d="M10.625 17.143q0 0.232-0.179 0.411l-8.321 8.321q-0.179 0.179-0.411 0.179t-0.411-0.179l-0.893-0.893q-0.179-0.179-0.179-0.411t0.179-0.411l7.018-7.018-7.018-7.018q-0.179-0.179-0.179-0.411t0.179-0.411l0.893-0.893q0.179-0.179 0.411-0.179t0.411 0.179l8.321 8.321q0.179 0.179 0.179 0.411z">
                                            </path>
                                        </svg>
                                    </i></a>
                                        <div className="content-wrapper hiding-state">
                                            <ul className="nav-items">
                                                <div className="close-btn">×</div>
                                                <li className="title-item">Rent</li>
                                                <li className="nav-item go-back"><a><i
                                                    className="go-back-icon">
                                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="11"
                                                         height="32" viewBox="0 0 11 32">
                                                        <path d="M11.196 9.714q0 0.232-0.179 0.411l-7.018 7.018 7.018 7.018q0.179 0.179 0.179 0.411t-0.179 0.411l-0.893 0.893q-0.179 0.179-0.411 0.179t-0.411-0.179l-8.321-8.321q-0.179-0.179-0.179-0.411t0.179-0.411l8.321-8.321q0.179-0.179 0.411-0.179t0.411 0.179l0.893 0.893q0.179 0.179 0.179 0.411z">
                                                        </path>
                                                    </svg>
                                                </i>Back</a></li>
                                                <div className="nav-item"><a
                                                    href="https://www.iproperty.com.my/rent/all-residential/"
                                                    target="_self">Residential Property</a></div>
                                                <div className="nav-item"><a
                                                    href="https://www.iproperty.com.my/rent/all-commercial/"
                                                    target="_self">Commercial Property</a></div>
                                                <div className="nav-item"><a
                                                    href="https://www.iproperty.com.my/useracc/propertywanted.aspx"
                                                    target="_self">Submit a Property Wanted</a></div>
                                                <div className="nav-item"><a
                                                    href="https://www.iproperty.com.my/condominiums/"
                                                    target="_self">Condo Directory</a></div>
                                                <div className="nav-item"><a
                                                    href="https://www.iproperty.com.my/guides/renting"
                                                    target="_self">Renting Articles</a></div>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="nav-item"><a href="https://www.iproperty.com.my/new-property/"
                                                                 target="_self">New Launches<i
                                        className="go-next-icon" aria-hidden="true">
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="11" height="32"
                                             viewBox="0 0 11 32">
                                            <path d="M10.625 17.143q0 0.232-0.179 0.411l-8.321 8.321q-0.179 0.179-0.411 0.179t-0.411-0.179l-0.893-0.893q-0.179-0.179-0.179-0.411t0.179-0.411l7.018-7.018-7.018-7.018q-0.179-0.179-0.179-0.411t0.179-0.411l0.893-0.893q0.179-0.179 0.411-0.179t0.411 0.179l8.321 8.321q0.179 0.179 0.179 0.411z">
                                            </path>
                                        </svg>
                                    </i></a>
                                        <div className="content-wrapper hiding-state">
                                            <ul className="nav-items">
                                                <div className="close-btn">×</div>
                                                <li className="title-item">New Launches</li>
                                                <li className="nav-item go-back"><a><i
                                                    className="go-back-icon">
                                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="11"
                                                         height="32" viewBox="0 0 11 32">
                                                        <path d="M11.196 9.714q0 0.232-0.179 0.411l-7.018 7.018 7.018 7.018q0.179 0.179 0.179 0.411t-0.179 0.411l-0.893 0.893q-0.179 0.179-0.411 0.179t-0.411-0.179l-8.321-8.321q-0.179-0.179-0.179-0.411t0.179-0.411l8.321-8.321q0.179-0.179 0.411-0.179t0.411 0.179l0.893 0.893q0.179 0.179 0.179 0.411z">
                                                        </path>
                                                    </svg>
                                                </i>Back</a></li>
                                                <div className="nav-item"><a
                                                    href="https://www.iproperty.com.my/new-property/list/"
                                                    target="_self">New Launch Property</a></div>
                                                <div className="nav-item"><a
                                                    href="https://www.iproperty.com.my/new-property/all-commercial/"
                                                    target="_self">New Commercial Property</a></div>
                                                <div className="nav-item"><a
                                                    href="https://www.iproperty.com.my/events/" target="_blank">Visit
                                                    a Property Event</a></div>
                                                <div className="nav-item"><a
                                                    href="https://www.iproperty.com.my/home-loan-eligibility/"
                                                    target="_self">Home Loan Eligibility Indicator (LoanCare)</a>
                                                </div>
                                                <div className="nav-item"><a
                                                    href="https://www.iproperty.com.my/financing/mortgage-calculator/"
                                                    target="_self">Mortgage Calculator</a></div>
                                                <div className="nav-item"><a href="https://brickz.my/"
                                                                             target="_blank">Find Transacted
                                                    Prices</a></div>
                                                <div className="nav-item"><a
                                                    href="https://www.iproperty.com.my/guides/buying"
                                                    target="_self">Buying Articles</a></div>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="nav-item"><a
                                        href="https://www.iproperty.com.my/customer-solutions/" target="_self">Advertise<i
                                        className="go-next-icon" aria-hidden="true">
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="11" height="32"
                                             viewBox="0 0 11 32">
                                            <path d="M10.625 17.143q0 0.232-0.179 0.411l-8.321 8.321q-0.179 0.179-0.411 0.179t-0.411-0.179l-0.893-0.893q-0.179-0.179-0.179-0.411t0.179-0.411l7.018-7.018-7.018-7.018q-0.179-0.179-0.179-0.411t0.179-0.411l0.893-0.893q0.179-0.179 0.411-0.179t0.411 0.179l8.321 8.321q0.179 0.179 0.179 0.411z">
                                            </path>
                                        </svg>
                                    </i></a>
                                        <div className="content-wrapper hiding-state">
                                            <ul className="nav-items">
                                                <div className="close-btn">×</div>
                                                <li className="title-item">Advertise</li>
                                                <li className="nav-item go-back"><a><i
                                                    className="go-back-icon">
                                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="11"
                                                         height="32" viewBox="0 0 11 32">
                                                        <path d="M11.196 9.714q0 0.232-0.179 0.411l-7.018 7.018 7.018 7.018q0.179 0.179 0.179 0.411t-0.179 0.411l-0.893 0.893q-0.179 0.179-0.411 0.179t-0.411-0.179l-8.321-8.321q-0.179-0.179-0.179-0.411t0.179-0.411l8.321-8.321q0.179-0.179 0.411-0.179t0.411 0.179l0.893 0.893q0.179 0.179 0.179 0.411z">
                                                        </path>
                                                    </svg>
                                                </i>Back</a></li>
                                                <div className="nav-item"><a
                                                    href="https://www.iproperty.com.my/customer-solutions/developer/"
                                                    target="_self">Advertise as Developer</a></div>
                                                <div className="nav-item"><a
                                                    href="https://www.iproperty.com.my/customer-solutions/agent/"
                                                    target="_self">Advertise as Agent</a></div>
                                                <div className="nav-item"><a
                                                    href="https://www.iproperty.com.my/customer-solutions/partnership/"
                                                    target="_self">Advertise as Media Partner</a></div>
                                                <div className="nav-item"><a
                                                    href="https://www.iproperty.com.my/customer-solutions/home-owner/"
                                                    target="_self">Advertise as Owner</a></div>
                                                <div className="nav-item"><a href="https://brickz.my/"
                                                                             target="_blank">Find Transacted
                                                    Prices</a></div>
                                                <div className="nav-item"><a
                                                    href="https://www.iproperty.com.my/guides/how-to-successfully-sell-off-my-property/"
                                                    target="_self">Selling Guide</a></div>
                                                <div className="nav-item"><a
                                                    href="https://www.iproperty.com.my/guides/renting/"
                                                    target="_self">Renting Out Guide</a></div>
                                                <div className="nav-item"><a
                                                    href="https://www.iproperty.com.my/guides/selling"
                                                    target="_self">Selling Articles</a></div>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="nav-item"><a href="https://www.iproperty.com.my/news/"
                                                                 target="_self">News &amp; Lifestyle<i
                                        className="go-next-icon" aria-hidden="true">
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="11" height="32"
                                             viewBox="0 0 11 32">
                                            <path d="M10.625 17.143q0 0.232-0.179 0.411l-8.321 8.321q-0.179 0.179-0.411 0.179t-0.411-0.179l-0.893-0.893q-0.179-0.179-0.179-0.411t0.179-0.411l7.018-7.018-7.018-7.018q-0.179-0.179-0.179-0.411t0.179-0.411l0.893-0.893q0.179-0.179 0.411-0.179t0.411 0.179l8.321 8.321q0.179 0.179 0.179 0.411z">
                                            </path>
                                        </svg>
                                    </i></a>
                                        <div className="content-wrapper hiding-state">
                                            <ul className="nav-items">
                                                <div className="close-btn">×</div>
                                                <li className="title-item">News &amp; Lifestyle</li>
                                                <li className="nav-item go-back"><a><i
                                                    className="go-back-icon">
                                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="11"
                                                         height="32" viewBox="0 0 11 32">
                                                        <path d="M11.196 9.714q0 0.232-0.179 0.411l-7.018 7.018 7.018 7.018q0.179 0.179 0.179 0.411t-0.179 0.411l-0.893 0.893q-0.179 0.179-0.411 0.179t-0.411-0.179l-8.321-8.321q-0.179-0.179-0.179-0.411t0.179-0.411l8.321-8.321q0.179-0.179 0.411-0.179t0.411 0.179l0.893 0.893q0.179 0.179 0.179 0.411z">
                                                        </path>
                                                    </svg>
                                                </i>Back</a></li>
                                                <div className="nav-item"><a
                                                    href="https://www.iproperty.com.my/news/"
                                                    target="_self">News</a></div>
                                                <div className="nav-item"><a
                                                    href="https://www.iproperty.com.my/lifestyle/"
                                                    target="_self">Lifestyle</a></div>
                                                <div className="nav-item"><a
                                                    href="https://www.iproperty.com.my/guides/"
                                                    target="_self">Guides</a></div>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="nav-item"><a href="https://www.iproperty.com.my/events/"
                                                                 target="_blank">Events<i className="go-next-icon"
                                                                                          aria-hidden="true">
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="11" height="32"
                                             viewBox="0 0 11 32">
                                            <path d="M10.625 17.143q0 0.232-0.179 0.411l-8.321 8.321q-0.179 0.179-0.411 0.179t-0.411-0.179l-0.893-0.893q-0.179-0.179-0.179-0.411t0.179-0.411l7.018-7.018-7.018-7.018q-0.179-0.179-0.179-0.411t0.179-0.411l0.893-0.893q0.179-0.179 0.411-0.179t0.411 0.179l8.321 8.321q0.179 0.179 0.179 0.411z">
                                            </path>
                                        </svg>
                                    </i></a>
                                        <div className="content-wrapper hiding-state">
                                            <ul className="nav-items">
                                                <div className="close-btn">×</div>
                                                <li className="title-item">Events</li>
                                                <li className="nav-item go-back"><a><i
                                                    className="go-back-icon">
                                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="11"
                                                         height="32" viewBox="0 0 11 32">
                                                        <path d="M11.196 9.714q0 0.232-0.179 0.411l-7.018 7.018 7.018 7.018q0.179 0.179 0.179 0.411t-0.179 0.411l-0.893 0.893q-0.179 0.179-0.411 0.179t-0.411-0.179l-8.321-8.321q-0.179-0.179-0.179-0.411t0.179-0.411l8.321-8.321q0.179-0.179 0.411-0.179t0.411 0.179l0.893 0.893q0.179 0.179 0.179 0.411z">
                                                        </path>
                                                    </svg>
                                                </i>Back</a></li>
                                                <div className="nav-item"><a
                                                    href="https://www.iproperty.com.my/events/" target="_blank">iProperty
                                                    Events</a></div>
                                                <div className="nav-item"><a
                                                    href="https://www.iproperty.com.my/idea/" target="_blank">iProperty
                                                    Development Excellence Awards</a></div>
                                                <div className="nav-item"><a
                                                    href="https://www.iproperty.com.my/mrea/" target="_blank">Malaysia
                                                    RealEstate Excellence Awards (MREA)</a></div>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="nav-item"><a href="https://www.iproperty.com.my/international/"
                                                                 target="_self">International</a></div>
                                    <li className="language-switcher">
                                        <div className="nav-item"><a target="_self"><i
                                            className="icon-wrapper">
                                            <svg viewBox="0 0 25 25" version="1.1"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <title>Globe</title>
                                                <desc>Created with Sketch.</desc>
                                                <defs>
                                                </defs>
                                                <g id="Symbols" stroke="none" strokeWidth="1" fill="none"
                                                   fillRule="evenodd">
                                                    <g id="Header-Desktop-HomePage-/SF"
                                                       transform="translate(-1277.000000, -28.000000)"
                                                       stroke="#FFFFFF">
                                                        <g id="Settings"
                                                           transform="translate(1278.000000, 25.000000)">
                                                            <g id="Globe" transform="translate(0.000000, 4.000000)">
                                                                <path
                                                                    d="M11.4693333,22.9102343 C5.313,22.9102343 0.383333333,17.646281 0.383333333,11.4037823 C0.383333333,5.32592779 5.09143333,0.640558961 11.0223667,0.398252468 C11.1826,0.392039481 11.3428333,0.388156364 11.5053667,0.388156364 C17.6609333,0.388156364 22.6166667,5.36398234 22.6166667,11.6072577 C22.6166667,17.8497564 17.6256667,22.9102343 11.4693333,22.9102343 Z"
                                                                    id="Stroke-5383">
                                                                </path>
                                                                <path
                                                                    d="M11.0216,0.398174805 C5.22176667,6.76260338 5.22176667,15.0670371 11.0216,22.9008371"
                                                                    id="Stroke-5384">
                                                                </path>
                                                                <path
                                                                    d="M11.9881367,0.398563117 C17.78797,6.76299169 17.78797,15.064319 11.9881367,22.898119"
                                                                    id="Stroke-5385">
                                                                </path>
                                                                <path d="M2.07161,17.474026 L20.99831,17.474026"
                                                                      id="Stroke-5386">
                                                                </path>
                                                                <path d="M1.45774,6.6012987 L21.46544,6.6012987"
                                                                      id="Stroke-5387">
                                                                </path>
                                                                <path d="M0.39606,12.0376623 L22.6086933,12.0376623"
                                                                      id="Stroke-5388">
                                                                </path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </i><span className="language-button active">En</span><span
                                            className="language-button">Bm</span><i className="go-next-icon"
                                                                                    aria-hidden="true">
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="11"
                                                 height="32" viewBox="0 0 11 32">
                                                <path d="M10.625 17.143q0 0.232-0.179 0.411l-8.321 8.321q-0.179 0.179-0.411 0.179t-0.411-0.179l-0.893-0.893q-0.179-0.179-0.179-0.411t0.179-0.411l7.018-7.018-7.018-7.018q-0.179-0.179-0.179-0.411t0.179-0.411l0.893-0.893q0.179-0.179 0.411-0.179t0.411 0.179l8.321 8.321q0.179 0.179 0.179 0.411z">
                                                </path>
                                            </svg>
                                        </i></a>
                                            <div className="content-wrapper hiding-state">
                                                <ul className="nav-items">
                                                    <div className="close-btn">×</div>
                                                    <li className="title-item">Language</li>
                                                    <li className="nav-item go-back"><a><i
                                                        className="go-back-icon">
                                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                             width="11" height="32" viewBox="0 0 11 32">
                                                            <path d="M11.196 9.714q0 0.232-0.179 0.411l-7.018 7.018 7.018 7.018q0.179 0.179 0.179 0.411t-0.179 0.411l-0.893 0.893q-0.179 0.179-0.411 0.179t-0.411-0.179l-8.321-8.321q-0.179-0.179-0.179-0.411t0.179-0.411l8.321-8.321q0.179-0.179 0.411-0.179t0.411 0.179l0.893 0.893q0.179 0.179 0.179 0.411z">
                                                            </path>
                                                        </svg>
                                                    </i>Back</a></li>
                                                    <div className="nav-item" data-locale="en-GB"><a
                                                        className="active" target="_self">English</a></div>
                                                    <div className="nav-item" data-locale="ms-MY"><a target="_self">Bahasa
                                                        Malaysia</a></div>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="header-logo ">
                            <a href="https://www.iproperty.com.my/"><i>
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                     x="0px" y="0px" viewBox="0 0 356 35"
                                     style={svgStyle}>
                                    <style type="text/css">
                                        {/*.st0{fill:#FFFFFF;}*/}
                                    </style>
                                    <path d="M13.9-0.1C6.2-0.1,0.1,5.3,0.1,11.8c0,0.2,0,0.4,0,0.5l0,0c0.5,9.8,13.8,22.6,13.8,22.6S27,22.1,27.7,12.3l0,0
	c0-0.2,0-0.4,0-0.5C27.7,5.3,21.4-0.1,13.9-0.1z M23.3,15.1c-0.7,0.9-1.8,0.9-2.6,0.4L20,14.9l-0.9,6.3c0,0.4-0.2,0.7-0.4,0.9
	c-0.2,0.2-0.4,0.4-0.7,0.4H16c-0.9,0-0.9-0.7-0.9-0.9l0,0l0,0l0.2-3c0-0.4-0.2-0.7-0.5-0.7h-2.3c-0.4,0-0.5,0.4-0.5,0.7l0.2,3
	c0,0,0,0.9-0.9,0.9H9.2c-0.2,0-0.5-0.2-0.7-0.4c-0.2-0.2-0.4-0.5-0.4-0.9l-0.9-6.3l-0.7,0.5l0,0c-0.4,0.2-0.7,0.4-1.1,0.4
	c-0.5,0-1.1-0.2-1.4-0.7c-0.7-0.9-0.5-1.9,0.4-2.6l8.1-6.3c0.7-0.5,1.6-0.5,2.3,0l8.1,6.3C23.9,13.2,24,14.4,23.3,15.1z">
                                    </path>
                                    <g>
                                        <path d="M37.7,4.3c0-1.8,1.4-3.1,3.2-3.1S44,2.5,44,4.3s-1.4,3.1-3.1,3.1S37.7,6,37.7,4.3z">
                                        </path>
                                        <rect x="37.9" y="9.3" width="6" height="19.1">
                                        </rect>
                                        <path d="M48.2,1.1h11.2c6.5,0,10.5,3.9,10.5,9.4l0,0c0,6.3-4.9,9.6-11,9.6h-4.6v8.2h-6V1.1H48.2z M58.9,14.9
		c3,0,4.7-1.8,4.7-4.2l0,0c0-2.6-1.9-4.2-4.9-4.2H54v8.4C54,14.9,58.9,14.9,58.9,14.9z">
                                        </path>
                                        <path d="M71.6,7.6h6v4.2c1.2-2.8,3.2-4.7,6.7-4.6v6.1h-0.3c-4,0-6.3,2.4-6.3,7.3v7.7h-6C71.6,28.4,71.6,7.6,71.6,7.6z">
                                        </path>
                                        <path d="M84.4,18.1L84.4,18.1c0-6.1,4.9-11,11.4-11c6.5,0,11.2,4.7,11.2,10.9l0,0c0,5.9-4.9,10.9-11.4,10.9
		C89.1,28.9,84.4,24.2,84.4,18.1z M101.2,18.1L101.2,18.1c0-3.1-2.3-5.8-5.4-5.8c-3.3,0-5.4,2.6-5.4,5.8l0,0c0,3.1,2.3,5.8,5.4,5.8
		C99.1,23.9,101.2,21.2,101.2,18.1z">
                                        </path>
                                        <path d="M109.4,7.6h6v3c1.4-1.9,3.5-3.3,6.5-3.3c4.9,0,9.4,3.9,9.4,10.9l0,0c0,7-4.5,10.9-9.4,10.9
		c-3.2,0-5.1-1.4-6.5-3.1v8.9h-6V7.6z M125.4,18.1L125.4,18.1c0-3.5-2.3-5.8-5.1-5.8s-5.1,2.3-5.1,5.8l0,0c0,3.5,2.3,5.8,5.1,5.8
		C123.1,23.9,125.4,21.6,125.4,18.1z">
                                        </path>
                                        <path d="M132.7,18.1L132.7,18.1c0-6.1,4.2-11,10.3-11c7,0,10.2,5.4,10.2,11.4c0,0.5,0,1.1,0,1.6h-14.5
		c0.5,2.6,2.5,4,5.1,4c1.9,0,3.5-0.7,5.1-2.1l3.3,3c-1.9,2.5-4.7,3.9-8.6,3.9C137.4,28.9,132.7,24.6,132.7,18.1z M147.4,16.3
		c-0.3-2.6-1.9-4.4-4.4-4.4c-2.4,0-4,1.8-4.5,4.4H147.4z">
                                        </path>
                                        <path d="M155.6,7.6h5.9v4.2c1.2-2.8,3.2-4.7,6.7-4.6v6.1h-0.2c-4,0-6.3,2.4-6.3,7.3v7.7h-6L155.6,7.6L155.6,7.6z">
                                        </path>
                                        <path d="M173,22.5v-10h-2.4V7.4h2.4V2h5.9v5.4h4.9v5.1h-4.9v8.9c0,1.4,0.5,2.1,1.9,2.1c1.1,0,2.1-0.4,3-0.7v4.7
		c-1.2,0.7-2.6,1.2-4.7,1.2C175.4,28.8,173,27.4,173,22.5z">
                                        </path>
                                        <path d="M185.9,33.3l1.9-4.4c0.7,0.5,1.8,0.9,2.4,0.9c1.1,0,1.6-0.4,2.1-1.4l-8.2-21h6.3l4.7,14.2l4.6-14.2h6.1
		l-8.1,21.4c-1.6,4.2-3.3,5.8-6.8,5.8C189.1,34.9,187.5,34.2,185.9,33.3z">
                                        </path>
                                        <path d="M335.9,33.3l1.9-4.4c0.7,0.5,1.8,0.9,2.4,0.9c1.1,0,1.6-0.4,2.1-1.4l-8.2-21h6.3l4.7,14.2l4.5-14.2h6.1
		l-8,21.4c-1.6,4.2-3.3,5.8-6.8,5.8C339,34.9,337.5,34.2,335.9,33.3z">
                                        </path>
                                        <path d="M204.1,25.3c0-1.8,1.4-3.1,3.1-3.1s3.2,1.4,3.2,3.1s-1.4,3.1-3.2,3.1C205.7,28.4,204.1,27,204.1,25.3z">
                                        </path>
                                        <path d="M291.1,25.3c0-1.8,1.4-3.1,3.2-3.1s3.1,1.4,3.1,3.1s-1.4,3.1-3.1,3.1S291.1,27,291.1,25.3z">
                                        </path>
                                        <path d="M211.8,18.1L211.8,18.1c0-6.1,4.6-11,11-11c4,0,6.5,1.4,8.4,3.5l-3.7,3.9c-1.4-1.4-2.6-2.3-4.7-2.3
		c-3,0-5.1,2.6-5.1,5.8l0,0c0,3.1,2.1,5.8,5.2,5.8c1.9,0,3.3-0.9,4.7-2.3l3.5,3.5c-2.1,2.3-4.4,3.9-8.6,3.9
		C216.4,28.9,211.8,24,211.8,18.1z">
                                        </path>
                                        <path d="M231.6,18.1L231.6,18.1c0-6.1,4.9-11,11.4-11s11.2,4.7,11.2,10.9l0,0c0,5.9-4.9,10.9-11.4,10.9
		C236.3,28.9,231.6,24.2,231.6,18.1z M248.4,18.1L248.4,18.1c0-3.1-2.3-5.8-5.4-5.8c-3.3,0-5.4,2.6-5.4,5.8l0,0
		c0,3.1,2.3,5.8,5.4,5.8C246.3,23.9,248.4,21.2,248.4,18.1z">
                                        </path>
                                        <path d="M256.6,7.6h5.9v3c1.4-1.8,3.1-3.3,6.1-3.3c2.8,0,4.7,1.2,5.9,3.3c1.8-2.1,4-3.3,6.8-3.3c4.4,0,7,2.6,7,7.7
		v13.7h-6V16.9c0-2.8-1.2-4.2-3.5-4.2c-2.3,0-3.7,1.4-3.7,4.2v11.7h-5.8V16.9c0-2.8-1.2-4.2-3.5-4.2s-3.7,1.4-3.7,4.2v11.7h-5.9v-21
		C256.4,7.6,256.6,7.6,256.6,7.6z">
                                        </path>
                                        <path d="M300.4,7.6h5.9v3c1.4-1.8,3.1-3.3,6.1-3.3c2.8,0,4.7,1.2,5.9,3.3c1.8-2.1,4-3.3,6.8-3.3c4.4,0,7,2.6,7,7.7
		v13.7h-6V16.9c0-2.8-1.2-4.2-3.5-4.2c-2.3,0-3.7,1.4-3.7,4.2v11.7h-5.8V16.9c0-2.8-1.2-4.2-3.5-4.2s-3.7,1.4-3.7,4.2v11.7h-5.9v-21
		C300.2,7.6,300.4,7.6,300.4,7.6z">
                                        </path>
                                </g>
                                </svg>
                            </i></a>
                        </div>
                        <div className="header-right-wrapper">
                            <div className="language-switcher" id="desktop-language-switcher">
                                <i>
                                    <svg viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                        <title>Globe</title>
                                        <desc>Created with Sketch.</desc>
                                        <defs>
                                        </defs>
                                        <g id="Symbols" stroke="none" strokeWidth="1" fill="none"
                                           fillRule="evenodd">
                                            <g id="Header-Desktop-HomePage-/SF"
                                               transform="translate(-1277.000000, -28.000000)" stroke="#FFFFFF">
                                                <g id="Settings" transform="translate(1278.000000, 25.000000)">
                                                    <g id="Globe" transform="translate(0.000000, 4.000000)">
                                                        <path d="M11.4693333,22.9102343 C5.313,22.9102343 0.383333333,17.646281 0.383333333,11.4037823 C0.383333333,5.32592779 5.09143333,0.640558961 11.0223667,0.398252468 C11.1826,0.392039481 11.3428333,0.388156364 11.5053667,0.388156364 C17.6609333,0.388156364 22.6166667,5.36398234 22.6166667,11.6072577 C22.6166667,17.8497564 17.6256667,22.9102343 11.4693333,22.9102343 Z"
                                                                id="Stroke-5383">
                                                        </path>
                                                        <path d="M11.0216,0.398174805 C5.22176667,6.76260338 5.22176667,15.0670371 11.0216,22.9008371"
                                                              id="Stroke-5384">
                                                        </path>
                                                        <path d="M11.9881367,0.398563117 C17.78797,6.76299169 17.78797,15.064319 11.9881367,22.898119"
                                                                id="Stroke-5385">
                                                        </path>
                                                        <path d="M2.07161,17.474026 L20.99831,17.474026"
                                                              id="Stroke-5386">
                                                        </path>
                                                        <path d="M1.45774,6.6012987 L21.46544,6.6012987"
                                                              id="Stroke-5387">
                                                        </path>
                                                        <path d="M0.39606,12.0376623 L22.6086933,12.0376623"
                                                              id="Stroke-5388">
                                                        </path>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </i>
                                <span className="language-selector active" data-locale="en-GB">En</span>
                                <span className="language-selector " data-locale="ms-MY">Bm</span>
                            </div>
                            <div className="account-wrapper">
                                <div className="desktop-account" id="accountPopupTrigger">
                                    <i className="account-logo">
                                        <svg viewBox="0 0 25 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                            <title>Group</title>
                                            <desc>Created with Sketch.</desc>
                                            <defs>
                                            </defs>
                                            <g id="Symbols" stroke="none" strokeWidth="1" fill="none"
                                               fillRule="evenodd">
                                                <g id="Header-Desktop-HomePage-/SF"
                                                   transform="translate(-1388.000000, -28.000000)" stroke="#FFFFFF">
                                                    <g id="Settings" transform="translate(1278.000000, 25.000000)">
                                                        <g id="Group" transform="translate(111.000000, 4.000000)">
                                                            <path
                                                                d="M20.2732726,18.3598994 C17.3880456,17.4019994 18.3824635,17.7657781 14.5431924,16.384605 L14.5431924,13.6229889 C14.5431924,13.6229889 15.7184173,12.586379 15.7184173,10.7453016 C16.1979456,10.7453016 16.6774739,8.90495414 15.7184173,8.44431978 C15.7184173,8.17129719 16.3975927,6.63712404 15.4385171,4.73407952 C14.30965,2.49412662 9.40006184,2.88826945 8.58848442,4.60100541 C7.44352957,6.42887439 8.03987526,8.07128624 8.03987526,8.44431978 C7.08081865,8.90495414 7.56034696,10.7453016 8.03987526,10.7453016 C8.03987526,12.586379 9.21510018,13.4645773 9.21510018,13.4645773 L9.21510018,16.384605 C5.37582914,17.7657781 6.14086793,17.4058249 3.28571429,18.3598998"
                                                                id="Stroke-2439" strokeLinecap="round"
                                                                strokeLinejoin="round">
                                                            </path>
                                                            <ellipse id="Oval-5" cx="11.5" cy="11.1428571" rx="11.5"
                                                                     ry="11.1428571">
                                                            </ellipse>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </i>
                                    <i className="account-arrow-down">
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                             viewBox="0 0 14 14">
                                            <path d="M12.193 4.276c0.19-0.188 0.496-0.188 0.685 0s0.19 0.491 0 0.678l-5.536 5.481c-0.189 0.188-0.495 0.188-0.685 0l-5.536-5.481c-0.189-0.188-0.189-0.491 0-0.678s0.496-0.188 0.685 0l5.193 4.999 5.193-4.999z">
                                            </path>
                                        </svg>
                                    </i>
                                </div>
                                <div className="mobile-account-wrapper hiding-state" id="mobileAccount">
                                    <div className="account-wrapper"><i
                                        className="account-logo">
                                        <svg viewBox="0 0 25 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                            <title>Group</title>
                                            <desc>Created with Sketch.</desc>
                                            <defs>
                                            </defs>
                                            <g id="Symbols" stroke="none" strokeWidth="1" fill="none"
                                               fillRule="evenodd">
                                                <g id="Header-Desktop-HomePage-/SF"
                                                   transform="translate(-1388.000000, -28.000000)" stroke="#FFFFFF">
                                                    <g id="Settings" transform="translate(1278.000000, 25.000000)">
                                                        <g id="Group" transform="translate(111.000000, 4.000000)">
                                                            <path
                                                                d="M20.2732726,18.3598994 C17.3880456,17.4019994 18.3824635,17.7657781 14.5431924,16.384605 L14.5431924,13.6229889 C14.5431924,13.6229889 15.7184173,12.586379 15.7184173,10.7453016 C16.1979456,10.7453016 16.6774739,8.90495414 15.7184173,8.44431978 C15.7184173,8.17129719 16.3975927,6.63712404 15.4385171,4.73407952 C14.30965,2.49412662 9.40006184,2.88826945 8.58848442,4.60100541 C7.44352957,6.42887439 8.03987526,8.07128624 8.03987526,8.44431978 C7.08081865,8.90495414 7.56034696,10.7453016 8.03987526,10.7453016 C8.03987526,12.586379 9.21510018,13.4645773 9.21510018,13.4645773 L9.21510018,16.384605 C5.37582914,17.7657781 6.14086793,17.4058249 3.28571429,18.3598998"
                                                                id="Stroke-2439" strokeLinecap="round"
                                                                strokeLinejoin="round">
                                                            </path>
                                                            <ellipse id="Oval-5" cx="11.5" cy="11.1428571" rx="11.5"
                                                                     ry="11.1428571">
                                                            </ellipse>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </i></div>
                                    <div className="over-layer-mask hiding-state" />
                                    <div className="mobile-account-content-wrapper hiding-state">
                                        <div className="close-btn">×</div>
                                        <div className="account-item-button-container">
                                            <div className="loggedOutMenu">
                                                <div className="login-group">
                                                    <a className="btn default"
                                                       href="https://accounts.iproperty.com.my/login?client_id=9pv31avkdi1n2bhmq0gl0q24e&amp;response_type=code&amp;redirect_uri=https://www.iproperty.com.my/consumer/auth&amp;lang=en_AU"
                                                       title="Login" key="login" target="">Log in</a>
                                                    <a className="btn default"
                                                       href="https://accounts.iproperty.com.my/signup?client_id=9pv31avkdi1n2bhmq0gl0q24e&amp;response_type=code&amp;redirect_uri=https://www.iproperty.com.my/consumer/auth&amp;lang=en_AU"
                                                       title="Sign up" key="register" target="">Sign up</a>
                                                </div>
                                                <div className="advertise-group"><span className="group-title">Advertiser options</span><a
                                                    className="btn default"
                                                    href="https://www.iproperty.com.my/pro/listings?lang=en-GB"
                                                    title="iProperty PRO" key="ipropertyPro" target="_blank">iProperty PRO</a>
                                                    <a className="btn default"
                                                       href="https://irealtor.iproperty.com.my/"
                                                       title="iRealtor" key="iRealtor"
                                                       target="_blank">iRealtor</a>
                                                    <a className="btn default"
                                                       href="https://www.iproperty.com.my/customer-solutions/"
                                                       title="Advertise with us"
                                                       key="advertiseWithUs"
                                                       target="_blank">Advertise with us</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <script>
                        {/*!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){}return e.enhanceUser=function(e,t){return{client:{id:"",language:t},login:{id:String(e||""),status:e?"logged-in":"logged-out",type:"Email"}}},e.buildGTMData=function(e,t,n,r){return void 0===e&&(e=""),void 0===t&&(t=""),void 0===n&&(n=""),{event:e,source:t,target:n,user:r}},e.replaceClass=function(e,t,n){e.classList.remove(t),e.classList.add(n)},e}();t.Helper=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(2);var r=n(4),o=n(5),i=n(6),a=n(7),c=n(9),s=n(10),l=n(11),u=n(12);window.dataLayer=window.dataLayer||[];var d=function(){return function e(t){var n=this,d=t.lang,p=t.userId,h=t.currentPage,f=t.enableGTMTrack,g=t.enableLoginModal,v=t.enableAsyncLogout,m=t.disableAccount,y=t.redirectionPopup;if(this.init=function(){if(!n.initialized)switch(document.readyState){case"interactive":case"complete":n.initialized=!0,n.bindEvent(),n.initComponents()}},this.bindEvent=function(){"false"!=n.enableGTMTrack&&(n.GTMTracker=new u.HeaderTracker(n.lang,n.userId,n.currentPage));var t=document.getElementById("desktop-language-switcher");t&&t.addEventListener("click",function(t){var r=t.target;if(r.classList.contains("language-selector")){var o=r.dataset.locale;"true"===n.enableGTMTrack&&n.GTMTracker.trackLanguageChange(o),e.onLanguageChange(o)}}),new o.RedirectionInfoPopup(document.getElementById("redirectionInfoPopup"))},this.initComponents=function(){if(n.disableAccount||(n.enableLoginModal&&!n.userId?document.querySelector("#accountPopupTrigger").onclick=function(){return e.OpenLoginModal()}:n.AccountPopup=new c.PopConfirmComponent("accountPopup",document.querySelector("#accountPopupTrigger")),n.MobileAccount=new i.MobileAccount(document.querySelector("#mobileAccount"))),Array.from(document.querySelectorAll(".loggedOutMenu")).map(function(e){return new s.LoggedOutMenu(e)}),n.MobileNavbar=new a.MobileNavbar(document.querySelector("#mobileNavbar")),Array.from(document.querySelectorAll(".dropdown-container")).map(function(e){return new r.Dropdown(e,e.parentNode)}),Array.from(document.querySelectorAll("a")).forEach(function(e){e.href&&(e.href=e.href.replace(/\$\{redirectUrl\}/,encodeURIComponent(location.pathname+location.search)))}),!n.disableAccount&&n.userId&&"true"===n.enableAsyncLogout){var t=Array.from(document.querySelectorAll(".logout-btn"));t.forEach(function(t){t.onclick=function(n){n.preventDefault(),t.classList.add("disabled"),e.OnLogout()}}),e.OnLogoutFinished=function(){return t.forEach(function(e){return e.classList.remove("disabled")})}}new l.SiteNote},this.update=function(){n.destroy();var e=document.querySelector("#header");Array.from(document.querySelectorAll("#header script")).forEach(function(t){var n=document.createElement("script");n.innerHTML=t.innerHTML,e.removeChild(t),e.appendChild(n)})},this.destroy=function(){document.removeEventListener("readystatechange",n.init),e.Instance.AccountPopup&&e.Instance.AccountPopup.destroy()},this.lang=d,this.userId=p,this.currentPage=h,this.enableGTMTrack=f,this.enableLoginModal=g,this.enableAsyncLogout=v,this.disableAccount=m,this.redirectionPopup=y,this.init(),document.addEventListener("readystatechange",this.init),"localhost:5000"===window.location.host){var b=document.createElement("meta");b.name="viewport",b.content="width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0",document.head.appendChild(b),document.body.style.margin="0"}}}();t.HeaderService=d;var p=document.querySelector(".global-header.hfs");Object.assign(d,window.HeaderService),d.Instance=new d(JSON.parse(p.dataset.arguments)),window.HeaderService=d},function(e,t){var n,r,o,i;Array.from||(Array.from=(n=Object.prototype.toString,r=function(e){return"function"==typeof e||"[object Function]"===n.call(e)},o=Math.pow(2,53)-1,i=function(e){var t=function(e){var t=Number(e);return isNaN(t)?0:0!==t&&isFinite(t)?(t>0?1:-1)*Math.floor(Math.abs(t)):t}(e);return Math.min(Math.max(t,0),o)},function(e){var t=Object(e);if(null==e)throw new TypeError("Array.from requires an array-like object - not null or undefined");var n,o=arguments.length>1?arguments[1]:void 0;if(void 0!==o){if(!r(o))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(n=arguments[2])}for(var a,c=i(t.length),s=r(this)?Object(new this(c)):new Array(c),l=0;l<c;)a=t[l],s[l]=o?void 0===n?o(a,l):o.call(n,a,l):a,l+=1;return s.length=c,s})),"function"!=typeof Object.assign&&(Object.assign=function(e){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var t=Object(e),n=1;n<arguments.length;n++){var r=arguments[n];if(null!=r)for(var o in r)r.hasOwnProperty(o)&&(t[o]=r[o])}return t})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setCookie=function(e,t,n,r){void 0===r&&(r="");var o=new Date;o.setTime(o.getTime()+24*n*60*60*1e3);var i="expires="+o.toUTCString(),a=r?"domain="+r+";":"";document.cookie=e+"="+t+";"+a+i+";path=/"},t.getCookie=function(e){e+="=";for(var t=decodeURIComponent(document.cookie).split(";"),n=0;n<t.length;n++){for(var r=t[n];" "===r.charAt(0);)r=r.substring(1);if(0===r.indexOf(e))return r.substring(e.length,r.length)}return""}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=200,i=function(){function e(e,t){var n=this;this.show=function(){n.showTask=setTimeout(function(){var e=n.element.getBoundingClientRect(),t=n.trigger.getBoundingClientRect(),o=t.left+e.width+20;o>window.innerWidth?n.element.style.left=window.innerWidth-o+"px":n.element.style.left="0px",n.element.style.top=t.height+"px",r.Helper.replaceClass(n.element,"hiding-state","showing-state")},o)},this.hide=function(e){n.trigger.contains(e.target)||n.element.contains(e.target)||(clearTimeout(n.showTask),r.Helper.replaceClass(n.element,"showing-state","hiding-state"))},this.destroy=function(){document.body.removeEventListener("mousemove",n.hide)},this.element=e,this.trigger=t,t.onmouseenter=this.show,e.onmouseenter=this.show,t.onmouseleave=this.hide,e.onmouseleave=this.hide,e.addEventListener("animationend",function(){e.classList.contains("hiding-state")&&(n.element.style.left="-9999px")}),document.body.addEventListener("mousemove",this.hide),requestAnimationFrame(function(){return n.adjustMenuItemHeight()})}return e.prototype.adjustMenuItemHeight=function(){var e=Array.from(this.element.querySelectorAll(".menu-item-wrapper")),t=Math.max.apply(Math,e.map(function(e){return e.offsetHeight}));e.forEach(function(e){return e.style.height=t+"px"})},e}();t.Dropdown=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),o=n(1),i=n(0),a="goHomeRedirect",c="goHomeRedirectSubsalePDP",s="office18Redirect";[a,c,s].forEach(function(e){r.getCookie(e)&&r.setCookie(e,"true",730)});var l=function(){function e(e){var t=this;if(this.popup=e,e){this.popupContainer=this.popup.querySelector(".hfs-popup-container");var n=e.querySelector(".hfs-popup-wrap"),r=e.querySelector(".hfs-popup-close"),o=e.querySelector(".hfs-popup-body button");e.onclick=function(e){e.target===n&&t.closePopup()},r.onclick=function(){return t.closePopup()},o.onclick=function(){return t.closePopup()},setTimeout(function(){return t.openPopup()})}}return e.prototype.openPopup=function(){var e=!1,t="",n=!1,l={};if(window.location.search.split("&").forEach(function(r){switch(r){case"fromGH=1":case"?fromGH=1":e=!0,t=a,l=o.HeaderService.Instance.redirectionPopup.v1;break;case"fromGH=2":case"?fromGH=2":e=!0,t=c,l=o.HeaderService.Instance.redirectionPopup.v2;break;case"fromOffice18=3":case"?fromOffice18=3":n=!0,t=s,l=o.HeaderService.Instance.redirectionPopup.v3}}),(n||e)&&t&&!r.getCookie(t)){r.setCookie(t,"true",730);var u=this.popupContainer.querySelector("#redirectPopupTitle"),d=this.popupContainer.querySelector("#redirectPopupBody"),p=this.popupContainer.querySelector("#redirectPopupConfirm");u.textContent=l.title,d.textContent=l.body,p.textContent=l.confirm,document.body.appendChild(this.popup),this.popup.style.display="block",i.Helper.replaceClass(this.popupContainer,"hiding-state","showing-state"),document.body.style.overflow="hidden"}},e.prototype.closePopup=function(){var e=this;i.Helper.replaceClass(this.popupContainer,"showing-state","hiding-state"),setTimeout(function(){return document.body.removeChild(e.popup)},500),document.body.style.overflow=""},e}();t.RedirectionInfoPopup=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=n(0),i=function(){return function(e){var t=this;this.show=function(){!r.HeaderService.Instance.userId&&r.HeaderService.Instance.enableLoginModal?r.HeaderService.OpenLoginModal():(r.HeaderService.OnToggleOverlay&&r.HeaderService.OnToggleOverlay(!0),o.Helper.replaceClass(t.element,"hiding-state","showing-state"),o.Helper.replaceClass(t.contentWrapper,"hiding-state","showing-state"),o.Helper.replaceClass(t.overLayerMask,"hiding-state","showing-state"))},this.close=function(){var e=function(){r.HeaderService.OnToggleOverlay&&r.HeaderService.OnToggleOverlay(!1),t.contentWrapper.removeEventListener("transitionend",e)};t.contentWrapper.addEventListener("transitionend",e),o.Helper.replaceClass(t.element,"showing-state","hiding-state"),o.Helper.replaceClass(t.contentWrapper,"showing-state","hiding-state"),o.Helper.replaceClass(t.overLayerMask,"showing-state","hiding-state")},this.element=e,this.contentWrapper=e.querySelector(".mobile-account-content-wrapper"),this.closeBtn=e.querySelector(".close-btn"),this.overLayerMask=e.querySelector(".over-layer-mask");var n=e.querySelector(".account-logo"),i=e.querySelector('a.btn[key="register"]');this.closeBtn.onclick=this.overLayerMask.onclick=this.close,n.onclick=this.show,i&&(i.onclick=function(){r.HeaderService.Instance.GTMTracker.trackRegister()})}}();t.MobileAccount=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=n(0),i=n(8),a=function(){return function(e){var t=this;this.show=function(){r.HeaderService.OnToggleOverlay&&r.HeaderService.OnToggleOverlay(!0),o.Helper.replaceClass(t.contentWrapper,"hiding-state","showing-state"),o.Helper.replaceClass(t.overLayerMask,"hiding-state","showing-state")},this.close=function(){var e=function(){r.HeaderService.OnToggleOverlay&&r.HeaderService.OnToggleOverlay(!1),t.contentWrapper.removeEventListener("transitionend",e)};t.contentWrapper.addEventListener("transitionend",e),o.Helper.replaceClass(t.contentWrapper,"showing-state","hiding-state"),o.Helper.replaceClass(t.overLayerMask,"showing-state","hiding-state")};var n=e.querySelector(".burger"),a=e.querySelector(".close-btn");this.overLayerMask=e.querySelector(".over-layer-mask"),this.contentWrapper=e.querySelector(".content-wrapper");var c=e.querySelector(".language-switcher > .nav-item"),s=Array.from(this.contentWrapper.querySelectorAll(".nav-items > .nav-item"));n.onclick=this.show,a.onclick=this.close;var l=s.map(function(e){return new i.MobileNavItem(e)}),u=c&&new i.MobileNavItem(c);this.overLayerMask.onclick=function(e){t.close(),l.forEach(function(t){return t.close(e)}),c&&u.close(e)}}}();t.MobileNavbar=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=n(0),i=function(){return function e(t){var n=this;this.show=function(e){e.preventDefault(),e.stopPropagation(),o.Helper.replaceClass(n.contentWrapper,"hiding-state","showing-state")},this.close=function(e){e.preventDefault(),e.stopPropagation(),n.contentWrapper&&o.Helper.replaceClass(n.contentWrapper,"showing-state","hiding-state")},this.switchLanguage=function(e){"true"===r.HeaderService.Instance.enableGTMTrack&&r.HeaderService.Instance.GTMTracker.trackLanguageChange(e),r.HeaderService.onLanguageChange(e)};var i=t.querySelector("a");if(this.contentWrapper=t.querySelector(".content-wrapper"),this.contentWrapper){var a=Array.from(this.contentWrapper.querySelectorAll(".nav-items > .nav-item")),c=this.contentWrapper.querySelector(".close-btn"),s=t.querySelector(".go-next-icon"),l=t.querySelector(".go-back");c.onclick=function(e){n.close(e),r.HeaderService.Instance.MobileNavbar.close()},s.onclick=this.show,l.onclick=this.close,a.forEach(function(t){return new e(t)}),i.href||(t.onclick=this.show)}else t.dataset.locale&&(t.onclick=function(e){return n.switchLanguage(e.currentTarget.dataset.locale)})}}();t.MobileNavItem=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=n(0),i=function(){function e(e,t){var n=this;this.clickContentElement=function(e){"register"===e.target.getAttribute("key")&&r.HeaderService.Instance.GTMTracker.trackRegister()},this.clickOnDocumentBody=function(e){n._triggerElement.contains(e.target)||!n._containerElement||n._containerElement.contains(e.target)||n.hide()},this._containerElement=document.getElementById(e),this.hide(),this._triggerElement=t,this._triggerElement.onclick=function(){return n.isShowed?n.hide():n.show()},document.body.removeEventListener("click",this.clickOnDocumentBody),document.body.addEventListener("click",this.clickOnDocumentBody),this._containerElement.style.display="none",document.querySelector(".global-header").appendChild(this._containerElement),this._containerElement.firstChild.onclick=this.clickContentElement}return e.prototype.show=function(){this.hide(),this._containerElement.style.display="block",o.Helper.replaceClass(this._containerElement,"hiding-state","showing-state"),this.isShowed=!0},e.prototype.hide=function(){o.Helper.replaceClass(this._containerElement,"showing-state","hiding-state"),this.isShowed=!1},e.prototype.destroy=function(){document.body.removeEventListener("click",this.clickOnDocumentBody)},e}();t.PopConfirmComponent=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),o=function(){return function(e){this.onClickLoginBtn=function(){var e=encodeURI(decodeURI(window.location.href));return r.setCookie("from",e,365),!0};var t=e.querySelector('a[key="login"]');t&&(t.onclick=this.onClickLoginBtn)}}();t.LoggedOutMenu=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),o=function(){return function(){if("yes"!==r.getCookie("gdpr_notification")){var e=document.getElementsByClassName("sitenote-wrapper")[0];if(window.GDPRSiteNoteWrapper){document.getElementsByClassName("global-header")[0].replaceChild(window.GDPRSiteNoteWrapper,e),window.GDPRSiteNoteWrapper=window.GDPRSiteNoteWrapper.cloneNode(!0);var t=document.getElementsByClassName("sitenote-ok-button")[0],n=document.getElementsByClassName("sitenote-close-button")[0];t.onclick=window.hideGdprPopupWithOk,n.onclick=window.hideGdprPopupWithX}else new MutationObserver(function(t,n){for(var r=0,o=t;r<o.length;r++){var i=o[r];"attributes"==i.type&&"style"===i.attributeName&&"block"===e.style.display&&(n.disconnect(),window.GDPRSiteNoteWrapper=e.cloneNode(!0))}}).observe(e,{attributes:!0})}}}();t.SiteNote=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=function(){function e(e,t,n){var o=this;this.lang=e,this.userId=t,this.currentPage=n,this.eventType={USER_REGISTER_CLICK:"userRegisterClick",USER_LANGUAGE_CHANGE:"userLanguageChange"},this.gtmListener=function(e,t){void 0===t&&(t=null);var n=r.Helper.buildGTMData(e,o.currentPage,t,o.user);if(!n.source)return console.log("GA - The data source is invalid !"),console.log(JSON.stringify(n)),void console.log("The invalid data is above all");o.dataLayer.push(n)},this.user=r.Helper.enhanceUser(t,e),this.dataLayer=window.dataLayer}return e.prototype.trackRegister=function(){this.gtmListener(this.eventType.USER_REGISTER_CLICK)},e.prototype.trackLanguageChange=function(e){this.gtmListener(this.eventType.USER_LANGUAGE_CHANGE,e)},e}();t.HeaderTracker=o}]);*/}
                    </script>
                    <div className="popconfirm-container hiding-state" id="accountPopup" style={displayStyle}>
                        <div id="accountPopup">
                            <div className="arrow" />
                            <div className="content">
                                <div className="loggedOutMenu">
                                    <div className="login-group">
                                        <a className="btn default"
                                           href="https://accounts.iproperty.com.my/login?client_id=9pv31avkdi1n2bhmq0gl0q24e&amp;response_type=code&amp;redirect_uri=https://www.iproperty.com.my/consumer/auth&amp;lang=en_AU"
                                           title="Login" key="login" target="">Log in</a>
                                        <a className="btn default"
                                           href="https://accounts.iproperty.com.my/signup?client_id=9pv31avkdi1n2bhmq0gl0q24e&amp;response_type=code&amp;redirect_uri=https://www.iproperty.com.my/consumer/auth&amp;lang=en_AU"
                                           title="Sign up" key="register" target="">Sign up</a>
                                    </div>
                                    <div className="advertise-group">
                                        <span className="group-title">Advertiser options</span>
                                        <a className="btn default"
                                           href="https://www.iproperty.com.my/pro/listings?lang=en-GB"
                                           title="iProperty PRO" key="ipropertyPro" target="_blank">iProperty PRO</a>
                                        <a className="btn default" href="https://irealtor.iproperty.com.my/"
                                           title="iRealtor" key="iRealtor" target="_blank">iRealtor</a>
                                        <a className="btn default"
                                           href="https://www.iproperty.com.my/customer-solutions/"
                                           title="Advertise with us" key="advertiseWithUs" target="_blank">Advertise with us</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header
