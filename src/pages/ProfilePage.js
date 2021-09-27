import {useParams} from 'react-router-dom';

export const ProfilePage = () => {
  const {username} = useParams();
  return (
    <div>
      <h1>Profile Page: {username}</h1>
    </div>
  )
}
