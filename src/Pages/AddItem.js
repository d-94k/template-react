import { useState } from "react";
import Form from "../Components/UI/Form";
import { DATA } from "../Database";

const AddItem = (props) => {

    const onSaveItem = (interval) => {
        const item = {
            id: Math.random(),
            ...interval
        }
        // console.log(item);
        props.onSaveItem(item)
    }
    return (
        <Form render={onSaveItem} />
    );
}
 
export default AddItem;