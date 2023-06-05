import { useState } from 'react'

import { AuthPage, ChatsPage } from './pages';

function App() {
  const [user, setUser] = useState(undefined);
  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />
  } else {
    return <ChatsPage user={user} />
  }
}

export default App
