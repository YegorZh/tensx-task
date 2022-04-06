import React from "react";
import ExpandArrow from "../../reusable/ExpandArrow";
import './index.scss';

const Subheader: React.FC = () => {
    const subheaderItems = ['Show All', 'All Grades', 'All Classes', 'Av.Score', 'Av.Speed', 'All Classes']
    return (
        <div className="Subheader">

            {subheaderItems.map((item, i) => (
                <span key={i} className="Subheader__item-wrapper">
                    <span className="Subheader__item-n1ame">{item}</span>
                    <ExpandArrow className="Subheader__item-arrow" fill="#C0C0C0" />
                </span>
            ))}


            <span className="Subheader__item-wrapper">
                <svg className="Subheader__item-cross" width="11" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.1666 1.27337L9.22659 0.333374L5.49992 4.06004L1.77325 0.333374L0.833252 1.27337L4.55992 5.00004L0.833252 8.72671L1.77325 9.66671L5.49992 5.94004L9.22659 9.66671L10.1666 8.72671L6.43992 5.00004L10.1666 1.27337Z" fill="#C0C0C0" />
                </svg>
                <span className="Subheader__item-name Subheader__item-name-clear">clear all</span>
            </span>

        </div>
    )
}

export default Subheader;