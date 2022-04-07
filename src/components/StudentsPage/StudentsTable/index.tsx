import React, { useEffect } from "react";
import StudentsRow from './StudentsRow'
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import './index.scss';
import { pageNext, pagePrevious, setRowsPerPage } from "../../../redux/pageSlice";
import axios from "axios";
import { setStudentsData, StudentsDataState } from "../../../redux/studentsDataSlice";

const StudentsTable: React.FC = () => {
    const page = useAppSelector((state) => state.page);
    const studentsData = useAppSelector((state) => state.studentsData);
    const dispatcher = useAppDispatch();

    useEffect(() => {
        axios.get('https://test-task-j.herokuapp.com/data', { params: { page: page.currentPage, size: page.rowsPerPage } }).then(res => {
            dispatcher(setStudentsData(res.data));
        })
    }, [page.currentPage, page.rowsPerPage])

    const selectOptions = Array.from(Array(20).keys()).map((n) => <option key={n + 1} value={n + 1}>{n + 1}</option>);
    const startRow = Math.min(1 + ((page.currentPage - 1) * page.rowsPerPage), studentsData.totalCount);
    const endRow = Math.min(page.currentPage * page.rowsPerPage, studentsData.totalCount);
    return (
        <div className="StudentsTable">
            <StudentsRow header />
            <div className="StudentsTable__content">
                {studentsData.data?.map((student, i) => <StudentsRow row={student} darkBg={i % 2 !== 0} key={i} />)}
            </div>
            <div className="StudentsTable__pages">
                <span className="StudentsTable__pages-rows-wrapper">
                    <label className="StudentsTable__pages-rows-label" htmlFor="StudentsTable-pages-rows-select">Rows per page: </label>
                    <select
                        className="StudentsTable__pages-rows-select"
                        id="StudentsTable-pages-rows-select"
                        value={page.rowsPerPage}
                        onChange={(event) => dispatcher(setRowsPerPage({ row: Number(event?.target.value), size: studentsData.totalCount }))}
                    >
                        {selectOptions}
                    </select>
                </span>

                <span className="StudentsTable__pages-count">
                    {`${startRow}-${endRow} out of ${studentsData.totalCount}`}
                </span>

                <span className="StudentsTable__pages-change">
                    <button
                        disabled={page.currentPage === 1}
                        className="StudentsTable__pages-button-previous"
                        onClick={() => dispatcher(pagePrevious())}
                    >
                        <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.5917 3.225L13.1084 1.75L4.8667 10L13.1167 18.25L14.5917 16.775L7.8167 10L14.5917 3.225Z" fill="#5B5B5B" />
                        </svg>
                    </button>
                    <button
                        disabled={page.currentPage === Math.ceil(studentsData.totalCount / page.rowsPerPage)}
                        className="StudentsTable__pages-button-next"
                        onClick={() => dispatcher(pageNext())}
                    >
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