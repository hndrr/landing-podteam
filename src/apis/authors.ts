import { CommonItem, CommonList } from "./common";

interface TagItem extends CommonItem {
  name: string;
}

// 後述の記事を1件取得する時に使うので export しています
export interface ArticleItem extends CommonItem {
  title: string;
  description: string;
  tags: TagItem[];
  markdown: string;
}

// APIの型定義
export interface Methods {
  get: {
    resBody: CommonList<ArticleItem>;
  };
}
