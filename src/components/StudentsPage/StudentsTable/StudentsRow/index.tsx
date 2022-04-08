import React from "react";
import { useAppDispatch } from "../../../../redux/hooks";
import SortArrow from '../../../reusable/SortArrow'
import ExpandArrow from "../../../reusable/ExpandArrow";
import './index.scss';
import { StudentsData, toggleRowExpand } from "../../../../redux/studentsDataSlice";
import StudentTests from "./StudentTests";
import { setSortType, toggleSortId, toggleSortName, toggleSortScore, toggleSortSpeed } from "../../../../redux/sortSlice";

const checkColors = (studentScore: string, speed: string) => {
    let scoreClass = '', speedClass = '';
    if (speedClass !== 'NIL') {
        let score = Number(studentScore.replace('%', ''));
        if (score > 90) scoreClass = 'blue';
        else if (score > 80) scoreClass = 'green';
        else if (score > 50) scoreClass = 'yellow';
        else if (score < 50) scoreClass = 'red';
    }

    if (speed === 'Below Expected') speedClass = 'blue';
    else if (speed === 'As Expected') speedClass = 'green';
    else if (speed === 'Above Expected') speedClass = 'red';

    return [scoreClass, speedClass];
}

const StudentsRow: React.FC<{
    header?: boolean,
    row?: { data: StudentsData, index: number },
    darkBg?: boolean,
    key?: number,
}> = ({ header, row, darkBg }) => {
    const dispatcher = useAppDispatch();

    const sortNameHandler = () => {
        dispatcher(setSortType('name'));
        dispatcher(toggleSortName());
    };
    const sortIdHandler = () => {
        dispatcher(setSortType('id'));
        dispatcher(toggleSortId());
    };
    const sortScoreHandler = () => {
        dispatcher(setSortType('score'));
        dispatcher(toggleSortScore());
    };
    const sortSpeedHandler = () => {
        dispatcher(setSortType('speed'));
        dispatcher(toggleSortSpeed());
    };


    let scoreClass, speedClass;
    if (row) [scoreClass, speedClass] = checkColors(row.data.score, row.data.speed);

    return (
        <div className={`StudentsRow`} onClick={() => { if (row) dispatcher(toggleRowExpand(row.index)) }}>
            <div className={
                `StudentsRow__row-container 
                ${header && 'StudentsRow__row-container--header'} 
                ${darkBg && 'StudentsRow__row-container--dark-bg'}`
            }>
                <div className="StudentsRow__item StudentsRow__selected">
                    <input type="checkbox" className="StudentsRow__selected-checkbox" />
                </div>

                <div className="StudentsRow__item StudentsRow__name">
                    <span className="StudentsRow__text">{row?.data.name || 'Name'}</span>
                    <button className={`StudentsRow__button ${!header && 'StudentsRow--hidden'}`} onClick={sortNameHandler}>
                        <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.95998 3.10666L8.38665 1.53333L6.81332 3.10666H9.95998ZM6.92665 11.82H8.15332L5.15998 4.17999H4.06665L1.06665 11.82H2.29332L2.90665 10.1867H6.31332L6.92665 11.82ZM3.31332 9.09333L4.60665 5.63999L5.89998 9.09333H3.31332V9.09333ZM8.38665 14.4667L9.93998 12.9133H6.83332L8.38665 14.4667ZM14.44 5.02666V4.18666H8.90665V5.25333H12.8267L8.87998 10.96V11.82H14.5667V10.76H10.4867L14.44 5.02666Z" fill="#C0C0C0" />
                        </svg>
                    </button>

                </div>

                <div className="StudentsRow__item StudentsRow__id">
                    <span className="StudentsRow__text">{row?.data.id || 'ID'}</span>
                    <button className={`StudentsRow__button ${!header && 'StudentsRow--hidden'}`} onClick={sortIdHandler}>
                        <SortArrow />
                    </button>

                </div>

                <div className="StudentsRow__item StudentsRow__class">
                    <span className="StudentsRow__text">{row?.data.class || 'Class'}</span>
                </div>

                <div className="StudentsRow__item StudentsRow__score">
                    <span className={`StudentsRow__text ${scoreClass}`}>{row?.data.score || 'Av. Score, %'}</span>

                    <button className={`StudentsRow__button ${!header && 'StudentsRow--hidden'}`} onClick={sortScoreHandler}>
                        <SortArrow />
                    </button>

                </div>

                <div className="StudentsRow__item StudentsRow__speed">
                    <span className={`StudentsRow__text ${speedClass}`}>{row?.data.speed || 'Av. Speed'}</span>
                    <button className={`StudentsRow__button ${!header && 'StudentsRow--hidden'}`} onClick={sortSpeedHandler}>
                        <SortArrow />
                    </button>
                </div>

                <div className="StudentsRow__item StudentsRow__parents">
                    <div className="StudentsRow__parents-wrapper">
                        {row &&
                            <div className="StudentsRow__parents-icon-wrapper">
                                <svg className="StudentsRow__parents-icon" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.33325 11.3334H8.66659V7.33337H7.33325V11.3334ZM7.99992 1.33337C4.31992 1.33337 1.33325 4.32004 1.33325 8.00004C1.33325 11.68 4.31992 14.6667 7.99992 14.6667C11.6799 14.6667 14.6666 11.68 14.6666 8.00004C14.6666 4.32004 11.6799 1.33337 7.99992 1.33337ZM7.99992 13.3334C5.05992 13.3334 2.66659 10.94 2.66659 8.00004C2.66659 5.06004 5.05992 2.66671 7.99992 2.66671C10.9399 2.66671 13.3333 5.06004 13.3333 8.00004C13.3333 10.94 10.9399 13.3334 7.99992 13.3334ZM7.33325 6.00004H8.66659V4.66671H7.33325V6.00004Z" fill="#C0C0C0" />
                                </svg>
                            </div>
                        }
                        <span className="StudentsRow__text">{row?.data.parents.map((n, i) => { if (i > 0) n = ', ' + n; return n; }) || 'Parents'}</span>
                    </div>
                    <button className={`StudentsRow__button ${!row && 'StudentsRow--hidden'}`}>
                        <ExpandArrow
                            className={`StudentsRow__button-icon ${row?.data.isExpanded && 'StudentsRow__button-icon--expanded'}`}
                            fill={row?.data.isExpanded ? "#5B5B5B" : "#C0C0C0"}
                        />
                    </button>
                </div>
            </div>
            {row && <StudentTests data={row?.data} isExpanded={row?.data.isExpanded} />}
        </div>
    )
}

export default StudentsRow;
export { checkColors };