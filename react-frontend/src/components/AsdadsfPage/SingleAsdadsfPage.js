import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import client from "../../services/restClient";


const SingleAsdadsfPage = (props) => {
    const history = useHistory();
    const urlParams = useParams();
    const [data, setData] = useState();
    
    useEffect(() => {
        //on mount
        client
            .service("asdadsf")
            .get(urlParams.singleAsdadsfId, { query: { $populate: [] }})
            .then((res) => {
                setData(res || {});
                
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "Asdadsf", type: "error", message: error.message || "Failed get asdadsf" });
            });
    }, []);

    const goBack = () => {
        history.replace("/asdadsf");
    };
    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Asdadsf</h3>
                </div>
                <p>asdadsf/{urlParams.singleAsdadsfId}</p>
            </div>
            <div className="grid col-10">
                <div className="card w-full">
            <label className="text-sm">fghgfdfg</label>
                    <p className="m-0" >{data?.asdfadsfadsf}</p>
                    <label className="text-sm">dfghgfds</label>
                    <p className="m-0" >{data?.asdfadsfadsfads}</p>
                    <label className="text-sm">fghgfdfg</label>
                    <p className="m-0" >{data?.asdfadsfadsf_2}</p>
                    <label className="text-sm">fghgfdfg</label>
                    <p className="m-0" >{data?.asdfadsfadsf_4}</p>
                    <label className="text-sm">fghgfdfg</label>
                    <p className="m-0" >{data?.asdfadsfadsf_3}</p>
                    <label className="text-sm">fghgfdfg</label>
                    <p className="m-0" >{data?.asdfadsfadsf_5}</p>
                    <label className="text-sm">dfbcgvvxc</label>
                    <p className="m-0" >{data?.asdfadsfadsfads_6}</p>
                    <label className="text-sm">cvxcvxxcvxc</label>
                    <p className="m-0" >{data?.asdfadsfadsfads_7}</p>
                    <label className="text-sm">xcvxxzs</label>
                    <p className="m-0" >{data?.asdfadsfadsfads_8}</p>
                    <label className="text-sm">cxcxdfdfszd</label>
                    <p className="m-0" >{data?.asdfadsfadsfads_9}</p>
            
                </div>
            </div>
        </div>
    );
};

const mapState = (state) => {
    return {};
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
    //
});

export default connect(mapState, mapDispatch)(SingleAsdadsfPage);
