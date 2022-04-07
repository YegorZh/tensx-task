import React from "react";
import './index.scss';
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setSearchValue, stampSearch } from "../../../redux/searchSlice";

const StudentsBar: React.FC = () => {
    const searchValue = useAppSelector((state) => state.search.value);
    const dispatcher = useAppDispatch();
    return (
        <div className="StudentsBar">
            <div className="StudentsBar-title-wrapper">
                <h1 className="StudentsBar-title">students</h1>
            </div>

            <div className="StudentsBar-search">
                <div className="StudentsBar-search-wrapper">
                    <input 
                    onChange={(event) => dispatcher(setSearchValue(event.target.value))}
                    value={searchValue}
                    type="textfield" 
                    className="StudentsBar-search-input" 
                    placeholder="Enter Student Name, Parent or ID here" />
                    <button className="StudentsBar-search-button" onClick={() => dispatcher(stampSearch())}>
                        <svg className="StudentsBar-search-icon" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.3333 9.33333H9.80667L9.62 9.15333C10.2733 8.39333 10.6667 7.40667 10.6667 6.33333C10.6667 3.94 8.72667 2 6.33333 2C3.94 2 2 3.94 2 6.33333C2 8.72667 3.94 10.6667 6.33333 10.6667C7.40667 10.6667 8.39333 10.2733 9.15333 9.62L9.33333 9.80667V10.3333L12.6667 13.66L13.66 12.6667L10.3333 9.33333ZM6.33333 9.33333C4.67333 9.33333 3.33333 7.99333 3.33333 6.33333C3.33333 4.67333 4.67333 3.33333 6.33333 3.33333C7.99333 3.33333 9.33333 4.67333 9.33333 6.33333C9.33333 7.99333 7.99333 9.33333 6.33333 9.33333Z" fill="#C0C0C0" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="StudentsBar-export">
                <button className="StudentsBar-export-button">
                    <svg className="StudentsBar-export-icon" width="16" height="17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.3" d="M6.55347 5.83339H7.33347V9.83339H8.6668V5.83339H9.4468L8.00013 4.38672L6.55347 5.83339Z" fill="#C0C0C0" />
                        <path d="M7.99992 2.5L3.33325 7.16667H5.99992V11.1667H9.99992V7.16667H12.6666L7.99992 2.5ZM8.66659 5.83333V9.83333H7.33325V5.83333H6.55325L7.99992 4.38667L9.44659 5.83333H8.66659ZM3.33325 12.5H12.6666V13.8333H3.33325V12.5Z" fill="#C0C0C0" />
                    </svg>
                    <span className="StudentsBar-export-text">
                        export csv
                    </span>
                </button>
            </div>
        </div>
    )
}

export default StudentsBar;