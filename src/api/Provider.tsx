import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
	uri: "https://terminal-back-end.herokuapp.com/",
	cache: new InMemoryCache(),
});

const Provider: React.FC<{}> = ({ children }) => (
	<ApolloProvider client={client}>{children}</ApolloProvider>
);

export default Provider;
