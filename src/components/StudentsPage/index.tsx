import React from "react";
import './index.scss';
import Subheader from "./Subheader";
import StudentsBar from "./StudentsBar";
import StudentRow from "./StudentRow";

const StudentsPage: React.FC = () => {
    return (
        <main className="StudentsPage">
            <Subheader />
            <StudentsBar />
            <StudentRow />
        </main>
    )
}

export default StudentsPage;