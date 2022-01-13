const SignUpFetch = async (username, email, password, setUser) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });
    const data = await response.json();
    console.log(data);
    setUser(data.newUser.username);
  } catch (error) {
    console.log(error);
  }
};

// const loginFetch = async (email, password, setUser) => {
//     try {
//         const response = await fetch(`${process.env.REACT_APP_REST_API}login`, {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({
//                 email,
//                 password,
//             }),
//         });
//         const data = await response.json();
//         setUser(data.user.username);
//     } catch (error) {
//         console.log(error);
//     }
// };

export default SignUpFetch;
