import { useState, useEffect } from 'react';
import axios from 'axios';

import Note from './../components/Note';
import style from './../styles/Blog.module.css'


const Blog = () => {
  const [post, setPost] = useState(null);
  const [bgUrl] = useState([]);
  const encoded = encodeURIComponent("https://heeeming.tistory.com/rss");
  const apiKey = process.env.REACT_APP_RSSTOJSON_API_KEY;

  const getData = async () => {
    try  {
      const result = await axios.get(`https://api.rss2json.com/v1/api.json?rss_url=${encoded}&api_key=${apiKey}`);
      console.log('Get data!');
      setPost(result.data.items);
      result.data.items.map((item) => {
        const desc = item.description;
        const url = desc.slice(desc.indexOf('data-url="') + 10, desc.indexOf('" data-lightbox='));
        bgUrl.push(`${url}`);
      })
    } catch (error) {
      console.log('Data load failed:'+ error);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  /* useEffect(() => {
    getBgUrt();
  }, [post]) */
  /* const getBgUrt = () => {
    post && post.map((item) => {
      const desc = item.description;
      const url = desc.slice(desc.indexOf('data-url="') + 10, desc.indexOf('" data-lightbox='));
      bgUrl.push(`${url}`);
    })
  } */
  return (
    <>
      <h2 className={style.blog_title}>Recent Posts from blog ✍️</h2>
      <div className={style.grid_container}>
        {
          post && post.map((item, idx) => {
            return (
              <div key={idx} className={style.post}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <Note>
                    <div className={style.post_content}>
                      <div className={style.img_wrap} style={{backgroundImage: `url(${bgUrl[idx]})`}} />
                      <h3 className={style.post_title}>{item.title}</h3>
                      <p className={style.pubdate}>{item.pubDate}</p>
                    </div>
                  </Note>
                </a>
              </div>
            )
          })
        }

      </div>
    </>
  )
}

export default Blog