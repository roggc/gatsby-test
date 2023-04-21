import * as React from "react";
import { graphql } from "gatsby";
import { list } from "./index.module.css";
import Grade from "../components/grade/grade";

const IndexPage = ({ data }) => {
  React.useEffect(() => {
    console.log("data", data);
  }, [data]);

  const {
    allContentfulGrades: { edges },
  } = data;

  return (
    <main className={list}>
      {edges.map(({ node: { idName, name, units } }) => (
        <Grade key={idName} name={name} units={units} />
      ))}
    </main>
  );
};

export const query = graphql`
  query {
    allContentfulGrades {
      edges {
        node {
          idName
          name
          units {
            idName
            name
            lessons {
              idName
              name
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;

export const Head = () => <title>Home Page</title>;
