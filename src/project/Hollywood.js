import React, { useContext } from 'react'
import { Store } from './ContextAPI'
import { NavLink } from 'react-router-dom'
import Footer from './Footer/Footer'
const Hollywood = () => {
  const[ContextData]=useContext(Store)
  console.log(ContextData);
  return (
    <div><div className='home'>
    <div className='theLatest'>
      <p className='TheLatest'>The Latest</p>
      <div className='mainLatest'>
      <div className='subTheLatest'>
      {ContextData.filter((item)=> item.cat==='Hollywood'&& item.id ===16).map((item,index)=>{
        console.log(item);
        return(<>
        <NavLink to={`/detail/${item.id}`} style={{color:'black'}}> 
        <img src={item.bollywoodimg} alt={item.name} className='subLatest'/></NavLink>
        <NavLink to={`/detail/${item.id}`} style={{color:'black', textDecoration:'none'}}> <h4>{item.name}</h4></NavLink>
        <p>{item.heading}</p>
        <div className='End'>
        <div className='end'> <span className='unicode'>&#9825;</span>&nbsp; Blog</div>
        <div className='end1'>16-Sep-2023 </div></div>
        </>)
      })}
      </div>
      <div className='subTheLatest'>
      {ContextData.filter((item)=> item.cat==='Hollywood'&& item.id ===17).map((item,index)=>{
        console.log(item);
        return(<>
        <NavLink to={`/detail/${item.id}`} style={{color:'black', textDecoration:'none'}}>
        <img src={item.bollywoodimg} alt={item.name} className='subLatest'/></NavLink>
        <NavLink to={`/detail/${item.id}`} style={{color:'black', textDecoration:'none'}}>
        <h4>{item.name}</h4></NavLink>
        <p>{item.heading}</p>
        <div className='End'>
        <div className='end'> <span className='unicode'>&#9825;</span>&nbsp; Blog</div>
        <div className='end1'>16-Sep-2023 </div></div>
        </>)
      })}
      </div>
      <div className='subTheLatest'>
      {ContextData.filter((item)=> item.cat==='Hollywood'&& item.id ===18).map((item,index)=>{
        console.log(item);
        return(<>
        <NavLink to={`/detail/${item.id}`}><img src={item.bollywoodimg} alt={item.name} className='subLatest'/></NavLink>
        <NavLink to={`/detail/${item.id}`} style={{color:'black', textDecoration:'none'}}><h4>{item.name}</h4></NavLink>
        <p>{item.heading}</p>
        <div className='End'>
        <div className='end'> <span className='unicode'>&#9825;</span>&nbsp; Blog</div>
        <div className='end1'>16-Sep-2023 </div></div>
        </>)
      })}
      </div>
      <div className='subTheLatest'>
      {ContextData.filter((item)=>item.cat==='Hollywood'&& item.id ===19).map((item,index)=>{
        console.log(item);
        return(<>
        <NavLink to={`/detail/${item.id}`} style={{color:'black', textDecoration:'none'}}>
        <img src={item.bollywoodimg} alt={item.name} className='subLatest'/></NavLink>
        <NavLink to={`/detail/${item.id}`} style={{color:'black', textDecoration:'none'}}><h4>{item.name}</h4></NavLink>
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
      {ContextData.filter((item)=> item.cat==='Hollywood'&& item.id ===20).map((item,index)=>{
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
      {ContextData.filter((item)=>item.cat==='Hollywood'&& item.id ===21).map((item,index)=>{
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
      {ContextData.filter((item)=> item.cat==='Hollywood'&& item.id ===22).map((item,index)=>{
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
      {ContextData.filter((item)=> item.cat==='Hollywood'&& item.id ===23).map((item,index)=>{
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
      {ContextData.filter((item)=>item.cat==='Hollywood'&& item.id ===24).map((item,index)=>{
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
      {ContextData.filter((item)=>item.cat==='Hollywood'&& item.id ===25).map((item,index)=>{
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
      {ContextData.filter((item)=>item.cat==='Hollywood'&& item.id ===26).map((item,index)=>{
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

      </div>
      </div>
      
      
      
      
      
      
      
      <div className='topPosts'>
      <p className='TheLatest' id='Thel'>Top Posts</p>

      <div className='subTop' id='Articles'>
      {ContextData.filter((item)=> item.cat==='Hollywood'&& item.id ===27).map((item,index)=>{
        console.log(item);
        return(<>
        <div className='subTheLatestArticles' id='Top1'><NavLink to={`/detail/${item.id}`} style={{color:'black', textDecoration:'none'}}><img src={item.bollywoodimg} alt={item.name} className='subLatestPost' /></NavLink>
        <div className='thisArticles '>
        <NavLink to={`/detail/${item.id}`} style={{color:'black', textDecoration:'none'}}><p className='topPostName'id='Topp'>{item.name}</p></NavLink>
        <div className='Number'>1</div>
        </div></div>
        </>)
      })}
      </div>
      <hr className='tophr'></hr>

      <div className='subTop' id='Articles'>
      {ContextData.filter((item)=> item.cat==='Hollywood'&& item.id ===28).map((item,index)=>{
        console.log(item);
        return(<>
        <div className='subTheLatestArticles' id='Top1'><NavLink to={`/detail/${item.id}`} style={{color:'black', textDecoration:'none'}}><img src={item.bollywoodimg} alt={item.name} className='subLatestPost' /></NavLink>
        <div className='thisArticles '>
        <NavLink to={`/detail/${item.id}`} style={{color:'black', textDecoration:'none'}}><p className='topPostName'id='Topp'>{item.name}</p></NavLink>
        <div className='Number'>2</div>
        </div></div>
        </>)
      })}
      </div>
      <hr className='tophr'></hr>

      <div className='subTop' id='Articles'>
      {ContextData.filter((item)=> item.cat==='Hollywood'&& item.id ===29).map((item,index)=>{
        console.log(item);
        return(<>
        <div className='subTheLatestArticles' id='Top1'><NavLink to={`/detail/${item.id}`} style={{color:'black', textDecoration:'none'}}><img src={item.bollywoodimg} alt={item.name} className='subLatestPost' /></NavLink>
        <div className='thisArticles '>
        <NavLink to={`/detail/${item.id}`} style={{color:'black', textDecoration:'none'}}><p className='topPostName' id='Topp'>{item.name}</p></NavLink>
        <div className='Number'>3</div>
        </div></div>
        </>)
      })}
      </div>
      <hr className='tophr'></hr>

      <div className='subTop' id='Articles'>
      {ContextData.filter((item)=> item.cat==='Hollywood'&& item.id ===30).map((item,index)=>{
        console.log(item);
        return(<>
        <div className='subTheLatestArticles' id='Top1'><NavLink to={`/detail/${item.id}`} style={{color:'black', textDecoration:'none'}}><img src={item.bollywoodimg} alt={item.name} className='subLatestPost' /></NavLink>
        <div className='thisArticles '>
        <NavLink to={`/detail/${item.id}`} style={{color:'black', textDecoration:'none'}}><p className='topPostName'id='Topp'>{item.name}</p></NavLink>
        <div className='Number'>4</div>
        </div></div>
        </>)
      })}
      </div>
      <hr className='tophr'></hr>

      <div className='subTop' id='Articles'>
      {ContextData.filter((item)=> item.cat==='Hollywood'&& item.id ===17).map((item,index)=>{
        console.log(item);
        return(<>
        <div className='subTheLatestArticles' id='Top1'><NavLink to={`/detail/${item.id}`} style={{color:'black', textDecoration:'none'}}><img src={item.bollywoodimg} alt={item.name} className='subLatestPost' /></NavLink>
        <div className='thisArticles '>
        <NavLink to={`/detail/${item.id}`} style={{color:'black', textDecoration:'none'}}><p className='topPostName' id='Topp'>{item.name}</p></NavLink>
        <div className='Number'>5</div>
        </div></div>
        </>)
      })}
      </div>
      <hr className='tophr'></hr>


      <div className='subTop add' id='Articles'>
      <img src='https://images.alphacoders.com/605/thumb-1920-605325.jpg' alt='Advertisement' className='addAd'></img>
      </div>

      </div>
      
      </div>

<Footer/>    
      </div>
      
     
    </div>
    
  )
}

export default Hollywood;