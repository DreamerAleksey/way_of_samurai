import LOADING from "../../../assets/images/loading.gif";
import React from "react";

const Preloader = () => {
    return (
        <div>
            this.props.isFetching && <img src={LOADING} alt="loading"/>
        </div>
    )
}

export default Preloader;