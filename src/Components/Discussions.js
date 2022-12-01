import styled from "styled-components";

const StyledDiscussions = styled.div`
  .avatar--wrapper {
    align-items: center;
    img {
      border-radius: 50%;
      margin-right: 50px;
    }
  }

  img {
    width: 150px;
    height: 150px;
  }

  ul li {
    list-style: none;
    /* display: flex; */
  }
`;

export const Discussions = ({ discussions, viewer }) => {
  return (
    <StyledDiscussions>
      {viewer !== undefined ? (
        <div className="avatar--wrapper">
          <img src={viewer.avatarUrl} alt={`avatar of ${viewer.login}`} />
          <span>{viewer.login}</span>
        </div>
      ) : null}
      <ul>
        {discussions.map((edge) => {
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
    </StyledDiscussions>
  );
};
