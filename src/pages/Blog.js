import axios from 'axios';


/* GET https://www.tistory.com/apis/post/list?
  access_token={access-token}
  &output={output-type}
  &blogName={blog-name}
  &page={page-number} */


const Blog = () => {
  
  /* axios.get('https://www.tistory.com/apis/post/list', {
    params: {
      access_token: '',
      output: 'json',
      blogName: 'heeeming',
      page: '1',
    },
  })
  .then((결과)=>{
    console.log(결과.data)
  })
  .catch(()=>{
    console.log('실패함')
  }) */
  const encoded = encodeURIComponent("https://heeeming.tistory.com/rss");
  const apiKey = process.env.REACT_APP_RSSTOJSON_API_KEY;
  axios.get(`https://api.rss2json.com/v1/api.json?rss_url=${encoded}&api_key=${apiKey}`)
  .then((결과)=>{
    console.log(결과.data)
  })
  .catch(()=>{
    console.log('데이터를 불러오지 못했습니다.')
  })
  return (
    <div>
      blog
    </div>
  )
}

export default Blog