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
