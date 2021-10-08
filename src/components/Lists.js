import React from 'react';
import PrintLists from './PrintLists';
import useGetData from './useGetData';


const List = () => {
   
    const{ error, loading, subjects} = useGetData(' http://localhost:8000/subjects')

    const handleDelete = (id) => {
        // const subs = subjects.filter(sub => sub.id !== id);
        // setSubjects(subs);
    }
 

    return (<div>
        {error && <h3>{error}</h3>}
        {!loading && <h2>Data Loading.....</h2>}
        {subjects && <PrintLists subjects={subjects} heading="List of Subjects" handleDelete={handleDelete} />}

        {/* <PrintLists subjects={subjects.filter(sub => sub.prof === 'Pranav Shastri')} heading="Subjects Taught by Pranav" /> */}
    </div>);
}

export default List;