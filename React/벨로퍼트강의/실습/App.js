import React, {Component} from 'react';
import PhoneForm from "./벨로퍼트/PhoneForm";
import PhoneInfo from "./벨로퍼트/PhoneInfo";
import PhoneInfoList from "./벨로퍼트/PhoneInfoList";

class App extends Component {
    id = 0;
    state = {
        information:[],
    }
    //1번
    handleCreate = (data) =>{
        const {information} = this.state
        this.setState({
           information:information.concat({
               ...data,
               id:this.id++
           })
        })
    }
    handleRemove = (id) =>{
        const {information} = this.state;
        this.setState({
            information:information.filter(info => info.id !== id)
        })
    }
    handleUpdate = (id,data) =>{
        const {information} =this.state;
        this.setState({
            information: information.map(
                info => {
                    if(info.id === id){
                        return{
                            id,
                            ...data,
                        };
                    }
                    return info;
                }
            )
        })
    }
    render() {
        return (
            // 2번 폰폼에다가 온크리에이트를 전달해준다.
            <div>
               <PhoneForm onCreate = {this.handleCreate} />
               <PhoneInfoList
                   data={this.state.information}
                   onRemove={this.handleRemove}
                   onUpdate={this.handleUpdate}

               />
            </div>
        );
    }
}

export default App;