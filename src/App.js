import "./App.css";
import { graphql } from "@octokit/graphql";
import { useState, useEffect } from "react";

const agoraData = async () => {
  const { repository } = await graphql(
    `
      {
        repository(name: "agora-states-fe", owner: "codestates-seb") {
          discussions(first: 100) {
            edges {
              node {
                id
                title
                createdAt
                url
                author {
                  login
                  avatarUrl
                }
                category {
                  name
                }
                answer {
                  author {
                    login
                  }
                }
              }
            }
          }
        }
      }
    `,
    {
      headers: {
        authorization: `bearer ${TOKEN}`,
      },
    }
  );
  return repository;
};

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    agoraData()
      .then((res) => {
        setData(res.discussions.edges);
        setIsLoading(false);
      })
      .catch((error) => console.log(Error, error));
  }, []);

  return (
    <div className="App">
      <div>Hello agorastates</div>
      <ul>
        {isLoading
          ? "loading..."
          : data.map((edge) => {
              return (
                <li key={edge.node.id}>
                  <img src={edge.node.author.avatarUrl} alt={`avatar of ${edge.node.author.login}`} />
                  <div>{`[${edge.node.category.name}]`}</div>
                  <a href={edge.node.url}>{edge.node.title}</a>
                  <p>{edge.node.answer ? "☑" : "☒"}</p>
                </li>
              );
            })}
      </ul>
    </div>
  );
}

export default App;
