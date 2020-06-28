import React from 'react'
import { Card, Avatar } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { FaBath } from 'react-icons/fa'
import { IoIosBed } from 'react-icons/io'
import { RiCarLine } from 'react-icons/ri'
import { AiOutlineStar } from 'react-icons/ai'
import { FiPhone } from 'react-icons/fi'
import Slider from 'react-slick'
import '../styles/SearchResult.module.css'

function SearchResult() {
    const { Meta } = Card;
    // const SampleNextArrow = (props) => {
    //     const { className, style, onClick } = props;
    //     return (
    //         <div
    //             className={className}
    //             onClick={onClick}
    //             style={{ display: "block" }}
    //         >
    //             <RightOutlined />
    //         </div>
    //     );
    // }
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <RightOutlined />
    };

    return (
        <div className='search-list'>
            <ul className='search-list-ul'>
                <li className='search-list-li'>
                    <Card
                        title={
                            <React.Fragment>
                                <Meta
                                    avatar={
                                        <Avatar
                                            size={64}
                                            src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
                                            style={
                                                {
                                                    border: '1px solid rgb(210, 214, 218)',
                                                    position: 'absolute',
                                                    backgroundColor: 'white',
                                                    zIndex: 10,
                                                }
                                            }
                                        />
                                    }
                                    title={
                                        <React.Fragment>
                                            <span className='card-title'>
                                                Shervy Liew
                                            </span>
                                            <span className='card-description'>
                                                Posted today 11:30 PM
                                            </span>
                                        </React.Fragment>
                                    }
                                />
                            </React.Fragment>
                        }
                        extra={
                            <img
                                className='card-extra'
                                src="https://images-my.ippstatic.com/images/searchresult/agencybrandlogo/0771059589124aa19fd8daf5c60c8dc8.png"
                                alt="SMY Valuers And Consultants"
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
                            <div className="price">RM 330,000</div>
                            <div className="place">Aspire Residence, Cyberjaya</div>
                            <div className="city">
                                Block 18, Cyberjaya, Cyberjaya, 47130, Selangor
                            </div>
                            <div className="specs">
                                2-sty Terrace/Link House • Built-up : 3,032 sq. ft.
                            </div>
                            <div className="cardFooter">
                            </div>
                        </div>
                    </Card>
                </li>
            </ul>
        </div>
    )
}

export default SearchResult
