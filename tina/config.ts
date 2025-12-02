import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main", // Git 分支
  // clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID!, // Tina Cloud 获取（免费注册）
  // token: process.env.TINA_TOKEN!,
  clientId: 'b6aacb76-170e-4eb1-a9af-40835c7516c2',
  token: '6e02f4b1cb30fc2dcf67f3e9c92548b930536f2e',
  build: {
    outputFolder: "admin", // 生成 Docusaurus /admin 页面
    publicFolder: "static",
  },
  media: { tina: { publicFolder: "public", mediaRoot: "public" } },
  schema: {
    collections: [
      {
        label: "Docs",
        name: "docs",
        path: "docs", // Docusaurus docs/ 文件夹
        format: "mdx", // 支持 MDX（Docusaurus 原生）
        fields: [
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
            templates: [
              // Docusaurus 常用块：代码/图片/警报
              {
                name: "ImageBlock",
                label: "Image",
                fields: [{ type: "image", name: "image" }],
              },
              {
                name: "CodeBlock",
                label: "Code",
                fields: [{ type: "string", name: "language" }],
              },
            ],
          },
          { type: "image", name: "heroImage", label: "Hero Image" },
        ],
      },
    ],
  },
});
