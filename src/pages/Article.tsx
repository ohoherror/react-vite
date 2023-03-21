import { useDispatch, useSelector } from "react-redux";
import { getList } from "../store/modules/article";
import _ from "lodash";
import { useEffect, useState } from "react";
import type { AnyAction } from "@reduxjs/toolkit";
import store from "@/store";
import { useNavigate } from "react-router-dom";
import { Button, InputNumber } from "antd";

export default function Article() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getList({ currentPage: 2, pageSize: 10 }) as unknown as AnyAction);
  }, []);

  const { list, total } = useSelector((store: any) => store.article);

  return (
    <>
      <section>
        <h3>测试异步 actions</h3>
        <Button
          type="primary"
          style={{ marginRight: "8px" }}
          onClick={() => navigate("/")}
        >
          toHome
        </Button>
        <div>total: {total}</div>
        <ul style={{ padding: 0 }}>
          list:
          {_.map(list, (item: number, key: number) => (
            <li key={key}>{item}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
