import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, googleProvider } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Box, Button } from '@mui/material';

const MembersOnly = () => {
  const [user] = useAuthState(auth);

  return <>{user ? <Contents /> : <SignIn />}</>;
};

const SignIn = () => {
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider);
  };

  return (
    <Button variant="text" onClick={signInWithGoogle}>
      Googleでサインイン
    </Button>
  );
};

const Contents = () => {
  return (
    <>
      <Box display="flex" justifyContent="center" alignItems="center" marginBottom="10px">
        <iframe
          style={{ width: '100%', aspectRatio: '16/9', border: '0' }}
          src="https://www.youtube.com/embed/e0j8DPYd_zo"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Box>
    </>
  );
};

export default MembersOnly;
