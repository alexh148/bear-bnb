// 
// export function getSpecificDates(dateFrom, dateTo){
//   getData().then((response) => {
//     if (dateFrom && dateTo) {
//       return response.filter(function(x) { return (x.availableFrom <= dateFrom) && (x.availableTo >= dateTo)});
//     } else {
//       return response;
//     }
//   })
//
//   function getData() {
//     return fetch('http://localhost:3001/api/getData').then(function(response){
//       return response.json().then((data) => {
//         return data.data
//       })
//     })
//   }
// }
