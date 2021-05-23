// microCMS から返ってくるオブジェクトの共通プロパティ
export interface CommonItem {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

// microCMS から返ってくるリストの共通プロパティ T に上記のオブジェクトが入る
export interface CommonList<T> {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
}
