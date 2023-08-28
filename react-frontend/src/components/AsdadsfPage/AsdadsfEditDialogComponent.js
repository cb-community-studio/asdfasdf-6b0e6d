import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import client from "../../services/restClient";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';
~cb-add-field-array-options~

const getSchemaValidationErrorsStrings = (errorObj) => {
    let errMsg = [];
    for (const key in errorObj.errors) {
        if (Object.hasOwnProperty.call(errorObj.errors, key)) {
            const element = errorObj.errors[key];
            if (element?.message) {
                errMsg.push(element.message);
            }
        }
    }
    return errMsg.length ? errMsg : errorObj.message ? errorObj.message : null;
};

const AsdadsfCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    

    useEffect(() => {
        set_entity(props.entity);
    }, [props.entity, props.show]);
    
    const onSave = async () => {
        let _data = {
            asdfadsfadsf: _entity.asdfadsfadsf,
            asdfadsfadsfads: _entity.asdfadsfadsfads,
            asdfadsfadsf_2: _entity.asdfadsfadsf_2,
            asdfadsfadsf_4: _entity.asdfadsfadsf_4,
            asdfadsfadsf_3: _entity.asdfadsfadsf_3,
            asdfadsfadsf_5: _entity.asdfadsfadsf_5,
            asdfadsfadsfads_6: _entity.asdfadsfadsfads_6,
            asdfadsfadsfads_7: _entity.asdfadsfadsfads_7,
            asdfadsfadsfads_8: _entity.asdfadsfadsfads_8,
            asdfadsfadsfads_9: _entity.asdfadsfadsfads_9,
        };

        setLoading(true);
        try {
            const result = await client.service("asdadsf").patch(_entity._id, _data);
            props.onHide();
            props.alert({ type: "success", title: "Edit info", message: "Info updated successfully" });
            props.onEditResult(result);
        } catch (error) {
            console.log("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to update info");
            props.alert({ type: "error", title: "Edit info", message: "Failed to update info" });
        }
        setLoading(false);
    };

    const renderFooter = () => (
        <div className="flex justify-content-end">
            <Button label="save" className="p-button-text no-focus-effect" onClick={onSave} loading={loading} />
            <Button label="close" className="p-button-text no-focus-effect p-button-secondary" onClick={props.onHide} />
        </div>
    );

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
        setError("");
    };
    // children dropdown options
    

    return (
        <Dialog header="Edit Info" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div role="asdadsf-edit-dialog-component">
                <div>
                <p className="m-0">fghgfdfg:</p>
                <InputText className="w-full mb-3" value={_entity?.asdfadsfadsf} onChange={(e) => setValByKey("asdfadsfadsf", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">dfghgfds:</p>
                <InputText className="w-full mb-3" value={_entity?.asdfadsfadsfads} onChange={(e) => setValByKey("asdfadsfadsfads", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">fghgfdfg:</p>
                <InputText className="w-full mb-3" value={_entity?.asdfadsfadsf_2} onChange={(e) => setValByKey("asdfadsfadsf_2", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">fghgfdfg:</p>
                <InputText className="w-full mb-3" value={_entity?.asdfadsfadsf_4} onChange={(e) => setValByKey("asdfadsfadsf_4", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">fghgfdfg:</p>
                <InputText className="w-full mb-3" value={_entity?.asdfadsfadsf_3} onChange={(e) => setValByKey("asdfadsfadsf_3", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">fghgfdfg:</p>
                <InputText className="w-full mb-3" value={_entity?.asdfadsfadsf_5} onChange={(e) => setValByKey("asdfadsfadsf_5", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">dfbcgvvxc:</p>
                <InputText className="w-full mb-3" value={_entity?.asdfadsfadsfads_6} onChange={(e) => setValByKey("asdfadsfadsfads_6", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">cvxcvxxcvxc:</p>
                <InputText className="w-full mb-3" value={_entity?.asdfadsfadsfads_7} onChange={(e) => setValByKey("asdfadsfadsfads_7", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">xcvxxzs:</p>
                <InputText className="w-full mb-3" value={_entity?.asdfadsfadsfads_8} onChange={(e) => setValByKey("asdfadsfadsfads_8", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">cxcxdfdfszd:</p>
                <InputText className="w-full mb-3" value={_entity?.asdfadsfadsfads_9} onChange={(e) => setValByKey("asdfadsfadsfads_9", e.target.value)}  />
            </div>
                <small className="p-error">
                    {Array.isArray(error)
                        ? error.map((e, i) => (
                              <p className="m-0" key={i}>
                                  {e}
                              </p>
                          ))
                        : error}
                </small>
            </div>
        </Dialog>
    );
};

const mapState = (state) => {
    return{}
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(null, mapDispatch)(AsdadsfCreateDialogComponent);
