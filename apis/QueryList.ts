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
  title: string
  createdAt: string
  artid: string
  banner: string
  description: string
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
