import { gql } from '@apollo/client';

export interface ABOUT {
  avatar: string
  msg: string
  links: string
}
export const GET_ABOUT = gql`
  query {
    about {
       avatar
       msg
       links
    }
  }
`;

export interface RecentPostInterface {
  title?: string
  createdAt?: string
  artid?: string
  banner?: string
  description?: string
}
export const RECENT_POSTS = gql`
  query {
    recentPosts {
    title
    createdAt
    artid
    banner
    description
  }
  }
`;

export interface CategoryInterface {
  name: string
  relateCount: string
  catid: string
  description: string
}
export const CATEGORIES = gql`
  query {
    categories{
    catid
    name
    relateCount
    description
  }
  }
`;
export interface ArchieveInterface {
  year: string
  posts: RecentPostInterface[]
}
export const ARCHIEVE = (perMaxSize: number) => gql`
  query {
    archieves(perMaxSize:${perMaxSize}){
      year
      posts{
        artid
        createdAt
        title
      }
    }
  }
`;

/**
 *
 * @param pageInfo
 * @param pageInfo.size append 条目数
 * @param pageInfo.year 查询年份
 * @param pageInfo.start 当前条目的结束索引位， 也就是当前的 数据列表.length
 * @returns RecentPostInterface[]
 */
export const QUERY_MORE = (pageInfo: { size: number; year: string; start: number }) => gql`
query{
  queryMore(pageInfo:{
    size:${pageInfo.size}
    year:"${pageInfo.year}"
    start:${pageInfo.start}
  }){
    title
    createdAt
    artid
    banner
    description
  }
}
`;

interface CategoryDto {
  catid: string
  name: string
}
interface TagDto {
  tagid: string
  name: string
}
interface CategoryDto {
  catid: string
  name: string
}
interface ColumnDto {
  colid: string
  name: string
}

export interface PostDto {
  artid: string
  createdAt: Date
  title: string
  content?: string
  category?: CategoryDto
  tags?: TagDto[] | null
  cover?: string
  column?: ColumnDto
  banner?: boolean
  description?: string
  password?: string
  visible?: boolean
  status?: number
}
export const QUERY_BY_ID = (artid: string) => gql`
query{
  article(artid:"${artid}"){
    artid
    title
    cover
    description
    password
    content
    category{
      name,
      catid
    }
    column{
      colid
      name
    }
    tags{
      tagid
      name
    }
    createdAt
  }
}
`;
