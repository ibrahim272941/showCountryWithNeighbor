// const showCountyPrompt = async (countryName)=>{
// try {
//     const {data} = await axios(
//       `https://restcountries.com/v3.1/name/${countryName}`
//     );
//     if(data.ok){
//       throw new Error(`something is wrong!! ${data.status}`);
//     }
//     const countryData = data[0]
//     console.log(countryData)
//     renderCountry(countryData)
// } catch (error) {

//   console.log(error.message);
// }

// };
//fetch("https://restcountries.com/v3.1/name/germany")
// .then(response=>{
//   const jsonData = response.json()
  
//   return jsonData
// }).then(data=>{
//   console.log(data)
// });