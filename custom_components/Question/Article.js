const Article = () => {

    const word = "asdkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkasşldkaşlkşskşdlkalşdkşlaskdaslşdksşld" 
    return(
        <>
            <div style={{display: "flex", flexWrap: "wrap", flexDirection: "row", alignContent: "center", justifyContent: "center", height: "98vh", margin: "0", width: "98vw", boxSizing: "border-box" }}>
                <div style={{padding: "10px",border: "1px solid gray", display: "flex", flexWrap: "wrap", backgroundColor: "red", width: "30vw", height: "30vh",  wordBreak: "break-all", alignContent: "center", justifyContent: "center"}}>
                    {word}
                </div>
                <div style={{marginLeft: "10px",padding: "10px",border: "1px solid gray", display: "flex", flexWrap: "wrap", backgroundColor: "red", width: "30vw", height: "30vh",  wordBreak: "break-all"}}>
                    {word}
                </div>
            </div>
        </>
    );
};

export default Article;
