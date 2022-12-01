import "./App.css";
import { graphql } from "@octokit/graphql";
import { Loading, Discussions } from "./Components";
import { useState, useEffect } from "react";

// const { REACT_APP_GITHUB_AGORA_STATES_TOKEN } = process.env;
// let token = REACT_APP_GITHUB_AGORA_STATES_TOKEN;

const getRepository = async () => {
  const { repository, viewer } = await graphql(
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
        viewer {
          login
          avatarUrl
        }
      }
    `,
    {
      headers: {
        authorization: `bearer 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`,
        // authorization: `token ${token}`,
      },
    }
  );
  return { repository, viewer };
};

function App() {
  const [agoraData, setAgoraData] = useState({});
  const [viewer, setViewer] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getRepository()
      .then((res) => {
        setAgoraData(res.repository.discussions.edges);
        setViewer(res.viewer);
        setIsLoading(false);
      })
      .catch((error) => console.log(Error, error));
  }, []);

  return <div className="App">{isLoading ? <Loading /> : <Discussions discussions={agoraData} viewer={viewer} />}</div>;
}

export default App;
