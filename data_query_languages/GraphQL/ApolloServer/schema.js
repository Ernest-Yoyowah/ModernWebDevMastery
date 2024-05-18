export const typeDefs = `#graphql
type Keyboard {
    id: ID!
    brand: string!
    model: [string!]!
}

type Review {
    id: ID!
    rating: Int!
    content: String!
}

type Author {
    id: ID!
    name: String!
    verified: Boolean!
}

type Query {
    reviews: [Reviews]
    keyboards: [Game]
    authors: [Author]
}
`;

// Types: int, float, string, boolean, ID
