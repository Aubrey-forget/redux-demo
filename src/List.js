import React, { Component } from "react";
import store from "./store/index";
import {
  iptAction,
  addAction,
  delAction,
  getList
} from "./store/actionCreators";
import ListUI from "./ListUI";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.storeChange = this.storeChange.bind(this);
    store.subscribe(this.storeChange);

    // 绑定this
    this.changeVal = this.changeVal.bind(this);
    this.addItem = this.addItem.bind(this);
    this.delItem = this.delItem.bind(this);
  }

  componentDidMount() {
    const action = getList();
    store.dispatch(action);
  }

  render() {
    return (
      <ListUI
        iptVal={this.state.iptVal}
        changeVal={this.changeVal}
        addItem={this.addItem}
        list={this.state.list}
        delItem={this.delItem}
      />
    );
  }

  changeVal(e) {
    store.dispatch(iptAction(e.target.vlue));
  }

  addItem() {
    if (!this.state.iptVal) return;
    store.dispatch(addAction());
  }

  delItem(index) {
    store.dispatch(delAction(index));
  }

  // 更新数据
  storeChange() {
    this.setState(store.getState());
  }
}

export default List;
