import { useState, useEffect } from 'react';

const useGetData = (url) => {

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [subjects, setSubjects] = useState(null);

    useEffect(() => {
        const AC = new AbortController();
        setTimeout(() => {
            fetch(url,{signal:AC.signal})
                .then(data => {
                    if(!data.ok){
                        throw Error('Could not Connect with the database.');
                    }
                    return data.json()
                })
                .then(subs => {
                    setSubjects(subs);
                    setLoading(true);
                    setError(null);
                })
                .catch(err=>{
                    if(err.name ==='AbortError'){
                        console.log('Aborted the Fetch Request')
                    }else{
                    setLoading(true);
                    setSubjects(null);
                    setError(err.message);
                    }
                })
        }, 1000);

        return ()=>{AC.abort();}
    }, [url]);

    return {error, loading, subjects};
}
 
export default useGetData;