const axios = require("axios")


const getData = async () => {
    // try {
    //     const { data } = await axios.get("http://127.0.0.1:5000/lang")
    //     console.log(data);
    // } catch (error) {
    //     console.log(error)
    // }
    try {
        const { data } = await axios.post("http://127.0.0.1:5000/imagesData", { pictures: [{ picture: "hi" }], regNumbers: [{ name: "zahid" }] })
        console.log(data);
    } catch (error) {
        console.log(error)
    }
    try {
        const { data } = await axios.post("http://127.0.0.1:5000/routeTest", { pictures: [{ picture: "hi" }], regNumbers: [{ name: "zahid" }] })
        console.log(data);
    } catch (error) {
        console.log(error)
    }
    // try {
    //     const { data } = await axios.put("http://127.0.0.1:5000/lang/name12", { name: "hi" })
    //     console.log(data);
    // } catch (error) {
    //     console.log(error)
    // }
    // try {
    //     const { data } = await axios.delete("http://127.0.0.1:5000/lang/name12")
    //     console.log(data);
    // } catch (error) {
    //     console.log(error)
    // }
}

getData()