import React from 'react';
// import { Signup } from './components/Signup';
import { ApolloClient } from '@apollo/client';
import { InMemoryCache } from '@apollo/client';
import { createHttpLink } from '@apollo/client';
import { ApolloProvider } from  '@apollo/client';
// import {onError} from 'apollo-client/errors';
import App from './App';


const httpLink = createHttpLink({
    uri: 'http://localhost:4000/naeem'
})

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
})

export default (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
)