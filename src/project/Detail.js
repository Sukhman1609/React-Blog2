import React, { useContext } from 'react'
import {useParams} from 'react-router-dom'
import { Store } from './ContextAPI'
import './Styles/Detail.css'
import { useNavigate } from 'react-router-dom';

import { Link ,NavLink} from 'react-router-dom'
import Footer from './Footer/Footer'
const Detail = () => {
  const navigate = useNavigate();

    const id=useParams().id
    const[ContextData]=useContext(Store)
    console.log(id)
    const selectedItem = ContextData.find(item => item.id === parseInt(id));
    
    const getCategoryItems = (category) => {
      return ContextData.filter(item => item.category === category);
    };
    const categoryItems = getCategoryItems(selectedItem.category);

    // Find the index of the selected item
    const selectedIndex = categoryItems.findIndex(item => item.id === parseInt(id));
  console.log(selectedItem);
  
  return (
    
    <div className='Detail'>
      <div className='detailin'>
       <h1><span className='header1'>THE</span><span className='header2'>SIREN</span></h1>
      </div>
      <div className="go-back-button">
        <button  className='delButton' onClick={() => navigate(-1)}>Go Back</button>
      </div>
      <div className='detailHeading'><p >{selectedItem.name}</p></div>
      <div className='detailHead'>
        <div className='logo'>
          <img className='foimg' id='logo-img' src='https://i.pinimg.com/736x/31/92/c5/3192c5a13626653bffeb2c1171df716f.jpg' alt='Not Avaiable'/>
        
        <div><p style={{color:'black', fontSize:'15pt', marginLeft:'10px', fontWeight:'500'}}>Sukhman</p><p style={{color:'grey', fontSize:'12pt', marginTop:'-10px',marginLeft:'10px', fontWeight:'500'}}>16-Sep-2023</p></div>
        </div>
        <div className="footer-social">
        <ul className='foto'>
              <li><Link to='https://www.facebook.com/' className='folink'  style={{color:'black'}} ><i class="fa fa-facebook" aria-hidden="true"></i></Link></li>
              <li><Link to='https://twitter.com/i/flow/login'className='folink'  style={{color:'black'}}><i class="fa fa-twitter" aria-hidden="true"></i></Link></li>
              <li><Link to='https://www.linkedin.com/feed/' className='folink' style={{color:'black'}} >
<i class="fa fa-linkedin" aria-hidden="true"></i>
</Link></li>
              <li><Link to='https://www.instagram.com/' className='folink'  style={{color:'black'}} ><i class="fa fa-instagram" aria-hidden="true"></i></Link></li>
            </ul>
        </div>
      </div>


      <div className='xyz'>
          <img src={selectedItem.bollywoodimg} alt='Img not found' className='detailImg'></img>
          <div className='detailContent'><p>{selectedItem.heading}{selectedItem.description}</p></div>
        </div>
        
        <div><div className="footer-social">
        <ul className='detailLike'>
              <li><Link to='#' className='folink'  style={{color:'black'}} ><i class="fa fa-thumbs-up" aria-hidden="true"></i></Link></li><p className='like'>Like</p></ul></div>
    </div>

   

    <div>
      <div><div className="footer-social">
    <ul className='detailLike' id='kat'>
              <div><li><Link to='#' className='folink'  style={{color:'black'}} ><i class="fa fa-thumbs-up" aria-hidden="true"></i></Link></li><p className='like' style={{marginTop:'-35px', marginLeft:'35px'}}>Like</p></div>
              <div style={{marginLeft:'-90px', marginTop:'80px'}}><li><Link to='#' className='folink'  style={{color:'black'}} ><i class="fa fa-share-alt" aria-hidden="true"></i></Link></li><p className='like' style={{marginLeft:'40px', marginTop:'-35px'}}>Share</p>
              </div>
              </ul>
              </div>
    </div></div>
<div className='detailHrr'>
    <hr className='detailHr'></hr>

    <div className='logo' id='lo'>
          <img className='foimg' id='logo-img' src='https://i.pinimg.com/736x/31/92/c5/3192c5a13626653bffeb2c1171df716f.jpg' alt='Not Avaiable'/>
        
        <div style={{marginTop:'-20px '}}>
          <p style={{color:'black', fontSize:'15pt', marginLeft:'10px', fontWeight:'200',marginTop:'10px'}}>WRITTEN BY</p>
          <p style={{color:'black', fontSize:'15pt', marginLeft:'10px', fontWeight:'500',marginTop:'-10px'}}>Sukhman</p><p style={{color:'grey', fontSize:'12pt', marginTop:'-10px',marginLeft:'10px', fontWeight:'500'}}>16-Sep-2023</p></div>
        </div>

        <hr className='detailHr'></hr>
        </div>
        <div className='more'>
          <p className='moreHeading'>More from The Siren</p>
          <hr className='moreHr'></hr>

          <div className='theMore'>
          <div className='subTheLatest' id='moreCo'>
          {categoryItems.slice(selectedIndex + 1, selectedIndex + 2).map((item,index)=>{
            console.log(item);
            return(<>
            <NavLink to={`/detail/${item.id}`} style={{color:'black', textDecoration:'none'}}>
            <img src={item.bollywoodimg} alt={item.name} className='subLatest' /></NavLink>
            <NavLink to={`/detail/${item.id}`} style={{color:'black', textDecoration:'none'}}>
            <p style={{color:'black', fontSize:'15pt',  fontWeight:'500',}}>{item.name}</p></NavLink>
            </>)
          })}
          <div className='logo'>
          <img className='foimg' id='logo-img' src='https://i.pinimg.com/736x/31/92/c5/3192c5a13626653bffeb2c1171df716f.jpg' alt='Not Avaiable'/>
        
        <div><p style={{color:'black', fontSize:'15pt', marginLeft:'10px', fontWeight:'500'}}>Sukhman</p><p style={{color:'grey', fontSize:'12pt', marginTop:'-10px',marginLeft:'10px', fontWeight:'500'}}>16-Sep-2023</p></div>
        </div>
          </div>
          <div className='subTheLatest' id='moreCo'>
          {categoryItems.slice(selectedIndex + 3, selectedIndex + 4).map((item,index)=>{
            console.log(item);
            return(<>
            <NavLink to={`/detail/${item.id}`} style={{color:'black', textDecoration:'none'}}>
            <img src={item.bollywoodimg} alt={item.name} className='subLatest'/></NavLink>
            <NavLink to={`/detail/${item.id}`} style={{color:'black', textDecoration:'none'}}>
            <p style={{color:'black', fontSize:'15pt',  fontWeight:'500',}}>{item.name}</p></NavLink>
            </>)
          })}
          <div className='logo'>
          <img className='foimg' id='logo-img' src='https://i.pinimg.com/736x/31/92/c5/3192c5a13626653bffeb2c1171df716f.jpg' alt='Not Avaiable'/>
        
        <div><p style={{color:'black', fontSize:'15pt', marginLeft:'10px', fontWeight:'500'}}>Sukhman</p><p style={{color:'grey', fontSize:'12pt', marginTop:'-10px',marginLeft:'10px', fontWeight:'500'}}>16-Sep-2023</p></div>
        </div>
          </div>
          <div className='subTheLatest' id='moreCo'>
          {categoryItems.slice(selectedIndex + 2, selectedIndex + 3).map((item,index)=>{
            console.log(item);
            return(<>
            <NavLink to={`/detail/${item.id}`} style={{color:'black', textDecoration:'none'}}>
            <img src={item.bollywoodimg} alt={item.name} className='subLatest'/></NavLink>
            <NavLink to={`/detail/${item.id}`} style={{color:'black', textDecoration:'none'}}>
            <p style={{color:'black', fontSize:'15pt',  fontWeight:'500',}}>{item.name}</p></NavLink>

            </>)
          })}
          <div className='logo'>
          <img className='foimg' id='logo-img' src='https://i.pinimg.com/736x/31/92/c5/3192c5a13626653bffeb2c1171df716f.jpg' alt='Not Avaiable'/>
        
        <div><p style={{color:'black', fontSize:'15pt', marginLeft:'10px', fontWeight:'500'}}>Sukhman</p><p style={{color:'grey', fontSize:'12pt', marginTop:'-10px',marginLeft:'10px', fontWeight:'500'}}>16-Sep-2023</p></div>
        </div>
          </div>
          </div>
        </div>

    <Footer />
    </div>
  )
}

export default Detail
