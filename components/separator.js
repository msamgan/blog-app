import Image from "next/image"

export default function Separator() {
    return (
        <div className="container-fluid">
            <div className="row mt-3">
                <div className="col-md-12 col-sm-12 mx-auto">
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center"
                        }}
                    >
                        <Image src="/separator.png" alt="" className="center" width={150} height={50} />
                    </div>
                </div>
            </div>
        </div>
    )
}
