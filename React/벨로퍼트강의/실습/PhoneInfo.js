import React, {Component,Fragment} from 'react';

class PhoneInfo extends Component {
    state = {
        editing:false,
        name:'',
        phone:'',
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleRemove = () => {
        const { info, onRemove } = this.props;
        onRemove(info.id);
    }

    handleToggleEdit = () =>{
        this.setState({
            editing: !this.state.editing,
        })
    }
    render() {
        const { name, phone } = this.props.info;
        const style = {
            border:"1px solid black",
            padding:"8px",
            margin:"8px"
        };

        return (
            <div style={style}>
                {
                    editing ? (
                        <Fragment>
                            <input
                                name="name"
                                onChange={this.handleChange}
                                value={this.state.name}
                            />
                            <input
                                name="phone"
                                onChange={this.handleChange}
                                value={this.state.name}
                            />
                        </Fragment>

                    ):(
                        <Fragment>
                            <div><b>{name}</b></div>
                            <div>{phone}</div>
                        </Fragment>
                    )
                }
                <button onClick={this.handleRemove}>삭제</button>
                <button onClick={this.handleToggleEdit}>수</button>
            </div>
        );
    }
}

export default PhoneInfo;