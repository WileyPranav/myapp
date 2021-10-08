
import { useParams } from "react-router";
import useGetData from "./useGetData";

const SubDetails = () => {

    const { no } = useParams();
    const { error, loading, subjects: sub } = useGetData(' http://localhost:8000/subjects/' + no)
    return (<div className="sub-details">
        {error && <div>{error}</div>}
        {!loading && <div>Data Loading.....</div>}
        {sub && (<article><h2>{sub.title}</h2>
                    <p> Taught By {sub.prof}</p>
                    <div>{sub.details}</div>
                    </article>)}
    </div>);
}

export default SubDetails;