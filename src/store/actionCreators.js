import { IPT_VAL, ADD_ITEM, DEL_ITEM, GET_LIST } from "./actionTypes";
import axios from "axios";

// input值的更新
export const iptAction = value => ({
  type: IPT_VAL,
  value
});

// 添加新数据
export const addAction = () => ({
  type: ADD_ITEM
});

// 删除列表某一行数据
export const delAction = index => ({
  type: DEL_ITEM,
  index
});

// 设置列表数据
export const getListAction = data => ({
  type: GET_LIST,
  data
});

// 通过接口获取列表数据
export const getList = () => {
  return dispatch => {
    axios
      .get(
        "https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList"
      )
      .then(res => {
        const data = res.data.data;
        const action = getListAction(data);
        dispatch(action);
      })
      .catch(err => console.log(err));
  };
};
