  import React, { useContext } from 'react'
import { Store } from './ContextAPI'
import '../App.css'
// import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Footer from './Footer/Footer';
import './Styles/Home.css'
  const Home = () => {
    const[ContextData]=useContext(Store);
    console.log(ContextData);

    
    return (
      <div className='home ' >
        <div className='mainImg'>
          <div className='sub'>
          {ContextData.filter((item)=> item.id > 35 && item.id<37).map((item,index)=>{
            console.log(item);
            return(   <div >
              <NavLink to={`/detail/${item.id}`} > 
            <img src={item.bollywoodimg} alt={item.name} className='subImg' />
            </NavLink>
            <NavLink to={`/detail/${item.id}`} style={{color:'black'}}> <h1 className='image-text'>{item.name}</h1></NavLink> 
            </div>)
          })}</div>
          <div className='sub1'>
          {ContextData.filter((item)=> item.id > 38 && item.id<41).map((item,index)=>{
            console.log(item);
            return(<>
            <NavLink to={`/detail/${item.id}`} className='Navlink'> 
            <img src={item.bollywoodimg} alt={item.name} className='subImg1'/></NavLink>
            </>)
          })}
          </div>
        </div>
        <div className='theLatest'>
          <p className='TheLatest'>The Latest</p>
          <div className='mainLatest'>
          <div className='subTheLatest'>
          {ContextData.filter((item)=> item.id%4===0 && item.id > 10 && item.id<13).map((item,index)=>{
            console.log(item);
            return(<>
            <NavLink to={`/detail/${item.id}`} style={{color:'black'}} className='Navlink'> 
            <img src={item.bollywoodimg} alt={item.name} className='subLatest'/></NavLink>
            <NavLink to={`/detail/${item.id}`} style={{color:'black', textDecoration:'none'}} className='Navlink'> <h4>{item.name}</h4></NavLink>
            <p>{item.heading}</p>
            <div className='End'>
            <div className='end'> <span className='unicode'>&#9825;</span>&nbsp; Blog</div>
            <div className='end1'>16-Sep-2023 </div></div>
            </>)
          })}
          </div>
          <div className='subTheLatest'>
          {ContextData.filter((item)=> item.id%4===0 && item.id > 5 && item.id<9).map((item,index)=>{
            console.log(item);
            return(<>
            <NavLink to={`/detail/${item.id}`} style={{color:'black', textDecoration:'none'}} className='Navlink'>
            <img src={item.bollywoodimg} alt={item.name} className='subLatest'/></NavLink>
            <NavLink to={`/detail/${item.id}`} style={{color:'black', textDecoration:'none'}} className='Navlink'>
            <h4>{item.name}</h4></NavLink>
            <p>{item.heading}</p>
            <div className='End'>
            <div className='end'> <span className='unicode'>&#9825;</span>&nbsp; Blog</div>
            <div className='end1'>16-Sep-2023 </div></div>
            </>)
          })}
          </div>
          <div className='subTheLatest'>
          {ContextData.filter((item)=> item.id%4===0 && item.id > 17 && item.id<21).map((item,index)=>{
            console.log(item);
            return(<>
            <NavLink to={`/detail/${item.id}`} className='Navlink'><img src={item.bollywoodimg} alt={item.name} className='subLatest'/></NavLink>
            <NavLink to={`/detail/${item.id}`} style={{color:'black', textDecoration:'none'}} className='Navlink'><h4>{item.name}</h4></NavLink>
            <p>{item.heading}</p>
            <div className='End'>
            <div className='end'> <span className='unicode'>&#9825;</span>&nbsp; Blog</div>
            <div className='end1'>16-Sep-2023 </div></div>
            </>)
          })}
          </div>
          <div className='subTheLatest'>
          {ContextData.filter((item)=> item.id%4===0 && item.id > 13 && item.id<17).map((item,index)=>{
            console.log(item);
            return(<>
            <NavLink to={`/detail/${item.id}`} style={{color:'black', textDecoration:'none'}} className='Navlink'>
            <img src={item.bollywoodimg} alt={item.name} className='subLatest'/></NavLink>
            <NavLink to={`/detail/${item.id}`} style={{color:'black', textDecoration:'none'}} className='Navlink'><h4>{item.name}</h4></NavLink>
            <p>{item.heading}</p>
            <div className='End'>
            <div className='end'> <span className='unicode'>&#9825;</span>&nbsp; Blog</div>
            <div className='end1'>16-Sep-2023 </div></div>
            </>)
          })}
          </div>
          </div>
          </div>


          <div className='mainSub'>
          <div className='theLatestArticles'>
          <p className='TheLatest' id='Thel'>The Latest Articles</p>
          <div className='TheLatestArticles'>
          <div className='subTheLatest' id='Articles'>
          {ContextData.filter((item)=> item.id%4===0 && item.id > 21 && item.id<25).map((item,index)=>{
            console.log(item);
            return(<>
            <div className='subTheLatestArticles'><div className='imgArticles'><NavLink to={`/detail/${item.id}`} style={{color:'black', textDecoration:'none'}} className='Navlink'><img src={item.bollywoodimg} alt={item.name} className='subLatest abcd' id='subArticles' /></NavLink></div>
            <div className='thisArticles'>
            <NavLink to={`/detail/${item.id}`} className='Navlink' style={{color:'black', textDecoration:'none'}} ><h4>{item.name}</h4></NavLink>
            <p>{item.heading}</p>
            <div className='End'>
            <div className='end'> <span className='unicode'>&#9825;</span>&nbsp; Blog</div>
            <div className='end1'>16-Sep-2023 </div></div></div></div>
            </>)
          })}
          </div>
          <hr className='latesthr'></hr>
          <div className='subTheLatest' id='Articles'>
          {ContextData.filter((item)=> item.id%4===0 && item.id > 25 && item.id<31).map((item,index)=>{
            console.log(item);
            return(<>
            <div className='subTheLatestArticles'><div className='imgArticles'><NavLink to={`/detail/${item.id}`} style={{color:'black', textDecoration:'none'}}><img src={item.bollywoodimg} alt={item.name} className='subLatest' id='subArticles'/></NavLink></div>
            <div className='thisArticles'>
            <NavLink to={`/detail/${item.id}`} style={{color:'black', textDecoration:'none'}}><h4>{item.name}</h4></NavLink>
            <p>{item.heading}</p>
            <div className='End'>
            <div className='end'> <span className='unicode'>&#9825;</span>&nbsp; Blog</div>
            <div className='end1'>16-Sep-2023 </div></div></div></div>
            </>)
          })}
          </div>
          <hr className='latesthr'></hr>
          <div className='subTheLatest' id='Articles'>
          {ContextData.filter((item)=> item.id%4===0 && item.id > 31 && item.id<33).map((item,index)=>{
            console.log(item);
            return(<>
            <div className='subTheLatestArticles'><div className='imgArticles'><NavLink to={`/detail/${item.id}`} style={{color:'black', textDecoration:'none'}}><img src={item.bollywoodimg} alt={item.name} className='subLatest' id='subArticles'/></NavLink></div>
            <div className='thisArticles'>
            <NavLink to={`/detail/${item.id}`} style={{color:'black', textDecoration:'none'}}><h4>{item.name}</h4></NavLink>
            <p>{item.heading}</p>
            <div className='End'>
            <div className='end'> <span className='unicode'>&#9825;</span>&nbsp; Blog</div>
            <div className='end1'>16-Sep-2023 </div></div></div></div>
            </>)
          })}
          </div>
          <hr className='latesthr'></hr>
          <div className='subTheLatest' id='Articles'>
          {ContextData.filter((item)=> item.id%4===0 && item.id > 33 && item.id<37).map((item,index)=>{
            console.log(item);
            return(<>
            <div className='subTheLatestArticles'><div className='imgArticles'><NavLink to={`/detail/${item.id}`} style={{color:'black', textDecoration:'none'}}><img src={item.bollywoodimg} alt={item.name} className='subLatest' id='subArticles'/></NavLink></div>
            <div className='thisArticles'>
            <NavLink to={`/detail/${item.id}`} style={{color:'black', textDecoration:'none'}}><h4>{item.name}</h4></NavLink>
            <p>{item.heading}</p>
            <div className='End'>
            <div className='end'> <span className='unicode'>&#9825;</span>&nbsp; Blog</div>
            <div className='end1'>16-Sep-2023 </div></div></div></div>
            </>)
          })}
          </div>
          <hr className='latesthr'></hr>
          <div className='subTheLatest' id='Articles'>
          {ContextData.filter((item)=> item.id%4===0 && item.id > 39 && item.id<41).map((item,index)=>{
            console.log(item);
            return(<>
            <div className='subTheLatestArticles'><div className='imgArticles'><NavLink to={`/detail/${item.id}`} style={{color:'black', textDecoration:'none'}}><img src={item.bollywoodimg} alt={item.name} className='subLatest' id='subArticles'/></NavLink></div>
            <div className='thisArticles'>
            <NavLink to={`/detail/${item.id}`} style={{color:'black', textDecoration:'none'}}><h4>{item.name}</h4></NavLink>
            <p>{item.heading}</p>
            <div className='End'>
            <div className='end'> <span className='unicode'>&#9825;</span>&nbsp; Blog</div>
            <div className='end1'>16-Sep-2023 </div></div></div></div>
            </>)
          })}
          </div>
          <hr className='latesthr'></hr>
          <div className='subTheLatest' id='Articles'>
          {ContextData.filter((item)=> item.id%4===0 && item.id > 41 && item.id<45).map((item,index)=>{
            console.log(item);
            return(<>
            <div className='subTheLatestArticles'><div className='imgArticles'><NavLink to={`/detail/${item.id}`} style={{color:'black', textDecoration:'none'}}><img src={item.bollywoodimg} alt={item.name} className='subLatest' id='subArticles'/></NavLink></div>
            <div className='thisArticles'>
            <NavLink to={`/detail/${item.id}`} style={{color:'black', textDecoration:'none'}}><h4>{item.name}</h4></NavLink>
            <p>{item.heading}</p>
            <div className='End'>
            <div className='end'> <span className='unicode'>&#9825;</span>&nbsp; Blog</div>
            <div className='end1'>16-Sep-2023 </div></div></div></div>
            </>)
          })}
          </div>
          <hr className='latesthr'></hr>
          <div className='subTheLatest' id='Articles'>
          {ContextData.filter((item)=> item.id%4===0 && item.id > 46 && item.id<49).map((item,index)=>{
            console.log(item);
            return(<>
            <div className='subTheLatestArticles'><div className='imgArticles'><NavLink to={`/detail/${item.id}`} style={{color:'black', textDecoration:'none'}}><img src={item.bollywoodimg} alt={item.name} className='subLatest' id='subArticles'/></NavLink></div>
            <div className='thisArticles'>
            <NavLink to={`/detail/${item.id}`} style={{color:'black', textDecoration:'none'}} ><h4>{item.name}</h4></NavLink>
            <p>{item.heading}</p>
            <div className='End'>
            <div className='end'> <span className='unicode'>&#9825;</span>&nbsp; Blog</div>
            <div className='end1'>16-Sep-2023 </div></div></div></div>
            </>)
          })}
          </div>
         
          <hr className='latesthr'></hr>
  
          </div>
          </div>
          
          
          
          
          
          
          
          <div className='topPosts'>
          <p className='TheLatest' id='Thel'>Top Posts</p>

          <div className='subTop' id='Articles'>
          {ContextData.filter((item)=> item.id%4===0 && item.id > 50 && item.id<53).map((item,index)=>{
            console.log(item);
            return(<>
            <div className='subTheLatestArticles' id='Top1'><NavLink to={`/detail/${item.id}`} style={{color:'black', textDecoration:'none', width:'300px'}}><img src={item.bollywoodimg} alt={item.name} className='subLatestPost' /></NavLink>
            <div className='thisArticles '>
            <NavLink to={`/detail/${item.id}`} style={{color:'black', textDecoration:'none'}} className='Navlink'><p className='topPostName'>{item.name}</p></NavLink>
            <div className='Number'>1</div>
            </div></div>
            </>)
          })}
          </div>
          <hr className='tophr'></hr>

          <div className='subTop' id='Articles'>
          {ContextData.filter((item)=> item.id%4===0 && item.id > 55 && item.id<57).map((item,index)=>{
            console.log(item);
            return(<>
            <div className='subTheLatestArticles' id='Top1'><NavLink to={`/detail/${item.id}`} style={{color:'black', textDecoration:'none', width:'300px'}}><img src={item.bollywoodimg} alt={item.name} className='subLatestPost' /></NavLink>
            <div className='thisArticles '>
            <NavLink to={`/detail/${item.id}`} style={{color:'black', textDecoration:'none'}} className='Navlink'><p className='topPostName'>{item.name}</p></NavLink>
            <div className='Number'>2</div>
            </div></div>
            </>)
          })}
          </div>
          <hr className='tophr'></hr>

          <div className='subTop' id='Articles'>
          {ContextData.filter((item)=> item.id%4===0 && item.id > 58 && item.id<61).map((item,index)=>{
            console.log(item);
            return(<>
            <div className='subTheLatestArticles' id='Top1'><NavLink to={`/detail/${item.id}`} style={{color:'black', textDecoration:'none', width:'300px'}}><img src={item.bollywoodimg} alt={item.name} className='subLatestPost' /></NavLink>
            <div className='thisArticles '>
            <NavLink to={`/detail/${item.id}`} style={{color:'black', textDecoration:'none'}} className='Navlink'><p className='topPostName'>{item.name}</p></NavLink>
            <div className='Number'>3</div>
            </div></div>
            </>)
          })}
          </div>
          <hr className='tophr'></hr>

          <div className='subTop' id='Articles'>
          {ContextData.filter((item)=> item.id%4===0 && item.id > 61 && item.id<65).map((item,index)=>{
            console.log(item);
            return(<>
            <div className='subTheLatestArticles' id='Top1'><NavLink to={`/detail/${item.id}`} style={{color:'black', textDecoration:'none', width:'300px'}}><img src={item.bollywoodimg} alt={item.name} className='subLatestPost' /></NavLink>
            <div className='thisArticles '>
            <NavLink to={`/detail/${item.id}`} style={{color:'black', textDecoration:'none'}} className='Navlink'><p className='topPostName'>{item.name}</p></NavLink>
            <div className='Number'>4</div>
            </div></div>
            </>)
          })}
          </div>
          <hr className='tophr'></hr>

          <div className='subTop' id='Articles'>
          {ContextData.filter((item)=> item.id%4===0 && item.id > 67 && item.id<69).map((item,index)=>{
            console.log(item);
            return(<>
            <div className='subTheLatestArticles' id='Top1'><NavLink to={`/detail/${item.id}`} style={{color:'black', textDecoration:'none', width:'300px'}} className='Navlink'><img src={item.bollywoodimg} alt={item.name} className='subLatestPost' /></NavLink>
            <div className='thisArticles '>
            <NavLink to={`/detail/${item.id}`} style={{color:'black', textDecoration:'none'}} className='Navlink'><p className='topPostName'>{item.name}</p></NavLink>
            <div className='Number'>5</div>
            </div></div>
            </>)
          })}
          </div>
          <hr className='tophr'></hr>


          <div className='subTop add' id='Articles'>
          <img src='https://media.tenor.com/J8ZjuXeKLBcAAAAM/amazon-amazonads.gif' alt='Advertisement' className='addAd'></img>
          </div>

          </div>
          
          </div>

<Footer />
        
        
      </div>
    )
  }

  export default Home
