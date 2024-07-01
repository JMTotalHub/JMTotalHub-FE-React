import styled from 'styled-components';

export const Table = styled.table`
  width: 95%;

  margin: 1rem auto;

  border-collapse: collapse;

  table-layout: fixed; /* 고정된 테이블 레이아웃 */
`;

export const TableHead = styled.thead`
  background-color: #f5f5f5;
`;

export const TableHeadCell = styled.th`
  padding: 0.5rem;
  /* border: 0.1rem solid #ddd; */
  text-align: center;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

export const TableCell = styled.td`
  padding: 0 0.5rem;

  white-space: normal; /* 텍스트 줄 바꿈을 허용 */
  word-wrap: break-word; /* 긴 단어를 줄 바꿈 */
  overflow: hidden; /* 넘치는 텍스트를 숨김 */
`;

// export const TableCell = styled.td`
//   padding: 0 0.5rem;

//   white-space: nowrap; /* 텍스트를 한 줄로 유지 */
//   overflow: hidden; /* 넘치는 텍스트를 숨김 */
//   text-overflow: ellipsis; /* 넘치는 텍스트를 '...'로 표시 */
//   max-width: 10rem; /* 최대 너비 설정 (필요에 따라 조정) */
// `;

export const IdColumn = styled.col`
  width: 7%;
`;

export const ContentColumn = styled.col`
  width: 75%;
`;

export const CreatedAtColumn = styled.col`
  width: 10%;
`;

export const ButtonColumn = styled.col`
  width: 10%;
`;

export const DeleteButton = styled.button`
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 0.3rem 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #ff1a1a;
  }
`;
