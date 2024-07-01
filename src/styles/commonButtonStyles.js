import styled from 'styled-components';

export const BoardButton = styled.button`
  font-weight: bold;
  color: white;
  text-align: center;

  border: none;
  border-radius: 5px;

  background-color: RGBA(91, 160, 202, 0.85);

  padding: 0.5rem 0.8rem;
  margin: 0.3rem;

  display: inline-block;

  cursor: pointer;

  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between; /* 왼쪽과 오른쪽 끝으로 배치 */
  align-items: center;

  margin: 1rem;
`;

export const LeftButtonGroup = styled.div`
  display: flex;
  gap: 0.2rem; /* 버튼 사이의 간격 */
`;

export const RightButtonGroup = styled.div`
  display: flex;
  gap: 0.2rem; /* 버튼 사이의 간격 */
`;
