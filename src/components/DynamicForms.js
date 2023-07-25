import Input from "./Input";
import JsonViewer from "./JsonViewer";
import TextArea from "./TextArea";
import { TAB_NAMES } from "../model/TabNames";

const DynamicForm = (props) => {
  return (
    <div className="h-screen w-full bg-grey flex flex-col overflow-hidden">
      {props.tabName === TAB_NAMES.EXAMPLE_FORMS && (
        <div className="flex flex-col gap-2 bg-white border-b border-[#eee] p-4 mb-4">
          <p className="raleway text-purple text-xs">Product Examples</p>
          <h1 className="text-black inter text-3xl ">Product Examples</h1>
        </div>
      )}

      <div className="bg-white h-full  overflow-hidden  border border-[#eee] mx-4 mb-4 rounded-md flex items-start">
        <div className="h-full  overflow-y-auto  border-r border-[#eee] w-[500px] p-4">
          <p className="text-2xl inter mb-10 text-center">Form</p>
          {props.jsonInput && (
            <form className="flex flex-col gap-2 h-full">
              {props.jsonInput.map((item, index) => {
                if (item.textArea) {
                  return (
                    <TextArea
                      label={item.label}
                      labelClass={item.labelClass}
                      placeholder={item.placeholder}
                      required={item.required}
                    />
                  );
                } else {
                  return (
                    <Input
                      label={item.label}
                      id={item.id}
                      labelClass={item.labelClass}
                      placeholder={item.placeholder}
                      inputClass={item.inputClass}
                      color={item.color}
                      type={item.type}
                      required={item.required}
                      outerClass={item.outerClass}
                      errorText={item.errorText}
                      minLength={item.minLength}
                    />
                  );
                }
              })}

              <button className="bg-purple inter text-white mt-1 py-2 rounded-md hover:bg-[#1d1160]">
                Submit
              </button>
            </form>
          )}
        </div>

        <div className="h-full  overflow-hidden overflow-y-scroll w-full relative">
          <h1 className="text-2xl inter text-black sticky top-0 w-full bg-white z-10 p-4 border-b border-[#eee]">
            Code Section
          </h1>

          <div className="p-4">
            <JsonViewer
              json={props.jsonInput}
              edit={props.editForm}
              updateJson={props.updateJson}
            ></JsonViewer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicForm;
