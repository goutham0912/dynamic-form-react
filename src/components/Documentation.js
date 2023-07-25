import { useState } from "react";
import ReactJson from "react-json-view";
import ReadMore from "./ReadMoreButton";

const Documentation = () => {
  const [expanded, setExpanded] = useState(0);

  const changeExpanded = (row) => {
    setExpanded(row);
  };

  const sampleJson = [
    {
      label: "Name",
      placeholder: "John Doe",
      type: "checkbox || radio || text || number || array || select || date || email || password",
      content: [
        {
          key1: "value",
          key2: "value",
          key3: "value",
        },
      ],
      labelClass: "either tailwind or normal css classes",
      inputClass: "either tailwind or normal css classes",
      id: "id",
      required: true,
      textArea: false,
    },
  ];

  return (
    <div className="h-screen w-screen bg-grey flex flex-col overflow-hidden">
      <div className="w-full  bg-white border-b px-4 border-b-[#eee] py-4 flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <p className="raleway text-purple text-xs">Documentation</p>
          <h1 className="text-black inter text-3xl ">Documentation</h1>
        </div>
      </div>
      <div className="m-4 h-full flex gap-10">
        <div className="w-1/2 flex flex-col p-2 gap-4">
          <div
            className={
              expanded === 0
                ? "flex flex-col h-full gap-3 overflow-hidden overflow-y-auto bg-white p-4 border border-[#eee] rounded-md"
                : "flex flex-col gap-3 bg-white p-4 border border-[#eee] rounded-md"
            }
          >
            <div
              className={
                expanded === 0
                  ? "flex items-center justify-between border-b border-[#eee] pb-3"
                  : "flex items-center justify-between"
              }
            >
              <h1 className="text-black inter text-base">
                Create Dynamic Web Forms Without Coding
              </h1>
              <ReadMore
                expandedIndex={expanded}
                currentIndex={0}
                onClicked={changeExpanded}
              />
            </div>
            {expanded === 0 && (
              <p className="text-sm text-[#808080] raleway">
                This platform allows users to upload JSON input, which is then
                used to generate a dynamic form . The JSON data is displayed,
                and users can modify the values in real-time. With the provided
                fields and the ability to pass in additional data the
                possibilities of the form generator is endless.
              </p>
            )}
          </div>
          <div
            className={
              expanded === 1
                ? "flex flex-col h-full overflow-hidden overflow-y-auto gap-3 bg-white p-4 border border-[#eee] rounded-md"
                : "flex flex-col gap-3 bg-white p-4 border border-[#eee] rounded-md"
            }
          >
            <div
              className={
                expanded === 1
                  ? "flex items-center justify-between border-b border-[#eee] pb-3"
                  : "flex items-center justify-between"
              }
            >
              <h1 className="text-black inter text-base">
                How To Generate Dynamic Form
              </h1>
              <ReadMore
                expandedIndex={expanded}
                currentIndex={1}
                onClicked={changeExpanded}
              />
            </div>
            {expanded === 1 && (
              <p className="text-sm text-[#808080] raleway">
                Once you upload the JSON file, the website will parse the data
                and dynamically generate a form based on the JSON structure. The
                form will be displayed on the screen, showing various input
                fields, checkboxes, and other form elements based on the JSON
                content.
              </p>
            )}
          </div>
          <div
            className={
              expanded === 2
                ? "flex flex-col overflow-hidden overflow-y-auto h-full gap-3 bg-white p-4 border border-[#eee] rounded-md"
                : "flex flex-col gap-3 bg-white p-4 border border-[#eee] rounded-md"
            }
          >
            <div
              className={
                expanded === 2
                  ? "flex items-center justify-between border-b border-[#eee] pb-3"
                  : "flex items-center justify-between"
              }
            >
              <h1 className="text-black inter text-base">Real Time Editing</h1>
              <ReadMore
                expandedIndex={expanded}
                currentIndex={2}
                onClicked={changeExpanded}
              />
            </div>
            {expanded === 2 && (
              <p className="text-sm text-[#808080] raleway">
                You can now view the data from the JSON file on the website. The
                form elements will be pre-filled with the corresponding values
                from the JSON data. Feel free to edit any field directly on the
                form, and the changes will be automatically updated in the JSON
                data.
              </p>
            )}
          </div>
          <div
            className={
              expanded === 3
                ? "flex flex-col h-full overflow-hidden overflow-y-auto gap-3 bg-white p-4 border border-[#eee] rounded-md"
                : "flex flex-col gap-3 bg-white p-4 border border-[#eee] rounded-md"
            }
          >
            <div
              className={
                expanded === 3
                  ? "flex items-center justify-between border-b border-[#eee] pb-3"
                  : "flex items-center justify-between"
              }
            >
              <h1 className="text-black inter text-base">
                Future Plans For The Product
              </h1>
              <ReadMore
                expandedIndex={expanded}
                currentIndex={3}
                onClicked={changeExpanded}
              />
            </div>
            {expanded === 3 && (
              <p className="text-sm text-[#808080] raleway tracking-wide">
                We have just hit the tip of the ice berg. We realise that we
                could make forms easier for our clients by providing a lot more
                options. In the upcoming updates we plan on adding mobile
                responsiveness, better form validation methods, a wider range of
                inputs to select from, providing custom classes to all the
                containers making the form extremely dynamic and much easier for
                developers or people with little to no coding experience work
                with, adding a wide variety of pre-built forms that clients get
                to pick from saving them what we consider the most valuable!
                Time.
              </p>
            )}
          </div>
        </div>
        <div className="w-1/2  bg-white border border-[#eee] rounded-md m-2 overflow-hidden">
          <div className="border-b border-[#eee] pb-4 px-4 pt-4">
            <h1 className="text-black inter text-base">Sample Json Format</h1>
          </div>
          <div className="p-4">
            <ReactJson
              src={sampleJson}
              shouldCollapse={false}
              name={false}
              enableClipboard={false}
              displayDataTypes={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Documentation;