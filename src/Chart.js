
import React, { Fragment } from "react";
import data from "./data.json";
import cart from './images/cart.svg';
import ellipsis from './images/ellipsis.svg';
import filter from './images/filter.svg';
import people from './images/people.svg';
import list from './images/list.svg';
import category from './images/category_filter.svg';
import cubetree from './images/cube_tree.svg';
import './style.css';
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
const CountryCard = (props) => {
    console.log("item..........", props);
    console.log("country");
    return (
        <div className="country">
            <img
                src={props.item.imageUrl}
                alt="icon"
                className="country-image"
            />
            <span className="country-text">{props.item.name}</span>
        </div>

    );
};
const Card = (props) => {
    return (
        <ul>
            {props.data.map((item, index) => (
                <Fragment key={item.name}>
                    <li>
                        <div className={item.isCountry ? "card country-container" : "card"}>
                            {item.isCountry &&
                                <CountryCard item={item} />
                            }
                            {!item.isCountry &&
                                <div>
                                    <div className="image">
                                        <img
                                            src={"https://randomuser.me/api/portraits/men/" + randomIntFromInterval(1, 100) + ".jpg"}
                                            alt="Profile"
                                            style={{ borderColor: "white" }}
                                        />
                                    </div>
                                    <div className="card-footer" style={{ background: "#f1f1f1" }}>
                                        <img className="info-dot"
                                            src={ellipsis}
                                            alt="Video"
                                        />
                                        <div className="item-content">
                                            <p className="item-name">{item.name}</p>
                                            <p className="item-text">{item.text}</p>
                                            {item.isRetailer &&
                                                <div className="item-image">
                                                    <img src={cart} alt="cart" />
                                                    <span className="item-image-text">{item.imageText}</span>
                                                </div>
                                            }
                                        </div>

                                    </div>
                                </div>
                            }
                        </div>
                        {item.children?.length && <Card data={item.children} />}
                    </li>
                </Fragment>
            ))}
        </ul>
    );
};

const Chart = () => {
    console.log(data);
    return (
        <>
            <div className="header-block">
                <div className="header-left">
                    <span className="people">People</span>
                    <img src={people} alt="people" />
                </div>
                <div className="header-right">
                    <input className="searchbox" type="text" placeholder="Search" />
                    <div className="filter-section">
                        <img src={filter} alt="img" />
                        <span className="filter-text">Filter</span>
                    </div>
                </div>
            </div>
            <div className="display-outer">
                <div className="display">
                    <div className="display-options">
                        <img src={list} alt="img" />
                        <img src={category} alt="img" />
                        <div className="selected-filter">
                            <img src={cubetree} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="org-tree">
                <Card data={data} />
            </div>
        </>

    );
};

export default Chart;