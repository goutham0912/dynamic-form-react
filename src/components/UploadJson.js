import { useRef } from "react";
import { useDispatch } from "react-redux";
import { updateJsonValue } from "../store/JsonSlice";

const UploadJson = (props) => {
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();

  const onUploadButtonClicked = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        const content = await readFileAsync(file);
        const parsedData = JSON.parse(content);
        dispatch(updateJsonValue(parsedData));
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    }
  };

  const readFileAsync = async (file) => {
    try {
      const response = await fetch(URL.createObjectURL(file));
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return await response.text();
    } catch (error) {
      throw new Error("Error fetching file:", error);
    }
  };
  return (
    <button
      className="bg-purple text-white text-sm inter px-4 py-2 h-fit rounded-md"
      onClick={onUploadButtonClicked}
    >
      <input
        type="file"
        className="hidden"
        accept=".json"
        ref={fileInputRef}
        onChange={(e) => handleFileChange(e)}
      ></input>
      {props.buttonText ? props.buttonText : "Upload Json File"}
    </button>
  );
};

export default UploadJson;
