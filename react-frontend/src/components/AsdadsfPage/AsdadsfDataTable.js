
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';


const AsdadsfDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.asdfadsfadsf}</p>
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.asdfadsfadsfads}</p>
    const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.asdfadsfadsf_2}</p>
    const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.asdfadsfadsf_4}</p>
    const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.asdfadsfadsf_3}</p>
    const pTemplate5 = (rowData, { rowIndex }) => <p >{rowData.asdfadsfadsf_5}</p>
    const pTemplate6 = (rowData, { rowIndex }) => <p >{rowData.asdfadsfadsfads_6}</p>
    const pTemplate7 = (rowData, { rowIndex }) => <p >{rowData.asdfadsfadsfads_7}</p>
    const pTemplate8 = (rowData, { rowIndex }) => <p >{rowData.asdfadsfadsfads_8}</p>
    const pTemplate9 = (rowData, { rowIndex }) => <p >{rowData.asdfadsfadsfads_9}</p>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10} rowClassName="cursor-pointer">
            <Column field="asdfadsfadsf" header="fghgfdfg" body={pTemplate0} sortable style={{ minWidth: "8rem" }} />
            <Column field="asdfadsfadsfads" header="dfghgfds" body={pTemplate1} style={{ minWidth: "8rem" }} />
            <Column field="asdfadsfadsf_2" header="fghgfdfg" body={pTemplate2} sortable style={{ minWidth: "8rem" }} />
            <Column field="asdfadsfadsf_4" header="fghgfdfg" body={pTemplate3} sortable style={{ minWidth: "8rem" }} />
            <Column field="asdfadsfadsf_3" header="fghgfdfg" body={pTemplate4} sortable style={{ minWidth: "8rem" }} />
            <Column field="asdfadsfadsf_5" header="fghgfdfg" body={pTemplate5} sortable style={{ minWidth: "8rem" }} />
            <Column field="asdfadsfadsfads_6" header="dfbcgvvxc" body={pTemplate6} style={{ minWidth: "8rem" }} />
            <Column field="asdfadsfadsfads_7" header="cvxcvxxcvxc" body={pTemplate7} style={{ minWidth: "8rem" }} />
            <Column field="asdfadsfadsfads_8" header="xcvxxzs" body={pTemplate8} style={{ minWidth: "8rem" }} />
            <Column field="asdfadsfadsfads_9" header="cxcxdfdfszd" body={pTemplate9} style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default AsdadsfDataTable;