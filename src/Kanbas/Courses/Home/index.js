import ModuleList from "../Modules/ModuleList";
import StatusUpdate from "./StatusUpdate";

function Home() {
    return (
        <div className="row">
            <div className="col col-9">
                {/* <h2>Home</h2> */}
                <ModuleList />
            </div>
            <div className="col">
                {/* <h2>Status</h2> */}
                <StatusUpdate />
            </div>
        </div>
    );
}
export default Home;