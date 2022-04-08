import React from "react";
import { checkColors } from "../..";
import { TestData } from "../../../../../../redux/studentsDataSlice";
import './index.scss';

const TestRow: React.FC<{
    data?: TestData,
    index?: number,
    average?: { score: string, speed: string },
    key?: number,
}> = ({ data, index, average }) => {
    const absentClass = data?.absent ? 'gray-new' : '';

    let scoreClass = '';
    if (data?.score) {
        const percent = data?.score / data?.total;
        if (percent > 0.9) scoreClass = 'blue';
        else if (percent > 0.8) scoreClass = 'green';
        else if (percent > 0.5) scoreClass = 'yellow';
        else if (percent < 0.5) scoreClass = 'red';
    }

    let speedClass = '';
    if (data?.speed) {
        const numSpeed = Number(data.speed.replace('h ', '').replace('m ', '').replace('s', ''));
        const numExpSpeed = Number(data.expSpeed.replace('h ', '').replace('m ', '').replace('s', ''));
        const relation = numExpSpeed / numSpeed;
        if (relation > 1) speedClass = 'red';
        if (relation === 1) speedClass = 'yellow';
        if (relation < 1) speedClass = 'blue';
    }
    if (average) [scoreClass, speedClass] = checkColors(average.score, average.speed);
    return (
        <div className={
            `TestRow 
            ${data && ' TestRow--content'} 
            ${average && ' TestRow--average'}
            ${data && (!data?.score || !data?.speed) && 'TestRow--nil'}`}
        >
            <div className="TestRow__id TestRow__item">
                {index ? index?.toString() + '.' : average ? '' : '#'}
            </div>

            <div className={`TestRow__test-label TestRow__item ${absentClass}`}>
                {data?.label || (average ? 'AVERAGE' : 'Test Label')}
            </div>

            <div className={`TestRow__score TestRow__item ${scoreClass + ' ' + absentClass}`}>
                {data ? (data.score || 'NIL') : (average?.score || 'Score')}
            </div>

            <div className={`TestRow__speed TestRow__item ${speedClass + ' ' + absentClass}`}>
                {data ? (data.speed || 'NIL') : (average?.speed || 'Speed')}
            </div>

            <div className={`TestRow__total-questions TestRow__item ${absentClass}`}>
                {data?.total || (average ? '' : 'Total Q-ns')}
            </div>

            <div className={`TestRow__expected-speed TestRow__item ${absentClass}`}>
                {data?.expSpeed || (average ? '' : 'Exp. Speed')}
            </div>

            <div className={`TestRow__concept TestRow__item ${absentClass}`}>
                {data?.concept || (average ? '' : 'Concept')}
            </div>

            <div className={`TestRow__date TestRow__item ${absentClass}`}>
                {data?.date || (average ? '' : 'Date')}
            </div>

            <div className="TestRow__absent TestRow__item">
                {data?.absent !== undefined ? <input type="checkbox" checked={data.absent} readOnly /> : (average ? '' : 'Absent')}
            </div>
        </div>
    )
}

export default TestRow;