export const AdFormConfig = {
  fields: [
    {
      name: "title",
      label: "广告标题",
      type: "input",
      rules: [{ required: true, message: "请输入广告标题" }],
      component_props: {
        placeholder: "请输入广告标题",
      },
    },
    {
      name: "publisher",
      label: "发布人",
      type: "input",
      rules: [{ required: true, message: "请输入发布人" }],
      component_props: {
        placeholder: "请输入发布人",
      },
    },
    {
      name: "content",
      label: "内容文案",
      type: "text_area",
      rules: [{ required: true, message: "请输入内容文案" }],
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
      },
    },
    {
      name: "redirectUrl",
      label: "落地页",
      type: "text_area",
      rules: [{ required: true, message: "请输入落地页" }],
      component_props: {
        placeholder: "请输入落地页",
        rows: 2,
      },
    },
    {
      name: "price",
      label: "出价",
      type: "input_number",
      rules: [{ required: true, message: "请输入出价" }],
      component_props: {
        min: 0,
        placeholder: "请输入出价",
        suffix: "元",
        style: { width: "100%" },
      },
    },
  
  ],
};