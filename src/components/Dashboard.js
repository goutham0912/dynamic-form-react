import SideBar from "./SideBar"
import {TAB_NAMES} from "../model/TabNames"
import CustomForms from "./CustomForms"
import { useSelector } from "react-redux"
import Documentation from "./Documentation"
import DynamicForm from "./DynamicForms"
import sampleJson from "../test/SampleJson"

const Dashboard  = () => {
    const selectedTab = useSelector((state) => state.tabs.selectedTab)
    const {EXAMPLE_FORMS,CUSTOM_FORMS,DOCUMENTATION} = TAB_NAMES
    return (
        <div className=" w-full h-full flex ">
        <SideBar />
        {selectedTab === CUSTOM_FORMS && <CustomForms />}
        {selectedTab === EXAMPLE_FORMS && <DynamicForm jsonInput = {sampleJson} tabName = {EXAMPLE_FORMS}/>}
        {selectedTab === DOCUMENTATION && <Documentation />}
        </div>
    )
}
export default Dashboard;