import React, { useEffect, useState } from 'react'
import { ActivityIndicator } from 'react-native'

import api from '../../services/api';
import { Loading, Container, Profile, TitleSection, Stars, Star } from './styles';

const User = ({ navigation, route }) => {
  const { user } = route.params;
  const [isLoading, setIsLoading] = useState(true);
  const [starreds, setStarreds] = useState([]);

  // update screen title.
  navigation.setOptions({ title: user.name });

  useEffect(() => {
    const loadStarreds = async () => {
      const { data } = await api.get(`/users/${user.login}/starred`);

      setStarreds(data);
      setIsLoading(false);
    };

    loadStarreds();
  }, []);

  return (
    <Container>
      <Profile>
        <Profile.Avatar source={{ uri: user.avatar }} />
        <Profile.Content>
          <Profile.Name>{user.name}</Profile.Name>
          <Profile.Bio>{user.bio}</Profile.Bio>
        </Profile.Content>
      </Profile>

      {isLoading ? (
        <Loading>
          <ActivityIndicator color="#7159c1" />
        </Loading>
      ) : (
        <>
          <TitleSection>Starred</TitleSection>

          <Stars
            data={starreds}
            keyExtractor={star => String(star.id)}
            renderItem={({ item }) => (
              <Star>
                <Star.Avatar source={{ uri: item.owner.avatar_url }} />
                <Star.Content>
                  <Star.Name>{item.name}</Star.Name>
                  <Star.Author>{item.owner.login}</Star.Author>
                </Star.Content>
              </Star>
            )}
          />
        </>
      )}
    </Container>
  );
}

export default User
