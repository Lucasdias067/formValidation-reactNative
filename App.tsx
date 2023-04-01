import { NativeBaseProvider } from 'native-base';
import SignUp from './src/screens/SignUp';

export default function App() {
  return (
    <NativeBaseProvider>
      <SignUp />
    </NativeBaseProvider>
  );
}
