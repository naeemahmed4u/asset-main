import { gql } from '@apollo/client';

export const getAllPosts = gql`
    query{
        getAllPosts{
            id
            firstName
            lastName
            email
        }
    }
`