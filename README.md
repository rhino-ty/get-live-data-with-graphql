# 전제

CRA로 리액트앱을 만든 후 `npm install @octokit/graphql`: graphQL의 쿼리를 로컬 환경에서 쉽게 수행할 수 있게 도와주는 라이브러리인 [@octokit/graphql](https://github.com/octokit/graphql.js/)를 깔자!
그리고 `import { graphql } from "@octokit/graphql";`로 import하기! 모르겠으면 [github graphql API 문서](https://docs.github.com/ko/graphql)를 확인하며 쿼리를 작성해보자!

# Bare Minimum Requirements

- 배운 GraphQL 쿼리를 이용해 아고라 스테이츠에 접근하여 1개 이상의 데이터를 조회해봅니다.
  - Issues, Pull requests 등에 접근하여 데이터를 조회합니다.
- 현재 내가 로그인 되어 있는지 확인할 수 있는 쿼리를 짜봅니다.

# Advanced

쿼리해 온 데이터를, React 앱으로 만들었던 나만의 아고라스테이츠나 자신의 앱에 적용해 보기 좋게 구성해봅니다.
