// export const GetApi = ()=> {
//     const [users, setUsers] = useState([]);
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("https://gorest.co.in/public/v2/users/");
//         console.log("Response:", response.data);
//         setUsers(response.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
    
//     useEffect(() => {
//       fetchData();
//     }, []);
// }