import React from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";

const ListUI = props => {
  return (
    <div>
      <div style={{ margin: "10px" }}>
        <Input
          placeholder={props.iptVal}
          style={{ width: "200px", marginRight: "10px" }}
          onChange={props.changeVal}
          value={props.iptVal}
        />

        <Button type="primary" onClick={props.addItem}>
          增加
        </Button>
      </div>

      <div style={{ margin: "10px", width: "275px" }}>
        <List
          bordered
          dataSource={props.list}
          renderItem={(item, index) => (
            <List.Item
              onClick={() => {
                props.delItem(index);
              }}
            >
              {item}
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default ListUI;
