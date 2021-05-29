import { gql } from '@apollo/client';

export const CREATE_POST = gql`
    mutation createPost(
        $firstName: String!
        $lastName: String!
        $email: String!
        $password: String!
        $confirmPassword: String!
    ) {
        createPost(
            firstName: $firstName
            lastName: $lastName
            email: $email
            password: $password
            confirmPassword: $confirmPassword
        ) {
            id
            firstName
            lastName
            email
            password
            confirmPassword
        }
    }

`;