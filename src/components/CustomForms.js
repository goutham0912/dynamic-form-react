import { useDispatch, useSelector } from "react-redux";
import DynamicForm from "./DynamicForms";
import UploadJson from "./UploadJson";
import UploadJsonView from "./UploadJsonView";
import { useState } from "react";
import { updateJsonValue } from "../store/JsonSlice";

const FORMSTATE = {
  EDIT: "Edit",
  VIEW: "View",
};

const CustomForms = () => {
  const jsonValue = useSelector((state) => state.jsonInput.jsonValue);
  const dispatch = useDispatch();
  const [formState, setFormState] = useState(FORMSTATE.VIEW);
  const { EDIT, VIEW } = FORMSTATE;
  const onTabClicked = (formName) => {
    setFormState(formName);
  };

  const onJsonChange = (jsonValue) => {
    dispatch(updateJsonValue(jsonValue));
  };
  return (
    <div className="bg-grey w-full flex flex-col">
      <div className="w-full bg-white border-b px-4 border-b-[#eee] py-4 flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <p className="raleway text-purple text-xs">
            Custom Forms {">"} {formState} Form{" "}
          </p>
          <h1 className="text-black inter text-3xl ">Custom Forms</h1>
        </div>
      </div>
      <div className="mx-4">
        <div className="flex justify-between items-center ml-1">
          <div>
            <button
              className={`font-bold inter text-base border-b-2 hover:text-purple p-4 ${
                formState === VIEW
                  ? "text-purple border-purple"
                  : "text-[#818589]"
              }`}
              onClick={(e) => onTabClicked(VIEW)}
            >
              View Form
            </button>
            {jsonValue.length > 0 && (
              <button
                className={`text-[#818589] font-bold inter text-base border-b-2 hover:text-purple p-4 ${
                  formState === EDIT
                    ? "text-purple  border-purple"
                    : "text-[#818589]"
                }`}
                onClick={(e) => onTabClicked(EDIT)}
              >
                Edit Form
              </button>
            )}
          </div>
          {jsonValue.length > 0 && (
            <div className="flex items-center gap-2">
              <button className="inter text-sm bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-md flex items-center gap-2" onClick={(e) => onJsonChange([])}>
                Delete Json
              </button>
              <UploadJson buttonText="Upload New Json File" />
            </div>
          )}
        </div>
      </div>
      {jsonValue.length > 0 ? (
        <DynamicForm
          jsonInput={jsonValue}
          editForm={formState === EDIT}
          updateJson={onJsonChange}
        ></DynamicForm>
      ) : (
        <UploadJsonView />
      )}
    </div>
  );
};

export default CustomForms;