class CommentBox extends React.Component {
    render() {
        return (
            <div className="CPUBox"><h1>Aici Vine CPU-ul!</h1></div>
        );
    }
}

ReactDOM.render(<CommentBox />, document.getElementById('content'));