import React, {Fragment} from "react";

import Modal from "./Modal";

type fileItem={
   file:File[];
    filterFile:(filterItem:File)=>void;
}

const FilesItem=(prop:fileItem)=>{

    const clickItemHandler=(event:any)=>{
        prop.filterFile(event)
        console.log(event)

    }

    const fileMap=prop.file.map((item,index)=> {
        const fixedSize =(item.size / 1000).toFixed(3);
           return <Modal
                header={item.name}
                content={`${fixedSize.toString()} KB`}
                footer={<button onClick={() => clickItemHandler(item)}>Remove File</button>}
                key={index}
            />
    });

    return <Fragment>
    {fileMap}
    </Fragment>;
};

export default FilesItem;