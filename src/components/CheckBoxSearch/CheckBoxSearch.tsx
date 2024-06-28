import './CheckBoxSearch.css'
import React from "react";

type props = {
    value: string[],
    handle: (e: React.ChangeEvent<HTMLInputElement>) => void,
    name: string
}

const CheckBoxSearch = ({ value, handle, name }: props) => {
    return (
        <div className="check-div">
            <button className="button-collapse-search" type="button" data-bs-toggle="collapse"
                    data-bs-target={"#collapse" + name} aria-controls={"collapse" + name}>
                Button with data-bs-target
            </button>

            <div className="div-marca-select collapse" id={"collapse" + name}>
                {value.map(value =>
                    <div className="form-check" key={value}>
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value={value}
                            onChange={handle}
                        />
                        <label className="form-check-label">
                            {value}
                        </label>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CheckBoxSearch