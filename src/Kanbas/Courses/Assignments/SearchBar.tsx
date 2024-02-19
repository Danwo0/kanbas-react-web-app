import { HiMagnifyingGlass } from "react-icons/hi2";

function AssignmentsSearchbar() {
    return ( 
        <div className="wd-assignments-searchbar input-group">
            <div className="input-group-text">
                <HiMagnifyingGlass />
            </div>
            <input type="text" placeholder="Search..." />
        </div>
     );
}

export default AssignmentsSearchbar;