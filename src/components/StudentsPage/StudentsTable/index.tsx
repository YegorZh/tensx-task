import React from "react";
import StudentsRow from './StudentsRow'
import './index.scss';

const StudentsTable: React.FC = () => {
    const sortHandlers = {
        sortNameHandler: () => alert('Sorting names'),
        sortIdHandler: () => alert('Sorting Ids'),
        sortScoreHandler: () => alert('Sorting scores'),
        sortSpeedHandler: () => alert('Sorting speed'),
    }

    const testRow = {
        name: 'Nicole Kidman',
        id: '7512552212',
        class: '1D',
        score: '76%',
        speed: 'Below Expected',
        parents: 'Antony Kidman, Jesica Alba-Gabriella',
        expandHandler: () => alert('content expanded'),
    }
    const selectOptions = Array.from(Array(20).keys()).map((n) => <option key={n + 1} value={n + 1}>{n + 1}</option>);

    return (
        <div className="StudentsTable">
            <StudentsRow header={{ ...sortHandlers }} />
            <div className="StudentsTable__content">
                <StudentsRow row={{ ...testRow }} />
                <StudentsRow row={{ ...testRow }} darkBg />
                <StudentsRow row={{ ...testRow }} />
                <StudentsRow row={{ ...testRow }} darkBg />
                <StudentsRow row={{ ...testRow }} />
                <StudentsRow row={{ ...testRow }} darkBg />
                <StudentsRow row={{ ...testRow }} />
                <StudentsRow row={{ ...testRow }} darkBg />
                <StudentsRow row={{ ...testRow }} />
            </div>
            <div className="StudentsTable__pages">
                <span className="StudentsTable__pages-rows-wrapper">
                    <label className="StudentsTable__pages-rows-label" htmlFor="StudentsTable-pages-rows-select">Rows per page: </label>
                    <select className="StudentsTable__pages-rows-select" id="StudentsTable-pages-rows-select">
                        {selectOptions}
                    </select>
                </span>

                <span className="StudentsTable__pages-count">
                    1-5 out of 5
                </span>

                <span className="StudentsTable__pages-change">
                    <button className="StudentsTable__pages-button-previous">
                        <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.5917 3.225L13.1084 1.75L4.8667 10L13.1167 18.25L14.5917 16.775L7.8167 10L14.5917 3.225Z" fill="#5B5B5B" />
                        </svg>
                    </button>
                    <button className="StudentsTable__pages-button-next">
                        <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.40845 16.775L6.88345 18.25L15.1334 10L6.88345 1.75L5.40845 3.225L12.1834 10L5.40845 16.775Z" fill="#5B5B5B" />
                        </svg>
                    </button>
                </span>
            </div>
        </div>
    )
}

export default StudentsTable;