import React, {Component} from 'react';
import PhoneForm from "./벨로퍼트/PhoneForm";
import PhoneInfoList from "./벨로퍼트/PhoneInfoList";

class App extends Component {
    id = 3;

    state={
        information:[
            {
                id:0,
                name:"홍길동",
                phone:"010-7536-1526"
            },
            {
                id:1,
                name:"이은지",
                phone:"011-7536-1526"
            },
            {
                id:2,
                name:"이창엽",
                phone:"010-7536-1521"
            }
        ],
        keyword:'',
    }

    handleChange = (e) => {
        this.setState({
            keyword:e.target.value,

        })
    }

    handleCreate = (data) =>{
        const { information } = this.state;
        this.setState({
            information: information.concat({
                ...data,
                id:this.id++
            })
        })
    }

    handleReomve = (id) =>{
        const { information } = this.state;
        this.setState({
            information:information.filter(info => info.id !== id)
        })
    }

    handleUpdate = (id,data) => {
        const { information } = this.state
        this.setState({
            information:information.map(
                info =>{
                    if(info.id === id){
                        return{
                            id,
                            ...data
                        };
                    }
                    return info;
                }
            )
        })
    }
    render() {
        return (
            <div>
               <PhoneForm onCreate={this.handleCreate}/>
               <input
                   value={this.state.keyword}
                   onChange={this.handleChange}
                   placeholder="검색"
               />
               <PhoneInfoList
                   data={this.state.information.filter(
                       info =>
                           info.name.indexOf(
                               this.state.keyword
                           ) > -1
                   )}
                   onRemove={this.handleRemove}
                   onUpdate={this.handleUpdate}
               />
            </div>
        );
    }
}

export default App;
