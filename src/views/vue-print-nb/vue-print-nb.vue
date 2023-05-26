<template>
  <div>
    <div id="printMe" class="wrap">
      <p :span="24" class="headTitle">祥网瑞电子科技有限公司 产品出库单</p>

      <a-row :gutter="20">
        <a-col class="ckInfo" :span="8">
          <span class="title">出库编号:</span>
          <span class="borderB"> 444444444444444444444</span>
        </a-col>
        <a-col class="ckInfo" :span="8">
          <span class="title">出库人员:</span>
          <span class="borderB"> 123456789</span>
        </a-col>
        <a-col class="ckInfo" :span="8">
          <span class="title">客户名称:</span>
          <span class="borderB"> 祥网瑞电子科技有限公司</span>
        </a-col>
        <a-col class="ckInfo" :span="8">
          <span class="title">联系方式:</span>
          <span class="borderB"> 123456789</span>
        </a-col>
        <a-col class="ckInfo" :span="8">
          <span class="title">出库日期:</span>
          <span class="borderB"> 2022年4月24日</span>
        </a-col>
      </a-row>
      <table></table>
    </div>
    <a-button v-print="print">打印</a-button>
  </div>
</template>

<script>
export default {
  data() {
    let that = this;
    return {
      msg: "Welcome to Your Vue.js App",
      print: {
        id: "printMe",
        popTitle: "配置页眉标题", // 打印配置页上方的标题
        // extraHead: "打印", // 最上方的头部文字，附加在head标签上的额外标签，使用逗号分割
        preview: false, // 是否启动预览模式，默认是false
        previewTitle: "预览的标题", // 打印预览的标题
        previewPrintBtnLabel: "预览结束，开始打印", // 打印预览的标题下方的按钮文本，点击可进入打印
        zIndex: 20002, // 预览窗口的z-index，默认是20002，最好比默认值更高
        previewBeforeOpenCallback() {
          console.log("正在加载预览窗口！");
          console.log(that.msg, this);
        }, // 预览窗口打开之前的callback
        previewOpenCallback() {
          console.log("已经加载完预览窗口，预览打开了！");
        }, // 预览窗口打开时的callback
        beforeOpenCallback() {
          console.log("开始打印之前！");
        }, // 开始打印之前的callback
        openCallback() {
          console.log("执行打印了！");
        }, // 调用打印时的callback
        closeCallback() {
          console.log("关闭了打印工具！");
        }, // 关闭打印的callback(无法区分确认or取消)
        clickMounted() {
          console.log("点击v-print绑定的按钮了！");
        },
        // url: 'http://localhost:8080/', // 打印指定的URL，确保同源策略相同
        // asyncUrl (reslove) {
        //   setTimeout(() => {
        //     reslove('http://localhost:8080/')
        //   }, 2000)
        // },
        standard: "",
        extarCss: "",
      },
      columns: [
        {
          title: "序号",
          dataIndex: "xh",
        },
        {
          title: "产品名称",
          dataIndex: "a",
        },
        {
          title: "产品型号",
          dataIndex: "b",
        },
        {
          title: "单位",
          dataIndex: "c",
        },
        {
          title: "数量",
          dataIndex: "d",
        },
        {
          title: "备注",
          dataIndex: "e",
        },
      ],
      dataSource: [
        {
          key: "1",
          xh: "1",
          a: 32,
          b: "1111",
          c: "111",
          d: "1111",
          e: "1111",
        },
        {
          key: "2",
          xh: "2",
          a: 32,
          b: "1111",
          c: "111",
          d: "1111",
          e: "1111",
        },
        {
          key: "3",
          xh: "3",
          a: 32,
          b: "1111",
          c: "111",
          d: "1111",
          e: "1111",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
/deep/ .ant-table-thead > tr > th {
  padding: 8px;
}
/deep/ .ant-table-tbody > tr > td {
  padding: 8px;
}
tr > td {
  padding: 8px;
}
/* 取消页眉页脚 */
@page {
  size: auto;
  margin: 0mm;
}
.wrap {
  height: 400px;
  //   border: 1px solid #ccc;
  text-align: left;
  padding: 0 30px;
  .headTitle {
    /* line-height: 100px; */
    padding: 15px 0 8px 0;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    margin: 0;
  }

  .ckInfo {
    display: flex;
    padding: 0 15px 20px 0;
    align-items: flex-end;

    .title {
      font-size: 12px;
      color: #333333;
      margin-right: 6px;
    }
    .borderB {
      flex: 1;
      //   text-align: center;
      text-indent: 1em;
      font-size: 12px;
      font-weight: bold;
      color: #2a2a2a;
      //   border-bottom: 1px solid #707070;
      //   border-top: 0px;
      //   border-left: 0px;
      //   border-right: 0px;
    }
  }
}
</style>
