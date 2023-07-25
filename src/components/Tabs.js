const Tabs = ({tabName,selected,svg,onTabSelected}) => {
  return (
    <div>
    <button className = {`flex items-center gap-2 text-sm text-left ${
                selected ? 'text-purple' : 'text-black'
              }`} onClick={e=> {}}> {svg}{tabName}
    </button>

    </div>
  );
};

export default Tabs;
