export default function reducer(state = {
    imageList:['pokemon1.jpg','pokemon2.jpg','pokemon3.jpg','pokemon4.jpg','pokemon5.jpg','pokemon6.jpg','pokemon8.jpg'],
    currentIndex:0
},
action){

    switch (action.type) {

      case "NEXT_IMAGE":
          console.log("next image")
          let nextIndex = (state.currentIndex + 1 ) % state.imageList.length
          state = Object.assign({}, state, {currentIndex: nextIndex});
          break;

      case "PREVIOUS_IMAGE":
          console.log("previous image")
          let prevIndex = (state.currentIndex - 1 + state.imageList.length) % state.imageList.length
          state = Object.assign({}, state, {currentIndex: prevIndex});
          break;
    }

    return state;
}
