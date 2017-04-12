import actionType from './../actions/actionType.js';

var slides = [
  {
    url:'./public/user_images/Slide1.jpg',
    bookmark: false,
    user: '',
    userIndex: null;
  },
  {
    url:'./public/user_images/Slide2.jpg',
    bookmark: false,
    user: '',
    userIndex: null
  },
  {
    url:'./public/user_images/Slide3.jpg',
    bookmark: false,
    user: '',
    userIndex: null
  }
]

const slides = (state=slides, action) => {
  switch(action.type) {
    case actionType.GetSlides:
      return state;
    case actionType.GetSlidesIndex:
      return {...state[action.index], userIndex: action.value};
    default: return state;
  }
};

export default bookmarks;
