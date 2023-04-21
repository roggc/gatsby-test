import * as React from "react";
import { graphql } from "gatsby";

const LessonPage = ({ data }) => {
  React.useEffect(() => {
    console.log("data", data);
  }, [data]);
  const {
    contentfulLessons: { name },
  } = data;
  return <div>{name}</div>;
};

export const query = graphql`
  query MyQuery($idName: String!) {
    contentfulLessons(idName: { eq: $idName }) {
      goals {
        raw
      }
      vocabulary {
        raw
      }
      idName
      name
    }
  }
`;

export default LessonPage;
