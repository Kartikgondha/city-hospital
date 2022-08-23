import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification } from "firebase/auth";
import { auth } from "../../firebase";
export const signupApi = (values) => {
  console.log("signupApi", values);

  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        const user = userCredential.user;
        onAuthStateChanged(auth, (user) => {
          if (user) {
           sendEmailVerification(user)
          } else {
            
          }
        });
      })
      .then((user)=>{
        onAuthStateChanged(auth, (user) => {
          if (user.emailVerified) {
           resolve({payload : "email registerd"});
          } else {
            resolve({payload : "please verified email"});
          }
        });
      })


      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if(errorCode.localeCompare("auth/email-already-in-use")=== 0){
          reject({payload : "already use email"});
        }
        else{
        reject({payload : errorCode});
        }
      });
  });
};
