import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{  
        Authorization: 'Client-ID dUQCA4bpAs8Q51By0-ymXugjjEVh7xCyh1FVexeiobo'
      }
});