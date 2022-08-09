const GET_GREETING = 'helloReactFrontEnd/GET_GREETING';

const greetingFetched = (text) => ({
  type: GET_GREETING,
  payload: {
    text,
  },
});

export const getGreeting = () => (dispatch) => {
  const URL = 'http://127.0.0.1:3000/greetings';
  fetch(URL)
    .then((res) => res.json())
    .then((res) => {
      dispatch(greetingFetched(res.data));
    })
    .catch((error) => console.log(error));
};

export default function reducer(state = [], action) {
  switch (action.type) {
    case GET_GREETING:
      return action.payload.text;
    default:
      return state;
  }
}
