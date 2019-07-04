<template>
  <a-table :columns="columns" v-bind="{dataSource: data}" bordered>
    <template slot="name" slot-scope="text">
      <a href="javascript:;">{{text}}</a>
    </template>
    <template slot="customTitle">自定义列title</template>
  </a-table>
</template>
<script>
const columns = [
  {
    dataIndex: "key",
    slots: { title: "customTitle" },
    scopedSlots: { customRender: "name" }
  },
  {
    title: "Cash Assets",
    className: "column-money",
    dataIndex: "money"
  },
  {
    title: "Address",
    dataIndex: "address"
  }
];

const data = [
  {
    key: "1",
    name: "John Brown",
    money: "￥300,000.00",
    address: "New York No. 1 Lake Park"
  },
  {
    key: "2",
    name: "Jim Green",
    money: "￥1,256,000.00",
    address: "London No. 1 Lake Park"
  },
  {
    key: "3",
    name: "Joe Black",
    money: "￥120,000.00",
    address: "Sidney No. 1 Lake Park"
  }
];

export default {
  name: "TableBase",
  data() {
    return {
      data,
      columns
    };
  }
};
</script>
<style>
th.column-money,
td.column-money {
  text-align: right !important;
}
</style>
