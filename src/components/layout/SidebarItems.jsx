import { PieChartOutlined, UserOutlined } from "@ant-design/icons";

import { ROUTES } from "../../routes/routesConstant";

const { BASE, COUNTER_REDUX, COUNTER_REDUX_THUNK } = ROUTES;

export const items = [
  {
    label: "Counter",
    key: 1,
    icon: <PieChartOutlined />,
    path: BASE,
    children: [
      {
        label: "Redux",
        key: 2,
        title: COUNTER_REDUX,
      },
      {
        label: "Redux Thunk",
        key: 3,
        title: COUNTER_REDUX_THUNK,
      },
    ],
  },
  {
    label: "Hooks",
    key: 4,
    icon: <UserOutlined />,
    children: [
      {
        label: "Tom",
        key: 5,
        to: "/counter",
      },
      {
        label: "Bill",
        key: 6,
        to: "/user2",
      },
    ],
  },
];
