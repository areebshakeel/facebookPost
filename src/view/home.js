import React from 'react';
import SubComponent from '../components/subcomponent'
import FbImageLibrary from 'react-fb-image-grid'
import FacebookEmoji from 'react-facebook-emoji';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ScreenShareOutlinedIcon from '@material-ui/icons/ScreenShareOutlined';



const MyApp=function(props){
    console.log(props.allDetails)


    const reactions=function(e){
        
        const emoji=document.getElementById('react')
        emoji.style.display="Block"
       
    }

    const reactionEnd=function(){
        const emoji=document.getElementById('react')
        emoji.style.display="None"

    }
    return(
        <div className="main-div">

            <div className="imaga-div" style={{height:"70px"}}>

                <img style={{height:"65px",width:"70px",borderRadius:"50%",}} src={props.allDetails.dp}/> 
                <h4>
                   {props.allDetails.name}
               </h4>
                
           </div>

           <div>
                <p>{props.allDetails.created}</p>
            <p>{props.allDetails.description}</p>

            </div>

               
            <div className="fb-grid" >
             <FbImageLibrary images={props.allDetails.images} size={props.allDetails.size}  />
            </div>

              <div className="reaction-div">
                  <div>
                  <a onMouseOver={(e)=>reactions(e)} onMouseOut={(e)=>reactionEnd(e)} href="">
                  <ThumbUpAltOutlinedIcon style={{height:"4rem",width:"4rem"}} />
                  </a>
                  <div id="react" style={{position:'absolute', bottom:"-19rem",display:"none"}}>
        <FacebookEmoji size="sm" type="like"/>
        <FacebookEmoji size='sm'   type="love"/>
        <FacebookEmoji size="sm" type="wow"/>
        <FacebookEmoji size="sm" type="yay"/>
        <FacebookEmoji size="sm" type="angry"/>
        <FacebookEmoji size="sm" type="haha"/>
        <FacebookEmoji size="sm" type="sad"/>
    </div>
                  </div>
                  <div>
                      <a href="">
                      <ChatBubbleOutlineIcon style={{height:"4rem",width:"4rem",}}/>
                      </a>
                      </div>
                  <div>
                  <a href="">
                      <ScreenShareOutlinedIcon style={{height:"4rem",width:"4rem"}}/>
                      </a>
                      </div>
                </div>  
         
        </div>

    )
}

export default MyApp