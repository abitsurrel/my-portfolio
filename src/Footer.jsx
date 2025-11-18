function Footer( {isRounded}) {

    return (
        <div className= {isRounded ? "footer rounded-xl" : "footer"}>
            <div className="footer-content">
                <div className="">
                    Developer Info
                </div>
                <div className="">
                    Quicklinks
                </div>
            </div>
        </div>
    );
}

export default Footer