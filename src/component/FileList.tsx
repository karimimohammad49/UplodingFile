import React from "react";
import FilesItem from "./FilesItem";

type fileList={
    file:File[] | null;
    filterFile:(filterItem:File)=>void;
}

const FileList=(prop:fileList)=>{
    if(!prop.file || prop.file.length === 0) {
        return <></>;
    }
    return (
    <FilesItem file={prop.file} filterFile={prop.filterFile}/>
    );
};

export default FileList;