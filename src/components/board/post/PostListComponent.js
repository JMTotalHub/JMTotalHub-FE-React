import React from 'react';
import Pagination from '../../common/Pagination';
import { Link } from 'react-router-dom';

const PostsListComponent = ({
  postList,
  totalPage,
  currentPage,
  setCurrentPage,
  status,
  error,
}) => {
  if (status === 'idle') {
    return <div>Loading... 데이터를 요청합니다.</div>;
  }

  if (status === 'loading') {
    return <div>Loading... 데이터를 불러오고 있습니다.</div>;
  }

  if (status === 'failed') {
    console.log('api 통신 에러 : ' + error);
    return <div>Error: 게시글 데이터를 불러오지 못했습니다.</div>;
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>제목</th>
            <th>생성 시간</th>
          </tr>
        </thead>
        <tbody>
          {postList.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>
                <Link to={`${post.id}`}>{post.title}</Link>
              </td>
              <td>{new Date(post.created_at).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        totalPage={totalPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default PostsListComponent;
