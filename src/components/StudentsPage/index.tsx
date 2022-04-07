import React from "react";
import './index.scss';
import Subheader from "./Subheader";
import StudentsBar from "./StudentsBar";
import StudentsTable from "./StudentsTable";


const StudentsPage: React.FC = () => {
    return (
        <main className="StudentsPage">
            <Subheader />
            <StudentsBar />
            <StudentsTable />
        </main>
    )
}

export default StudentsPage;