<template>
  <div class="home">
    <a-table :columns="columns" :data-source="data" bordered></a-table>
    <a-button @click="handleExport">导出</a-button>
  </div>
</template>
<script>
import { ElMapExportTable } from "table-excel";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      columns: [
        { title: "日期", dataIndex: "date" }, // title为excel列名称,dataIndex为当前列对应的数据源字段
        { title: "姓名", dataIndex: "name" },
        { title: "地址", dataIndex: "address" },
      ],
      data: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          key: 1,
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          key: 4,
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          key: 3,
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          key: 2,
        },
      ],
    };
  },

  methods: {
    handleExport() {
      let that = this;
      const instance = new ElMapExportTable(
        { column: that.columns, data: that.data },
        { progress: (progress) => console.log(progress) } // 进度条回调
      );
      instance.download("导出正常表格的案例");
    },
  },
};
</script>
