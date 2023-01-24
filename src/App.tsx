import {AuthProvider} from './services/Auth'
import RoutesApp from './routes/Index'

export default function App() {
  return (
      <AuthProvider>
        <RoutesApp/>
      </AuthProvider>
  );
}
