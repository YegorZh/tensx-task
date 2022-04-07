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

    return (
        <div className="StudentsTable">
            <StudentsRow header={{...sortHandlers}} />
            <div className="StudentsTable__content">
                <StudentsRow row={{...testRow}}/>
                <StudentsRow row={{...testRow}} darkBg />
                <StudentsRow row={{...testRow}}/>
                <StudentsRow row={{...testRow}} darkBg />
                <StudentsRow row={{...testRow}}/>
            </div>
        </div>
    )
}

export default StudentsTable;