import { Link } from "react-router-dom";




const PrintLists = ({ subjects, heading, handleDelete }) => {
    // const subjects = props.subjects;
    // const heading = props.heading;
    return (<div className="list">
        <h1>{heading}</h1>
        {subjects.map(subject => (
            <div className="subject" key={subject.id} >
                <Link to={`/subjects/${subject.id}`}>
                <h2>{subject.title}</h2>
                <p> is Taught by {subject.prof}</p>
                <button onClick={() => handleDelete(subject.id)}> Delete Subject</button>
            </Link>
            </div>
        ))}

    </div>);
}

export default PrintLists;