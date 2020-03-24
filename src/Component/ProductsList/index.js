import React, { Component } from "react";
import ProductRegisterHeader from "../CommonComponent/ProductRegisterHeader";
import ShopMateHeader from "../CommonComponent/ShopeMateHeader";
import { connect } from "react-redux";

import Sprite from "../../images/sprite.svg";
import Shirt from "../../images/shirt.png";
import bodyBuilder from "../../images/body-builder.jpg";
import DressShirt from "../../images/dress-shirt.jpg";
import Adas from "../../images/adas.jpg";
import HotImage from "../../images/hot-image.png";
import { getItemsRequest } from "../../Actions";

import "./style.css";
import ProductFooter from "../CommonComponent/ProductFooter";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNo: 1,
      items: []
    };
  }
  componentDidMount = () => {
    this.getAllItems();
  };
  getAllItems = () => {
    const pageNo = this.state;
    const itemParams = {
      params: `?pagination=false&page=${pageNo}`
    };
    this.props.getItemsRequest({ itemParams });
  };
  render() {
    console.log(this.props.items.data);
    var all_items = <section></section>;
    if (this.props.items.data) {
      all_items = this.props.items.data.map(item => {
        return (
          <section className="home__card">
            <div className="home__card__parent">
              <div className="home__card__hover">
                <img
                  alt=""
                  src={require(`../../images/items/${item.image}`)}
                  className="home__card__image"
                />
                <h1 className="home__card__text">{item.name}</h1>
                <button className="home__card__button">Buy Now</button>
              </div>
              <div className="home__card__middle">
                <img
                  alt=""
                  className="home__card__middle__image"
                  src={require(`../../images/items/${item.image}`)}
                />
                <button className="home__card__middle__button">
                  Quick View
                </button>
              </div>
            </div>
          </section>
        );
      });
    }
    return (
      <>
        <ProductRegisterHeader />
        <ShopMateHeader />
        <main>
          <div className="container">
            <section className="mens-wear">
              <h1 className="mens-wear__heading">Mens wear</h1>
              <ul className="mens-wear__list">
                <li className="mens-wear__list__item">Accessories</li>
                <li className="mens-wear__list__item">Hoodies & Sweatshirts</li>
                <li className="mens-wear__list__item">Leather Jackets</li>
                <li className="mens-wear__list__item">ASOS Basic Tops</li>
                <li className="mens-wear__list__item">Jackets & Coats</li>
                <li className="mens-wear__list__item">Long Sleeve T-Shirts</li>
                <li className="mens-wear__list__item">Bags</li>
                <li className="mens-wear__list__item">Jeans</li>
                <li className="mens-wear__list__item">Loungewear</li>
                <li className="mens-wear__list__item">Caps & Hats</li>
                <li className="mens-wear__list__item">Jewellery</li>
                <li className="mens-wear__list__item">Oversized & Longline</li>
                <li className="mens-wear__list__item">Gifts</li>
                <li className="mens-wear__list__item">Joggers</li>
                <li className="mens-wear__list__item">Polo Shirts</li>
                <li className="mens-wear__list__item">Grooming</li>
                <li className="mens-wear__list__item">Jumper & Cardigans</li>
                <li className="mens-wear__list__item">Shirts</li>
              </ul>
            </section>
          </div>
          {all_items}
          {/*<section className="home__card">
            <div className="home__card__parent">
              <div className="home__card__hover">
                <img alt="" src={Shirt} className="home__card__image" />
                <h1 className="home__card__text">Men's Knitwear Offers</h1>
                <button className="home__card__button">Buy Now</button>
              </div>
              <div className="home__card__middle">
                <img
                  alt=""
                  className="home__card__middle__image"
                  src={Sprite}
                />
                <button className="home__card__middle__button">
                  Quick View
                </button>
              </div>
            </div>
            <div className="home__card__parent">
              <div className="home__card__hover">
                <img alt="" src={bodyBuilder} className="home__card__image" />
                <h1 className="home__card__text">Men's Knitwear Offers</h1>
                <button className="home__card__button">Buy Now</button>
              </div>

              <div className="home__card__middle">
                <img
                  alt=""
                  className="home__card__middle__image"
                  src={Sprite}
                />
                <button className="home__card__middle__button">
                  Quick View
                </button>
              </div>
            </div>

            <div className="home__card__parent">
              <div className="home__card__dollar">
                <div className="home__card__hover">
                  <h1 className="home__card__dollar__text">
                    Men's Shirt Offers
                  </h1>
                  <img
                    alt=""
                    src={DressShirt}
                    className="home__card__dollar__image"
                  />
                  <a href="/#" className="home__card__dollar__button">
                    From £4.99
                  </a>
                </div>

                <div className="home__card__middle">
                  <img
                    alt=""
                    className="home__card__middle__image"
                    src={Sprite}
                  />
                  <button className="home__card__middle__button">
                    Quick View
                  </button>
                </div>
              </div>
            </div>
    </section>*/}

          {/*<section className="hot-section">
            <div className="hot-section__parent">
              <div className="home__card__hover">
                <img alt="" src={HotImage} className="home__card__image" />
                <h1 className="home__card__text">Men's Knitwear Offers</h1>
                <a className="hot-section__button" href="/#">
                  £14.99
                </a>
              </div>

              <div className="hot-section__middle">
                <img alt="" src={Sprite} className="home__card__image" />
                <button className="hot-section__middle__button">
                  Quick View
                </button>
              </div>
              <button className="hot-section__parent__hot">HOT</button>
            </div>
            <div className="hot-section__parent">
              <div className="home__card__hover">
                <img alt="" src={Adas} className="home__card__image" />
                <h1 className="home__card__text">Men's Knitwear Offers</h1>
                <button className="card__button">Buy Now</button>
              </div>

              <div className="hot-section__middle">
                <img alt="" src={Sprite} className="home__card__image" />

                <button className="hot-section__middle__button">
                  Quick View
                </button>
              </div>
            </div>
            <div className="hot-section__parent">
              <div className="home__card__hover">
                <img alt="" src={Adas} className="home__card__image" />
                <h1 className="home__card__text">Men's Knitwear Offers</h1>
                <div className="hot-section__circle">
                  <a href="/#" className="hot-section__circle__one">
                    .
                  </a>
                  <a href="/#" className="hot-section__circle__two">
                    .
                  </a>
                  <a href="/#" className="hot-section__circle__three">
                    .
                  </a>
                </div>
              </div>

              <div className="hot-section__middle">
                <img alt="" src={Sprite} className="home__card__image" />
                <button className="hot-section__middle__button">
                  Quick View
                </button>
              </div>
            </div>
          </section>*/}
        </main>
        <ProductFooter />
      </>
    );
  }
}
const mapStateToProps = state => {
  console.log(state.items);
  return {
    items: state.items
  };
};
const mapDispachToProps = dispatch => {
  return {
    getItemsRequest: itemParams => dispatch(getItemsRequest(itemParams))
  };
};
export default connect(mapStateToProps, mapDispachToProps)(ProductList);
