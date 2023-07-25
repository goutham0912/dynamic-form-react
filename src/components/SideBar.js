import { useDispatch, useSelector } from "react-redux";
import { updateTabName } from "../store/TabSlice";
import { TAB_NAMES } from "../model/TabNames";
import SideBarTab from "./SideBarTab";

const SideBar = () => {
  const dispatch = useDispatch();
  const selectedTab = useSelector((state) => state.tabs.selectedTab);
  const onTabSelected = (tabName) => {
    dispatch(updateTabName(tabName));
  };
  const { EXAMPLE_FORMS, CUSTOM_FORMS, DOCUMENTATION } = TAB_NAMES;
  return (
    <div className="bg-white border w-[15%] border-r-[#eee] flex flex-col py-10">
      <div className=" text-black inter px-4 text-3xl tracking-wide relative">
        Form<span className="text-purple">E</span>ase
        <svg
          fill="#808080"
          width="24"
          height="24"
          viewBox="-2 -2 24 24"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMinYMin"
          className="jam jam-chevron-circle-right absolute right-[-13px] top-0 bg-white cursor-pointer"
        >
          <path d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1.828-8L8.293 6.464A1 1 0 0 1 9.707 5.05l4.243 4.243a1 1 0 0 1 0 1.414L9.707 14.95a1 1 0 1 1-1.414-1.414L11.828 10z" />
        </svg>
      </div>

      <div className="flex flex-col justify-between w-full pt-10 inter px-3 h-full">
        <div className="flex flex-col gap-4 ">
          <SideBarTab
            tabName={CUSTOM_FORMS}
            selectedTab={selectedTab}
            onTabSelected={onTabSelected}
          />
          <SideBarTab
            tabName={EXAMPLE_FORMS}
            selectedTab={selectedTab}
            onTabSelected={onTabSelected}
          />
        </div>
        <SideBarTab
          tabName={DOCUMENTATION}
          selectedTab={selectedTab}
          onTabSelected={onTabSelected}
        />
      </div>
    </div>
  );
};

export default SideBar;
