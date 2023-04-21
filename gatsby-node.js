const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const lessonTemplate = path.resolve(`src/templates/lesson.js`);
  const { data } = await graphql(`
    query {
      allContentfulLessons {
        edges {
          node {
            idName
          }
        }
      }
    }
  `);

  data.allContentfulLessons.edges.forEach((edge) => {
    createPage({
      path: edge.node.idName,
      component: lessonTemplate,
      context: {
        idName: edge.node.idName,
      },
    });
  });
  //   createPage({
  //     path: `/lesson/:id`,
  //     matchPath: `/lesson/:id`,
  //     component: path.resolve(`./src/pages/lesson.js`),
  //   });
};
