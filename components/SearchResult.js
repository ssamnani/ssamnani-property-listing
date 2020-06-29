import React from "react";
import { Card, Avatar } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { FaBath } from "react-icons/fa";
import { IoIosBed } from "react-icons/io";
import { RiCarLine } from "react-icons/ri";
import { AiOutlineStar } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import "../styles/SearchResult.module.css";

function SearchResult() {
  const { Meta } = Card;
  //   const SampleNextArrow = (props) => {
  //     const { className, style, onClick } = props;
  //     return (
  //       <div className={className} onClick={onClick} style={{ display: "block" }}>
  //         <RightOutlined />
  //       </div>
  //     );
  //   };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <RightOutlined />
  };
  const searchResult = useSelector((state) => state.searchResult);
  const { items } = searchResult;

  const currencyMapper = (currency) => {
    let mapping = "";
    switch (currency) {
      case "MYR":
        mapping = "RM";
        break;
      default:
        mapping = currency;
        break;
    }
    return mapping;
  };

  const getPropertySizeUnitMapping = (unitStr) => {
    let mapping = "";
    switch (unitStr) {
      case "SQUARE_FEET":
        mapping = "sq. ft.";
        break;
      default:
        mapping = unitStr;
        break;
    }
    return mapping;
  };

  return (
    <div className="search-list">
      <ul className="search-list-ul">
        {items.map((item, index) => {
          const {
            title,
            listers,
            organisations,
            prices,
            address: { formattedAddress = "" } = {},
            attributes: { bedroom = "", bathroom = "", carPark = "" },
            propertyType,
            attributes: {
              builtUp = "",
              landTitleType = "",
              tenure = "",
              unitType = "",
              sizeUnit = "",
              furnishing = "",
            },
          } = item;

          let agentName = "";
          let agentPhone = "";
          let agentImage = "";
          let orgLogoUrl = "";

          if (listers !== undefined) {
            const {
              name = "",
              contact: { phones: { number = "" } = {} } = {},
              image: { thumbnailUrl = null } = {},
            } = listers[0];
            const {
              logo: { thumbnailUrl: orgThumbnailUrl = "" } = {},
            } = organisations[0];
            agentName = name;
            agentPhone = number;
            agentImage = thumbnailUrl;
            orgLogoUrl = orgThumbnailUrl;
          }

          const { currency, min: minPrice } = prices[0];

          return (
            <li key={index} className="search-list-li">
              <Card
                title={
                  <React.Fragment>
                    <Meta
                      avatar={
                        <Avatar
                          size={64}
                          src={agentImage}
                          style={{
                            border: "1px solid rgb(210, 214, 218)",
                            position: "absolute",
                            backgroundColor: "white",
                            zIndex: 10,
                          }}
                        />
                      }
                      title={
                        <React.Fragment>
                          <span className="card-title">{agentName}</span>
                          <span className="card-description">
                            Posted{" "}
                            {new Date()
                              .toDateString()
                              .split(" ")
                              .filter((a, i) => i !== 0)
                              .join(" ")}
                          </span>
                        </React.Fragment>
                      }
                    />
                  </React.Fragment>
                }
                extra={
                  <img
                    className="card-extra"
                    src={orgLogoUrl}
                    alt=""
                    data-sizes="auto"
                    sizes="43px"
                  />
                }
                loading={false}
                style={{ width: 750 }}
              >
                <Slider {...settings}>
                  <div className="carouselWrapper">
                    <img
                      className="carouselImage"
                      src="https://img.rea-asia.com/my-subsale/premium/750x560-fit/realtors/images/640/35327/c1e81b7953ef4a63a8143f6d66074ade.jpg"
                      alt="1"
                    />
                  </div>
                  <div className="carouselWrapper">
                    <img
                      className="carouselImage"
                      src="https://img.rea-asia.com/my-subsale/premium/750x560-fit/realtors/images/640/35327/c1e81b7953ef4a63a8143f6d66074ade.jpg"
                      alt="2"
                    />
                  </div>
                  <div className="carouselWrapper">
                    <img
                      className="carouselImage"
                      src="https://img.rea-asia.com/my-subsale/premium/750x560-fit/realtors/images/640/35327/c1e81b7953ef4a63a8143f6d66074ade.jpg"
                      alt="3"
                    />
                  </div>
                </Slider>

                <div className="descriptionWrapper">
                  <div className="price">
                    {currencyMapper(currency)} {minPrice}
                  </div>
                  <div className="place">{title}</div>
                  <div className="city">{formattedAddress}</div>
                  <div className="specs">
                    {propertyType} • Built-up : {builtUp}{" "}
                    {getPropertySizeUnitMapping("SQUARE_FEET")}{" "}
                    {furnishing && `• ${furnishing}`}
                  </div>
                  <div className="cardFooter">
                    <div className="listing-facilities">
                      <ul className="attributes-facilities-wrapper">
                        <li className="attributes-facilities-item-wrapper">
                          <IoIosBed className="bedroom-facility" />
                          {bedroom}
                        </li>
                        <li className="attributes-facilities-item-wrapper">
                          <FaBath className="bathroom-facility" />
                          {bathroom}
                        </li>
                        <li className="attributes-facilities-item-wrapper">
                          <RiCarLine className="carPark-facility" />
                          {carPark}
                        </li>
                      </ul>
                    </div>
                    <div className="save-listing-button">
                      <button id="saved-listing-wrapper">
                        <AiOutlineStar
                          className="save-icon"
                          id="saved-listing-icon"
                        />
                        <span className="save-text">Save</span>
                      </button>
                    </div>
                    <div className="contact-detail-button">
                      <div className="contact-detail-button-first">
                        <a className="phone-desktop">
                          <FiPhone className="phone-icon" />
                          <span className="phone-number">+60162...</span>
                        </a>
                        <a className="phone-mobile" href={"tel:" + agentPhone}>
                          <FiPhone className="phone-icon" />
                          <span>Call agent</span>
                        </a>
                      </div>
                      <div className="contact-detail-button-second">
                        <a
                          className="depth-listing-card-link"
                          href="https://www.iproperty.com.my/property/kota-damansara/palm-spring-damansara/sale-8946777/"
                        >
                          View details
                          <RightOutlined
                            style={{ fontSize: "12px", marginLeft: "2px" }}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SearchResult;
