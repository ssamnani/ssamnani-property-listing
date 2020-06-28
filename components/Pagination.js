import "../styles/Pagination.module.css";

function Pagination(props) {
    const { pageStart, pageEnd, totalProperties } = props;

    return (
        <div className="paginationWrapper">
            <div className="paginationInfo">
                Viewing {pageStart}-{pageEnd} of {totalProperties}{" "}
                property results
            </div>
            <div className="paginationButtons">
                <ul>
                    <li className="active">1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>&gt;</li>
                </ul>
            </div>
        </div>
    );
}

export default Pagination;