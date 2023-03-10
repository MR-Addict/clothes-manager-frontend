"use client";

import { AiOutlinePlusCircle } from "react-icons/ai";

import {
  defaultObject,
  useObjectContext,
} from "../../../../components/client/ObjectContextProvider/ObjectContextProvider";

export default function AddButton() {
  const { setIsOpenForm, setIsInsertMode, setObject } = useObjectContext();
  return (
    <button
      type='button'
      aria-label='add button'
      onClick={() => {
        setObject(defaultObject);
        setIsInsertMode(true);
        setIsOpenForm(true);
        document.body.style.overflow = "hidden";
      }}
      className='text-slate-600 hover:text-slate-800 flex flex-row gap-1 items-center'
    >
      添加
      <AiOutlinePlusCircle size={17} />
    </button>
  );
}
