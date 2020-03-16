import React, { Component } from 'react';

import starImage from "../../images/SVG/star-full.svg";
import heartImage from "../../images/SVG/heart.svg";
import bubbleImage from "../../images/SVG/bubble2.svg";
import shirt1 from "../../images/adas.jpg";
import bodyBuilder from "../../images/body-builder.jpg";
import dressShirt from "../../images/dress-shirt.jpg";
import hotImage from "../../images/hot-image.png";
import shirt from "../../images/shirt.png";


import ProductRegisterHeader from '../CommonComponent/ProductRegisterHeader';
import ShopeMateHeader from '../CommonComponent/ShopeMateHeader';
import ProductFooter from '../CommonComponent/ProductFooter';

import "./style.css";
import CarouselPage from '../CommonComponent/CarouselPage';

class ProductDetailPage extends Component {

    render() {
        return (
            <>
            <ProductRegisterHeader />
            <ShopeMateHeader/>
                <div className="containerdiv">
                    <div className="detail">
                        <div className="detail__image">
                            <CarouselPage />
                        </div>
                        <div className="detail__description">
                            <div className="detail__heading">
                                <h1 className="detail__heading__text">Home &bullet; All Catgegories &bullet; Men's Clothing & Accessories</h1>
                            </div>
                            <div className="detail__star">
                                <img alt="" src={starImage} className="star__icon"></img>
                                <img  alt="" src={starImage} className="star__icon"></img>
                                <img  alt="" src={starImage} className="star__icon"></img>
                                <img  alt="" src={starImage} className="star__icon"></img>
                                <img  alt="" src={starImage} className="star__icon"></img>
                            </div >

                            <div className="detail__category">
                                <h1 className="detail__category__heading">Super Oversized T-shirt With Raw Sleeves In Brown</h1>
                                <h1 className="detail__category__amount">£13.99</h1>
                            </div>

                            <div className="detail__size-guid">
                                <h1 className="detail__size-guid__first">Size</h1>
                                <h1 className="detail__size-guid__second">Size guide</h1>
                            </div>

                            <ul className="detail__button-size">
                                <li className="detail__button-size--item">
                                    <a href="#" className="detail__button-size__link">XS</a>
                                </li>
                                <li className="detail__button-size--item">
                                    <a href="#" className="detail__button-size__link">S</a>
                                </li>
                                <li className="detail__button-size--item">
                                    <a href="#" className="detail__button-size__link">M</a>
                                </li>
                                <li className="detail__button-size--item">
                                    <a href="#" className="detail__button-size__link">L</a>
                                </li>
                                <li className="detail__button-size--item">
                                    <a href="#" className="detail__button-size__link">ML</a>
                                </li>
                                <li className="detail__button-size--item">
                                    <a href="#" className="detail__button-size__link">XXL</a>
                                </li>
                            </ul>

                            <div className="detail__quantity">
                                <h1 className="detail__quantity__text">Quantity</h1>
                                <div className="detail__quantity__count">
                                    <div className="detail__quantity__count__minus">
                                        <a href="#" className="detail__quantity__count__link">-</a>
                                    </div>
                                    <div className="detail__quantity__count__one">
                                        2
                                    </div>
                                    <div className="detail__quantity__count__minus">
                                        <a href="#" className="detail__quantity__count__link">+</a>
                                    </div>
                                </div>
                            </div>

                            <div className="detail__cart">
                                <button className="detail__cart__button">Add to cart</button>
                                <div className="detail__cart__heart">
                                    <img  alt="" src={heartImage} className="detail__cart__heart__icon"></img>
                                    <h1 className="detail__cart__heart__text">Add to Wish List</h1>
                                </div>
                            </div >
                        </div >
                    </div >

                    <div className="product">
                        <h1 className="product__heading">Product reviews</h1>
                        <div className="product__detail">
                            <div className="product__detail__stars">
                                <img src={starImage} className="star__icon"></img>
                                <img src={starImage} className="star__icon"></img>
                                <img src={starImage} className="star__icon"></img>
                                <img src={starImage} className="star__icon"></img>
                                <img src={starImage} className="star__icon star__icon--white"></img>
                                <h1 className="product__detail__stars__heading">Pablo Permins</h1>
                                <span className="product__detail__stars__span">one hour ago</span>
                            </div >
                            <div className="product__detail__view">
                                <p className="product__detail__view__paragrapgh">Got this through the post the other day and right from opening the packet
                                I knew this was quality, put it on and i was right!! Well done
                            </p>
                                <div className="product__detail__view__communicate">

                                    <div className="product__detail__view__communicate__heart">
                                        <div className="product__detail__view__communicate__heart__back">
                                            <img  alt="" src={heartImage} className="product__detail__view__communicate__heart__icon"></img>
                                        </div>
                                        <h1 className="product__detail__view__communicate__heart__count">113</h1>
                                    </div>

                                    <div className="product__detail__view__communicate__heart">
                                        <div className="product__detail__view__communicate__heart__back">
                                            <img  alt="" src={bubbleImage} className="product__detail__view__communicate__heart__icon product__detail__view__communicate__heart__icon--black"></img>
                                        </div>
                                        <h1 className="product__detail__view__communicate__heart__count">113</h1>
                                    </div>
                                </div >
                            </div >
                        </div >
                    </div >
                    <div className="add_review">
                        <h1 className="add_review__heading">Add a review</h1>
                        <div className="add_review__input">
                            <form className="add_review__input__form">
                                <div className="add_review__input__form__nick">
                                    <label className="add_review__input__form__nick__label">Choose a nick name</label>
                                    <input type="text" className="add_review__input__form__nick__input"></input>
                                </div>
                                <div className="add_review__input__form__your">
                                    <label className="add_review__input__form__your__label">Your review</label>
                                    <div className="add_review__input__form__your__container">
                                        <textarea className="add_review__input__form__your__input"></textarea>
                                        <div className="add_review__input__form__your__heading">
                                            <h1 className="add_review__input__form__your__heading__gray">Your reviews must be
                                            atleast 50 characters
                                        </h1>
                                            <h1 className="add_review__input__form__your__heading__primary">
                                                Full review guidelines
                                        </h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="add_review__input__form__rating">
                                    <h1 className="add_review__input__form__rating__heading">
                                        Overall rating
                                    </h1>
                                    <div className="add_review__input__form__rating__star">
                                        <img  alt="" src={starImage} className="star__icon"></img>
                                        <img  alt="" src={starImage} className="star__icon"></img>
                                        <img  alt="" src={starImage} className="star__icon"></img>
                                        <img  alt="" src={starImage} className="star__icon"></img>
                                        <img  alt="" src={starImage} className="star__icon"></img>
                                    </div>
                                </div >
                                <button className="add_review__input__form__submit">
                                    Submit
                            </button>
                            </form >
                        </div >
                    </div >
                    <div className="card">
                        <h1 className="card__heading">You may also like</h1>
                        <div className="card__card">
                            <div className="card__parent">
                                <div className="card__hover">
                                    <img src={shirt1} className="card__image"></img>
                                    <h1 className="card__text">Men's Knitwear Offers</h1>
                                    <button className="card__button">
                                        Buy Now
                                </button>
                                </div>
                                <button className="card__parent__button">Hot</button>
                                <div className="card__middle">
                                    <img className="card__middle__image" src={heartImage}></img>
                                    <button className="card__middle__button">
                                        Quick View
                                    </button>
                                </div>
                            </div>
                            <div className="card__parent">
                                <div className="card__hover">
                                    <img src={bodyBuilder} className="card__image"></img>
                                    <h1 className="card__text">Men's Knitwear Offers</h1>
                                    <button className="card__button">
                                        Buy Now
                                </button>
                                </div>
                                <div className="card__middle">
                                    <img className="card__middle__image" src={heartImage}></img>
                                    <button className="card__middle__button">
                                        Quick View
                                </button>
                                </div>
                            </div>

                            <div className="card__parent">
                                <div className="card__hover">
                                    <img src={dressShirt} className="card__image"></img>
                                    <h1 className="card__text">Men's Knitwear Offers</h1>
                                    <button className="card__button">
                                        Buy Now
                                </button>
                                </div>
                                <div className="card__middle">
                                    <img className="card__middle__image" src={heartImage}></img>
                                    <button className="card__middle__button">
                                        Quick View
                                </button>
                                </div>
                            </div>

                            <div className="card__parent">
                                <div className="card__hover">
                                    <img src={hotImage} className="card__image"></img>
                                    <h1 className="card__text">Men's Knitwear Offers</h1>
                                    <button className="card__button">
                                        Buy Now
                                </button>
                                </div>
                                <div className="card__middle">
                                    <img className="card__middle__image" src={heartImage}></img>
                                    <button className="card__middle__button">
                                        Quick View
                                </button>
                                </div>
                            </div>

                            <div className="card__parent">
                                <div className="card__hover">
                                    <img src={shirt} className="card__image"></img>
                                    <h1 className="card__text">Men's Knitwear Offers</h1>
                                    <button className="card__button">
                                        Buy Now
                                </button>
                                </div>
                                <div className="card__middle">
                                    <img className="card__middle__image" src={heartImage}></img>
                                   
                                    <button className="card__middle__button">
                                        Quick View
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                <ProductFooter/>
            </>
        )
    }
}


export default ProductDetailPage;