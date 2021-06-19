const Student       =require("../Model/index");
class studentController{
    //[GET] /Student
    show(req, res, next){
        Student.find({})
            .then((student=>res.json(student)))
            .catch(next)
    }
    //[GET] /Student
    showItem(req, res, next){
      Student.findById({_id:req.params.id})
          .then((student=>res.json(student)))
          .catch(err =>res.send(err))
      }
    //[POST] /Student
    create(req, res, next){
        const item=new Student(req.body);
        item.save()
            .then(()=>res.send("Created"))
            .catch(()=>res.send("ERR"))
    }
    //[PUT] /Student/:id
    update(req, res, next){
        Student.updateOne({ _id:req.params.id}, req.body)
        .then(()=> res.send("Updated"))
        .catch(next);
    }
    //[DELETE] /Student/:id
    delete(req, res, next)
    {
      Student.deleteOne({ _id:req.params.id})
      .then(()=> res.send("DELETED"))
      .catch(next)
    }
    //[PATCH] /Student/:id
    UpdateItem(req, res, next)
    {
      Student.updateOne({ _id:req.params.id}, req.body)
      .then(()=> res.send("Updated"))
      .catch(next);
    }    
}

module.exports= new studentController;