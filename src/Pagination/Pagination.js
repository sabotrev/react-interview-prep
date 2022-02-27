import React, { useEffect, useState } from 'react';

const getJSONData = async (pageNumber = 1) => {
    try {
        let response = await fetch(
            `https://jsonmock.hackerrank.com/api/articles?page=${pageNumber}`
        );
        if (response.ok) {
            return await response.json().then((data) => data);
        }
    } catch {}
};

const PageData = ({ data }) => {
    return (
        <ul>
            {data &&
                data.map((item, index) => {
                    index++;
                    return <li key={index}>{item.title}</li>;
                })}
        </ul>
    );
};

const PageNavigator = ({ currentPage, totalPages, onClick }) => {
    return (
        <div>
            <div>
                <b>{currentPage}</b>
            </div>
            <div>
                {[...Array(totalPages)].map((item, index) => {
                    index++;
                    return (
                        <button key={index} onClick={() => onClick(index)}>
                            {index}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageData, setPageData] = useState({});

    const getData = async (pageNumber) => {
        let data = await getJSONData(pageNumber);
        setPageData(data);
    };

    useEffect(() => {
        getData();
    }, []);

    const test = (i) => {
        setCurrentPage(i);
        getData(i);
    };
    return (
        <div>
            <PageData data={pageData.data} />
            <PageNavigator
                currentPage={currentPage}
                totalPages={pageData.total_pages}
                onClick={test}
            />
        </div>
    );
};

export default Pagination;
