import { useSelector } from "react-redux";
import config from "../config";
import { skeleton } from "../helpers/utils";

const Tools = () => {
    const loading = useSelector(state => state.loading);

    const renderSkeleton = () => {
        let array = [];
        for (let index = 0; index < 12; index++) {
            array.push((
                <div key={index}>
                    {skeleton({ width: 'w-16', height: 'h-4', className: 'm-1' })}
                </div>
            ))
        }

        return array;
    }

    return (
        <>
            {
                (typeof config.tools !== 'undefined' && config.tools.skeleton !== 0) && (
                    <div className="card shadow-lg compact bg-base-100">
                        <div className="card-body">
                            <div className="pb-0-important mx-5">
                                <h5 className="card-title text-lg">
                                    {loading ? skeleton({ width: 'w-32', height: 'h-8' }) : (
                                        <span className="opacity-70">Building Tools And IDEs</span>
                                    )}
                                </h5>
                            </div>
                            <div className="p-3 flow-root">
                                <div className="-m-1 flex flex-wrap">
                                    {
                                        loading ? renderSkeleton() : (
                                            config.tools.map((tool, index) => (
                                                <div key={index} className="m-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 badge-primary bg-opacity-75 rounded-full">
                                                    {tool}
                                                </div>
                                            ))
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Tools;