

function Refresh({refresh}) {
    return (
        <div className="refresh ">
            <h1 className="rhead">No Tours Left</h1>
            <button className="btn-white" onClick={refresh}>Refresh</button>
        </div>
    )
}
export default Refresh;