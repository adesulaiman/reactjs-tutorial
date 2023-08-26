function Football() {
    const shoot = (data) => {
        alert(data);
    }

    return (
        <button onClick={() => shoot("Testing Variable")}>Take the shot!</button>
    );
}

export default Football