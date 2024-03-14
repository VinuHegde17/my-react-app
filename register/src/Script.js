import axios from 'axios';

export const getDataByThen = () => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
          console.log(response.data); 
      })
      .catch((error) => {
          console.error('Error fetching data:', error);
      });
};


// export const getDataByThen = () => {
//     fetch('https://restcountries.com/v3.1/name/portugal')  
//       .then((response) => response.json())
//       .then(data=>console.log(data))
//        .catch((error) => console.error('Error fetching data:', error));
//   };