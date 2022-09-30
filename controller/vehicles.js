const vehicle = require('../model/vehicle')

//for create vehicle
exports.makeVehicle=(req, res)=>{
    console.log("hello world")
  let {licensePlateNumber, manufacturerName, model, fuelType, 
  ownerName, rc_status, vehicleColor, registrationDate, 
  insuranceUpto, fitnessUpto, roadTaxUpto} = req.body
 
  vehicle.create({
    licensePlateNumber : licensePlateNumber,
    manufacturerName : manufacturerName,
    model :  model,
    fuelType : fuelType,
    ownerName : ownerName,
    rc_status : rc_status,
    vehicleColor : vehicleColor,
    registrationDate : registrationDate,
    insuranceUpto : insuranceUpto,
    fitnessUpto : fitnessUpto,
    roadTaxUpto : roadTaxUpto
  }).then((result) => {
    console.log(result)
    res.send(result)
  }).catch((err) => {
    console.log(err)
  });
   
}

// for retrieve data
exports.getAllVehicle = async(req, res)=>{    
 const data= await vehicle.findAll()
 var result =[]
 for(var i=0; i<data.length; i++){
     result.push(data[i].dataValues)
 }
 res.send(result)
}

// for update data
exports.updateVehicle = async(req, res)=>{
  let updateData = req.body
  let VehicleID = req.params.id
 await vehicle.findOne({where:{id:VehicleID}}).then(data=>{
           data.update({
            licensePlateNumber : updateData.licensePlateNumber,
            manufacturerName : updateData.manufacturerName,
            model : updateData.model,
            fuelType : updateData.fuelType,
            ownerName : updateData.ownerName,
            rc_status : updateData.rc_status,
            vehicleColor : updateData.vehicleColor,
            registrationDate : updateData.registrationDate,
            insuranceUpto : updateData.insuranceUpto,
            fitnessUpto : updateData.fitnessUpto,
            roadTaxUpto : updateData.roadTaxUpto
           }).then(()=>{
           res.send({msg:'update successful'})
       }).catch(err=>{
           res.send({msg:"updation error"})
       })
   
  }).catch(error=>{
   console.log(error)
  })
}

//for delete data
exports.removeVehicle =async(req, res)=>{
  let VehicleID = req.params.id
         vehicle.destroy({where:{id:VehicleID}}).then(result=>{
         res.status(202).send({msg:"Remove successfull"})
      }).catch(err=>{
         res.status(401).send({msg:"Something Went Wrong"})
      })
}