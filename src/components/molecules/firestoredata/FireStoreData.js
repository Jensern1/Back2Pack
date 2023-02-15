import React from "react";
import { useGetData } from "../hooks/useGetData";
import Update from "./../update/Update";
import Delete from "./../delete/Delete";

const FireStoreData = () => {
  const [documents] = useGetData();
  return (
    <div style={valueStyle}>
      <span>Values</span>
      {documents.map((documents) => (
        <div key={documents.id}>
          <div style={valueStyle}>
            Document: {documents.id} Value: {documents.value.value}
          </div>
          <Delete doc={documents.id} />
          <Update doc={documents.id} />
        </div>
      ))}
    </div>
  );
};
export default FireStoreData;
