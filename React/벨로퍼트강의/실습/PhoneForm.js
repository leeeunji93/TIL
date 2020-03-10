import React, {Component} from 'react';

class PhoneForm extends Component {
    state = {
        name:'',
        phone:'',

    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    /* 4번  */
    handleSubmit = (e) => {
        e.preventDefault();
        /* 5번 온크리에이트 값 호출   */
        this.props.onCreate(this.state);
        this.setState({
            name:'',
            phone:'',
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    name="name"
                    placeholder="이름"
                    onChange={this.handleChange}
                    value={this.state.name}

                />
                <input
                    name="phone"
                    placeholder="전화번호"
                    onChange={this.handleChange}
                    value={this.state.phone}
                />
                {/*3번 버튼 생 */}
                <button type="submit">등록</button>
            </form>
        );
    }
}

export default PhoneForm;