import React, {Component} from 'react';
import PhoneForm from "./Component/PhoneForm";
import PhoneInfoList from "./Component/PhoneInfoList";

class App extends Component {
    id= 1;

    state= {
        information:[],
        keyword:"",
    };


    handleChange = e => {
       this.setState({
            keyword: e.target.value
        })
    }

    handleCreate= data => {
        const {information}= this.state;
        this.setState({
            information: information.concat({
                ...data,
                id:this.id++

            })
        })
    };

    handleRemove= id => {
        const {information} = this.state;
        this.setState({
            information: information.filter(info => info.id !== id)
        })
    };

    handleUpdate= (id,data) => {
        const{information} = this.state;
        this.setState({
            information:information.map(info => {
                if(info.id === id){
                    return{
                        ...data,
                        id
                    }
                }
                return id;

            })
        })
    }


    render() {
        return (
            <div>
            <PhoneForm
                onCreate={this.handleCreate}
            />
            <input
                value={this.state.keyword}
                onChange={this.handleChange}
            />
            <PhoneInfoList
                information={this.state.information.filter(info => info.name.indexOf(this.state.keyword) > -1
                )}
                onRemove={this.handleRemove}
                onUpdate={this.handleUpdate}

            />
            </div>
        );
    }
}

export default App;