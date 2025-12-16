export const AdFormConfig = [
  {
    name: "title",
    label: "广告标题",
    type: "input",
    rules: [
      { required: true, message: "请输入广告标题" },
      { max: 50, message: "标题最多 50 个字符" },
    ],
    component_props: {
      placeholder: "请输入广告标题",
    },
  },
  {
    name: "publisher",
    label: "发布人",
    type: "input",
    rules: [
      { required: true, message: "请输入发布人" },
      { max: 20, message: "发布人名称最多 20 个字符" },
    ],
    component_props: {
      placeholder: "请输入发布人",
    },
  },
  {
    name: "content",
    label: "内容文案",
    type: "text_area",
    rules: [
      { required: true, message: "请输入内容文案" },
      { max: 200, message: "内容文案最多 200 个字符" },
    ],
    component_props: {
      placeholder: "请输入内容文案",
      rows: 3,
    },
  },
  {
    name: "videosInfo",
    label: "上传视频",
    type: "upload",
    rules: [{ required: true, message: "请上传视频" }],
    // FormItem 级别的属性
    item_props: {
      triggerPropName: "fileList",
    },
    // Upload 组件级别的属性
    component_props: {
      listType: "picture-card",
      multiple: true,
      name: "video",
      autoUpload: false,
      // 添加 accept 规则，严格限制上传类型为视频
      accept: {
        type: "video/mp4,video/quicktime,.mp4,.mov",
        strict: true,
      },
    },
  },
  {
    name: "redirectUrl",
    label: "落地页",
    type: "text_area",
    rules: [
      { required: true, message: "请输入落地页" },
      // URL 正则匹配
      {
        match:
          "^(https?:\\/\\/)?(localhost|(\\d{1,3}\\.){3}\\d{1,3}|([\\w-]+\\.)+[\\w-]+)(:\\d+)?(\\/\\S*)?$",
        message: "请输入正确的 URL 格式",
      },
    ],
    component_props: {
      placeholder: "请输入落地页",
      rows: 2,
    },
  },
  {
    name: "price",
    label: "出价",
    type: "input_number",
    rules: [
      { required: true, message: "请输入出价" },
      { type: "number", min: 0.01, message: "出价必须大于 0" },
    ],
    component_props: {
      min: 0,
      placeholder: "请输入出价",
      suffix: "元",
      style: { width: "100%" },
    },
  },
];
