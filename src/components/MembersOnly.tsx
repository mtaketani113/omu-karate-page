import { signInWithPopup, signInWithRedirect } from 'firebase/auth';
import { auth, googleProvider } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Box, Button } from '@mui/material';

const MembersOnly = () => {
  const [user] = useAuthState(auth);

  return <>{user ? <Contents /> : <SignIn />}</>;
};

const SignIn = () => {
  const signInWithGooglePopup = () => {
    signInWithPopup(auth, googleProvider);
  };

  const signInWithGoogleRedirect = () => {
    signInWithRedirect(auth, googleProvider);
  };

  return (
    <>
    <p>
      <Button variant="text" onClick={signInWithGooglePopup}>
        Googleでサインイン（PC）
      </Button></p>
      <p>
      <Button variant="text" onClick={signInWithGoogleRedirect}>
        Googleでサインイン（スマホ）
      </Button></p>
    </>
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
