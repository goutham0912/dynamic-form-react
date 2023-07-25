import GetTabsIcon from "../svgs/GetTabsIcon";

const SideBarTab = ({  tabName,selectedTab, onTabSelected }) => {
  return (
    <button
      className={`flex items-center gap-2 text-sm text-left ${
        selectedTab === tabName ? "text-purple" : "text-black"
      } `}
      onClick={(e) => onTabSelected && onTabSelected(tabName)}
    >
      {<GetTabsIcon tabName={tabName} selectedTab={selectedTab} />}{" "}
      {tabName}
    </button>
  );
};

export default SideBarTab;
