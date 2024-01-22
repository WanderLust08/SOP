const Item1 = require("../models/Item");
const Item2 = require("../models/Item2");
const Item3 = require("../models/Item3");
const Item4 = require("../models/Item4");
const Request = require("../models/Request")
const User = require("../models/User");
const path = require('path');
const asyncWrapper = require("../middleware/asyncWrapper");
const jwt = require("jsonwebtoken")

const JWT_SECRET = "mykey";

const getItems = async (req, res) => {
  try {
    const { use } = req.params;
    console.log(use);
    console.log("HELLO getItems");
    console.log(req.params);
    if(use == "admin"){
    const items = await Item1.find();
    const items2 = await Item2.find();
    const items3 = await Item3.find();
    const items4 = await Item4.find();
    console.log(items);
    res.status(200).json({ items, items2 , items3, items4});
    }else{
    const items = await Item1.find({user:use});
    const items2 = await Item2.find({user:use});
    const items3 = await Item3.find({user:use});
    const items4 = await Item4.find({user:use});
    console.log(items);
    res.status(200).json({ items, items2 , items3, items4});
  }
  } catch (error) {
    console.log(error);
  }
};

const addItem = async (req, res) => {
    //const { email } = req.body;
    console.log("HELLO addItems");
    console.log(req.body);
    // const { name } = req.body;
    const { user } = req.body;
    const {paperTitle } = req.body;
    const { firstAuth } = req.body;
    const {corresAuth } = req.body;
    const { thirdAuth } = req.body;
    const { fourthAuth } = req.body;
    const { instAffil } = req.body;
    // const file = req.file.path;
    const item = await Item1.create({ user , paperTitle , firstAuth, corresAuth, thirdAuth, fourthAuth, instAffil });
    res.status(201).json({ item });
    // console.log(file);
    console.log(user);
  };


  const addItem2 = async (req, res) => {
    //const { email } = req.body;
    console.log("HELLO addItems2");
    console.log(req.body);
    // const { name } = req.body;
    const { user } = req.body;
    const {wordCount1 } = req.body;
    const { keywords } = req.body;

    const file = req.file.path;
    const item = await Item2.create({ user ,wordCount1,keywords, file });
    res.status(201).json({ item });
    // console.log(file);
    console.log(user);
  };



  const addItem3 = async (req, res) => {
    //const { email } = req.body;
    console.log("HELLO addItems3");
    console.log(req.body);
    // const { name } = req.body;
    const { user } = req.body;
    const {wordCount2 } = req.body;
    const { figureCount } = req.body;

    const file = req.file.path;
    const item = await Item3.create({ user ,wordCount2,figureCount, file });
    res.status(201).json({ item });
    // console.log(file);
    console.log(user);
  };

  const addItem4 = async (req, res) => {
    //const { email } = req.body;
    console.log("HELLO addItems4");
    console.log(req.body);
    // const { name } = req.body;
    const { user } = req.body;
    const {wordCount3 } = req.body;
    const file = req.file.path;
    const item = await Item4.create({ user ,wordCount3, file });
    res.status(201).json({ item });
    // console.log(file);
    console.log(user);
  };








  const unlockRequest = async (req, res) => {
    //const { email } = req.body;
    console.log("HELLO unlockRequest");
    console.log(req.body);
    // const { name } = req.body;
    const { user } = req.body;
    const {inputState } = req.body;

    const request = await Request.create({ user ,inputState });
    res.status(201).json({ request });
    // console.log(file);
    console.log(user);
  };



  const getUnlock = async(req,res) =>{
    try{
      console.log("HELLO getUnlock");
      const { use } = req.params;
      console.log(use);
      const items = await Request.find({user:use});
      console.log(items);
      res.status(200).json({ items });
      if(items){
        const result = await Request.deleteMany({user:use});
        if (result.deletedCount === 1) {
          console.log('Document deleted successfully');
        } else {
          console.log('Document not found or not deleted');
        }
      }
    }catch(error){
      console.log(error);
    }


  }






  
  const downloadFile = asyncWrapper(async (req, res) => {
    const { id } = req.params;
    console.log("THIS ID ",id);
    const item = await Item2.findById(id);
    console.log(item);
    if (!item) {
      console.log(item);
      return next(new Error("No item found"));
    }
    
    const file = item.file;
    const filePath = path.join(__dirname, `../${file}`);
    res.download(filePath);
  });
  


  const getUser = asyncWrapper(async (req, res) => {
      console.log("HELLO getUser");
      const {email,password} = req.body; // NOTE here { } brackets will come instead of [ ] brackets.
      try{
      const check = await User.findOne({email:email,password:password});
      console.log("Check Data",check);


      if(check!=null){

        res.json("exist");
      }
      else{
        res.json("notexist")
      }
    }catch(e){
      // res.json("ntexist");
      console.log(e);
    }

  });


  const addUser = asyncWrapper(async (req, res) => {
    const {email,password} = req.body; // NOTE here { } brackets will come instead of [ ] brackets.
    const data = {
      email:email,
      password:password
    }
    try{

    const check = await User.findOne({email:email});
    if(check){
      res.json("exist");
    }
    else{
      res.json("notexist")
      const user = await User.create(data);
      res.status(201).json({ user });
    }
  }catch(e){
    // res.json("notexist");
    console.log(e);
  }

});

  module.exports = {
   getItems,
   addItem,
   downloadFile,
   getUser,
   addUser,
   addItem2,
   unlockRequest,
   getUnlock,
   addItem3,
   addItem4,
  };