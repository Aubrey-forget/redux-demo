import { IPT_VAL, ADD_ITEM, DEL_ITEM, GET_LIST } from "./actionTypes";

// 深度拷贝数据
const deepCopy = content => JSON.parse(JSON.stringify(content));

// 定义默认值
const defaultState = {
  iptVal: "默认值",
  list: []
};

export default (state = defaultState, action) => {
  // input 值的更新
  if (action.type === IPT_VAL) {
    // 拷贝数据，因为state不推荐直接修改state中的值，所以可以通过深度拷贝数据进行数据的更新
    let newState = deepCopy(state);
    newState.iptVal = action.value;

    return newState;
  }

  // 进行列表数据的添加更新
  if (action.type === ADD_ITEM) {
    let newState = deepCopy(state);
    newState.list.push(newState.iptVal);
    newState.iptVal = "";

    return newState;
  }

  // 进行列表数据的删除更新
  if (action.type === DEL_ITEM) {
    let newState = deepCopy(state);
    newState.list.splice(action.index, 1);

    return newState;
  }

  // 进行列表数据获取
  if (action.type === GET_LIST) {
    let newState = deepCopy(state);
    newState.list = action.data.list;

    return newState;
  }

  return state;
};
