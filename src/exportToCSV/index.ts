import { StudentsData } from "../redux/studentsDataSlice";

const download = (filename: string, text: string) => {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

const processStudentsData = (data: StudentsData) => {
    const out: string[] = [];
    out.push(data.name.toString());
    out.push(data.id.toString());
    out.push(data.class.toString());
    out.push(data.score.toString());
    out.push(data.speed.toString());
    let parents = '"';
    data.parents.forEach((parent, i) => {
        if (i === 0) parents += parent;
        else parents += ', ' + parent;

        if (i === data.parents.length - 1) parents += '"';
    });
    out.push(parents);
    return out;
}

const exportStudentsData = (data: StudentsData[]) => {
    let out: string = 'Name;ID;Class;Av. Score%;Av. Speed;Parents\r\n'
    data.forEach(student => out += processStudentsData(student).join(';') + '\r\n');
    download('students' + Date.now() + '.csv', out);
}

export default exportStudentsData;