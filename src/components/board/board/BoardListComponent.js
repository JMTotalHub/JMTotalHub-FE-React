import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import boardListByNothing from '../../../features/board/board/actions/BoardListAction';
import { Link } from 'react-router-dom';

const BoardListComponent = () => {
  const dispatch = useDispatch();
  const { boardList, status, error } = useSelector((state) => state.boardList);

  useEffect(() => {
    dispatch(boardListByNothing());
  }, []);

  if (status === 'idle') {
    return <div>Loading... 데이터를 요청합니다.</div>;
  }

  if (status === 'loading') {
    return <div>Loading... 데이터를 불러오고 있습니다.</div>;
  }

  if (status === 'failed') {
    console.log('api 통신 에러 : ' + error);
    return <div>Error: 게시판 데이터를 불러오지 못했습니다.</div>;
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>이름</th>
            <th>생성 시간</th>
          </tr>
        </thead>
        <tbody>
          {boardList.map((board) => (
            <tr key={board.id}>
              <td>{board.id}</td>
              <td>
                <Link to={`${board.id}/posts`}>{board.name}</Link>
              </td>
              <td>{new Date(board.created_at).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BoardListComponent;
