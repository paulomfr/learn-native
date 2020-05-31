import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const AddUserForm = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #e2e2e2;
`;

AddUserForm.Input = styled.TextInput.attrs({
  placeholderTextColor: '#999'
})`
  flex: 1;
  height: 40px;
  background: #e2e2e2;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid #e2e2e2;
`;

AddUserForm.Submit = styled(RectButton)`
  align-items: center;
  background: #7159c1;
  border-radius: 4px;
  justify-content: center;
  margin-left: 10px;
  padding: 0 12px;
  opacity: ${({ isLoading }) => isLoading ? 0.7 : 1 }
`;

export const UsersList = styled.FlatList.attrs({
  showVerticalScollIndicator: false
})`
  margin-top: 20px;
`;

export const User = styled.TouchableOpacity`
  flex-direction: row;
  margin: 0 0 30px;
`;

const avatarSize = 64;
User.Avatar = styled.Image`
  height: ${avatarSize}px;
  width: ${avatarSize}px;
  border-radius: ${avatarSize / 2}px;
  background: #eee;
`;

User.Content = styled.View`
  flex: 1;
  padding-left: 20px;
`;

User.Name = styled.Text`
  font-size: 16px;
`;

User.Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  color: rgba(0, 0, 0, .45);
  font-size: 14px;
`;

User.Cta = styled(RectButton)`
  margin-top: 10px;
`;

User.CtaText = styled.Text`
  color: #7159c1;
  font-size: 12px;
  margin-top: 10px
`;
