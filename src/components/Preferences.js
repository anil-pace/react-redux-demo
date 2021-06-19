import React from 'react';
import Counter from "./../containers/counterContainer";
import MaterialLayout from "./MaterialLayout";


export default function Preferences() {
  return(
    <>
        <h2  style={{"background":"yellow"}}>/Redux</h2>
        <Counter />
        <MaterialLayout />
    </>
  );
} 