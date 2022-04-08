import React from "react";
import './index.scss';
import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks";
import ExpandArrow from "../../../../reusable/ExpandArrow";
import { StudentsData } from "../../../../../redux/studentsDataSlice";
import TestRow from "./TestRow";

const StudentTests: React.FC<{ data: StudentsData, isExpanded: boolean }> = ({ data, isExpanded }) => {
    const searchValue = useAppSelector((state) => state.search.value);
    const dispatcher = useAppDispatch();
    return (
        <div className={`StudentTests ${isExpanded && 'StudentTests--active'}`} onClick={(event) => event?.stopPropagation()}>
            <div className="StudentTests__headers">
                <h3 className="StudentTests__headers-item">
                    <span>student:</span>
                    <span className="StudentTests--accent">{data.name}</span>
                </h3>
                <h3 className="StudentTests__headers-item">id: <span className="StudentTests--accent">{data.id}</span></h3>
            </div>
            <div className="StudentTests__settings">
                {
                    ['All Concepts', 'All Score', 'All Speed'].map(n =>
                        <button key={n} className="StudentTests__settings-button StudentTests--accent">
                            <span>{n}</span>
                            <ExpandArrow className="StudentTests__settings-icon" fill="#5B5B5B" />
                        </button>)
                }
                <input className="StudentTests__settings-date"
                    placeholder="SELECT PERIOD"
                    type="date"
                />
                <button className="StudentTests__settings-refresh">
                    <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.6667 13.8333L18.0001 16.5H20.0001C20.0001 18.7066 18.2067 20.5 16.0001 20.5C15.3267 20.5 14.6867 20.3333 14.1334 20.0333L13.1601 21.0066C13.9801 21.5266 14.9534 21.8333 16.0001 21.8333C18.9467 21.8333 21.3334 19.4466 21.3334 16.5H23.3334L20.6667 13.8333ZM12.0001 16.5C12.0001 14.2933 13.7934 12.5 16.0001 12.5C16.6734 12.5 17.3134 12.6666 17.8667 12.9666L18.8401 11.9933C18.0201 11.4733 17.0467 11.1666 16.0001 11.1666C13.0534 11.1666 10.6667 13.5533 10.6667 16.5H8.66675L11.3334 19.1666L14.0001 16.5H12.0001Z" fill="#C0C0C0" />
                    </svg>

                </button>
            </div>
            <div className="StudentTests__separator-top"></div>
            <div className="StudentTests__legend-container">
                <div className="StudentTests__legend">
                    <span className="StudentTests__legend-category">Score</span>
                    <span className="StudentTests__legend-item blue"><span className="StudentTests__circle" />90% Accuracy</span>
                    <span className="StudentTests__legend-item green"><span className="StudentTests__circle" />80% - 89% Accuracy</span>
                    <span className="StudentTests__legend-item yellow"><span className="StudentTests__circle" />50%-79% Accuracy</span>
                    <span className="StudentTests__legend-item red"><span className="StudentTests__circle" />Below 50% Accuracy</span>
                </div>
                <div className="StudentTests__legend">
                    <span className="StudentTests__legend-category">Speed</span>
                    <span className="StudentTests__legend-item blue"><span className="StudentTests__circle" />Below Expected</span>
                    <span className="StudentTests__legend-item green"><span className="StudentTests__circle" />As Expected</span>
                    <span className="StudentTests__legend-item red"><span className="StudentTests__circle" />Above Expected</span>
                </div>
            </div>
            <div className="StudentTests__table">
                <TestRow />
                <div className="StudentTests__table-content">
                    {data?.tests.map((test, i) => <TestRow data={test} index={i + 1} key={i}/>)}
                </div>
                <div className="StudentTests__table-separator"></div>
                <TestRow average={{ score: data.score, speed: data.speed }} />
            </div>
        </div>
    )
}

export default StudentTests;