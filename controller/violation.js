const Violation = require('../model/violation')
const vehicle = require('../model/vehicle')

// create Violation Data
exports.makeViolation =  async(req, res)=>{ 
    let violateData = req.body
  await  vehicle.findOne({where:{licensePlateNumber:violateData.licensePlateNumber}}).then(user=>{
        console.log(user.dataValues.id)
        let vehicleID =user.dataValues.id
        if(user){
            Violation.create({
            licensePlateNumber:violateData.licensePlateNumber,
            violationType:violateData.violationType,
            status:violateData.status,
            date:violateData.date,
            time:violateData.time,
            location:violateData.location,
            videoUrl:violateData.videoUrl,
            vehicleId:vehicleID
        }).then(result=>{
            console.log(result)
            res.status(201).send(result.dataValues)
        })
        .catch(error=>{
            console.log(error)
        })
        }else{
            console.log("user not found")
        }
    })
   

}
// Retrive all data
exports.getViolation =async(req, res)=>{
    const violationData = await Violation.findAll()
    var result =[]

    for(var i=0; i<violationData.length; i++){
        result.push(violationData[i].dataValues)
    }
 res.send(result)
}

//Update the violation Data
exports.updateViolation = async(req, res)=>{
   let updateData = req.body
   let violationID = req.params.id
  await Violation.findOne({where:{id:violationID}}).then(data=>{
            data.update({
                licensePlateNumber:updateData.licensePlateNumber,
                violationType:updateData.violationType,
                status:updateData.status,
                date:updateData.date,
                time:updateData.time,
                location:updateData.location,
                videoUrl:updateData.videoUrl, 
            }).then(()=>{
            res.send({msg:'update successful'})
        }).catch(err=>{
            res.send({msg:"updation error"})
        })
    
   }).catch(error=>{
    console.log(error)
   })
}

//Delete the Violation Data

exports.removeViolation =async(req, res)=>{
    let violationID = req.params.id
    await Violation.findOne({where:{id:violationID}}).then(data=>{
      console.log(data.dataValues.status)
      let status =data.dataValues.status
     if(status="unpaid"){
           Violation.destroy({where:{id:violationID}}).then(result=>{
           res.status(202).send({msg:"Remove successfull"})
        }).catch(err=>{
           res.status(401).send({msg:"Something Went Wrong"})
        })
     }else{
        res.status(402).send({msg:"payment is due"})
     }
    }).catch(err=>{
        console.log(err)
    })
}