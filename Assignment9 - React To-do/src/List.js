import React from "react";
import { BiArrowFromTop, BiArrowFromBottom, BiTrashAlt, BiEditAlt } from "react-icons/bi";
import "./App.css";


const List = (props) => {
  return (
    <li className="list">
      {props.element}
      <span className="hel me-2">
        <i
          onClick={() => {
            props.deletee(props.id);
          }}
        ><BiTrashAlt/></i>
        <i
          onClick={() => {
            props.editTask(props.id);
          }}
        >
          <BiEditAlt />
        </i>
        <i
          onClick={() => {
            props.moveUp(props.id);
          }}
        >
          <BiArrowFromBottom />
        </i>
        <i
          onClick={() => {
            props.moveDown(props.id);
          }}
        >
          <BiArrowFromTop />
        </i>
      </span>
    </li>
  );
};

export default List;