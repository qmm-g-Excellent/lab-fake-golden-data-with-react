let Design = React.createClass({
    getInitialState: function () {
        return {texts: [], array: []}
    },
    render: function () {

        return (
            <div>

                <div className="right">
                    <p><input type="radio" name="frame" className="text-btn" ref="theText"/>文本
                    </p>
                    <p><input type="radio" name="frame" className="text-btn" ref="theTime"/>时间
                    </p>
                    <button className="btn" onClick={this.getTextFrame}> +</button>
                </div >
                <div className="left">
                    <button className="review btn btn-info" onClick={this.goToEdit}>预览</button>
                    <div>{this.state.array}{this.props.origialFrame}</div>

                </div>
            </div>
        )
    },

    getTextFrame: function () {
        let text = this.refs.theText.checked;
        let time = this.refs.theTime.checked;
        if (text) {
            this.state.texts.push(1);
        }
        if (time) {
            this.state.texts.push(0);
        }
        this.setState({texts: this.state.texts});
        this.getFrame();

    },


    getFrame: function () {
        this.state.texts.map((item, index) => {
            if (item === 1) {
                this.state.array.push(<input type="text"/>)
            }
            if (item === 0) {
                this.state.array.push(
                    <select>
                        <option>2016年8月2号</option>
                        <option>2016年8月2号</option>
                    </select>
                )
            }
            this.state.array.push(<button
                className="btn btn-danger"
                onClick={this.handleClick.bind(this, index)}> -</button>, <div></div>);
        });
        this.setState({array: this.state.array});
    },

    handleClick: function (length) {
        this.state.array.splice(length, 3);
        this.setState({array: this.state.array});
    },

    goToEdit: function () {
        ReactDOM.render(<Edit frame={this.state.array}/>, document.getElementById("design"));

    }

});


let Edit = React.createClass({
    render: function () {
        return (
            <div   className="edit">
                <button
                    className="btn-edit  btn btn-primary"
                    onClick={this.goBack}>编辑
                </button>
                <div>{this.props.frame}</div>
                <button className="btn-submit  btn btn-success">提交</button>
            </div>
        )
    },
    goBack: function () {
        ReactDOM.render(<Design origialFrame={this.props.frame}/>, document.getElementById("design"));

    }
});


ReactDOM.render(<Design />, document.getElementById("design"));
