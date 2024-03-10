const jwt=require("jsonwebtoken");
const secret="Shruti$4264"

 function setUser(user) {
  return  jwt.sign(
    
   {
    _id:user._id,
    email:user.email,
    role:user.role,
    }
    ,secret);
 
}

 function getUser(token) {
  if (!token) return null;
  try {
    return  jwt.verify(token,secret);
  } catch (error) {
    console.error(error); // Log the error or handle it as needed
    return null;
  }
}


module.exports = {
  setUser,
  getUser,
};
