const generateOtp  = ()=>{
    return (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
    }
    module.exports = generateOtp;