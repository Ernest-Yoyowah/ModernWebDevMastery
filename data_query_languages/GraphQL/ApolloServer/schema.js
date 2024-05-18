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
    keyboardist: Keyboardist!
    keyboard: Keyboard!
}

type Keyboardist {
    id: ID!
    name: String!
    verified: Boolean!
}

type Query {
    keyboards: [Keyboard!]!
    reviews: [Review!]!
    keyboardists: [Keyboardist!]!
    keyboard(id: ID!): Keyboard
    review(id: ID!): Review
    keyboardist(id: ID!): Keyboardist
}

type Mutation {
    addKeyboard(brand: String!, model: String!): Keyboard!
    addReview(rating: Int!, content: String!, keyboardistId: ID!, keyboardId: ID!): Review!
    addKeyboardist(name: String!, verified: Boolean!): Keyboardist!
}
`;

// Types: Int, Float, String, Boolean, ID
