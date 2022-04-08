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

                <div className="StudentTests__settings-date-wrapper">
                    <input className="StudentTests__settings-date"
                        placeholder="SELECT PERIOD"
                        type="date"
                    />
                    <span className="StudentTests__settings-date-icon">
                        <svg width="16" height="17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 7.16663H4.66667V8.49996H6V7.16663ZM8.66667 7.16663H7.33333V8.49996H8.66667V7.16663ZM11.3333 7.16663H10V8.49996H11.3333V7.16663ZM12.6667 2.49996H12V1.16663H10.6667V2.49996H5.33333V1.16663H4V2.49996H3.33333C2.97971 2.49996 2.64057 2.64043 2.39052 2.89048C2.14048 3.14053 2 3.47967 2 3.83329V13.1666C2 13.5202 2.14048 13.8594 2.39052 14.1094C2.64057 14.3595 2.97971 14.5 3.33333 14.5H12.6667C13.0203 14.5 13.3594 14.3595 13.6095 14.1094C13.8595 13.8594 14 13.5202 14 13.1666V3.83329C14 3.47967 13.8595 3.14053 13.6095 2.89048C13.3594 2.64043 13.0203 2.49996 12.6667 2.49996ZM12.6667 13.1666H3.33333V5.83329H12.6667V13.1666Z" fill="#C0C0C0" />
                        </svg>
                    </span>
                </div>

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
                    {data?.tests.map((test, i) => <TestRow data={test} index={i + 1} key={i} />)}
                </div>
                <div className="StudentTests__table-separator"></div>
                <TestRow average={{ score: data.score, speed: data.speed }} />
            </div>
        </div>
    )
}

export default StudentTests;