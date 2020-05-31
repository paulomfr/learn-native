import styled from 'styled-components/native';

export const Loading = styled.View`
  align-items: center;
  /* flex: 1; */
  justify-content: center;
  padding: 20px;
`;

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Profile = styled.View`
  flex-direction: row;
  margin: 0 0 30px;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #e2e2e2;
`;

const avatarSize = 80;
Profile.Avatar = styled.Image`
  height: ${avatarSize}px;
  width: ${avatarSize}px;
  border-radius: ${avatarSize / 2}px;
  background: #eee;
`;

Profile.Content = styled.View`
  flex: 1;
  padding-left: 20px;
`;

Profile.Name = styled.Text`
  font-size: 20px;
  font-weight: 600;
`;

Profile.Bio = styled.Text.attrs({
  numberOfLines: 3,
})`
  color: rgba(0, 0, 0, .45);
  font-size: 14px;
`;

export const TitleSection = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

export const Stars = styled.FlatList.attrs({
  showVerticalScollIndicator: false
})`
  margin-top: 20px;
`;

export const Star = styled.View`
  align-items: center;
  flex-direction: row;
  margin: 0 0 30px;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #e2e2e2;
`;

const avatarSizeStar = 64;
Star.Avatar = styled.Image`
  height: ${avatarSizeStar}px;
  width: ${avatarSizeStar}px;
  border-radius: ${avatarSizeStar / 2}px;
  background: #eee;
`;

Star.Content = styled.View`
  flex: 1;
  padding-left: 20px;
`;

Star.Name = styled.Text`
  font-size: 16px;
`;

Star.Author = styled.Text.attrs({
  numberOfLines: 2,
})`
  color: rgba(0, 0, 0, .45);
  font-size: 14px;
`;
