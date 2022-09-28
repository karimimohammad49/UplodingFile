import React, {Fragment, useRef, useState} from "react";

import classes from "./UploadedFile.module.css";


import FileList from "../component/FileList";

const UploadedFile=()=>{
    const [files,setFiles]=useState<File[] | null>(null);

    const inputRef=useRef<HTMLInputElement>(null);


    const dropAndClickHandler=(event:any)=>{
        event.preventDefault();
            if (event.type === "drop") {
                const data: File[] = Array.from(event.dataTransfer.files);
                setFiles(data);
            }
            else if (event.type === "change") {
                const data: File[] = Array.from(event.target.files);
                setFiles(data);
            }

    }

    const onDragHandler=(event:React.DragEvent<HTMLDivElement>)=>{
        event.preventDefault();
    }

    const clickHandler=(event:any)=>{
        if(!files || files.length === 0) {
            inputRef.current!.click();
        }
    }

    const subMitHandler=(event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        console.log(files)
    }

    const newFileHandler=(event:React.MouseEvent<HTMLButtonElement>)=>{
        setFiles(null);
    }

    const filterFiles=(data:File)=>{
        const filesItem:File[] | null =files?.filter(item=>item !== data) as File[] | null;

        if(!filesItem || filesItem?.length===0) {
            setFiles(null);
            return;
        }

           setFiles(filesItem);
    }


    return (
        <Fragment>
            <form onSubmit={subMitHandler} className={classes.form}>
          <div className={`${classes.drag} ${!!files ? classes.notActive : classes.active}`}
               onDrop={(event)=>dropAndClickHandler(event)}
               onDragOver={onDragHandler}
               onClick={(event)=>clickHandler(event)}
          >
              <input type="file"
                     style={{display:"none"}}
                     accept=".*" ref={inputRef}
                     onChange={(event)=>dropAndClickHandler(event)}
                     multiple/>
              {!files && <span>UPLOAD FILE CLICK OR DROP FILES</span>}
              <FileList file={files} filterFile={filterFiles}/>

          </div>
                <button type="submit" disabled={!!files ? false : true}>Submit</button>
                <button type="reset" onClick={newFileHandler}>New</button>
            </form>

        </Fragment>
    )

};

export default UploadedFile;