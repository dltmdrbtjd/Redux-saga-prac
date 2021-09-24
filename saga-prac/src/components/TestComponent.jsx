import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { requestPostAction } from '../module/actions/post'

const TestComponent = () => {
  const dispatch = useDispatch();
  const {post} = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(requestPostAction());
  },[])

  return (
    <div>
      <h1>Redux-saga Test</h1>
      {post.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
        )
      })}
    </div>
  )
}

export default TestComponent;