import { useQuery } from 'react-query';
import { fetchUsers, fetchPosts } from './services/typicode';
import './App.css';


function App() {

  const {data: users, isLoading} = useQuery('users', fetchUsers);
  const {data: posts} = useQuery('posts', fetchPosts);

  
if (isLoading){
  return <p>Carregando...</p>
}

  return (
    <>
      <ul>
        {
          (users || []).map(user => (
            <li key = {user.id}>
              {user.name}
            </li>
          ))
        }
      </ul>
    </>
    
  );
}

export default App;
