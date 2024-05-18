export const typeDefs = `#graphql
type Keyboard {
    id: ID!
    brand: String!
    model: String!
}

type Review {
    id: ID!
    rating: Int!
    content: String!
    author: Author!
    keyboard: Keyboard!
}

type Author {
    id: ID!
    name: String!
    verified: Boolean!
}

type Query {
    keyboards: [Keyboard!]!
    reviews: [Review!]!
    authors: [Author!]!
    keyboard(id: ID!): Keyboard
    review(id: ID!): Review
    author(id: ID!): Author
}

type Mutation {
    addKeyboard(brand: String!, model: String!): Keyboard!
    addReview(rating: Int!, content: String!, authorId: ID!, keyboardId: ID!): Review!
    addAuthor(name: String!, verified: Boolean!): Author!
}
`;

// Types: Int, Float, String, Boolean, ID
