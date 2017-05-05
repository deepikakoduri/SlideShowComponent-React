let interval;

export function nextImage(){
  clearInterval(interval);
  return function(dispatch){
    dispatch({type: 'NEXT_IMAGE'});
    interval = setInterval(function(){
        dispatch({type: 'NEXT_IMAGE'})
    },3000)
  }
}

export function previousImage(){
  clearInterval(interval);
  return function(dispatch){
    dispatch({type: 'PREVIOUS_IMAGE'});
    interval = setInterval(function(){
        dispatch({type: 'NEXT_IMAGE'})
    },3000)
    }
  }

export function startSlideShow(){
  return function(dispatch){
    interval = setInterval(function(){
        dispatch({type: 'NEXT_IMAGE'})
    },3000)
  }
}
