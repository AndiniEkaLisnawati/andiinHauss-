// import hero from "../assets/hero.png"
// import {Button} from "flowbite-react";
export default function Hero(){
    return (
        <>
            <div className="grid grid-cols-2 gap-2 m-10">
                <div>
                    <div>
                    {/* className={"grid grid-rows-4 grid-flow-col gap-5"} */}
                        <img src="https://haus.co.id/assets/hausxoatside-CXUmQF2N.png" alt="" />
                        <img src="https://haus.co.id/assets/nikmoatbanget-DOOPWO3a.png" alt="" />
                       <img src="https://haus.co.id/assets/hausxberuang-BZiy5-Du.png" alt="" />
                        {/* <div className={"button"}>
                            <Button color={"blue"}>see more</Button>
                        </div> */}
                    </div>
                </div>

                <div>
                    <div className={"grid"}>
                        <div></div>
                        <div>
                            <img  src="https://haus.co.id/assets/oatside-D5um6t1q.png" alt={""}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}