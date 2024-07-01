import styled from 'styled-components';

export const Container = styled.div`
  width: 95%;
  margin: 1rem auto;
  padding: 1rem;

  background-color: #fff;

  border: solid 0.2rem rgba(0, 0, 0, 0.2);
  border-radius: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 0.1rem;
  padding: 0.5rem 0;

  border-bottom: 0.1rem solid #ccc;

  @media (max-width: 768px) {
    flex-direction: column; /* 화면이 좁아지면 세로 방향으로 배치 */
  }
`;

export const Column = styled.div`
  flex: ${(props) => props.flex};

  display: flex;
  padding: 0 1rem;

  &:not(:last-child) {
    border-right: 0.1rem solid #ccc; /* Column 사이에 수직선 추가 */
    padding-right: 1rem; /* 수직선과 내용 사이에 간격 추가 */
  }
`;

export const Label = styled.label`
  font-weight: bold;
  margin-right: 5px;

  @media (max-width: 768px) {
    margin-bottom: 5px; /* 라벨 아래에 여백 추가 */
  }
`;

export const Value = styled.span`
  flex: 1;

  overflow: hidden; /* 넘치는 텍스트를 숨김 */
  text-overflow: ellipsis; /* 넘치는 텍스트를 '...'로 표시 */
  max-width: 100%; /* 최대 너비 설정 (필요에 따라 조정) */

  @media (max-width: 768px) {
    width: 100%; /* 너비를 100%로 설정 */
  }
`;

export const Content = styled.div`
  margin-top: 0.2rem;
`;
