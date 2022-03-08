import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { makeComment } from './../redux/Actions/postActions';

const Commentaire = ({item}) => {
    const dispatch = useDispatch();
    const token = localStorage.getItem("token");
    const user = useSelector((state) => state.authReducer.user);

    console.log(item.comments);
    console.log(item.comments[0]);
  
    const submitComment = (e) => {
      e.preventDefault();
      dispatch(makeComment(e.target[0].value,item._id));
      console.log(e.target[0].value);
    };  
  return (
      <>
      
      {token?(
    <div>
       
         {item.comments.map((record) => {
              return (
                
                <div style={{display: "flex", alignItems:"center"}} key={record._id}>
                  <span style={{ fontWeight: "600", fontSize:"15px", color:"brown" }}>
                    {record.commentedBy} {": "}
                  </span>
                  
                  <p style={{marginLeft:"10px"}}>{record.text}</p>
                </div>
                
              );
            })}
            
            <form onSubmit={submitComment}>
              <input type="text" placeholder="add a comment" />
            </form>

    </div>
    ) :''}
    </>
  )
}

export default Commentaire