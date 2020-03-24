import styled from 'styled-components/native';

const formatInput = `
  width: 300px;
  height: 60px;
  border-radius: 30px;
  background: #eee;
  margin-bottom: 26px;
  padding-left: 20px;
  elevation: 5;
`;

export const Container = styled.View`
  /* margin: 0 25px 20px; */
  padding: 0 15px;
  height: 55px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  /* elevation: 3; */
  /* border-radius: 30px; */

  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  // placeholderTextColor: 'rgba(255, 255, 255, 0.8)',
})`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: ${props => (props.publication ? '#777' : '#fff')};
  /* border: 1px solid #333; */
`;
