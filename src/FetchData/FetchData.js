import React, { useState, useEffect } from 'react';
/*
    https://hackernoon.com/top-3-coding-challenges-for-mid-level-react-developers
    Displaying Data Coming From an API
 */
const FetchData = () => {
    const [data, setData] = useState(null);
    const getData = async () => {
        try {
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/posts'
            );
            if (response.ok) {
                return await response
                    .json()
                    .then((dataArray) => dataArray.slice(0, 10));
            }
        } catch {}
    };

    useEffect(() => {
        (async () => {
            let data = await getData();
            console.log(data);
            setData(data);
        })();
    }, []);

    return (
        <>
            {data &&
                data.map((item) => {
                    return (
                        <div key={item.id}>
                            <h3>{item.title}</h3>
                            <p>{item.body}</p>
                        </div>
                    );
                })}
        </>
    );
};

export default FetchData;
