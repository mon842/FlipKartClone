
import User from "../models/user-schema.js";


export const userSignup = async (request, response) => {
    try {
      const exist = await User.findOne({ username: request.body.username });
      if(exist) {
        return response.status(401).json({ message: 'User already exist'});
      }
      const exist2 = await User.findOne({ email: request.body.email });
      if(exist2) {
        return response.status(401).json({ message: 'email already exist'});
      }
      const user = request.body;
      const newUser = new User(user);
      await newUser.save();
      response.status(200).json({ mesage: user });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}

export const userLogin = async (request, response) => {
  try {
    const username = request.body.username;
    const password = request.body.password;
    let exist = await User.findOne({ username: username,password: password }); 
    if(exist) {
      // const user = request.body;
      response.status(200).json({  data: exist});
    }
    else{
      response.status(401).json('invalid login');
    }
  } catch (error) {
      response.status(500).json({ message: error.message });
  }
}
